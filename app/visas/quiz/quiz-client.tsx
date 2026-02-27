"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { countries } from "@/lib/nationality-data";
import { ArrowRight, ArrowLeft, CheckCircle, Compass } from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface QuizAnswers {
  reason: string;
  duration: string;
  income: string;
  jobOffer: string;
  family: string;
  nationality: string;
}

interface VisaRecommendation {
  name: string;
  slug: string;
  href: string;
  description: string;
  matchReasons: string[];
}

type QuestionKey = keyof QuizAnswers;

interface QuestionOption {
  value: string;
  label: string;
}

interface QuizQuestion {
  key: QuestionKey;
  title: string;
  subtitle: string;
  options?: QuestionOption[];
  type: "choice" | "nationality";
}

// ---------------------------------------------------------------------------
// Questions
// ---------------------------------------------------------------------------

const questions: QuizQuestion[] = [
  {
    key: "reason",
    title: "What's your primary reason for coming to Argentina?",
    subtitle: "This helps us match you with the right visa category.",
    type: "choice",
    options: [
      { value: "remote-work", label: "Remote work" },
      { value: "employment", label: "Employment with Argentine company" },
      { value: "retirement", label: "Retirement" },
      { value: "study", label: "Study" },
      { value: "investment", label: "Investment or business" },
      { value: "visiting", label: "Just visiting" },
    ],
  },
  {
    key: "duration",
    title: "How long do you plan to stay?",
    subtitle: "Your intended stay length affects which visas are available.",
    type: "choice",
    options: [
      { value: "under-3-months", label: "Under 3 months" },
      { value: "3-6-months", label: "3\u20136 months" },
      { value: "6-12-months", label: "6\u201312 months" },
      { value: "1-plus-years", label: "1+ years" },
      { value: "permanently", label: "Permanently" },
    ],
  },
  {
    key: "income",
    title: "Do you have a monthly income source?",
    subtitle: "Many visa categories require proof of income or financial means.",
    type: "choice",
    options: [
      { value: "over-2k", label: "Yes, over $2,000/month" },
      { value: "under-2k", label: "Yes, under $2,000/month" },
      { value: "local", label: "I'll earn locally" },
      { value: "none", label: "No steady income" },
    ],
  },
  {
    key: "jobOffer",
    title: "Do you have a job offer from an Argentine company?",
    subtitle: "An Argentine employer can sponsor your work visa.",
    type: "choice",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "self-employed", label: "I'm self-employed" },
    ],
  },
  {
    key: "family",
    title: "Are you bringing family members?",
    subtitle: "Family size can affect visa requirements and documentation.",
    type: "choice",
    options: [
      { value: "just-me", label: "Just me" },
      { value: "spouse", label: "With spouse/partner" },
      { value: "children", label: "With children" },
      { value: "extended", label: "Extended family" },
    ],
  },
  {
    key: "nationality",
    title: "What's your nationality?",
    subtitle:
      "Visa requirements vary by country. Start typing to find yours.",
    type: "nationality",
  },
];

// ---------------------------------------------------------------------------
// Country name list for nationality input
// ---------------------------------------------------------------------------

const countryNames = countries.map((c) => c.name).sort();

// ---------------------------------------------------------------------------
// Recommendation engine
// ---------------------------------------------------------------------------

function getRecommendations(answers: QuizAnswers): {
  primary: VisaRecommendation;
  alternatives: VisaRecommendation[];
} {
  const { reason, duration, income, jobOffer } = answers;
  const longTerm =
    duration === "1-plus-years" || duration === "permanently";

  // Build all possible matches
  const all: VisaRecommendation[] = [];

  // Digital Nomad Visa
  if (
    reason === "remote-work" ||
    (reason === "visiting" &&
      duration !== "under-3-months" &&
      jobOffer === "self-employed")
  ) {
    all.push({
      name: "Digital Nomad Visa",
      slug: "digital-nomad",
      href: "/visas/digital-nomad",
      description:
        "Work remotely from Argentina for up to 6 months. Designed for location-independent professionals with income from abroad.",
      matchReasons: [
        reason === "remote-work"
          ? "You indicated remote work as your primary reason"
          : "Self-employed visitors can qualify for the Digital Nomad Visa",
        "Perfect for freelancers and remote employees",
        "Valid for up to 180 days, extendable",
      ],
    });
  }

  // Work Visa
  if (reason === "employment" || jobOffer === "yes") {
    all.push({
      name: "Work Visa",
      slug: "work",
      href: "/visas/work",
      description:
        "For those with an employment offer from an Argentine company. Your employer sponsors the visa application.",
      matchReasons: [
        jobOffer === "yes"
          ? "You have a job offer from an Argentine company"
          : "Employment in Argentina requires a work visa",
        "Allows legal employment with full benefits",
        "Renewable for 1\u20133 years",
      ],
    });
  }

  // Retirement Visa
  if (
    reason === "retirement" ||
    (longTerm && income === "over-2k" && reason !== "employment")
  ) {
    all.push({
      name: "Retirement Visa (Rentista)",
      slug: "retirement",
      href: "/visas/retirement",
      description:
        "For retirees and those with stable passive income. Offers a path to permanent residency in Argentina.",
      matchReasons: [
        reason === "retirement"
          ? "Retirement is your primary reason for moving"
          : "Your income level qualifies you for a rentista visa",
        income === "over-2k"
          ? "Your income exceeds the typical minimum requirement"
          : "Income documentation will be required",
        "Path to permanent residency",
      ],
    });
  }

  // Student Visa
  if (reason === "study") {
    all.push({
      name: "Student Visa",
      slug: "student",
      href: "/visas/student",
      description:
        "Study at Argentine universities or language schools. Allows part-time work while enrolled.",
      matchReasons: [
        "You plan to study in Argentina",
        "Part-time work permitted while enrolled",
        "Valid for the duration of your studies",
      ],
    });
  }

  // Investment Visa
  if (
    reason === "investment" ||
    (longTerm && jobOffer === "self-employed" && reason !== "remote-work")
  ) {
    all.push({
      name: "Investment Visa",
      slug: "investment",
      href: "/visas/investment",
      description:
        "For entrepreneurs and investors starting or acquiring a business in Argentina.",
      matchReasons: [
        reason === "investment"
          ? "You plan to invest in or start a business in Argentina"
          : "Self-employed long-term residents may qualify through investment",
        "Allows you to own and operate an Argentine business",
        "Renewable for 1\u20133 years",
      ],
    });
  }

  // Tourist entry (no visa needed)
  if (reason === "visiting" && duration === "under-3-months") {
    all.push({
      name: "Tourist Entry (No Visa Required)",
      slug: "tourist",
      href: "/visas",
      description:
        "Most nationalities can enter Argentina visa-free for up to 90 days. No special visa application needed.",
      matchReasons: [
        "Short visits under 3 months typically don't require a visa",
        "Most nationalities get 90 days on arrival",
        "Extensions available at the immigration office",
      ],
    });
  }

  // Fallback: if nothing matched, suggest Digital Nomad as safest general option
  if (all.length === 0) {
    all.push({
      name: "Digital Nomad Visa",
      slug: "digital-nomad",
      href: "/visas/digital-nomad",
      description:
        "A flexible option for those who earn income from abroad. Good starting point while you explore longer-term options.",
      matchReasons: [
        "Based on your answers, this is the most flexible starting visa",
        "Valid for up to 180 days",
        "Can transition to other visa types later",
      ],
    });
  }

  // For long-term stays, add alternatives if not already present
  if (longTerm) {
    const slugsPresent = new Set(all.map((v) => v.slug));

    if (!slugsPresent.has("retirement") && income === "over-2k") {
      all.push({
        name: "Retirement Visa (Rentista)",
        slug: "retirement",
        href: "/visas/retirement",
        description:
          "Your steady income could qualify you for Argentina's rentista visa, offering a path to permanent residency.",
        matchReasons: [
          "Your income qualifies you for a rentista visa",
          "Good option for long-term stays",
          "Path to permanent residency",
        ],
      });
    }

    if (!slugsPresent.has("investment")) {
      all.push({
        name: "Investment Visa",
        slug: "investment",
        href: "/visas/investment",
        description:
          "Consider investing in Argentine business or real estate for a long-term residency path.",
        matchReasons: [
          "Long-term stays benefit from investment-based residency",
          "Opens business opportunities",
          "Renewable for 1\u20133 years",
        ],
      });
    }
  }

  const [primary, ...alternatives] = all;
  return { primary, alternatives: alternatives.slice(0, 2) };
}

// ---------------------------------------------------------------------------
// Encode / decode answers for URL sharing
// ---------------------------------------------------------------------------

function answersToParams(answers: QuizAnswers): string {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(answers)) {
    if (v) params.set(k, v);
  }
  return params.toString();
}

function paramsToAnswers(
  searchParams: URLSearchParams
): QuizAnswers | null {
  const keys: QuestionKey[] = [
    "reason",
    "duration",
    "income",
    "jobOffer",
    "family",
    "nationality",
  ];
  const partial: Partial<QuizAnswers> = {};
  let hasAll = true;
  for (const k of keys) {
    const v = searchParams.get(k);
    if (v) {
      partial[k] = v;
    } else {
      hasAll = false;
    }
  }
  return hasAll ? (partial as QuizAnswers) : null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function QuizClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if URL already has complete answers (shared result link)
  const prefilledAnswers = useMemo(
    () => paramsToAnswers(searchParams),
    [searchParams]
  );

  const [step, setStep] = useState(prefilledAnswers ? questions.length : 0);
  const [answers, setAnswers] = useState<QuizAnswers>(
    prefilledAnswers ?? {
      reason: "",
      duration: "",
      income: "",
      jobOffer: "",
      family: "",
      nationality: "",
    }
  );
  const [nationalityInput, setNationalityInput] = useState(
    prefilledAnswers?.nationality ?? ""
  );
  const [showSuggestions, setShowSuggestions] = useState(false);

  const totalSteps = questions.length;
  const isComplete = step >= totalSteps;

  // When the quiz completes, update the URL with the answers
  useEffect(() => {
    if (isComplete && !prefilledAnswers) {
      const qs = answersToParams(answers);
      router.replace(`/visas/quiz?${qs}`, { scroll: false });
    }
  }, [isComplete, answers, router, prefilledAnswers]);

  const currentQuestion = questions[step] as QuizQuestion | undefined;

  const selectAnswer = useCallback(
    (value: string) => {
      if (!currentQuestion) return;
      setAnswers((prev) => ({ ...prev, [currentQuestion.key]: value }));
      // Auto-advance for choice questions
      if (currentQuestion.type === "choice") {
        setStep((s) => s + 1);
      }
    },
    [currentQuestion]
  );

  const goBack = useCallback(() => {
    setStep((s) => Math.max(0, s - 1));
  }, []);

  const goNext = useCallback(() => {
    if (!currentQuestion) return;
    if (currentQuestion.type === "nationality" && answers.nationality) {
      setStep((s) => s + 1);
    }
  }, [currentQuestion, answers.nationality]);

  const resetQuiz = useCallback(() => {
    setStep(0);
    setAnswers({
      reason: "",
      duration: "",
      income: "",
      jobOffer: "",
      family: "",
      nationality: "",
    });
    setNationalityInput("");
    router.replace("/visas/quiz", { scroll: false });
  }, [router]);

  // Nationality suggestions
  const filteredCountries = useMemo(() => {
    if (!nationalityInput || nationalityInput.length < 1) return [];
    const lower = nationalityInput.toLowerCase();
    return countryNames
      .filter((name) => name.toLowerCase().includes(lower))
      .slice(0, 8);
  }, [nationalityInput]);

  // Results
  const recommendations = useMemo(() => {
    if (!isComplete) return null;
    return getRecommendations(answers);
  }, [isComplete, answers]);

  // ---------------------------------------------------------------------------
  // Progress bar
  // ---------------------------------------------------------------------------

  const progress = isComplete
    ? 100
    : Math.round((step / totalSteps) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-sm font-medium mb-4">
            <Compass className="w-4 h-4" />
            Visa Finder Quiz
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Find Your Argentina Visa
          </h1>
          <p className="text-stone-600 text-lg max-w-lg mx-auto">
            Answer {totalSteps} quick questions and we&apos;ll recommend the
            best visa for your situation.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-stone-500 mb-2">
            <span>
              {isComplete
                ? "Complete!"
                : `Question ${step + 1} of ${totalSteps}`}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-600 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        {!isComplete && currentQuestion && (
          <Card className="border-stone-200 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl sm:text-2xl text-stone-900">
                {currentQuestion.title}
              </CardTitle>
              <p className="text-stone-500 text-sm mt-1">
                {currentQuestion.subtitle}
              </p>
            </CardHeader>
            <CardContent>
              {/* Choice options */}
              {currentQuestion.type === "choice" &&
                currentQuestion.options && (
                  <div className="grid gap-3">
                    {currentQuestion.options.map((option) => {
                      const isSelected =
                        answers[currentQuestion.key] === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() => selectAnswer(option.value)}
                          className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                            isSelected
                              ? "border-sky-600 bg-sky-50 text-sky-900 shadow-sm"
                              : "border-stone-200 bg-white hover:border-stone-300 hover:bg-stone-50 text-stone-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">
                              {option.label}
                            </span>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

              {/* Nationality input */}
              {currentQuestion.type === "nationality" && (
                <div className="relative">
                  <input
                    type="text"
                    value={nationalityInput}
                    onChange={(e) => {
                      const val = e.target.value;
                      setNationalityInput(val);
                      setShowSuggestions(true);
                      // Clear answer if input changes away from a valid selection
                      if (
                        answers.nationality &&
                        val.toLowerCase() !==
                          answers.nationality.toLowerCase()
                      ) {
                        setAnswers((prev) => ({
                          ...prev,
                          nationality: "",
                        }));
                      }
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => {
                      // Delay to allow click on suggestion
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                    placeholder="Type your country name..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-100 transition-all text-lg"
                  />
                  {showSuggestions && filteredCountries.length > 0 && (
                    <div className="absolute z-10 w-full mt-2 bg-white border border-stone-200 rounded-xl shadow-lg overflow-hidden max-h-64 overflow-y-auto">
                      {filteredCountries.map((name) => {
                        const country = countries.find(
                          (c) => c.name === name
                        );
                        return (
                          <button
                            key={name}
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setNationalityInput(name);
                              setAnswers((prev) => ({
                                ...prev,
                                nationality: name,
                              }));
                              setShowSuggestions(false);
                            }}
                            className="w-full text-left px-5 py-3 hover:bg-sky-50 transition-colors flex items-center gap-3 text-stone-700"
                          >
                            {country && (
                              <span className="text-lg">
                                {country.flag}
                              </span>
                            )}
                            <span className="font-medium">{name}</span>
                            {country && (
                              <Badge
                                variant="secondary"
                                className="ml-auto text-xs"
                              >
                                {country.visaStatus === "exempt"
                                  ? "Visa-free"
                                  : "Visa required"}
                              </Badge>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {answers.nationality && (
                    <div className="mt-3 flex items-center gap-2 text-sky-700 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>
                        Selected:{" "}
                        <strong>{answers.nationality}</strong>
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
                <Button
                  variant="ghost"
                  onClick={goBack}
                  disabled={step === 0}
                  className="text-stone-600"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                {currentQuestion.type === "nationality" && (
                  <Button
                    onClick={goNext}
                    disabled={!answers.nationality}
                    className="bg-sky-600 hover:bg-sky-700 text-white"
                  >
                    See Results
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {isComplete && recommendations && (
          <div className="space-y-8">
            {/* Primary recommendation */}
            <Card className="border-sky-200 shadow-lg overflow-hidden">
              <div className="bg-sky-600 px-6 py-3">
                <p className="text-white/90 text-sm font-medium">
                  Best Match for You
                </p>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-stone-900">
                      {recommendations.primary.name}
                    </CardTitle>
                    <p className="text-stone-600 mt-2">
                      {recommendations.primary.description}
                    </p>
                  </div>
                  <Badge className="bg-sky-100 text-sky-800 border-sky-200 flex-shrink-0">
                    Top Pick
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-semibold text-stone-700 uppercase tracking-wide">
                    Why this visa
                  </p>
                  {recommendations.primary.matchReasons.map(
                    (reason, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700">{reason}</span>
                      </div>
                    )
                  )}
                </div>
                <Link href={recommendations.primary.href}>
                  <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white h-12 text-base">
                    View Full {recommendations.primary.name} Guide
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Alternative recommendations */}
            {recommendations.alternatives.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-stone-900 mb-4">
                  Also Worth Considering
                </h2>
                <div className="grid gap-4">
                  {recommendations.alternatives.map((alt) => (
                    <Card
                      key={alt.slug}
                      className="border-stone-200 shadow-sm"
                    >
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between gap-4">
                          <CardTitle className="text-lg text-stone-900">
                            {alt.name}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="flex-shrink-0"
                          >
                            Alternative
                          </Badge>
                        </div>
                        <p className="text-stone-600 text-sm mt-1">
                          {alt.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 mb-4">
                          {alt.matchReasons
                            .slice(0, 2)
                            .map((reason, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2 text-sm"
                              >
                                <CheckCircle className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                                <span className="text-stone-600">
                                  {reason}
                                </span>
                              </div>
                            ))}
                        </div>
                        <Link href={alt.href}>
                          <Button
                            variant="outline"
                            className="w-full"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Nationality-specific note */}
            {answers.nationality && (
              <Card className="border-stone-200 bg-stone-50">
                <CardContent className="pt-6">
                  <p className="text-sm text-stone-600">
                    <strong>Note for {answers.nationality} citizens:</strong>{" "}
                    {(() => {
                      const country = countries.find(
                        (c) =>
                          c.name.toLowerCase() ===
                          answers.nationality.toLowerCase()
                      );
                      if (!country) {
                        return "Check with the Argentine consulate in your country for specific visa requirements.";
                      }
                      return country.visaStatus === "exempt"
                        ? `${country.name} citizens can enter Argentina visa-free for up to ${country.stayDuration} days. For longer stays, you'll need one of the visa types recommended above.`
                        : `${country.name} citizens require a visa to enter Argentina. Contact the nearest Argentine consulate to begin your application.`;
                    })()}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Lucero Legal CTA */}
            <LuceroLegalCTA
              variant="full"
              headline="Get Expert Guidance for Your Visa"
              description="Navigating Argentina's immigration system can be complex. Lucero Legal's immigration attorneys can guide you through the entire process -- from choosing the right visa to completing your application."
              utm_content="visa-quiz-result"
            />

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="outline" onClick={resetQuiz}>
                <Compass className="w-4 h-4" />
                Retake Quiz
              </Button>
              <Link href="/visas">
                <Button variant="ghost" className="text-stone-600">
                  Compare All Visa Types
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
