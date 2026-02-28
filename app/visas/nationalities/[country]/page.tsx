import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  Clock, 
  AlertCircle,
  ArrowRight,
  Globe,
  FileText,
  Info
} from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { countries, getCountryBySlug, getAllSlugs } from "@/lib/nationality-data";

// Generate static params for all countries
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    country: slug,
  }));
}

// Generate metadata for each country
export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    return {
      title: "Country Not Found",
    };
  }

  const visaStatusText = country.visaStatus === "exempt" 
    ? `Visa-free entry for ${country.stayDuration} days`
    : "Visa required";

  return {
    title: `${country.name} Citizens: Argentina Visa Requirements 2026`,
    description: `${country.flag} Complete guide for ${country.name} citizens traveling to Argentina. ${visaStatusText}. Requirements, application process, and FAQs.`,
    keywords: [
      `${country.name} Argentina visa`,
      `${country.name} citizens Argentina`,
      `Argentina visa requirements ${country.name}`,
      `${country.name} passport Argentina`,
      `travel Argentina from ${country.name}`
    ],
    alternates: {
      canonical: `https://buenosairesexpats.com/visas/nationalities/${country.slug}`,
    },
  };
}

const LAST_UPDATED = "2026-02-26";

export default async function NationalityPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  const isVisaExempt = country.visaStatus === "exempt";

  // Generate structured data
  const articleSchema = generateArticleSchema({
    headline: `Argentina Visa Requirements for ${country.name} Citizens - 2026 Guide`,
    description: `Complete guide for ${country.name} citizens traveling to Argentina. ${isVisaExempt ? `Visa-free entry for ${country.stayDuration} days.` : "Visa required before travel."}`,
    url: `https://buenosairesexpats.com/visas/nationalities/${country.slug}`,
    datePublished: "2026-02-26",
    dateModified: LAST_UPDATED,
  });

  const faqs = country.commonConcerns.map((concern, index) => ({
    question: concern,
    answer: getAnswerForConcern(concern, country),
  }));

  const faqSchema = generateFAQPageSchema(faqs);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Visas", item: "https://buenosairesexpats.com/visas" },
    { name: "Nationalities", item: "https://buenosairesexpats.com/visas/nationalities" },
    { name: country.name },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">Visas</Link>
            <span>/</span>
            <Link href="/visas/nationalities" className="hover:text-foreground">Nationalities</Link>
            <span>/</span>
            <span className="text-foreground">{country.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        {country.image && (
          <div className="absolute inset-0">
            <Image
              src={country.image}
              alt={country.imageAlt || `${country.name} landscape`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        )}
        {/* Fallback Gradient */}
        {!country.image && (
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background" />
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-6xl mb-4">{country.flag}</div>
            <Badge className="mb-4" variant={isVisaExempt ? "default" : "secondary"}>
              {isVisaExempt ? (
                <><CheckCircle className="w-3 h-3 mr-1" /> Visa-Free Entry</>
              ) : (
                <><AlertCircle className="w-3 h-3 mr-1" /> Visa Required</>
              )}
            </Badge>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${country.image ? 'text-white' : ''}`}>
              Argentina Visa Requirements for {country.name} Citizens
            </h1>
            <p className={`text-xl mb-6 ${country.image ? 'text-white/90' : 'text-muted-foreground'}`}>
              {isVisaExempt 
                ? `${country.name} citizens can visit Argentina visa-free for up to ${country.stayDuration} days for tourism or business.`
                : `${country.name} citizens must obtain a visa before traveling to Argentina. Here's everything you need to know.`
              }
            </p>
            <div className={`flex flex-wrap justify-center gap-4 text-sm mb-6 ${country.image ? 'text-white/80' : ''}`}>
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${country.image ? 'text-sky-300' : 'text-primary'}`} />
                <span>{country.stayDuration} days max stay</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className={`w-4 h-4 ${country.image ? 'text-sky-300' : 'text-primary'}`} />
                <span>{isVisaExempt ? "No visa required" : "Apply at consulate"}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className={`w-4 h-4 ${country.image ? 'text-sky-300' : 'text-primary'}`} />
                <span>Updated 2026</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className={isVisaExempt ? "border-green-200 bg-green-50/50" : "border-amber-200 bg-amber-50/50"}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {isVisaExempt ? (
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  )}
                  <div>
                    <h2 className="font-semibold text-lg mb-2">
                      {isVisaExempt 
                        ? `Good news: No visa required for ${country.name} citizens`
                        : `Important: Visa required before travel`
                      }
                    </h2>
                    <p className="text-muted-foreground">
                      {isVisaExempt
                        ? `You can enter Argentina with just your valid ${country.name} passport and stay for up to ${country.stayDuration} days. No advance visa application is needed for tourism or business visits.`
                        : `You must apply for a tourist visa at an Argentine consulate before traveling. The application typically takes ${country.processingTime || "2-4 weeks"} to process.`
                      }
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Conditions */}
      {country.specialConditions && country.specialConditions.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Special Conditions for {country.name} Citizens</h2>
              <div className="grid gap-4">
                {country.specialConditions.map((condition, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p>{condition}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Entry Requirements */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Entry Requirements</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Valid Passport:</strong> Must be valid for the duration of your stay</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Proof of Onward Travel:</strong> Return ticket or ticket to another destination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Proof of Funds:</strong> Bank statements or credit cards showing sufficient funds</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Accommodation Details:</strong> Hotel reservations or invitation letter</span>
                  </li>
                  {!isVisaExempt && (
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Valid Visa:</strong> Tourist visa obtained before travel</span>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visa Application Process (for visa-required countries) */}
      {!isVisaExempt && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Visa Application Process</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
                      Contact the Argentine Consulate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {country.consulateInfo?.hasConsulate 
                        ? `Visit the Argentine consulate in ${country.consulateInfo.cities?.join(" or ")} to begin your application.`
                        : country.consulateInfo?.notes || "Contact the nearest Argentine embassy or consulate to schedule an appointment."
                      }
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
                      Prepare Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>- Valid passport (minimum 6 months validity)</li>
                      <li>- Completed visa application form</li>
                      <li>- Passport-sized photos</li>
                      <li>- Proof of accommodation in Argentina</li>
                      <li>- Proof of financial means</li>
                      <li>- Return flight ticket</li>
                      <li>- Criminal background check</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
                      Attend Interview and Pay Fee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Attend your consular interview and pay the visa fee 
                      ({country.visaFee || "$150-200 USD"}). Processing typically takes {country.processingTime || "2-4 weeks"}.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Common Questions from {country.name} Travelers</h2>
            <Accordion type="single" collapsible className="w-full">
              {country.commonConcerns.map((concern, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{concern}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {getAnswerForConcern(concern, country)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12">
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
                      or consult with your nearest{" "}
                      <Link href="https://www.cancilleria.gob.ar/en" className="underline" target="_blank" rel="noopener noreferrer">
                        Argentine consulate
                      </Link>{" "}
                      before traveling. This guide is for informational purposes only and does not constitute legal advice.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Countries */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Other {getRegionName(country.region)} Nationalities</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {countries
                .filter(c => c.region === country.region && c.slug !== country.slug)
                .slice(0, 4)
                .map(relatedCountry => (
                  <Card key={relatedCountry.slug} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span>{relatedCountry.flag}</span>
                        {relatedCountry.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedCountry.visaStatus === "exempt" 
                          ? `Visa-free for ${relatedCountry.stayDuration} days`
                          : "Visa required"
                        }
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/visas/nationalities/${relatedCountry.slug}`}>
                          View Requirements
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Argentina Visa?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Immigration law is complex and changes frequently. We have worked with a trusted 
              immigration partner who specializes in Argentine visas and has helped many {country.name} citizens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer">
                  Get Professional Help
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
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

// Helper function to generate answers for common concerns
function getAnswerForConcern(concern: string, country: typeof countries[0]): string {
  const lowerConcern = concern.toLowerCase();
  
  // Visa-related questions
  if (lowerConcern.includes("visa")) {
    if (country.visaStatus === "exempt") {
      return `No, ${country.name} citizens do not need a visa to enter Argentina for tourism or business stays of up to ${country.stayDuration} days. You can enter with just your valid passport.`;
    } else {
      return `Yes, ${country.name} citizens must obtain a tourist visa before traveling to Argentina. You need to apply at an Argentine consulate with the required documents.`;
    }
  }
  
  // Stay duration questions
  if (lowerConcern.includes("long") || lowerConcern.includes("stay") || lowerConcern.includes("days")) {
    return `${country.name} citizens can stay in Argentina for up to ${country.stayDuration} days${country.visaStatus === "exempt" ? " without a visa" : " with a tourist visa"}. Extensions may be possible by visiting the Argentine Migration Office before your stay expires.`;
  }
  
  // Passport questions
  if (lowerConcern.includes("passport")) {
    return `Your passport must be valid for the duration of your stay in Argentina. While there is no strict 6-month validity requirement, we recommend having at least a few months validity remaining.`;
  }
  
  // ID card questions (for Mercosur)
  if (lowerConcern.includes("id") || lowerConcern.includes("cedula") || lowerConcern.includes("dni")) {
    if (country.specialConditions?.some(c => c.includes("ID card"))) {
      return `Yes, as a ${country.name} citizen, you can enter Argentina using your national ID card${country.specialConditions?.some(c => c.includes("Mercosur")) ? " thanks to Mercosur agreements" : ""}. This applies to land, sea, and air borders.`;
    }
    return `No, you need a valid passport to enter Argentina. National ID cards from ${country.name} are not accepted for entry.`;
  }
  
  // Work questions
  if (lowerConcern.includes("work")) {
    return `No, you cannot work in Argentina on a tourist visa or visa-free entry. To work legally, you need a work visa sponsored by an Argentine employer. Contact an immigration attorney for assistance.`;
  }
  
  // Extension questions
  if (lowerConcern.includes("extend")) {
    return `You can apply for a stay extension at the Argentine Migration Office (Direccion Nacional de Migraciones) before your current stay expires. Extensions are typically granted for another 90 days.`;
  }
  
  // Reciprocity fee questions
  if (lowerConcern.includes("reciprocity") || lowerConcern.includes("fee")) {
    return `The reciprocity fee for ${country.name} citizens was eliminated. There is no entry fee required for tourists from ${country.name}.`;
  }
  
  // Default answer
  return `For specific guidance on this question, we recommend contacting the Argentine consulate in your area or consulting with an immigration attorney who specializes in Argentine visas.`;
}

function getRegionName(region: string): string {
  const regionNames: Record<string, string> = {
    "americas": "Americas",
    "europe": "European",
    "asia-pacific": "Asia-Pacific",
    "africa-middle-east": "Africa & Middle East"
  };
  return regionNames[region] || "";
}
