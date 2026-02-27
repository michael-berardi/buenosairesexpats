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
  TrendingUp,
  Building,
  AlertCircle,
  ArrowRight,
  Globe,
  Briefcase
} from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Argentina Investment Visa - Business & Investor Guide 2026",
  description: "Complete guide to Argentina's Investment Visa. Investment requirements, business setup, real estate options, and path to citizenship for investors.",
  keywords: ["Argentina investment visa", "Argentina business visa", "invest in Argentina", "Argentina golden visa"],
  openGraph: {
    title: "Argentina Investment Visa - Business & Investor Guide 2026",
    description: "Invest in Argentina and gain residency. Requirements, business setup, and path to citizenship.",
    type: "article",
    publishedTime: "2026-02-26",
    modifiedTime: "2026-02-26",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/investment",
  },
};

const LAST_UPDATED = "2026-02-26";

const requirements = [
  {
    icon: DollarSign,
    title: "Significant Investment",
    description: "Minimum investment of approximately $150,000-200,000 USD in Argentine business, real estate, or approved projects",
  },
  {
    icon: Briefcase,
    title: "Business Plan",
    description: "Detailed business plan demonstrating economic benefit to Argentina, job creation, or regional development",
  },
  {
    icon: FileText,
    title: "Clean Background",
    description: "Criminal background check from home country and any countries of residence, with apostille/legalization",
  },
  {
    icon: Globe,
    title: "Source of Funds",
    description: "Documentation proving legal source of investment funds (bank statements, tax returns, business records)",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Choose Investment Type",
    description: "Decide between business investment, real estate purchase, or participation in approved investment projects.",
  },
  {
    step: 2,
    title: "Prepare Business Plan",
    description: "Develop a comprehensive business plan showing economic impact, job creation, and long-term viability.",
  },
  {
    step: 3,
    title: "Make the Investment",
    description: "Transfer funds and establish the investment. For businesses: incorporate in Argentina. For real estate: complete purchase.",
  },
  {
    step: 4,
    title: "Gather Documents",
    description: "Collect proof of investment, source of funds documentation, background checks, and business registration.",
  },
  {
    step: 5,
    title: "Submit Application",
    description: "Apply at the Argentine consulate or immigration office with all supporting documentation.",
  },
  {
    step: 6,
    title: "Wait for Approval",
    description: "Processing typically takes 2-4 months. Immigration may request additional documentation during review.",
  },
];

const faqs = [
  {
    question: "How much do I need to invest?",
    answer: "The unofficial minimum is approximately $150,000-200,000 USD, though this can vary based on the type of investment and economic impact. Real estate investments typically need to be at the higher end. Business investments that create significant jobs may be approved with lower amounts. Consult with an immigration attorney for current thresholds.",
  },
  {
    question: "What types of investments qualify?",
    answer: "Qualifying investments include: (1) Starting or investing in an Argentine business, (2) Purchasing real estate (though this is less common for investment visas), (3) Investing in approved development projects, (4) Investing in certain government bonds or financial instruments. The key is demonstrating economic benefit to Argentina.",
  },
  {
    question: "How long is the investment visa valid?",
    answer: "Initial investment visas are typically valid for 1-2 years and renewable. After 2 years of maintaining your investment and residency, you can apply for permanent residency. This is one of the faster paths to permanent residency available.",
  },
  {
    question: "Can I bring my family?",
    answer: "Yes. Spouses and dependent children can be included in your investment visa application or join as family members. They'll receive the same residency status and path to permanent residency.",
  },
  {
    question: "Is there a path to citizenship?",
    answer: "Yes. After 2 years of permanent residency (which you can apply for after 2 years on the investment visa), you become eligible for Argentine citizenship. Argentina allows dual citizenship, so you don't need to renounce your original nationality. The citizenship process typically takes 1-2 years after application.",
  },
  {
    question: "What are the ongoing requirements?",
    answer: "You must maintain your investment for the duration of your temporary residency. For businesses, this means keeping the company operational. You'll need to show continued compliance when renewing your visa. Once you obtain permanent residency, the investment requirement is lifted.",
  },
];

const documentChecklist = [
  "Valid passport (minimum 6 months validity)",
  "Birth certificate (apostilled)",
  "Criminal background check (apostilled, less than 90 days old)",
  "Proof of investment (property deed, business registration, investment certificates)",
  "Source of funds documentation (bank statements, tax returns, business records)",
  "Detailed business plan (for business investments)",
  "Financial statements showing business viability",
  "Health insurance policy valid in Argentina",
  "Proof of accommodation in Argentina",
  "Passport-sized photos (check current requirements)",
  "Visa application fee payment",
];

const investmentOptions = [
  {
    type: "Business Investment",
    minAmount: "$150,000+",
    timeline: "2-4 months",
    pros: ["Direct control", "Potential returns", "Job creation focus"],
    cons: ["Business risk", "Ongoing management required", "Regulatory complexity"],
  },
  {
    type: "Real Estate",
    minAmount: "$200,000+",
    timeline: "2-4 months",
    pros: ["Tangible asset", "Potential appreciation", "No ongoing business management"],
    cons: ["Higher threshold", "Market risk", "Less favored by immigration"],
  },
  {
    type: "Approved Projects",
    minAmount: "$150,000+",
    timeline: "2-4 months",
    pros: ["Pre-approved by government", "Professional management", "Lower personal involvement"],
    cons: ["Less control", "Project dependent", "Limited options"],
  },
];

export default function InvestmentVisaPage() {
  const articleSchema = generateArticleSchema({
    headline: "Argentina Investment Visa - Business & Investor Guide 2026",
    description: "Complete guide to Argentina's Investment Visa. Investment requirements, business setup, real estate options, and path to citizenship for investors.",
    url: "https://buenosairesexpats.com/visas/investment",
    datePublished: "2026-02-26",
    dateModified: LAST_UPDATED,
  });

  const howToSchema = generateHowToSchema({
    name: "How to Apply for Argentina Investment Visa",
    description: "Step-by-step guide to obtaining an investment visa for Argentina.",
    totalTime: "P4M",
    estimatedCost: { currency: "USD", value: "150000+" },
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
            <span className="text-foreground">Investment Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <TrendingUp className="w-3 h-3 mr-1" />
              Investor Visa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Investment Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Invest in Argentina and gain residency. 
              Fastest path to permanent residency and citizenship for qualified investors.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>1-3 years validity</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>$150K+ investment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>2-4 month processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                <span>Fastest path to citizenship</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Options</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {investmentOptions.map((option) => (
                <Card key={option.type} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{option.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Minimum:</span>
                        <span className="font-semibold">{option.minAmount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span>{option.timeline}</span>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Pros:</span>
                        <ul className="text-sm mt-1 space-y-1">
                          {option.pros.map((pro) => (
                            <li key={pro} className="text-green-600">+ {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Cons:</span>
                        <ul className="text-sm mt-1 space-y-1">
                          {option.cons.map((con) => (
                            <li key={con} className="text-amber-600">- {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest in Argentina */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Invest in Argentina?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Fastest Path to Citizenship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    2 years on investment visa + 2 years permanent residency = eligibility for citizenship. 
                    One of the fastest routes available.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Lower Investment Threshold</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    $150K minimum vs $500K+ for US EB-5 or European Golden Visas. 
                    Significantly more accessible.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Dual Citizenship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Argentina allows dual citizenship. Keep your original passport 
                    while gaining Argentine nationality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Building className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Growing Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Despite volatility, Argentina offers opportunities in tech, agriculture, 
                    tourism, and renewable energy sectors.
                  </p>
                </CardContent>
              </Card>
            </div>
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

      {/* Path to Citizenship */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Path to Citizenship</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  The investment visa offers one of the fastest routes to Argentine citizenship:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Investment Visa (Years 1-2)</h4>
                      <p className="text-sm text-muted-foreground">Maintain your investment and residency status for 2 years</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Permanent Residency (Years 3-4)</h4>
                      <p className="text-sm text-muted-foreground">Apply for permanent residency after 2 years. No more renewals.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Citizenship Application (Year 4+)</h4>
                      <p className="text-sm text-muted-foreground">After 2 years of permanent residency, apply for citizenship. Process takes 1-2 years.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Argentine Passport</h4>
                      <p className="text-sm text-muted-foreground">Gain visa-free access to 170+ countries including EU Schengen zone, Mercosur countries</p>
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

      {/* Comparison */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Investment Visa Comparison</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Country</th>
                        <th className="text-left py-3 px-2">Minimum Investment</th>
                        <th className="text-left py-3 px-2">Path to Citizenship</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-primary/5">
                        <td className="py-3 px-2 font-semibold">Argentina</td>
                        <td className="py-3 px-2 text-green-600 font-medium">$150,000</td>
                        <td className="py-3 px-2">4-5 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2">Portugal (Golden Visa)</td>
                        <td className="py-3 px-2">€250,000</td>
                        <td className="py-3 px-2">5-6 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2">Spain (Golden Visa)</td>
                        <td className="py-3 px-2">€500,000</td>
                        <td className="py-3 px-2">10 years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2">USA (EB-5)</td>
                        <td className="py-3 px-2">$800,000</td>
                        <td className="py-3 px-2">5+ years</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-2">Greece (Golden Visa)</td>
                        <td className="py-3 px-2">€250,000</td>
                        <td className="py-3 px-2">7 years</td>
                      </tr>
                    </tbody>
                  </table>
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
                      Investment visa requirements and thresholds change frequently. 
                      Investment carries risk - consult with financial and legal advisors before committing funds. 
                      Always verify current requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      or consult with a qualified immigration attorney. 
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
                  <CardTitle className="text-lg">Retirement Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For retirees with pension income. Lower threshold, no investment risk.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/visas/retirement">
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Work Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For those with employer sponsorship. No investment required.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/visas/work">
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
