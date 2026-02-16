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
  Globe, 
  AlertCircle,
  ArrowRight,
  Building,
  BookOpen
} from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Argentina Digital Nomad Visa - Complete 2025 Guide",
  description: "Everything you need to know about Argentina's Digital Nomad Visa. Requirements, application process, costs, and tips for remote workers in 2025.",
  keywords: ["Argentina digital nomad visa", "remote work Argentina", "digital nomad Buenos Aires", "Argentina visa 2025"],
  openGraph: {
    title: "Argentina Digital Nomad Visa - Complete 2025 Guide",
    description: "Work remotely from Argentina for up to 180 days. Step-by-step application guide.",
    type: "article",
    publishedTime: "2025-02-16",
    modifiedTime: "2025-02-16",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/digital-nomad",
  },
};

const LAST_UPDATED = "2025-02-16";

const requirements = [
  {
    icon: Globe,
    title: "Remote Work Proof",
    description: "Employment contract or proof of self-employment with clients outside Argentina",
  },
  {
    icon: DollarSign,
    title: "Minimum Income",
    description: "Proof of stable monthly income (approximately $1,500-2,500 USD recommended)",
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "Proof of accommodation in Argentina (rental agreement or hotel booking)",
  },
  {
    icon: FileText,
    title: "Health Insurance",
    description: "Valid health insurance covering your stay in Argentina",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Gather Documents",
    description: "Collect passport, proof of remote work, income statements, health insurance, and accommodation proof.",
  },
  {
    step: 2,
    title: "Complete Online Application",
    description: "Fill out the application form on the Argentine immigration website (migraciones.gov.ar).",
  },
  {
    step: 3,
    title: "Pay the Fee",
    description: "Pay the visa application fee (approximately $100-150 USD, subject to change).",
  },
  {
    step: 4,
    title: "Submit & Wait",
    description: "Submit your application and wait for approval (typically 2-4 weeks).",
  },
  {
    step: 5,
    title: "Enter Argentina",
    description: "Once approved, enter Argentina within the validity period and complete any remaining registration.",
  },
];

const faqs = [
  {
    question: "How long is the Digital Nomad Visa valid?",
    answer: "The Digital Nomad Visa is valid for 180 days (6 months). It cannot be renewed from within Argentina, but you can apply for a different visa type if you wish to stay longer.",
  },
  {
    question: "Can I bring my family?",
    answer: "Family members can apply for accompanying visas. Each family member needs their own application, and you'll need to show additional financial means to support them.",
  },
  {
    question: "Do I need to pay taxes in Argentina?",
    answer: "Generally, digital nomads on this visa don't pay Argentine income tax since the work is performed for foreign companies. However, consult with a tax professional for your specific situation.",
  },
  {
    question: "Can I work for Argentine companies?",
    answer: "No, the Digital Nomad Visa is specifically for remote work with companies outside Argentina. Working for local companies requires a different visa type.",
  },
  {
    question: "What happens when the visa expires?",
    answer: "You must leave Argentina when the visa expires. Overstaying can result in fines and entry bans. You can reapply for a new Digital Nomad Visa after spending time outside Argentina.",
  },
];

const documentChecklist = [
  "Valid passport (minimum 6 months validity)",
  "Passport-sized photos (check current requirements)",
  "Proof of remote employment or self-employment",
  "Bank statements showing stable income",
  "Health insurance policy valid in Argentina",
  "Proof of accommodation (rental contract or hotel reservation)",
  "Criminal background check from home country",
  "Completed application form",
  "Payment receipt for visa fee",
];

export default function DigitalNomadVisaPage() {
  // Generate structured data
  const articleSchema = generateArticleSchema({
    headline: "Argentina Digital Nomad Visa - Complete 2025 Guide",
    description: "Everything you need to know about Argentina's Digital Nomad Visa. Requirements, application process, costs, and tips for remote workers in 2025.",
    url: "https://buenosairesexpats.com/visas/digital-nomad",
    datePublished: "2025-02-16",
    dateModified: LAST_UPDATED,
  });

  const howToSchema = generateHowToSchema({
    name: "How to Apply for Argentina Digital Nomad Visa",
    description: "Step-by-step guide to applying for Argentina's Digital Nomad Visa for remote workers.",
    totalTime: "P4W",
    estimatedCost: { currency: "USD", value: "100-150" },
    steps: applicationSteps.map((step) => ({
      name: step.title,
      text: step.description,
    })),
  });

  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">Visas</Link>
            <span>/</span>
            <span className="text-foreground">Digital Nomad Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/visa-digital-nomad.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20" variant="secondary">
              <Globe className="w-3 h-3 mr-1" />
              Remote Work Visa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Argentina Digital Nomad Visa
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Work remotely from Argentina for up to 180 days. 
              Complete guide to requirements, application, and living as a digital nomad in Buenos Aires.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>180 days validity</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>~$100-150 fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>2-4 week processing</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <span>8 min read</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">180</div>
              <div className="text-sm text-muted-foreground">Days Valid</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$100-150</div>
              <div className="text-sm text-muted-foreground">Application Fee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-4</div>
              <div className="text-sm text-muted-foreground">Weeks Processing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Online Application</div>
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

      {/* FAQs */}
      <section className="py-16 bg-muted/30">
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
                      Visa requirements and fees change frequently. Always verify current 
                      requirements on the official{" "}
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
                  <CardTitle className="text-lg">Work Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For those with a job offer from an Argentine employer. Valid for 1-3 years.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/visas/work">
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Visa?</h2>
            <p className="text-primary-foreground/80 mb-8">
              We&apos;ve worked with a trusted immigration partner who specializes in Argentine visas 
              and has helped many of our readers successfully navigate the Digital Nomad Visa process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://argentinavisalaw.com" target="_blank" rel="noopener noreferrer">
                  Get Professional Help
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/contact">
                  Ask Us a Question
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
