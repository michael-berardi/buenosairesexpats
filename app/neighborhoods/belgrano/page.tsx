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
  Home,
  Trees,
  Users,
  School
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Belgrano Buenos Aires - Family-Friendly Neighborhood Guide",
  description: "Complete guide to Belgrano, Buenos Aires' most family-friendly neighborhood. Quiet streets, excellent schools, and authentic residential living for long-term expats.",
  keywords: ["Belgrano Buenos Aires", "living in Belgrano", "Belgrano neighborhood", "Buenos Aires family neighborhoods", "Belgrano expat guide"],
  openGraph: {
    title: "Belgrano Buenos Aires - Family-Friendly Neighborhood Guide",
    description: "Complete guide to Belgrano, Buenos Aires' most family-friendly neighborhood.",
  },
};

const subAreas = [
  {
    name: "Belgrano R",
    vibe: "Upscale residential, embassies",
    bestFor: "Diplomats, affluent families",
    highlights: ["Mansions", "Quiet streets", "Embassy row"],
  },
  {
    name: "Belgrano C",
    vibe: "Central, commercial, convenient",
    bestFor: "Young families, professionals",
    highlights: ["Shopping on Cabildo", "Restaurants", "Subte access"],
  },
  {
    name: "Bajo Belgrano",
    vibe: "Riverside, newer developments",
    bestFor: "Modern living, river views",
    highlights: ["Waterfront", "Newer buildings", "Less crowded"],
  },
];

const rentPrices = [
  { type: "Studio", price: "$400-600", notes: "Limited availability" },
  { type: "1 Bedroom", price: "$600-900", notes: "Good for singles or couples" },
  { type: "2 Bedroom", price: "$900-1,300", notes: "Family-friendly options" },
  { type: "3+ Bedroom", price: "$1,200-1,800+", notes: "Spacious family homes" },
];

const highlights = [
  { icon: School, title: "Excellent Schools", description: "Some of the best private and international schools in Buenos Aires" },
  { icon: Trees, title: "Green Spaces", description: "Multiple parks including Barrancas de Belgrano with its famous bridge" },
  { icon: Home, title: "Residential Feel", description: "Authentic neighborhood where locals actually live, not just tourists" },
  { icon: Users, title: "Family Community", description: "Strong community feel with lots of families and long-term residents" },
];

const transport = [
  { line: "Subte D", stations: "Juramento, Congreso de Tucumán", notes: "Direct to Palermo, Recoleta, downtown" },
  { line: "Belgrano C Train", stations: "Belgrano C station", notes: "Commuter train to Retiro" },
  { line: "Bus", stations: "Cabildo corridor", notes: "Extensive bus network along main avenues" },
];

export default function BelgranoPage() {
  const articleSchema = generateArticleSchema({
    headline: "Belgrano Buenos Aires - Family-Friendly Neighborhood Guide",
    description: "Complete guide to Belgrano, Buenos Aires' most family-friendly neighborhood. Quiet streets, excellent schools, and authentic residential living.",
    url: "https://buenosairesexpats.com/neighborhoods/belgrano",
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
            <span className="text-foreground">Belgrano</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/belgrano-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <Home className="w-3 h-3 mr-1 text-blue-500" />
              Family-Friendly & Quiet
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Belgrano
            </h1>
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              The perfect neighborhood for families and long-term expats. Peaceful streets, 
              excellent schools, and authentic Buenos Aires living away from the tourist crowds.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>Moderate rent</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Very safe</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Train className="w-4 h-4" />
                <span>Subte D access</span>
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
              <div className="text-3xl font-bold text-primary">8/10</div>
              <div className="text-sm text-muted-foreground">Expat Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$600-1,200</div>
              <div className="text-sm text-muted-foreground">Rent Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Very Good</div>
              <div className="text-sm text-muted-foreground">Safety</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Subte D</div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Belgrano's Sub-Areas</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Rent Prices in Belgrano</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Expats Love Belgrano</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Safety in Belgrano</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Very Safe Residential Area</h4>
                    <p className="text-muted-foreground">
                      Belgrano is one of Buenos Aires' safest neighborhoods. The residential nature 
                      means quieter streets with less petty crime than tourist areas.
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Safety Notes</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Quieter streets at night - stay aware of surroundings</li>
                    <li>• Avenida Cabildo is well-lit and busy</li>
                    <li>• Residential side streets are very safe</li>
                    <li>• Lower crime rate than Palermo or San Telmo</li>
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
                    <strong>Belgrano is less central.</strong> You're 30-40 minutes from Palermo 
                    and downtown by subte. If you want to be in the middle of the action, this isn't it.
                  </p>
                  <p>
                    <strong>Nightlife is limited.</strong> There are restaurants and bars, but the 
                    neighborhood quiets down early. Most expats here are past the party phase.
                  </p>
                  <p>
                    <strong>Reddit consensus:</strong> Belgrano is where you move after you've 
                    explored Buenos Aires and want a real home. Great for families, couples planning 
                    to stay long-term, and anyone who values peace over party.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Belgrano?</h2>
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
