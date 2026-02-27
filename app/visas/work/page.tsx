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
  Briefcase,
  Building,
  AlertCircle,
  ArrowRight,
  Users,
  Globe
} from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Argentina Work Visa - Complete Guide for Expats 2026",
  description: "Everything you need to know about Argentina's Work Visa. Requirements, employer sponsorship, application process, and tips for professionals in 2026.",
  keywords: ["Argentina work visa", "work permit Argentina", "Argentina employment visa", "trabajar en Argentina"],
  openGraph: {
    title: "Argentina Work Visa - Complete Guide for Expats 2026",
    description: "Work legally in Argentina with employer sponsorship. Step-by-step application guide.",
    type: "article",
    publishedTime: "2025-02-16",
    modifiedTime: "2026-02-26",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/work",
  },
};

const LAST_UPDATED = "2026-02-26";

const requirements = [
  {
    icon: Briefcase,
    title: "Job Offer Required",
    description: "Valid employment contract from an Argentine-registered company willing to sponsor your visa",
  },
  {
    icon: Building,
    title: "Employer Sponsorship",
    description: "Your employer must file paperwork with immigration and prove they couldn't hire locally",
  },
  {
    icon: FileText,
    title: "Professional Qualifications",
    description: "Degrees, certificates, or experience proving you're qualified for the position",
  },
  {
    icon: Users,
    title: "Clean Background",
    description: "Criminal background check from your home country and any countries where you've lived",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Secure a Job Offer",
    description: "Find an employer willing to sponsor your visa. This is the hardest part - many companies prefer hiring locals due to bureaucracy.",
  },
  {
    step: 2,
    title: "Employer Files Precalificación",
    description: "Your employer submits a 'precalificación' to immigration, proving they need a foreign worker and couldn't find local candidates.",
  },
  {
    step: 3,
    title: "Gather Your Documents",
    description: "Collect passport, birth certificate, criminal background check, diplomas (all apostilled), and health certificate.",
  },
  {
    step: 4,
    title: "Submit Visa Application",
    description: "Apply at the Argentine consulate in your home country or, if already in Argentina, at the immigration office (migraciones).",
  },
  {
    step: 5,
    title: "Wait for Approval",
    description: "Processing typically takes 1-3 months. Your employer may need to provide additional documentation during this time.",
  },
  {
    step: 6,
    title: "Enter Argentina & Get DNI",
    description: "Once approved, enter Argentina and apply for your DNI (national ID card) within 90 days of arrival.",
  },
];

const faqs = [
  {
    question: "Can I apply for a work visa without a job offer?",
    answer: "No. The work visa requires employer sponsorship. You cannot apply independently. Some people enter on tourist visas to job hunt, then switch to work visas once they find employment.",
  },
  {
    question: "How long is the work visa valid?",
    answer: "Initial work visas are typically valid for 1 year and can be renewed for up to 3 years total. After 2 years on a work visa, you may be eligible for permanent residency.",
  },
  {
    question: "Can I switch employers with a work visa?",
    answer: "Technically no - the visa is tied to your sponsoring employer. If you want to change jobs, your new employer must file a new sponsorship application. In practice, some people do switch jobs and update their paperwork afterward.",
  },
  {
    question: "Can my family join me?",
    answer: "Yes. Spouses and dependent children can apply for accompanying family visas. They'll need to show relationship proof (marriage/birth certificates) and that you have sufficient income to support them.",
  },
  {
    question: "What if I lose my job?",
    answer: "You typically have 30-60 days to find a new sponsor or leave the country. Some people switch to tourist status temporarily while job hunting, though this exists in a legal gray area.",
  },
  {
    question: "Do I need to speak Spanish?",
    answer: "It's not a formal requirement, but most employers require Spanish for daily work. English-only positions are rare outside of specific industries (tech, some multinationals, teaching English).",
  },
];

const documentChecklist = [
  "Valid passport (minimum 6 months validity beyond intended stay)",
  "Birth certificate (apostilled/legalized)",
  "Criminal background check from home country (apostilled, less than 90 days old)",
  "Criminal background check from any country where you've lived 6+ months in past 3 years",
  "University degrees and professional certificates (apostilled)",
  "Health certificate from Argentine doctor (can be obtained after arrival)",
  "Employment contract from sponsoring company",
  "Company's registration documents (your employer provides)",
  "Passport-sized photos (check current requirements)",
  "Visa application fee payment",
];

export default function WorkVisaPage() {
  const articleSchema = generateArticleSchema({
    headline: "Argentina Work Visa - Complete Guide for Expats 2026",
    description: "Everything you need to know about Argentina's Work Visa. Requirements, employer sponsorship, application process, and tips for professionals in 2026.",
    url: "https://buenosairesexpats.com/visas/work",
    datePublished: "2025-02-16",
    dateModified: LAST_UPDATED,
  });

  const howToSchema = generateHowToSchema({
    name: "How to Apply for Argentina Work Visa",
    description: "Step-by-step guide to obtaining a work visa for Argentina with employer sponsorship.",
    totalTime: "P3M",
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
            <span className="text-foreground">Work Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Briefcase className="w-3 h-3 mr-1" />
              Employment Visa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Work Visa
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Work legally in Argentina with employer sponsorship. 
              Complete guide to requirements, the sponsorship process, and building your career in Buenos Aires.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>1-3 years validity</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>~$200-400 fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>1-3 month processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-primary" />
                <span>Employer sponsorship required</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      The Hard Truth About Work Visas
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-sm mb-2">
                      Getting a work visa in Argentina is difficult. Local unemployment is high, 
                      and companies must prove they couldn't hire an Argentine before sponsoring a foreigner. 
                      Most expats who work legally here are either transferred by multinational companies 
                      or have specialized skills in high demand.
                    </p>
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      <strong>Reddit consensus:</strong> Many expats work remotely for foreign companies 
                      on tourist or digital nomad visas instead. The work visa is primarily for those 
                      committed to building a local career.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <p className="text-sm text-muted-foreground mt-4 text-center">
              All foreign documents must be apostilled or legalized depending on your country's agreements with Argentina.
            </p>
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
                  One major advantage of the work visa is the clear path to permanent residency:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Work on Temporary Visa</h4>
                      <p className="text-sm text-muted-foreground">Work legally for 2 years on renewable temporary work visas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Apply for Permanent Residency</h4>
                      <p className="text-sm text-muted-foreground">After 2 years of legal work, apply for permanent residency (residencia permanente)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Path to Citizenship</h4>
                      <p className="text-sm text-muted-foreground">After 2 years of permanent residency, you may be eligible for Argentine citizenship</p>
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

      {/* Important Notice */}
      <section className="py-16 bg-muted/30">
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
                      Work visa requirements and employer sponsorship rules change frequently. 
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
      <section className="py-16">
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
                    Work remotely for foreign companies. No local employer needed. Valid for 180 days.
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
                  <CardTitle className="text-lg">Retirement Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For retirees with stable pension income. Path to permanent residency.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/visas/retirement">
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
