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
  GraduationCap,
  BookOpen,
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
  title: "Argentina Student Visa - Complete Guide for International Students 2026",
  description: "Complete guide to Argentina's Student Visa. University requirements, application process, work permissions, and post-graduation options for international students.",
  keywords: ["Argentina student visa", "study in Argentina", "Argentina university visa", "estudiante Argentina"],
  openGraph: {
    title: "Argentina Student Visa - Complete Guide for International Students 2026",
    description: "Study at Argentine universities. Visa requirements, work permissions, and post-graduation options.",
    type: "article",
    publishedTime: "2026-02-26",
    modifiedTime: "2026-02-26",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/student",
  },
};

const LAST_UPDATED = "2026-02-26";

const requirements = [
  {
    icon: GraduationCap,
    title: "University Acceptance",
    description: "Official acceptance letter from an accredited Argentine university or educational institution",
  },
  {
    icon: DollarSign,
    title: "Financial Proof",
    description: "Bank statements or sponsorship letter showing you can cover tuition and living expenses (~$800-1,500/month)",
  },
  {
    icon: FileText,
    title: "Valid Passport",
    description: "Passport valid for at least 6 months beyond your intended stay",
  },
  {
    icon: Globe,
    title: "Health Insurance",
    description: "Health coverage valid in Argentina for the duration of your studies",
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Apply to Universities",
    description: "Research and apply to Argentine universities. Popular choices include UBA, UTDT, Universidad de Belgrano, and UCA.",
  },
  {
    step: 2,
    title: "Receive Acceptance Letter",
    description: "Once accepted, your university will provide an official acceptance letter required for your visa application.",
  },
  {
    step: 3,
    title: "Gather Documents",
    description: "Collect passport, acceptance letter, financial proof, health insurance, and criminal background check.",
  },
  {
    step: 4,
    title: "Apply for Student Visa",
    description: "Submit your application at the Argentine consulate in your home country with all required documents.",
  },
  {
    step: 5,
    title: "Pay Fees & Wait",
    description: "Pay the visa fee (~$150-300) and wait for processing (typically 2-6 weeks).",
  },
  {
    step: 6,
    title: "Enter Argentina & Register",
    description: "Once approved, enter Argentina and register with immigration within 90 days. Get your student DNI.",
  },
];

const faqs = [
  {
    question: "Can I work while on a student visa?",
    answer: "Yes, student visa holders can work part-time (up to 20 hours per week) with proper authorization. Many students work in cafes, as English tutors, or in internships related to their field of study. You'll need to apply for work permission separately after arriving.",
  },
  {
    question: "How long is the student visa valid?",
    answer: "Student visas are valid for the duration of your academic program - typically 1-4 years depending on your degree. You can renew annually as long as you remain enrolled and in good academic standing.",
  },
  {
    question: "What are the best universities for international students?",
    answer: "Top choices include: Universidad de Buenos Aires (UBA) - free, prestigious, very competitive; Universidad Torcuato Di Tella (UTDT) - private, excellent for economics/business; Universidad de Belgrano - popular with expats, good international programs; Universidad Católica Argentina (UCA) - private, strong liberal arts; UADE - business-focused. Most offer programs in both Spanish and English.",
  },
  {
    question: "Do I need to speak Spanish?",
    answer: "It depends on your program. Many universities offer English-taught programs, especially at the graduate level. However, daily life in Argentina requires Spanish. Most students find that immersion accelerates their learning dramatically - you'll likely be conversational within 6 months.",
  },
  {
    question: "What happens after graduation?",
    answer: "After graduation, you have several options: (1) Apply for a work visa if you find employer sponsorship, (2) Switch to a digital nomad visa if working remotely, (3) Apply for residency based on your time in Argentina, or (4) You typically have 30-60 days to either secure new status or leave the country. Many graduates find that their local connections and Spanish skills make finding work easier than starting from scratch.",
  },
  {
    question: "How much does it cost to study in Argentina?",
    answer: "Public universities like UBA are free for everyone, including international students. Private universities range from $3,000-15,000 USD per year depending on the program. Living costs in Buenos Aires run $800-1,500/month depending on your lifestyle. Overall, it's significantly cheaper than US or European universities.",
  },
];

const documentChecklist = [
  "Valid passport (minimum 6 months validity)",
  "Official university acceptance letter",
  "Proof of financial means (bank statements or sponsorship letter)",
  "Criminal background check (apostilled, less than 90 days old)",
  "Health insurance policy valid in Argentina",
  "Birth certificate (apostilled)",
  "Passport-sized photos (check current requirements)",
  "Visa application form (completed)",
  "Visa application fee payment",
  "Proof of accommodation in Argentina",
];

const universities = [
  { name: "Universidad de Buenos Aires (UBA)", type: "Public", cost: "Free", notes: "Most prestigious, very competitive, Spanish only" },
  { name: "Universidad Torcuato Di Tella", type: "Private", cost: "$8K-12K/year", notes: "Excellent for economics, business, design" },
  { name: "Universidad de Belgrano", type: "Private", cost: "$5K-10K/year", notes: "Popular with expats, international programs" },
  { name: "Universidad Católica Argentina", type: "Private", cost: "$6K-12K/year", notes: "Strong liberal arts, some English programs" },
  { name: "UADE", type: "Private", cost: "$5K-9K/year", notes: "Business-focused, good corporate connections" },
  { name: "Universidad de San Andrés", type: "Private", cost: "$10K-15K/year", notes: "Elite, small classes, bilingual programs" },
];

export default function StudentVisaPage() {
  const articleSchema = generateArticleSchema({
    headline: "Argentina Student Visa - Complete Guide for International Students 2026",
    description: "Complete guide to Argentina's Student Visa. University requirements, application process, work permissions, and post-graduation options for international students.",
    url: "https://buenosairesexpats.com/visas/student",
    datePublished: "2026-02-26",
    dateModified: LAST_UPDATED,
  });

  const howToSchema = generateHowToSchema({
    name: "How to Apply for Argentina Student Visa",
    description: "Step-by-step guide to obtaining a student visa for Argentina.",
    totalTime: "P2M",
    estimatedCost: { currency: "USD", value: "150-300" },
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
            <span className="text-foreground">Student Visa</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <GraduationCap className="w-3 h-3 mr-1" />
              Student Visa
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Study in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              World-class education at a fraction of the cost. 
              Free tuition at public universities, work permissions, and a vibrant student life in Buenos Aires.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Duration of studies</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span>~$150-300 fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>2-6 week processing</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Part-time work allowed</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Why Study in Argentina */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Study in Argentina?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Free Public Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Public universities like UBA are completely free, even for international students.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Spanish Immersion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Become fluent in Spanish while earning your degree. A huge career advantage.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Quality Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    UBA ranks among Latin America's top universities. Strong programs in medicine, law, and economics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Top Universities for International Students</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">University</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Annual Cost</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {universities.map((uni) => (
                        <tr key={uni.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{uni.name}</td>
                          <td className="py-3 px-2">
                            <Badge variant={uni.type === "Public" ? "default" : "secondary"}>
                              {uni.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{uni.cost}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{uni.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
          </div>
        </div>
      </section>

      {/* Work Permissions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Working as a Student</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Part-Time Work (20 hours/week)</h4>
                      <p className="text-sm text-muted-foreground">Student visa holders can work up to 20 hours per week with authorization. Apply for work permission after arriving in Argentina.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Remote Work</h4>
                      <p className="text-sm text-muted-foreground">Many students work remotely for foreign companies. This exists in a gray area but is commonly done.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Internships</h4>
                      <p className="text-sm text-muted-foreground">Many programs include internship components. These can lead to full-time job offers after graduation.</p>
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
                      Student visa requirements and university admission standards change frequently. 
                      Always verify current requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      and with your chosen university. This guide is for informational purposes only.
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
                    Work remotely while studying part-time. Valid for 180 days.
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
                  <CardTitle className="text-lg">Work Visa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    For after graduation if you find employer sponsorship.
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
