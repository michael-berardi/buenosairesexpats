import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { StructuredData } from "@/components/structured-data";
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
  title: "Healthcare in Argentina for Expats",
  description: "Complete guide to healthcare in Argentina for expats. Health insurance options (prepaga), finding doctors, hospital recommendations, and costs.",
  keywords: ["healthcare Argentina expats", "prepaga health insurance", "Argentina hospitals", "medical care Buenos Aires"],
  openGraph: {
    title: "Healthcare in Argentina for Expats",
    description: "Complete guide to healthcare in Argentina for expats. Health insurance options, finding doctors, and hospital recommendations.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Healthcare" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />
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
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/healthcare-hero.jpg')" }} />
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
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="#insurance-providers">
                Browse Healthcare Options
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Healthcare Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How Healthcare Actually Works in Argentina</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Argentina&apos;s healthcare system has three layers, and understanding them before you arrive
                saves real confusion later. The first layer is the public system &mdash; free hospitals and
                clinics funded by the government, open to everyone including foreigners. The second is
                the &ldquo;obra social&rdquo; system &mdash; union-based insurance tied to formal employment. The third
                is the private &ldquo;prepaga&rdquo; system &mdash; voluntary health insurance you buy directly, which
                is what most expats use.
              </p>
              <p>
                If you&apos;re coming from the United States, the cost difference will feel dramatic. A
                premium prepaga plan with full hospital coverage, specialists, dental, and mental health
                runs $240&ndash;600 per month &mdash; less than many US plans charge just for the deductible. If
                you&apos;re coming from Europe or the UK, you&apos;ll find the quality comparable to what you&apos;re
                used to, with faster access to specialists than most NHS or public European systems.
              </p>
              <p>
                The private system in Buenos Aires is genuinely excellent. Hospital Alemán, Hospital
                Italiano, and Hospital Británico rank among the best in Latin America. Equipment is
                modern. Specialists are well trained (many study abroad). The experience of walking
                into a private clinic in Recoleta feels closer to a European hospital than a developing-world
                one. Where it gets uneven is outside the capital &mdash; smaller cities have good private
                clinics, but the specialist depth and English-language availability thin out quickly.
              </p>
              <p>
                The public system is worth understanding even if you never plan to use it. Public
                hospitals handle emergencies for everyone, regardless of insurance or residency
                status. If you break your arm at 2 AM, the nearest public ER will treat you
                for free. The quality of emergency care is generally solid. Where the public system
                struggles is non-urgent care: specialist wait times can stretch to weeks or months,
                facilities vary widely, and English-speaking staff is rare. Most expats carry private
                prepaga for routine care and know that the public system exists as a safety net.
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
                      <span>Free for residents and emergencies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Solid emergency care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Longer wait times for non-urgent care</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Variable quality outside Buenos Aires</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Insurance */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Choosing the Right Prepaga Plan</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                The choice between prepaga providers comes down to three factors: which hospitals
                you want access to, how much English-language support matters to you, and how
                much you want to spend. The premium providers &mdash; OSDE and Swiss Medical &mdash; give
                you the widest hospital networks and the smoothest experience for non-Spanish
                speakers. Mid-range options like Galeno and Medicus cover the same core hospitals
                but may have longer authorization times for certain procedures and less
                English-language customer service.
              </p>
              <p>
                One detail that surprises many newcomers: prepaga plans in Argentina do not have
                the deductible structure common in the US. Instead, you pay a monthly premium
                and then either nothing or a small copay (typically $3&ndash;15) per visit. There are
                no surprise bills, no out-of-network traps, and no annual coverage limits for most
                services. Mental health, dental, and vision are typically included in mid-range
                and premium plans rather than sold as separate add-ons.
              </p>
              <p>
                The signup process is straightforward. You can walk into any prepaga office with your
                passport (and DNI if you have one), fill out a health declaration form, and have
                coverage active within a few days to two weeks. Pre-existing conditions may affect
                your tier or require a waiting period, but outright denial is less common than in
                unregulated insurance markets. Most providers offer online signups now, though
                in-person is still faster for foreigners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Providers Table */}
      <section id="insurance-providers" className="py-16">
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

      {/* Visual Break */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/healthcare-clinic.jpg"
              alt="Modern healthcare clinic in Buenos Aires"
              width={1200}
              height={500}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Top Hospitals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hospitals Worth Knowing</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                Buenos Aires has several private hospitals that would not look out of place in
                any European capital. The three names you&apos;ll hear most often from expats are
                Hospital Alemán, Hospital Italiano, and Hospital Británico &mdash; all founded by
                immigrant communities over a century ago and now among the top-rated medical
                centers in South America. Each has English-speaking staff, modern diagnostic
                equipment, and internationally trained specialists. If you&apos;re choosing a prepaga
                plan partly based on hospital access, make sure at least one of these three is
                in your network.
              </p>
              <p>
                For routine appointments &mdash; a GP visit, blood work, a dental cleaning &mdash; you
                don&apos;t need a major hospital. Most prepagas have networks of smaller clinics and
                consultorios (private practices) spread across neighborhoods. In Palermo, Recoleta,
                and Belgrano, finding a doctor who speaks at least some English is not difficult.
                In other neighborhoods or outside the capital, ask your prepaga for a list of
                English-speaking providers before you need one urgently.
              </p>
            </div>
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
            <h2 className="text-3xl font-bold mb-6">What Healthcare Costs Without Insurance</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                Even without prepaga coverage, private healthcare in Argentina is affordable by
                international standards. A GP consultation runs $35&ndash;70 &mdash; roughly what an American
                might pay as a copay <em>with</em> insurance. An ER visit at a private hospital costs
                $120&ndash;360 for most non-surgical situations. These are out-of-pocket prices, paid
                at the time of service, with no surprise bills arriving weeks later.
              </p>
              <p>
                That said, prepaga insurance is still worth it for anyone staying more than a
                few months. A single specialist consultation plus imaging could easily cost $200&ndash;400
                out of pocket, which is more than a month of mid-range prepaga coverage. The
                insurance pays for itself the moment you need anything beyond a basic checkup.
              </p>
            </div>
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
                  <a href="tel:107" className="text-center p-4 bg-white dark:bg-background rounded-lg hover:ring-2 hover:ring-red-300 transition-shadow block">
                    <div className="text-2xl font-bold text-red-600">107</div>
                    <div className="text-sm text-muted-foreground">Ambulance (SAME)</div>
                  </a>
                  <a href="tel:911" className="text-center p-4 bg-white dark:bg-background rounded-lg hover:ring-2 hover:ring-red-300 transition-shadow block">
                    <div className="text-2xl font-bold text-red-600">911</div>
                    <div className="text-sm text-muted-foreground">General Emergency</div>
                  </a>
                  <a href="tel:101" className="text-center p-4 bg-white dark:bg-background rounded-lg hover:ring-2 hover:ring-red-300 transition-shadow block">
                    <div className="text-2xl font-bold text-red-600">101</div>
                    <div className="text-sm text-muted-foreground">Police</div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground"><LuceroLegalCTA variant="inline" /></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing Insurance?</h2>
            <p className="text-primary-foreground/90 mb-8">
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
