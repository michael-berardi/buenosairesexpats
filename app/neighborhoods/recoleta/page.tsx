import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  DollarSign, 
  Shield, 
  Train, 
  Coffee,
  ArrowRight,
  Star,
  Building2,
  Trees,
  Users,
  Crown
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Recoleta Buenos Aires - Luxury Neighborhood Guide for Expats",
  description: "Complete guide to Recoleta, Buenos Aires' most elegant and upscale neighborhood. Perfect for families and luxury living with French architecture and world-class amenities.",
  keywords: ["Recoleta Buenos Aires", "living in Recoleta", "Recoleta neighborhood", "Buenos Aires luxury neighborhoods", "Recoleta expat guide"],
  openGraph: {
    title: "Recoleta Buenos Aires - Luxury Neighborhood Guide for Expats",
    description: "Complete guide to Recoleta, Buenos Aires' most elegant and upscale neighborhood.",
  },
};

const nearbyAttractions = [
  {
    name: "Recoleta Cemetery",
    description: "Famous cemetery with elaborate mausoleums including Eva Perón's tomb",
    highlights: ["Free entry", "Guided tours available", "Historic architecture"],
  },
  {
    name: "Museo Nacional de Bellas Artes",
    description: "Argentina's premier art museum with European and Argentine masterpieces",
    highlights: ["Free admission", "Impressionist collection", "Sculpture garden"],
  },
  {
    name: "Avenida Alvear",
    description: "Luxury shopping street with high-end boutiques and hotels",
    highlights: ["Designer stores", "Five-star hotels", "Fine dining"],
  },
];

const rentPrices = [
  { type: "Studio", price: "$600-900", notes: "Rare, usually in older buildings" },
  { type: "1 Bedroom", price: "$800-1,200", notes: "Standard luxury apartments" },
  { type: "2 Bedroom", price: "$1,200-1,800", notes: "Family-sized with amenities" },
  { type: "3+ Bedroom", price: "$1,600-2,500+", notes: "Premium buildings with doorman" },
];

const highlights = [
  { icon: Crown, title: "Elegant Architecture", description: "Stunning French-style mansions and classic Buenos Aires architecture throughout" },
  { icon: Trees, title: "Beautiful Parks", description: "Plaza Francia and Plaza Intendente Alvear for relaxing and people-watching" },
  { icon: Building2, title: "Cultural Institutions", description: "Museums, galleries, and historic landmarks at every corner" },
  { icon: Users, title: "Upscale Community", description: "Established families, diplomats, and affluent professionals" },
];

const transport = [
  { line: "Subte D", stations: "Callao, Pueyrredón", notes: "Direct to Palermo, downtown, and Catedral" },
  { line: "Subte H", stations: "Las Heras, Santa Fe", notes: "Connects to Corrientes theater district" },
  { line: "Bus", stations: "Multiple routes", notes: "Excellent coverage along Santa Fe and Callao" },
];

export default function RecoletaPage() {
  const articleSchema = generateArticleSchema({
    headline: "Recoleta Buenos Aires - Luxury Neighborhood Guide for Expats",
    description: "Complete guide to Recoleta, Buenos Aires' most elegant and upscale neighborhood. Perfect for families and luxury living.",
    url: "https://buenosairesexpats.com/neighborhoods/recoleta",
    datePublished: "2025-02-16",
    dateModified: "2025-02-16",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/neighborhoods" className="hover:text-foreground">Neighborhoods</Link>
            <span>/</span>
            <span className="text-foreground">Recoleta</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/recoleta-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <Shield className="w-3 h-3 mr-1 text-green-500" />
              Safest & Most Upscale
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Recoleta
            </h1>
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              Buenos Aires' most elegant neighborhood. French architecture, upscale shopping, 
              world-class museums, and the safest streets in the city.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>Most expensive</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Excellent safety</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Train className="w-4 h-4" />
                <span>Subte D & H</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary">9/10</div>
              <div className="text-sm text-muted-foreground">Expat Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$800-1,600</div>
              <div className="text-sm text-muted-foreground">Rent Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Excellent</div>
              <div className="text-sm text-muted-foreground">Safety</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2 Subte Lines</div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Must-See Attractions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {nearbyAttractions.map((attraction) => (
                <Card key={attraction.name} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{attraction.name}</CardTitle>
                    <CardDescription>{attraction.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {attraction.highlights.map((h) => (
                        <li key={h}>• {h}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rent Prices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Rent Prices in Recoleta</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Apartment Type</th>
                        <th className="text-left py-3 px-2">Monthly Rent</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rentPrices.map((rent) => (
                        <tr key={rent.type} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{rent.type}</td>
                          <td className="py-3 px-2 text-primary font-semibold">{rent.price}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{rent.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Prices in USD. Most landlords require payment in dollars. Security deposit typically 1-2 months.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Expats Love Recoleta</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <Card key={item.title} className="flex gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transport */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Getting Around</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {transport.map((t) => (
                    <div key={t.line} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Train className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{t.line}</h4>
                        <p className="text-sm text-muted-foreground">Stations: {t.stations}</p>
                        <p className="text-sm text-muted-foreground">{t.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Safety in Recoleta</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Excellent Safety Record</h4>
                    <p className="text-muted-foreground">
                      Recoleta is consistently rated the safest neighborhood in Buenos Aires. 
                      Well-lit streets, private security in many buildings, and a visible police presence.
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Why It's Safe</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Heavy foot traffic from tourists and locals</li>
                    <li>• Many buildings have 24/7 doormen (porteros)</li>
                    <li>• Well-maintained public spaces</li>
                    <li>• Lower crime rates than other neighborhoods</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Honest Truth</h2>
            <Card className="border-dashed">
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>Recoleta is beautiful but expensive.</strong> You'll pay a premium for the 
                    safety, elegance, and prestige. If budget is tight, you'll get more space elsewhere.
                  </p>
                  <p>
                    <strong>It can feel stuffy.</strong> This is old-money Buenos Aires. Some find it 
                    elegant; others find it pretentious. Nightlife is limited compared to Palermo.
                  </p>
                  <p>
                    <strong>Reddit consensus:</strong> Perfect for families, retirees, and anyone 
                    prioritizing safety and quiet over nightlife. Many diplomats and business executives 
                    choose Recoleta for the peace of mind.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Recoleta?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Explore other neighborhoods, compare costs, and get personalized advice for your move to Buenos Aires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  Compare Neighborhoods
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  See Cost Breakdown
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
