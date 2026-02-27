import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import {
  IdCard,
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Building,
  MapPin,
  Calendar,
  DollarSign,
  HelpCircle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Getting Your DNI in Argentina - Step-by-Step Guide 2026",
  description: "Complete step-by-step guide to obtaining your DNI (Documento Nacional de Identidad) in Argentina. Requirements by visa type, document checklist, and timeline.",
  keywords: ["DNI Argentina", "Documento Nacional de Identidad", "Argentina residency", "DNI application", "RENAPER"],
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/getting-dni",
  },
  openGraph: {
    title: "Getting Your DNI in Argentina - Step-by-Step Guide",
    description: "Complete guide to obtaining your Argentine DNI. Requirements, documents, timeline, and common pitfalls.",
  },
};

const requirementsByVisa = [
  {
    visa: "Digital Nomad Visa",
    dniType: "Temporary",
    validity: "1 year (renewable)",
    requirements: [
      "Valid passport",
      "Proof of remote income ($2,700+/month)",
      "Criminal background check (apostilled)",
      "Proof of health insurance",
      "Entry stamp showing legal entry",
    ],
  },
  {
    visa: "Rentista Visa",
    dniType: "Temporary → Permanent",
    validity: "1 year → indefinite",
    requirements: [
      "Valid passport",
      "Proof of passive income ($1,400+/month)",
      "Income source documentation",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
    ],
  },
  {
    visa: "Pensionado Visa",
    dniType: "Temporary → Permanent",
    validity: "1 year → indefinite",
    requirements: [
      "Valid passport",
      "Proof of pension income",
      "Pension documentation",
      "Criminal background check (apostilled)",
      "Birth certificate (apostilled)",
    ],
  },
  {
    visa: "Mercosur Citizens",
    dniType: "Temporary → Permanent",
    validity: "2 years → indefinite",
    requirements: [
      "Valid Mercosur country passport",
      "Birth certificate",
      "Criminal background check from home country",
      "Proof of address in Argentina",
      "Entry stamp showing legal entry",
    ],
  },
];

const documentChecklist = [
  { item: "Valid Passport", notes: "Must be valid for duration of stay", essential: true },
  { item: "Birth Certificate", notes: "Apostilled and translated if not Spanish", essential: true },
  { item: "Criminal Background Check", notes: "From home country, apostilled, translated", essential: true },
  { item: "Proof of Income", notes: "Bank statements, employment letters, pension docs", essential: true },
  { item: "Health Insurance", notes: "Valid in Argentina, coverage proof", essential: true },
  { item: "Proof of Address", notes: "Utility bill or rental contract in your name", essential: false },
  { item: "Marriage Certificate", notes: "If applicable, apostilled and translated", essential: false },
  { item: "Passport Photos", notes: "4x4 cm, white background, recent", essential: true },
];

const timelineSteps = [
  {
    step: 1,
    title: "Enter Argentina Legally",
    duration: "Day 1",
    description: "Enter with appropriate visa or visa-free entry. Get entry stamp in passport.",
  },
  {
    step: 2,
    title: "Apply for Residency",
    duration: "Within 90 days",
    description: "Submit residency application at Migraciones office. Book appointment online.",
  },
  {
    step: 3,
    title: "Wait for Approval",
    duration: "30-90 days",
    description: "Processing time varies. You'll receive a precaria (temporary permit) while waiting.",
  },
  {
    step: 4,
    title: "Get Residency Approved",
    duration: "Variable",
    description: "Receive residency approval notification. Now eligible for DNI.",
  },
  {
    step: 5,
    title: "Apply for DNI",
    duration: "Same day",
    description: "Visit RENAPER office with approval documents. Biometrics taken.",
  },
  {
    step: 6,
    title: "Receive DNI Card",
    duration: "2-4 weeks",
    description: "Card mailed to your address or pick up at RENAPER office.",
  },
];

const commonPitfalls = [
  {
    title: "Apostille Issues",
    description: "Documents from your home country must be apostilled. Notarization alone isn't enough. Plan 2-4 weeks for this process.",
    solution: "Start apostille process before arriving in Argentina",
  },
  {
    title: "Translation Requirements",
    description: "Non-Spanish documents must be translated by a certified Argentine translator (traductor público).",
    solution: "Find a certified translator in Buenos Aires, budget $20-50 per page",
  },
  {
    title: "Document Expiration",
    description: "Criminal background checks are typically only valid for 90 days from issue date.",
    solution: "Time your background check carefully - don't get it too early",
  },
  {
    title: "Address Requirements",
    description: "You need a local address for DNI delivery. Hotels often won't work.",
    solution: "Secure a rental or use a friend's address with their permission",
  },
];

export default function GettingDNIPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Getting DNI" },
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Getting Your DNI in Argentina - Step-by-Step Guide",
    description: "Complete step-by-step guide to obtaining your DNI (Documento Nacional de Identidad) in Argentina. Requirements by visa type, document checklist, and timeline.",
    url: "https://buenosairesexpats.com/guides/getting-dni",
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Getting DNI</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <IdCard className="w-3 h-3 mr-1" />
              Residency Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Getting Your DNI in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Complete step-by-step guide to obtaining your Documento Nacional de Identidad 
              (National Identity Document).
            </p>
            <p className="text-muted-foreground">
              The DNI is your official Argentine ID card - essential for banking, signing contracts, 
              and daily life as a resident.
            </p>
          </div>
        </div>
      </section>

      {/* What is DNI */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is the DNI?</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  The <strong>Documento Nacional de Identidad (DNI)</strong> is Argentina's national 
                  identity card. For expats with residency, it's the official proof of your legal 
                  status in the country.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      What You Can Do With DNI
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Open bank accounts</li>
                      <li>• Sign rental contracts</li>
                      <li>• Get local phone plans</li>
                      <li>• Access public healthcare</li>
                      <li>• Travel within Mercosur</li>
                      <li>• Prove residency anywhere</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500" />
                      Without DNI
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Limited banking options</li>
                      <li>• Difficulty with contracts</li>
                      <li>• Tourist-priced services</li>
                      <li>• No access to public healthcare</li>
                      <li>• Must carry passport</li>
                      <li>• Harder to prove residency</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements by Visa */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Requirements by Visa Type</h2>
            <div className="space-y-6">
              {requirementsByVisa.map((visa) => (
                <Card key={visa.visa}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3">
                      <CardTitle className="text-lg">{visa.visa}</CardTitle>
                      <Badge variant="secondary">{visa.dniType}</Badge>
                      <Badge variant="outline">{visa.validity}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
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
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {documentChecklist.map((doc) => (
                    <div key={doc.item} className="flex items-start gap-4 p-3 bg-muted rounded-lg">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${doc.essential ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                        {doc.essential ? <AlertCircle className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{doc.item}</span>
                          {doc.essential && <Badge variant="destructive" className="text-xs">Required</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground">{doc.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The DNI Process Timeline</h2>
            <div className="space-y-6">
              {timelineSteps.map((step, index) => (
                <Card key={step.step} className="relative">
                  {index !== timelineSteps.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-border" />
                  )}
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {step.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Total timeline: 2-6 months from entry to receiving your DNI card
            </p>
          </div>
        </div>
      </section>

      {/* Where to Apply */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Where to Apply</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Migraciones
                  </CardTitle>
                  <CardDescription>For residency applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Main office in Retiro. Book appointments online at migraciones.gov.ar.
                  </p>
                  <div className="text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      Av. Antártida Argentina 1201, Retiro
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <IdCard className="w-5 h-5 text-primary" />
                    RENAPER
                  </CardTitle>
                  <CardDescription>For DNI card issuance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Multiple locations throughout Buenos Aires. Appointment required.
                  </p>
                  <div className="text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      Various locations citywide
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pitfalls */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Common Pitfalls to Avoid
            </h2>
            <div className="space-y-4">
              {commonPitfalls.map((pitfall) => (
                <Card key={pitfall.title} className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-300">{pitfall.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{pitfall.description}</p>
                    <div className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <Lightbulb className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-700 dark:text-green-300">
                        <strong>Solution:</strong> {pitfall.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Expected Costs</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[
                    { item: "Residency application fee", cost: "$100-200" },
                    { item: "DNI card fee", cost: "$20-50" },
                    { item: "Document apostille (per doc)", cost: "$20-50" },
                    { item: "Certified translation (per page)", cost: "$20-50" },
                    { item: "Criminal background check", cost: "$50-100" },
                    { item: "Passport photos", cost: "$10-20" },
                    { item: "Legal assistance (optional)", cost: "$500-2,000" },
                  ].map((item) => (
                    <div key={item.item} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-muted-foreground">{item.item}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total Estimated (DIY)</span>
                    <span className="font-bold text-primary">$300-600</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    With lawyer: $800-2,600 depending on complexity
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your DNI?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our vetted immigration lawyers can guide you through the process and 
              handle the paperwork. Free initial consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/resources">
                  Find Immigration Lawyers
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/visas">
                  Explore Visa Options
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
