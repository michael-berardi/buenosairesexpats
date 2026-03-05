"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Shield,
  Coffee,
  Moon,
  Users,
  Train,
  Star,
  RotateCcw,
  CheckCircle,
} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────── */

interface Question {
  id: string;
  question: string;
  subtitle: string;
  options: {
    label: string;
    value: string;
    description: string;
  }[];
}

interface NeighborhoodResult {
  name: string;
  slug: string;
  score: number;
  tagline: string;
  description: string;
  rentRange: string;
  safety: string;
  vibe: string;
  bestFor: string[];
  highlights: string[];
  whyYou: string;
}

/* ─── Quiz Data ──────────────────────────────────────────── */

const questions: Question[] = [
  {
    id: "budget",
    question: "What's your monthly rent budget?",
    subtitle: "Prices are for a 1-bedroom apartment in USD, as of March 2026.",
    options: [
      {
        label: "Under $700/month",
        value: "budget",
        description: "Studio or 1-bed in a less central area",
      },
      {
        label: "$700 - $1,200/month",
        value: "moderate",
        description: "Nice 1-bed in a good neighborhood",
      },
      {
        label: "$1,200 - $1,800/month",
        value: "comfortable",
        description: "Upscale 1-bed or 2-bed with amenities",
      },
      {
        label: "$1,800+/month",
        value: "luxury",
        description: "High-end apartment, modern building",
      },
    ],
  },
  {
    id: "vibe",
    question: "What vibe are you looking for?",
    subtitle: "Each barrio has its own personality. What resonates with you?",
    options: [
      {
        label: "Trendy & energetic",
        value: "trendy",
        description: "Cafes, street art, co-working spaces, boutiques",
      },
      {
        label: "Elegant & refined",
        value: "elegant",
        description: "European architecture, quiet streets, upscale dining",
      },
      {
        label: "Bohemian & artsy",
        value: "bohemian",
        description: "Cobblestones, antiques, tango bars, street markets",
      },
      {
        label: "Quiet & residential",
        value: "residential",
        description: "Family-friendly, tree-lined streets, local feel",
      },
    ],
  },
  {
    id: "nightlife",
    question: "How important is nightlife to you?",
    subtitle: "Buenos Aires comes alive at night -- but some barrios more than others.",
    options: [
      {
        label: "Essential",
        value: "essential",
        description: "I want bars, clubs, and restaurants within walking distance",
      },
      {
        label: "Nice to have",
        value: "moderate",
        description: "Occasional nights out, but not every weekend",
      },
      {
        label: "Not important",
        value: "unimportant",
        description: "I prefer quiet evenings at home or a neighborhood cafe",
      },
    ],
  },
  {
    id: "transport",
    question: "How will you get around the city?",
    subtitle: "BA has great public transit, but coverage varies by neighborhood.",
    options: [
      {
        label: "Subte (subway) and buses",
        value: "public",
        description: "I want to be near a subway station",
      },
      {
        label: "Walking and biking",
        value: "walking",
        description: "I want everything within walking distance",
      },
      {
        label: "Uber / Cabify",
        value: "rideshare",
        description: "I don't mind taking a car when needed",
      },
    ],
  },
  {
    id: "safety",
    question: "How much does safety factor into your decision?",
    subtitle: "All recommended neighborhoods are generally safe, but there are differences.",
    options: [
      {
        label: "Top priority",
        value: "top",
        description: "I want the safest possible area, even if it costs more",
      },
      {
        label: "Important but balanced",
        value: "balanced",
        description: "Safe enough to walk at night, but I don't need the safest area",
      },
      {
        label: "I'm street-smart",
        value: "flexible",
        description: "I've lived in cities before and know how to stay safe",
      },
    ],
  },
  {
    id: "community",
    question: "How important is the expat community?",
    subtitle: "Some barrios have large English-speaking communities; others are more local.",
    options: [
      {
        label: "Very important",
        value: "expat",
        description: "I want to meet other expats, attend meetups, speak English",
      },
      {
        label: "Mix of both",
        value: "mixed",
        description: "Some expat friends, but I want to immerse in local culture too",
      },
      {
        label: "I want authentic",
        value: "local",
        description: "Minimal tourists, real Argentine neighborhood feel",
      },
    ],
  },
  {
    id: "lifestyle",
    question: "What's your typical day like?",
    subtitle: "Your daily routine matters more than you think for choosing a barrio.",
    options: [
      {
        label: "Remote worker / digital nomad",
        value: "remote",
        description: "I need cafes with WiFi, coworking spaces, and a laptop-friendly vibe",
      },
      {
        label: "Foodie & culture seeker",
        value: "culture",
        description: "Museums, restaurants, markets, and exploring the city",
      },
      {
        label: "Fitness & outdoors",
        value: "outdoors",
        description: "Running, parks, yoga studios, outdoor activities",
      },
      {
        label: "Settled & domestic",
        value: "settled",
        description: "Cooking at home, quiet walks, local markets, daily routines",
      },
    ],
  },
];

/* ─── Scoring ──────────────────────────────────────────── */

type Scores = Record<string, number>;

const neighborhoodScoring: Record<string, Record<string, number>> = {
  palermo: {
    "budget_budget": 0, "budget_moderate": 5, "budget_comfortable": 10, "budget_luxury": 7,
    "vibe_trendy": 10, "vibe_elegant": 3, "vibe_bohemian": 5, "vibe_residential": 2,
    "nightlife_essential": 10, "nightlife_moderate": 7, "nightlife_unimportant": 3,
    "transport_public": 9, "transport_walking": 10, "transport_rideshare": 8,
    "safety_top": 7, "safety_balanced": 9, "safety_flexible": 10,
    "community_expat": 10, "community_mixed": 8, "community_local": 3,
    "lifestyle_remote": 10, "lifestyle_culture": 8, "lifestyle_outdoors": 8, "lifestyle_settled": 4,
  },
  recoleta: {
    "budget_budget": 0, "budget_moderate": 4, "budget_comfortable": 10, "budget_luxury": 10,
    "vibe_trendy": 3, "vibe_elegant": 10, "vibe_bohemian": 2, "vibe_residential": 7,
    "nightlife_essential": 4, "nightlife_moderate": 8, "nightlife_unimportant": 9,
    "transport_public": 8, "transport_walking": 8, "transport_rideshare": 9,
    "safety_top": 10, "safety_balanced": 9, "safety_flexible": 8,
    "community_expat": 7, "community_mixed": 8, "community_local": 5,
    "lifestyle_remote": 5, "lifestyle_culture": 10, "lifestyle_outdoors": 6, "lifestyle_settled": 8,
  },
  belgrano: {
    "budget_budget": 3, "budget_moderate": 8, "budget_comfortable": 9, "budget_luxury": 6,
    "vibe_trendy": 2, "vibe_elegant": 5, "vibe_bohemian": 1, "vibe_residential": 10,
    "nightlife_essential": 2, "nightlife_moderate": 5, "nightlife_unimportant": 10,
    "transport_public": 7, "transport_walking": 6, "transport_rideshare": 8,
    "safety_top": 9, "safety_balanced": 8, "safety_flexible": 7,
    "community_expat": 5, "community_mixed": 7, "community_local": 8,
    "lifestyle_remote": 4, "lifestyle_culture": 5, "lifestyle_outdoors": 7, "lifestyle_settled": 10,
  },
  "san-telmo": {
    "budget_budget": 8, "budget_moderate": 9, "budget_comfortable": 5, "budget_luxury": 2,
    "vibe_trendy": 5, "vibe_elegant": 2, "vibe_bohemian": 10, "vibe_residential": 3,
    "nightlife_essential": 7, "nightlife_moderate": 8, "nightlife_unimportant": 4,
    "transport_public": 6, "transport_walking": 8, "transport_rideshare": 7,
    "safety_top": 3, "safety_balanced": 6, "safety_flexible": 9,
    "community_expat": 6, "community_mixed": 9, "community_local": 8,
    "lifestyle_remote": 6, "lifestyle_culture": 10, "lifestyle_outdoors": 4, "lifestyle_settled": 5,
  },
  "villa-crespo": {
    "budget_budget": 9, "budget_moderate": 10, "budget_comfortable": 6, "budget_luxury": 2,
    "vibe_trendy": 8, "vibe_elegant": 2, "vibe_bohemian": 5, "vibe_residential": 6,
    "nightlife_essential": 6, "nightlife_moderate": 8, "nightlife_unimportant": 7,
    "transport_public": 7, "transport_walking": 7, "transport_rideshare": 7,
    "safety_top": 5, "safety_balanced": 8, "safety_flexible": 9,
    "community_expat": 6, "community_mixed": 9, "community_local": 7,
    "lifestyle_remote": 8, "lifestyle_culture": 7, "lifestyle_outdoors": 5, "lifestyle_settled": 7,
  },
  "puerto-madero": {
    "budget_budget": 0, "budget_moderate": 0, "budget_comfortable": 4, "budget_luxury": 10,
    "vibe_trendy": 4, "vibe_elegant": 8, "vibe_bohemian": 0, "vibe_residential": 6,
    "nightlife_essential": 3, "nightlife_moderate": 5, "nightlife_unimportant": 8,
    "transport_public": 3, "transport_walking": 5, "transport_rideshare": 10,
    "safety_top": 10, "safety_balanced": 9, "safety_flexible": 7,
    "community_expat": 4, "community_mixed": 5, "community_local": 2,
    "lifestyle_remote": 3, "lifestyle_culture": 4, "lifestyle_outdoors": 8, "lifestyle_settled": 6,
  },
};

const neighborhoodDetails: Record<string, Omit<NeighborhoodResult, "score">> = {
  palermo: {
    name: "Palermo",
    slug: "palermo",
    tagline: "The expat capital of Buenos Aires",
    description:
      "Palermo is where most expats land -- and for good reason. It's the most walkable, cafe-dense, and internationally connected neighborhood in BA. Divided into Soho (boutiques, brunch spots), Hollywood (nightlife, restaurants), and Botanico (parks, quiet streets), there's a sub-barrio for every personality.",
    rentRange: "$950 - $1,750/month",
    safety: "Very Good",
    vibe: "Trendy, cosmopolitan, always buzzing",
    bestFor: ["Digital nomads", "Young professionals", "Social butterflies", "Foodies"],
    highlights: [
      "Highest density of coworking spaces and cafes with WiFi",
      "Best restaurant scene in the city (Don Julio, Crizia, Tegui)",
      "Bosques de Palermo for running, cycling, and mate sessions",
      "Largest English-speaking expat community",
    ],
    whyYou:
      "Based on your answers, you value walkability, social connection, and a vibrant food and nightlife scene. Palermo delivers all three in spades. You'll find your tribe at coworking spaces like AreaTres or Selina, and you'll never run out of new restaurants to try.",
  },
  recoleta: {
    name: "Recoleta",
    slug: "recoleta",
    tagline: "Buenos Aires' most elegant neighborhood",
    description:
      "Recoleta is Paris in South America. Grand Haussmann-style buildings, tree-lined boulevards, world-class museums (MALBA, Museo Nacional), and some of the safest streets in the city. It's where old money lives, but it's increasingly attracting expats who want refinement over trendiness.",
    rentRange: "$950 - $1,850/month",
    safety: "Excellent",
    vibe: "Elegant, cultured, sophisticated",
    bestFor: ["Culture lovers", "Families", "Retirees", "Safety-conscious"],
    highlights: [
      "Safest neighborhood in Buenos Aires",
      "Aramburu (2 Michelin stars) and world-class dining",
      "Walking distance to MALBA, Museo Nacional, and Centro Cultural Recoleta",
      "Beautiful parks and the famous Recoleta Cemetery",
    ],
    whyYou:
      "You prioritize safety, culture, and a refined environment. Recoleta offers a sophisticated lifestyle with world-class museums and restaurants at your doorstep. The neighborhood feels distinctly European and rewards those who appreciate architecture and history.",
  },
  belgrano: {
    name: "Belgrano",
    slug: "belgrano",
    tagline: "The quiet achiever of Buenos Aires",
    description:
      "Belgrano is where expats move when they're done being tourists. It's peaceful, residential, and feels like a real neighborhood -- not a destination. Belgrano R and Coghlan have tree-lined streets, local bakeries, and the kind of community where the barista knows your order.",
    rentRange: "$700 - $1,400/month",
    safety: "Very Good",
    vibe: "Quiet, family-friendly, authentic",
    bestFor: ["Families", "Long-term residents", "Introverts", "Budget-conscious"],
    highlights: [
      "Best value for quality of life in a safe area",
      "Excellent schools (both bilingual and international)",
      "Chinatown (Barrio Chino) for Asian food and culture",
      "Barrancas de Belgrano park for weekend activities",
    ],
    whyYou:
      "You want to actually live in Buenos Aires, not just pass through. Belgrano offers the stability and community that Palermo sometimes lacks. Lower rents, quieter streets, and the feeling of being part of a real neighborhood rather than an expat bubble.",
  },
  "san-telmo": {
    name: "San Telmo",
    slug: "san-telmo",
    tagline: "The soul of Buenos Aires",
    description:
      "San Telmo is BA's oldest neighborhood, with cobblestone streets, tango bars on every corner, and the famous Sunday feria on Defensa street. It's where you go to feel the real spirit of the city. Cheaper than Palermo but with infinitely more character.",
    rentRange: "$600 - $1,050/month",
    safety: "Moderate",
    vibe: "Bohemian, historic, culturally rich",
    bestFor: ["Artists", "Culture seekers", "Budget-conscious", "History buffs"],
    highlights: [
      "Sunday Feria de San Telmo (South America's best street market)",
      "Tango milongas and live music venues",
      "Antique shops and independent galleries",
      "Some of BA's most authentic and affordable restaurants",
    ],
    whyYou:
      "You're drawn to authenticity over convenience. San Telmo rewards curiosity -- every block has a hidden courtyard, a tango bar, or a story. The lower rents mean you can spend more on experiences, and the cultural richness here is unmatched anywhere else in the city.",
  },
  "villa-crespo": {
    name: "Villa Crespo",
    slug: "villa-crespo",
    tagline: "Palermo vibes at half the price",
    description:
      "Villa Crespo is the insider's pick. Bordering Palermo to the south, it has the same energy and food scene but at significantly lower rents. It's where savvy expats live to enjoy Palermo's amenities without paying Palermo prices. The outlet shopping on Av. Cordoba is a bonus.",
    rentRange: "$600 - $1,050/month",
    safety: "Good",
    vibe: "Up-and-coming, authentic, value-oriented",
    bestFor: ["Value seekers", "Young expats", "Foodies on a budget", "Locals at heart"],
    highlights: [
      "30-40% cheaper than Palermo with similar amenities",
      "Booming food scene (some of BA's best hidden-gem restaurants)",
      "Outlet shopping along Avenida Cordoba and Murillo",
      "Walking distance to Palermo's nightlife and parks",
    ],
    whyYou:
      "You're smart with money but don't want to sacrifice quality of life. Villa Crespo gives you access to everything Palermo offers while keeping your rent manageable. It's increasingly where the 'in-the-know' locals and long-term expats choose to live.",
  },
  "puerto-madero": {
    name: "Puerto Madero",
    slug: "puerto-madero",
    tagline: "Buenos Aires' modern waterfront",
    description:
      "Puerto Madero is the newest and most modern part of Buenos Aires. Glass towers, a waterfront promenade, and the Ecological Reserve make it feel like a different city. It's the safest area by far but can feel sterile compared to the character-rich older barrios.",
    rentRange: "$1,175 - $2,900/month",
    safety: "Excellent",
    vibe: "Modern, corporate, waterfront luxury",
    bestFor: ["High-income professionals", "Safety-first expats", "Fitness enthusiasts"],
    highlights: [
      "Costanera Sur Ecological Reserve for running and nature",
      "Modern gym facilities and high-end amenities in buildings",
      "Safest area in Buenos Aires (gated, security-patrolled)",
      "Waterfront dining with views of the Rio de la Plata",
    ],
    whyYou:
      "You prioritize safety, modern amenities, and a clean environment above all else. Puerto Madero is Buenos Aires' most polished neighborhood. Just know that it trades character for comfort -- you'll need to venture to other barrios for the classic BA experience.",
  },
};

function calculateResults(answers: Record<string, string>): NeighborhoodResult[] {
  const scores: Scores = {};

  for (const hood of Object.keys(neighborhoodScoring)) {
    let total = 0;
    for (const [questionId, answerValue] of Object.entries(answers)) {
      const key = `${questionId}_${answerValue}`;
      total += neighborhoodScoring[hood][key] || 0;
    }
    scores[hood] = total;
  }

  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .map(([hood, score]) => ({
      ...neighborhoodDetails[hood],
      score,
    }));
}

/* ─── Component ──────────────────────────────────────────── */

export function NeighborhoodQuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion) / questions.length) * 100;

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const results = calculateResults(answers);
    const topResult = results[0];
    const maxScore = results[0].score;

    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-primary via-primary/80 to-primary/70 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <CheckCircle className="w-3 h-3 mr-1" />
                Your Results Are In
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Your Perfect Barrio: {topResult.name}
              </h1>
              <p className="text-xl text-white/90">
                {topResult.tagline}
              </p>
            </div>
          </div>
        </section>

        {/* Top Match */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Winner card */}
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 border-2 border-primary/20 rounded-2xl p-8 md:p-10 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{topResult.name}</h2>
                    <p className="text-primary font-medium">#1 Match -- {Math.round((topResult.score / maxScore) * 100)}% compatibility</p>
                  </div>
                </div>

                <p className="text-lg text-stone-700 mb-6 leading-relaxed">
                  {topResult.description}
                </p>

                <div className="bg-white rounded-xl p-6 mb-6 border border-primary/10">
                  <h3 className="font-semibold text-stone-900 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Why {topResult.name} is right for you
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{topResult.whyYou}</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-stone-500">Rent</span>
                    </div>
                    <p className="font-semibold text-stone-900">{topResult.rentRange}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-stone-500">Safety</span>
                    </div>
                    <p className="font-semibold text-stone-900">{topResult.safety}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-primary/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Coffee className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-stone-500">Vibe</span>
                    </div>
                    <p className="font-semibold text-stone-900">{topResult.vibe}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-stone-900 mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {topResult.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-stone-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {topResult.bestFor.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href={`/neighborhoods/${topResult.slug}`}>
                    Read Full {topResult.name} Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Other options */}
              <h3 className="text-xl font-bold mb-4 text-stone-900">Other Great Options</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {results.slice(1, 5).map((result, index) => (
                  <div key={result.slug} className="bg-white border border-stone-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{result.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        #{index + 2} Match
                      </Badge>
                    </div>
                    <p className="text-sm text-stone-500 mb-2">{result.tagline}</p>
                    <p className="text-sm text-stone-600 mb-3">
                      <span className="font-medium">Rent:</span> {result.rentRange}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {result.bestFor.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={`/neighborhoods/${result.slug}`}>
                        View Guide
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={restart} variant="outline" className="gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retake Quiz
                </Button>
                <Button asChild variant="outline">
                  <Link href="/neighborhoods">
                    Compare All Neighborhoods
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href="/cost-of-living">
                    See Full Cost Breakdown
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-primary via-primary/80 to-primary/70 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <MapPin className="w-3 h-3 mr-1" />
              Neighborhood Matcher
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Which Buenos Aires Barrio Is Right for You?
            </h1>
            <p className="text-lg text-white/85">
              Answer 7 quick questions and we&apos;ll match you with your ideal neighborhood
              based on budget, lifestyle, and priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Progress bar */}
      <div className="bg-stone-100 border-b">
        <div className="container mx-auto px-4">
          <div className="py-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-between text-sm text-stone-500 mb-2">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <div className="h-2 bg-stone-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question */}
      <section className="flex-1 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {currentQuestion > 0 && (
              <button
                onClick={goBack}
                className="flex items-center gap-1 text-sm text-stone-500 hover:text-stone-700 mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
            )}

            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-stone-900">
              {question.question}
            </h2>
            <p className="text-stone-500 mb-8">
              {question.subtitle}
            </p>

            <div className="space-y-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(question.id, option.value)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-150 hover:border-accent hover:bg-primary/5 ${
                    answers[question.id] === option.value
                      ? "border-primary bg-primary/5"
                      : "border-stone-200 bg-white"
                  }`}
                >
                  <div className="font-semibold text-stone-900 mb-1">{option.label}</div>
                  <div className="text-sm text-stone-500">{option.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
