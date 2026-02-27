import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { 
  FileText, 
  Clock, 
  DollarSign, 
  Globe,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Argentina Visa Options for Expats",
  description: "Compare all Argentina visa options for expats. Digital Nomad, Work, Retirement, Student, and Investment visas explained with requirements and costs.",
  keywords: ["Argentina visa options", "Argentina visas for expats", "move to Argentina visa", "Argentina immigration"],
  alternates: {
    canonical: "https://buenosairesexpats.com/visas",
  },
};

const visaTypes = [
  {
    name: "Digital Nomad Visa",
    href: "/visas/digital-nomad",
    duration: "180 days",
    cost: "$100-150",
    processing: "Typically 2-4 weeks",
    bestFor: ["Remote workers", "Freelancers", "Digital entrepreneurs"],
    description: "Work remotely from Argentina for up to 6 months. Perfect for location-independent professionals.",
    popular: true,
  },
  {
    name: "Work Visa",
    href: "/visas/work",
    duration: "1-3 years",
    cost: "$200-400",
    processing: "Typically 1-3 months",
    bestFor: ["Employees", "Employers", "Intra-company transfers"],
    description: "For those with a job offer from an Argentine company or transferring within a company.",
    popular: false,
  },
  {
    name: "Retirement Visa",
    href: "/visas/retirement",
    duration: "1 year renewable",
    cost: "$200-400",
    processing: "Typically 1-2 months",
    bestFor: ["Retirees", "Pensioners", "Passive income earners"],
    description: "For retirees with stable pension or passive income. Path to permanent residency.",
    popular: false,
  },
  {
    name: "Student Visa",
    href: "/visas/student",
    duration: "Duration of studies",
    cost: "$150-300",
    processing: "Typically 2-6 weeks",
    bestFor: ["University students", "Exchange students", "Language learners"],
    description: "Study at Argentine universities or language schools. Can work part-time.",
    popular: false,
  },
  {
    name: "Investment Visa",
    href: "/visas/investment",
    duration: "1-3 years",
    cost: "$500-1,000+",
    processing: "Typically 2-4 months",
    bestFor: ["Investors", "Business owners", "Entrepreneurs"],
    description: "For significant investments in Argentine business or real estate.",
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "Work Allowed", digitalNomad: "Remote work only", work: "Yes, for sponsor", retirement: "No", student: "Part-time", investment: "Yes, own business" },
  { name: "Path to Residency", digitalNomad: "No", work: "Yes", retirement: "Yes", student: "Possible", investment: "Yes" },
  { name: "Bring Family", digitalNomad: "Possible", work: "Yes", retirement: "Yes", student: "Possible", investment: "Yes" },
  { name: "Renewable", digitalNomad: "No (reapply)", work: "Yes", retirement: "Yes", student: "Yes", investment: "Yes" },
];

export default function VisasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-base md:text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Visas</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/visas-hero.webp')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20" variant="secondary">
              <FileText className="w-3 h-3 mr-1" />
              Immigration
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Argentina Visa Options
            </h1>
            <p className="text-xl text-white mb-8">
              Find the right visa for your situation. Compare requirements, costs,
              and processing times for all Argentina visa types. For personalized help,
              we recommend speaking with a trusted immigration lawyer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold">
                <Link href="/visas/quiz">
                  Find Your Visa
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20">
                <Link href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=visas-hero" target="_blank" rel="noopener noreferrer">
                  Free Legal Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg text-stone-700">
            <p>
              Argentina offers several visa pathways for expats looking to live, work, study, or retire
              in the country. Whether you are a remote worker exploring the Digital Nomad Visa, a retiree
              seeking affordable healthcare and a relaxed lifestyle, or an entrepreneur ready to invest in
              a growing market, there is a visa category designed for your situation. The process can feel
              overwhelming at first, but understanding the key differences between each visa type will help
              you make an informed decision and avoid costly mistakes.
            </p>
            <p>
              Below you will find a side-by-side comparison of the five main visa categories, including
              estimated costs, processing times, and eligibility requirements. We have also included general
              documentation requirements that apply across all visa types. Keep in mind that Argentine
              immigration rules change frequently, so always confirm the latest requirements before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* Visa Types Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Choose Your Visa</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visaTypes.map((visa) => (
              <Card key={visa.name} className={`h-full flex flex-col ${visa.popular ? 'border-primary' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{visa.name}</CardTitle>
                    {visa.popular && (
                      <Badge>Most Popular</Badge>
                    )}
                  </div>
                  <CardDescription>{visa.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-base md:text-sm">
                      <Clock className="w-4 h-4 text-stone-600" />
                      <span>{visa.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-sm">
                      <DollarSign className="w-4 h-4 text-stone-600" />
                      <span>{visa.cost} fee</span>
                    </div>
                    <div className="flex items-center gap-2 text-base md:text-sm">
                      <Globe className="w-4 h-4 text-stone-600" />
                      <span>{visa.processing}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-stone-600 mb-2">BEST FOR:</div>
                    <div className="flex flex-wrap gap-2">
                      {visa.bestFor.map((item) => (
                        <Badge key={item} variant="secondary" className="text-sm">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardContent className="pt-0 mt-auto">
                  <Button asChild className="w-full">
                    <Link href={visa.href}>
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Comparison</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Feature</th>
                        <th className="text-left py-3 px-2">Digital Nomad</th>
                        <th className="text-left py-3 px-2">Work</th>
                        <th className="text-left py-3 px-2">Retirement</th>
                        <th className="text-left py-3 px-2">Student</th>
                        <th className="text-left py-3 px-2">Investment</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature) => (
                        <tr key={feature.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{feature.name}</td>
                          <td className="py-3 px-2 text-base md:text-sm text-foreground">{feature.digitalNomad}</td>
                          <td className="py-3 px-2 text-base md:text-sm text-foreground">{feature.work}</td>
                          <td className="py-3 px-2 text-base md:text-sm text-foreground">{feature.retirement}</td>
                          <td className="py-3 px-2 text-base md:text-sm text-foreground">{feature.student}</td>
                          <td className="py-3 px-2 text-base md:text-sm text-foreground">{feature.investment}</td>
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

      {/* General Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">General Requirements</h2>
            <p className="text-stone-700 mb-8 text-center">
              While specific requirements vary by visa type, most applications will need:
            </p>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {[
                    "Valid passport (minimum 6 months validity)",
                    "Completed application form",
                    "Passport-sized photos",
                    "Proof of accommodation in Argentina",
                    "Health insurance coverage",
                    "Criminal background check",
                    "Proof of financial means",
                    "Application fee payment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-base">
                      Visa requirements and fees change frequently. Always verify current 
                      requirements on the official{" "}
                      <Link href="https://www.migraciones.gov.ar" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine Immigration website
                      </Link>{" "}
                      or consult with a qualified immigration attorney before applying. 
                      This guide is for informational purposes only and does not constitute legal advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="full"
              headline="Need Help With Your Visa?"
              description="Immigration law is complex and changes frequently. Lucero Legal's team of immigration attorneys specializes in Argentine visas and has helped hundreds of expats navigate the process."
              utm_content="visas-hub"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
