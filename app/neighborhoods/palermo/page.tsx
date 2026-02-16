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
  Moon,
  Trees,
  Users
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Palermo Buenos Aires - Complete Neighborhood Guide for Expats",
  description: "The ultimate guide to Palermo, Buenos Aires' most popular neighborhood for expats. Soho, Hollywood, Botánico - find your perfect area.",
  keywords: ["Palermo Buenos Aires", "Palermo Soho", "Palermo Hollywood", "living in Palermo", "Buenos Aires neighborhoods"],
  openGraph: {
    title: "Palermo Buenos Aires - Complete Neighborhood Guide for Expats",
    description: "The ultimate guide to Palermo, Buenos Aires' most popular neighborhood for expats.",
  },
};

const subAreas = [
  {
    name: "Palermo Soho",
    vibe: "Trendy, boutique shops, cafes",
    bestFor: "Young professionals, fashion lovers",
    highlights: ["Plaza Serrano", "Boutique shopping", "Cafe culture"],
  },
  {
    name: "Palermo Hollywood",
    vibe: "Nightlife, restaurants, media",
    bestFor: "Night owls, foodies, creatives",
    highlights: ["Best restaurants", "Bars & clubs", "TV studios"],
  },
  {
    name: "Palermo Botánico",
    vibe: "Peaceful, parks, residential",
    bestFor: "Families, nature lovers",
    highlights: ["Botanical gardens", "Parks", "Quieter streets"],
  },
];

const rentPrices = [
  { type: "Studio", price: "$600-900", notes: "Small, often older buildings" },
  { type: "1 Bedroom", price: "$800-1,200", notes: "Standard for young professionals" },
  { type: "2 Bedroom", price: "$1,200-1,800", notes: "Good for couples or sharing" },
  { type: "3+ Bedroom", price: "$1,800-2,500+", notes: "Luxury buildings with amenities" },
];

const highlights = [
  { icon: Coffee, title: "Cafe Culture", description: "Endless cafes for working, meeting friends, or people-watching" },
  { icon: Moon, title: "Nightlife", description: "Best bars and clubs in the city, especially in Hollywood" },
  { icon: Trees, title: "Green Spaces", description: "Bosques de Palermo - massive park with lakes and rose garden" },
  { icon: Users, title: "Expat Community", description: "Largest concentration of English-speaking expats" },
];

const transport = [
  { line: "Subte D", stations: "Palermo, Plaza Italia", notes: "Direct to downtown, Recoleta" },
  { line: "Subte B", stations: "Malabia, Dorrego", notes: "To San Telmo, Centro" },
  { line: "Bus", stations: "Many routes", notes: "Extensive bus network throughout" },
];

export default function PalermoPage() {
  const articleSchema = generateArticleSchema({
    headline: "Palermo Buenos Aires - Complete Neighborhood Guide for Expats",
    description: "The ultimate guide to Palermo, Buenos Aires' most popular neighborhood for expats. Soho, Hollywood, Botánico - find your perfect area.",
    url: "https://buenosairesexpats.com/neighborhoods/palermo",
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
            <span className="text-foreground">Palermo</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <Star className="w-3 h-3 mr-1 fill-amber-500 text-amber-500" />
              Most Popular for Expats
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Palermo
            </h1>
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              The heart of expat life in Buenos Aires. Trendy cafes, vibrant nightlife, 
              beautiful parks, and the largest English-speaking community.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>High rent</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Very safe</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Train className="w-4 h-4" />
                <span>Excellent transport</span>
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
              <div className="text-3xl font-bold text-primary">10/10</div>
              <div className="text-sm text-muted-foreground">Expat Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$800-1,800</div>
              <div className="text-sm text-muted-foreground">Rent Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Very Good</div>
              <div className="text-sm text-muted-foreground">Safety</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2 Subte Lines</div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Palermo's Sub-Areas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {subAreas.map((area) => (
                <Card key={area.name} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{area.name}</CardTitle>
                    <CardDescription>{area.vibe}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <span className="text-sm font-semibold">Best For:</span>
                      <p className="text-sm text-muted-foreground">{area.bestFor}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Highlights:</span>
                      <ul className="text-sm text-muted-foreground mt-1">
                        {area.highlights.map((h) => (
                          <li key={h}>• {h}</li>
                        ))}
                      </ul>
                    </div>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Rent Prices in Palermo</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Expats Love Palermo</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Safety in Palermo</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Generally Very Safe</h4>
                    <p className="text-muted-foreground">
                      Palermo is one of Buenos Aires' safest neighborhoods. Well-lit streets, 
                      busy areas, and lots of foot traffic make it comfortable for walking day and night.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Standard Precautions</h4>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Watch your phone in busy areas (Plaza Serrano)</li>
                    <li>• Don't flash expensive jewelry or electronics</li>
                    <li>• Use Uber/Cabify at night rather than street taxis</li>
                    <li>• Be aware of your surroundings in crowds</li>
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
                    <strong>Palermo is popular for a reason.</strong> It has everything most expats want: 
                    cafes, restaurants, nightlife, parks, and other English speakers. If you want the 
                    easiest transition to Buenos Aires, this is where you start.
                  </p>
                  <p>
                    <strong>But it's not perfect.</strong> Rent is the highest in the city. It can be noisy, 
                    especially in Hollywood. Some areas feel more like tourist zones than authentic Buenos Aires. 
                    And you'll pay a premium for the convenience.
                  </p>
                  <p>
                    <strong>Reddit consensus:</strong> Most first-time expats start in Palermo, then either 
                    stay because they love it or move to somewhere quieter (like Belgrano) or more authentic 
                    (like San Telmo) after a year.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Palermo?</h2>
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
