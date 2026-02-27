import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateFAQPageSchema } from "@/lib/schema";
import {
  Heart,
  Shield,
  DollarSign,
  Building,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Phone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare in Argentina for Expats 2026",
  description: "Complete guide to healthcare in Argentina for expats. Health insurance options (prepaga), finding doctors, hospital recommendations, and costs.",
  keywords: ["healthcare Argentina expats", "prepaga health insurance", "Argentina hospitals", "medical care Buenos Aires"],
  alternates: {
    canonical: "https://buenosairesexpats.com/healthcare",
  },
};

const insuranceProviders = [
  { name: "OSDE", type: "Premium", monthlyCost: "$240-600", notes: "Widest network, best hospitals" },
  { name: "Swiss Medical", type: "Premium", monthlyCost: "$220-540", notes: "Excellent service, English-speaking staff" },
  { name: "Galeno", type: "Mid-range", monthlyCost: "$120-300", notes: "Good coverage, reasonable prices" },
  { name: "Medicus", type: "Mid-range", monthlyCost: "$95-240", notes: "Solid coverage, widely accepted" },
  { name: "Sancor Salud", type: "Budget", monthlyCost: "$70-180", notes: "Basic coverage, good for young/healthy" },
];

const topHospitals = [
  { name: "Hospital Alemán", location: "Recoleta", type: "Private", notes: "Top-rated, English-speaking staff" },
  { name: "Hospital Italiano", location: "Almagro", type: "Private", notes: "Excellent reputation, research hospital" },
  { name: "Hospital Británico", location: "Barracas", type: "Private", notes: "British heritage, English widely spoken" },
  { name: "Hospital Universitario", location: " various", type: "Public", notes: "Good public option, teaching hospital" },
];

const faqs = [
  {
    question: "Do I need health insurance in Argentina?",
    answer: "While not always legally required depending on your visa, private health insurance (prepaga) is strongly recommended. Public hospitals can be overcrowded and may charge non-residents. Private insurance ensures faster access, better facilities, and English-speaking doctors.",
  },
  {
    question: "How much does health insurance cost?",
    answer: "Basic prepaga plans start around $70-95 USD per month for young, healthy individuals. Comprehensive plans for older adults or families can range from $240-600 USD monthly. Many providers offer tiered plans so you can choose your level of coverage.",
  },
  {
    question: "Can I use my home country's insurance?",
    answer: "Some international health insurance plans cover Argentina, but many expats find it more convenient and cost-effective to get local prepaga coverage. Check with your international provider about coverage in Argentina and whether they have direct billing arrangements with local hospitals.",
  },
  {
    question: "Are doctors English-speaking?",
    answer: "In major private hospitals and clinics, especially in Buenos Aires, many doctors speak English. However, it's not guaranteed. Hospital Alemán, Hospital Italiano, and Hospital Británico are known for having English-speaking staff. For other providers, you may need to request an English-speaking doctor when booking.",
  },
  {
    question: "What's the quality of healthcare?",
    answer: "Private healthcare in Buenos Aires is generally excellent and comparable to Western standards. Top private hospitals have modern equipment and highly trained specialists. Public healthcare varies more in quality and can have long wait times, but it's free for residents and emergencies.",
  },
];

export default function HealthcarePage() {
  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <div className="flex flex-col min-h-screen">
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
            <span className="text-foreground">Healthcare</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/healthcare-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20" variant="secondary">
              <Heart className="w-3 h-3 mr-1" />
              Healthcare Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Healthcare in Argentina
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about health insurance (prepaga), 
              finding doctors, and accessing quality medical care in Argentina.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Healthcare System Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Argentina has a mixed healthcare system with both public and private options. 
                As an expat, you'll primarily use the private system, which offers excellent 
                quality care at a fraction of what you'd pay in the US or Europe.
              </p>
              <p className="mb-4">
                The private system is accessed through "prepaga" health insurance plans. 
                These plans give you access to private hospitals, clinics, and specialists 
                with minimal wait times and modern facilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Private Healthcare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>High quality, modern facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Minimal wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>English-speaking doctors available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Affordable compared to US/Europe</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Public Healthcare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Free for residents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Good for emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Longer wait times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Variable quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Major Insurance Providers</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Provider</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Monthly Cost</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {insuranceProviders.map((provider) => (
                        <tr key={provider.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{provider.name}</td>
                          <td className="py-3 px-2">
                            <Badge variant={provider.type === "Premium" ? "default" : provider.type === "Mid-range" ? "secondary" : "outline"}>
                              {provider.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-2">{provider.monthlyCost}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{provider.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Prices are approximate for a single person in their 30s-40s. Actual costs vary by age, coverage level, and pre-existing conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Recommended Hospitals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {topHospitals.map((hospital) => (
                <Card key={hospital.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{hospital.name}</CardTitle>
                    <CardDescription>{hospital.location} • {hospital.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{hospital.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Typical Medical Costs</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {[
                    { service: "General doctor consultation (private)", cost: "$35-70" },
                    { service: "Specialist consultation", cost: "$60-120" },
                    { service: "Dental cleaning", cost: "$50-100" },
                    { service: "Eye exam", cost: "$35-60" },
                    { service: "Blood work panel", cost: "$60-180" },
                    { service: "X-ray", cost: "$50-100" },
                    { service: "Emergency room visit", cost: "$120-360" },
                  ].map((item) => (
                    <div key={item.service} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-muted-foreground">{item.service}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Costs are approximate in USD. With prepaga insurance, you'll typically pay a small copay or nothing for covered services.
            </p>
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
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                  <Phone className="w-5 h-5" />
                  Emergency Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">107</div>
                    <div className="text-sm text-muted-foreground">Ambulance (SAME)</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">911</div>
                    <div className="text-sm text-muted-foreground">General Emergency</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-background rounded-lg">
                    <div className="text-2xl font-bold text-red-600">101</div>
                    <div className="text-sm text-muted-foreground">Police</div>
                  </div>
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
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing Insurance?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Our partners can help you compare plans and find the right coverage for your needs and budget.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/resources">
                Find Insurance Brokers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
