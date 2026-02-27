import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  FileText, 
  Heart,
  Users,
  AlertCircle,
  ArrowRight,
  Globe,
  TrendingUp
} from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Argentina Retirement Visa - Pensionado Visa Guide 2026",
  description: "Complete guide to Argentina's Retirement Visa (Pensionado). Requirements, pension requirements, healthcare, and path to permanent residency for retirees.",
  keywords: ["Argentina retirement visa", "pensionado visa Argentina", "retire in Argentina", "Argentina pension visa"],
  openGraph: {
    title: "Argentina Retirement Visa - Pensionado Visa Guide 2026",
    description: "Retire in Argentina with your pension. Requirements, costs, and path to permanent residency.",
    type: "article",
    publishedTime: "2025-02-16",
    modifiedTime: "2026-02-26",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/retirement",
  },
};

const LAST_UPDATED = "2026-02-26";

const requirements = [
  {
    icon: DollarSign,
    title: "Stable Pension Income",
    description: "Proof of regular pension or retirement income of approximately $1,500-2,000 USD per month minimum",
  },
  {
    icon: FileText,
    title: "Pension Documentation",
    description: "Official pension letters, Social Security statements, or retirement account documentation proving stable income",
  },
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Valid health insurance covering your stay in Argentina (prepaga plans available for ~$100-300/month)",
  },
  {
    icon: Users,
    title: "Clean Background",
    description: "Criminal background check from your home country with apostille/legalization",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Gather Pension Documents",
    description: "Collect official pension statements, Social Security award letters, or retirement account documentation showing stable monthly income.",
  },
  {
    step: 2,
    title: "Get Background Check",
    description: "Obtain a criminal background check from your home country and have it apostilled or legalized.",
  },
  {
    step: 3,
    title: "Secure Health Insurance",
    description: "Purchase Argentine health insurance (prepaga) or provide proof of international coverage valid in Argentina.",
  },
  {
    step: 4,
    title: "Complete Application",
    description: "Fill out the retirement visa application and submit with all documents to the Argentine consulate or immigration office.",
  },
  {
    step: 5,
    title: "Pay Fees & Wait",
    description: "Pay the visa application fee (~$200-400) and wait for processing (typically 1-2 months).",
  },
  {
    step: 6,
    title: "Enter Argentina & Get DNI",
    description: "Once approved, enter Argentina and apply for your DNI within 90 days. You're now a temporary resident!",
  },
];

const faqs = [
  {
    question: "How much pension income do I need?",
    answer: "The official minimum is approximately $1,500-2,000 USD per month, though this can vary by consulate and individual circumstances. Some applicants with lower pensions have been approved by showing additional savings or assets. It's best to consult with an immigration attorney about your specific situation.",
  },
  {
    question: "Can I work with a retirement visa?",
    answer: "Technically no - the retirement visa is for passive income recipients. However, many retirees do remote work or consulting for foreign companies, which exists in a gray area. If you want to work for an Argentine company, you'd need to switch to a work visa.",
  },
  {
    question: "How long is the retirement visa valid?",
    answer: "Initial retirement visas are typically valid for 1 year and renewable. After 2 years of temporary residency, you can apply for permanent residency (residencia permanente).",
  },
  {
    question: "Can my spouse join me?",
    answer: "Yes. Your spouse can apply as a dependent on your retirement visa. You'll need to show additional income to support them (typically ~$500 more per month) and provide your marriage certificate (apostilled).",
  },
  {
    question: "What about healthcare?",
    answer: "You'll need private health insurance (prepaga) as a retirement visa holder. The good news: Argentine private healthcare is excellent and affordable. Plans range from $100-300/month and cover most services with minimal copays.",
  },
  {
    question: "Can I bring my car or household goods?",
    answer: "Argentina allows retirees to import household goods duty-free within 6 months of obtaining residency. Vehicles have separate rules and restrictions. Work with a customs broker for specifics.",
  },
];

const documentChecklist = [
  "Valid passport (minimum 6 months validity)",
  "Birth certificate (apostilled)",
  "Criminal background check (apostilled, less than 90 days old)",
  "Official pension award letter or Social Security statement",
  "Bank statements showing pension deposits (last 3-6 months)",
  "Health insurance policy valid in Argentina",
  "Proof of accommodation in Argentina (rental contract or property deed)",
  "Marriage certificate if bringing spouse (apostilled)",
  "Passport-sized photos (check current requirements)",
  "Visa application fee payment",
];

const costComparison = [
  { category: "Rent (2BR nice area)", us: "$2,500-4,000", argentina: "$800-1,500" },
  { category: "Health Insurance", us: "$500-1,200", argentina: "$100-300" },
  { category: "Dinner for Two", us: "$60-100", argentina: "$30-50" },
  { category: "Monthly Groceries", us: "$600-800", argentina: "$300-500" },
  { category: "Transportation", us: "$400-800 (car)", argentina: "$50-100 (public)" },
];

export default function RetirementVisaPage() {
  const articleSchema = generateArticleSchema({
    headline: "Argentina Retirement Visa - Pensionado Visa Guide 2026",
    description: "Complete guide to Argentina's Retirement Visa (Pensionado). Requirements, pension requirements, healthcare, and path to permanent residency for retirees.",
    url: "https://buenosairesexpats.com/visas/retirement",
    datePublished: "2025-02-16",
    dateModified: LAST_UPDATED,
  });

  const howToSchema = generateHowToSchema({
    name: "How to Apply for Argentina Retirement Visa",
    description: "Step-by-step guide to obtaining a retirement visa for Argentina.",
    totalTime: "P2M",
    estimatedCost: { currency: "USD", value: "200-400" },
    steps: applicationSteps.map((step) => ({
      name: step.title,
      text: step.description,
    })),
  });

  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />
      <StructuredData data={howToSchema} />
      <StructuredData data={faqSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">Visas</Link>
            <span>/</span>
            <span className="text-foreground">Retirement Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Heart className="w-3 h-3 mr-1" />
              Pensionado Visa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Retirement Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Retire in Buenos Aires with your pension. 
              Affordable healthcare, European lifestyle, and a clear path to permanent residency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>1 year renewable</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>~$200-400 fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>1-2 month processing</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span>Path to permanent residency</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Why Retire in Argentina */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Retire in Argentina?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Your Pension Goes Further</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A $2,500/month pension lets you live comfortably. In the US, that barely covers rent.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Excellent Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Private healthcare costs $100-300/month vs $500-1,200+ in the US. Quality is excellent.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">European Lifestyle</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Cafes, culture, walkable neighborhoods - the "Paris of South America" at a fraction of the cost.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Cost of Living Comparison</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Expense</th>
                        <th className="text-left py-3 px-2">US Average</th>
                        <th className="text-left py-3 px-2">Buenos Aires</th>
                      </tr>
                    </thead>
                    <tbody>
                      {costComparison.map((item) => (
                        <tr key={item.category} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{item.category}</td>
                          <td className="py-3 px-2 text-muted-foreground">{item.us}</td>
                          <td className="py-3 px-2 text-green-600 font-medium">{item.argentina}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Based on 2026 data. Costs vary by lifestyle and neighborhood choice.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((req) => (
                <Card key={req.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <req.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Application Process</h2>
            <div className="space-y-6">
              {applicationSteps.map((step) => (
                <Card key={step.step} className="flex gap-4 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Document Checklist</h2>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {documentChecklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Path to Residency */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Path to Permanent Residency</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  The retirement visa offers one of the clearest paths to permanent residency:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Temporary Residency (Years 1-2)</h4>
                      <p className="text-sm text-muted-foreground">Live in Argentina on renewable retirement visas, enjoying all benefits of residency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Permanent Residency (Year 2+)</h4>
                      <p className="text-sm text-muted-foreground">Apply for permanent residency (residencia permanente) - no more renewals needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Citizenship (Optional)</h4>
                      <p className="text-sm text-muted-foreground">After 2 years of permanent residency, eligible to apply for Argentine citizenship</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Real Story */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Real Retiree Experience</h2>
            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="pt-6">
                <blockquote className="text-lg italic mb-4">
                  "My teacher's pension goes three times as far here. I live better on $2,200/month than I did on $6,000 in Arizona."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold">Robert C.</p>
                    <p className="text-sm text-muted-foreground">Retired Teacher, Former Phoenix • 4 years in San Telmo</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/stories">
                      Read More Stories
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      Retirement visa requirements and income thresholds change frequently. 
                      Always verify current requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      or consult with a qualified immigration attorney before applying. 
                      This guide is for informational purposes only.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Visas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Explore Other Visa Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Digital Nomad Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Work remotely for foreign companies. No pension required. Valid for 180 days.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/visas/digital-nomad">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Investment Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For significant investments in Argentine business or real estate.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/visas/investment">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA variant="full" />
          </div>
        </div>
      </section>
    </div>
  );
}
