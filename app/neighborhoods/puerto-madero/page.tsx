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
  Waves,
  Users,
  Briefcase
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Puerto Madero Buenos Aires - Modern Luxury Expat Guide",
  description: "Complete guide to Puerto Madero, Buenos Aires' newest and most luxurious neighborhood. Waterfront living, skyscrapers, and five-star amenities for high-income expats.",
  keywords: ["Puerto Madero Buenos Aires", "living in Puerto Madero", "Puerto Madero neighborhood", "Buenos Aires luxury neighborhoods", "Puerto Madero expat guide"],
  openGraph: {
    title: "Puerto Madero Buenos Aires - Modern Luxury Expat Guide",
    description: "Complete guide to Puerto Madero, Buenos Aires' newest and most luxurious neighborhood.",
  },
};

const highlights = [
  {
    name: "Reserva Ecológica",
    description: "Massive nature reserve with walking trails and wildlife viewing",
    bestFor: "Nature lovers, runners, cyclists",
    highlights: ["Free entry", "Lake views", "Bird watching"],
  },
  {
    name: "Women's Bridge",
    description: "Iconic rotating bridge designed by Santiago Calatrava",
    bestFor: "Sightseeing, photos",
    highlights: ["Landmark architecture", "Waterfront views", "Night lights"],
  },
  {
    name: "Gourmet Dining",
    description: "Home to Buenos Aires' most upscale restaurants",
    bestFor: "Fine dining, business meals",
    highlights: ["Michelin-level dining", "Waterfront restaurants", "Steakhouses"],
  },
];

const rentPrices = [
  { type: "Studio", price: "$800-1,200", notes: "Rare, mostly in older towers" },
  { type: "1 Bedroom", price: "$1,000-1,800", notes: "Luxury high-rises" },
  { type: "2 Bedroom", price: "$1,800-3,000", notes: "Premium waterfront units" },
  { type: "3+ Bedroom", price: "$2,500-5,000+", notes: "Penthouses with river views" },
];

const highlightsList = [
  { icon: Building2, title: "Modern Architecture", description: "Sleek skyscrapers and contemporary design unlike anywhere else in Buenos Aires" },
  { icon: Waves, title: "Waterfront Living", description: "Views of the Rio de la Plata and peaceful walks along the docks" },
  { icon: Briefcase, title: "Business Hub", description: "Close to the financial district and major corporate headquarters" },
  { icon: Users, title: "International Community", description: "Diplomats, executives, and affluent expats from around the world" },
];

const transport = [
  { line: "Bus", stations: "Multiple routes", notes: "Connections to downtown and Retiro" },
  { line: "Taxi/Uber", stations: "Everywhere", notes: "Most common way to get around from here" },
  { line: "Walking", stations: "To Centro", notes: "20-minute walk to downtown financial district" },
];

export default function PuertoMaderoPage() {
  const articleSchema = generateArticleSchema({
    headline: "Puerto Madero Buenos Aires - Modern Luxury Expat Guide",
    description: "Complete guide to Puerto Madero, Buenos Aires' newest and most luxurious neighborhood. Waterfront living and five-star amenities.",
    url: "https://buenosairesexpats.com/neighborhoods/puerto-madero",
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
            <span className="text-foreground">Puerto Madero</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612294037637-ec328d0e5e2b?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <Building2 className="w-3 h-3 mr-1 text-blue-500" />
              Modern & Luxury
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Puerto Madero
            </h1>
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              Buenos Aires' newest neighborhood. Glass towers, waterfront living, 
              fine dining, and the most exclusive address in the city.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>Premium pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Excellent safety</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Train className="w-4 h-4" />
                <span>Limited subte</span>
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
              <div className="text-3xl font-bold text-primary">6/10</div>
              <div className="text-sm text-muted-foreground">Expat Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$1,000-2,500</div>
              <div className="text-sm text-muted-foreground">Rent Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Excellent</div>
              <div className="text-sm text-muted-foreground">Safety</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Limited</div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Attractions</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Rent Prices in Puerto Madero</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Expats Choose Puerto Madero</h2>
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
                        <p className="text-sm text-muted-foreground">{t.stations}</p>
                        <p className="text-sm text-muted-foreground">{t.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
              <p className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Note:</strong> Puerto Madero has no subte (metro) access. You'll need to 
                rely on buses, taxis, or walking. This is the biggest downside for many residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Safety in Puerto Madero</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Excellent Safety</h4>
                    <p className="text-muted-foreground">
                      Puerto Madero is one of the safest areas in Buenos Aires. Private security 
                      is common, streets are well-lit, and there's minimal street crime.
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Why It's Safe</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Modern infrastructure with excellent lighting</li>
                    <li>• Private security in most buildings</li>
                    <li>• Lower population density means fewer opportunistic crimes</li>
                    <li>• Well-patrolled by police</li>
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
                    <strong>Puerto Madero feels sterile to many.</strong> It's clean and safe, 
                    but lacks the character and soul of older neighborhoods. Some call it 
                    "Buenos Aires' business district with apartments."
                  </p>
                  <p>
                    <strong>It's dead on weekends.</strong> The business crowd leaves Friday 
                    evening, and the neighborhood becomes a ghost town. If you want weekend 
                    energy, look elsewhere.
                  </p>
                  <p>
                    <strong>Reddit consensus:</strong> Puerto Madero is for high-income expats 
                    and business travelers who prioritize convenience and safety over character. 
                    "Nice to visit, wouldn't want to live there" is a common sentiment among 
                    long-term expats.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Puerto Madero?</h2>
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
