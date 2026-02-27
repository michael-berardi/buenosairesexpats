import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Globe, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Search,
  MapPin,
  Info
} from "lucide-react";
import { LastUpdated } from "@/components/last-updated";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateFAQPageSchema } from "@/lib/schema";
import { countries, regions, type Region } from "@/lib/nationality-data";

export const metadata: Metadata = {
  title: "Argentina Visa Requirements by Nationality - Complete 2026 Guide",
  description: "Find Argentina visa requirements for your country. 120+ nationalities can visit visa-free. Check if you need a visa, how long you can stay, and entry requirements.",
  keywords: [
    "Argentina visa requirements",
    "Argentina visa by country",
    "do I need a visa for Argentina",
    "Argentina entry requirements",
    "Argentina tourist visa"
  ],
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/nationalities",
  },
};

const LAST_UPDATED = "2026-02-26";

// Stats
const stats = {
  totalCountries: countries.length,
  visaExempt: countries.filter(c => c.visaStatus === "exempt").length,
  visaRequired: countries.filter(c => c.visaStatus === "required").length,
};

export default function NationalitiesPage() {
  // Generate structured data
  const articleSchema = generateArticleSchema({
    headline: "Argentina Visa Requirements by Nationality - Complete 2026 Guide",
    description: "Find Argentina visa requirements for your country. Check if you need a visa, how long you can stay, and entry requirements.",
    url: "https://buenosairesexpats.com/visas/nationalities",
    datePublished: "2026-02-26",
    dateModified: LAST_UPDATED,
  });

  const faqSchema = generateFAQPageSchema([
    {
      question: "Do I need a visa to visit Argentina?",
      answer: "Citizens of over 120 countries can visit Argentina without a visa for stays of up to 90 days. Check our country list above to see if your nationality qualifies for visa-free entry."
    },
    {
      question: "How long can tourists stay in Argentina?",
      answer: "Most visa-exempt nationalities can stay for 90 days. Some countries have different limits - Venezuela citizens get 60 days, while Malaysia, Hong Kong, and Macao citizens get 30 days."
    },
    {
      question: "Can I extend my stay in Argentina?",
      answer: "Yes, you can apply for an extension at the Argentine Migration Office (Direccion Nacional de Migraciones) before your current stay expires. Extensions are typically granted for another 90 days."
    },
    {
      question: "What documents do I need to enter Argentina?",
      answer: "You need a valid passport, proof of onward travel (return ticket), proof of sufficient funds, and accommodation details. Some nationalities may enter with national ID cards if coming from Mercosur countries."
    }
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <StructuredData data={articleSchema} />
      <StructuredData data={faqSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/visas" className="hover:text-foreground">Visas</Link>
            <span>/</span>
            <span className="text-foreground">Nationalities</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Globe className="w-3 h-3 mr-1" />
              Visa by Nationality
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Argentina Visa Requirements by Country
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find the exact visa requirements for your nationality. Over 120 countries 
              can visit Argentina visa-free. Select your country below for detailed information.
            </p>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{stats.totalCountries}</div>
              <div className="text-sm text-muted-foreground">Countries Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{stats.visaExempt}</div>
              <div className="text-sm text-muted-foreground">Visa-Free</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">{stats.visaRequired}</div>
              <div className="text-sm text-muted-foreground">Visa Required</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">90</div>
              <div className="text-sm text-muted-foreground">Days (Most Countries)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h2 className="font-semibold text-lg mb-2">Quick Overview</h2>
                    <p className="text-muted-foreground mb-4">
                      Argentina has one of the most open visa policies in South America. 
                      Citizens of most developed countries and all Mercosur member states 
                      can enter without a visa for tourism or business.
                    </p>
                    <div className="space-y-2 text-sm">
                      <p><strong>Visa-free entry:</strong> 90 days for most countries</p>
                      <p><strong>Special cases:</strong> Venezuela (60 days), Malaysia/Hong Kong/Macao (30 days)</p>
                      <p><strong>Mercosur citizens:</strong> Can enter with national ID card</p>
                      <p><strong>Extensions:</strong> Possible at Migration Office before expiry</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries by Region */}
      {regions.map((region) => {
        const regionCountries = countries.filter(c => c.region === region.id);
        if (regionCountries.length === 0) return null;

        return (
          <section key={region.id} className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {region.name}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {regionCountries.map((country) => (
                    <Card key={country.slug} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <span className="text-2xl">{country.flag}</span>
                            {country.name}
                          </CardTitle>
                          <Badge 
                            variant={country.visaStatus === "exempt" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {country.visaStatus === "exempt" ? (
                              <><CheckCircle className="w-3 h-3 mr-1" /> {country.stayDuration} days</>
                            ) : (
                              <><AlertCircle className="w-3 h-3 mr-1" /> Visa req.</>
                            )}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground mb-4">
                          {country.visaStatus === "exempt" 
                            ? `Visa-free entry for up to ${country.stayDuration} days`
                            : "Tourist visa required before travel"
                          }
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link href={`/visas/nationalities/${country.slug}`}>
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
        );
      })}

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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Help With Your Visa?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Immigration law is complex and changes frequently. We have worked with a trusted 
              immigration partner who specializes in Argentine visas and can help with any nationality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer">
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
