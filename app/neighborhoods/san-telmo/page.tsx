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
  Music,
  Store,
  Users,
  Building
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "San Telmo Buenos Aires - Historic & Bohemian Expat Guide",
  description: "Complete guide to San Telmo, Buenos Aires' oldest neighborhood. Cobblestone streets, tango culture, antique shops, and authentic bohemian living for artists and budget-conscious expats.",
  keywords: ["San Telmo Buenos Aires", "living in San Telmo", "San Telmo neighborhood", "Buenos Aires historic neighborhoods", "San Telmo expat guide", "tango Buenos Aires"],
  openGraph: {
    title: "San Telmo Buenos Aires - Historic & Bohemian Expat Guide",
    description: "Complete guide to San Telmo, Buenos Aires' oldest neighborhood with cobblestone streets and tango culture.",
  },
};

const highlights = [
  {
    name: "Plaza Dorrego",
    description: "Historic square with Sunday antiques fair and street tango",
    bestFor: "Sunday outings, tango watching",
    highlights: ["Antiques market", "Street performers", "Outdoor cafes"],
  },
  {
    name: "Calle Defensa",
    description: "The main cobblestone street running through the neighborhood",
    bestFor: "Walking, exploring, shopping",
    highlights: ["Vintage shops", "Street art", "Historic buildings"],
  },
  {
    name: "Mercado de San Telmo",
    description: "Historic indoor market with food stalls and antiques",
    bestFor: "Food, antiques, local culture",
    highlights: ["Fresh food", "Antique dealers", "Cafes"],
  },
];

const rentPrices = [
  { type: "Studio", price: "$350-550", notes: "Often in historic buildings" },
  { type: "1 Bedroom", price: "$500-750", notes: "Great value for singles" },
  { type: "2 Bedroom", price: "$700-1,000", notes: "Good for sharing" },
  { type: "3+ Bedroom", price: "$900-1,400", notes: "Spacious older apartments" },
];

const highlightsList = [
  { icon: Music, title: "Tango Culture", description: "Street tango performances, milongas, and the heart of Buenos Aires' dance heritage" },
  { icon: Store, title: "Antique Shopping", description: "Sunday antiques fair and vintage shops throughout the neighborhood" },
  { icon: Building, title: "Historic Architecture", description: "Cobblestone streets and well-preserved 19th-century buildings" },
  { icon: Users, title: "Artistic Community", description: "Artists, musicians, and creative expats from around the world" },
];

const transport = [
  { line: "Subte C", stations: "San Juan, Independencia", notes: "To Retiro, downtown, Constitución" },
  { line: "Subte E", stations: "Independencia", notes: "To Plaza de Mayo, Retiro" },
  { line: "Bus", stations: "Multiple routes", notes: "Good connections to Palermo and Recoleta" },
];

export default function SanTelmoPage() {
  const articleSchema = generateArticleSchema({
    headline: "San Telmo Buenos Aires - Historic & Bohemian Expat Guide",
    description: "Complete guide to San Telmo, Buenos Aires' oldest neighborhood. Cobblestone streets, tango culture, and authentic bohemian living.",
    url: "https://buenosairesexpats.com/neighborhoods/san-telmo",
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
            <span className="text-foreground">San Telmo</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/san-telmo-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <Music className="w-3 h-3 mr-1 text-purple-500" />
              Historic & Bohemian
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              San Telmo
            </h1>
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              Buenos Aires' oldest neighborhood. Cobblestone streets, tango dancers, 
              antique markets, and the most authentic character in the city.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>Budget-friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Moderate safety</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Train className="w-4 h-4" />
                <span>Subte C & E</span>
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
              <div className="text-3xl font-bold text-primary">7/10</div>
              <div className="text-sm text-muted-foreground">Expat Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$500-900</div>
              <div className="text-sm text-muted-foreground">Rent Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Moderate</div>
              <div className="text-sm text-muted-foreground">Safety</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">2 Subte Lines</div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Areas in San Telmo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((area) => (
                <Card key={area.name} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{area.name}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Rent Prices in San Telmo</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Expats Love San Telmo</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {highlightsList.map((item) => (
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
            <h2 className="text-3xl font-bold mb-8 text-center">Safety in San Telmo</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Moderate - Exercise Caution</h4>
                    <p className="text-muted-foreground">
                      San Telmo is generally safe during the day, especially around Plaza Dorrego 
                      and main tourist areas. Be more cautious at night and on side streets.
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Safety Tips</h4>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Stick to well-lit main streets at night (Defensa, Estados Unidos)</li>
                    <li>• Avoid isolated side streets after dark</li>
                    <li>• Keep phones and cameras secure in busy tourist areas</li>
                    <li>• Use Uber/Cabify for late-night transport</li>
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
                    <strong>San Telmo is authentic but rough around the edges.</strong> The cobblestone 
                    streets are charming but can be noisy. Buildings are old - character comes with 
                    maintenance issues.
                  </p>
                  <p>
                    <strong>It can get loud.</strong> Street performers, late-night bars, and thin 
                    walls in old buildings mean noise. Light sleepers should look for apartments 
                    off the main streets.
                  </p>
                  <p>
                    <strong>Reddit consensus:</strong> San Telmo is for people who want the "real" 
                    Buenos Aires experience. It's cheaper and more interesting than Palermo, but 
                    you trade comfort and convenience for character. Many artists and long-term 
                    expats swear by it.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move to San Telmo?</h2>
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
