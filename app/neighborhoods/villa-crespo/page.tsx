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
  ShoppingBag,
  Utensils,
  Users,
  TrendingUp
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Villa Crespo Buenos Aires - Up-and-Coming Value Guide",
  description: "Complete guide to Villa Crespo, Buenos Aires' best value neighborhood. Next to Palermo with outlet shopping, trendy cafes, and authentic local character for budget-conscious expats.",
  keywords: ["Villa Crespo Buenos Aires", "living in Villa Crespo", "Villa Crespo neighborhood", "Buenos Aires value neighborhoods", "Villa Crespo expat guide"],
  openGraph: {
    title: "Villa Crespo Buenos Aires - Up-and-Coming Value Guide",
    description: "Complete guide to Villa Crespo, Buenos Aires' best value neighborhood next to Palermo.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/neighborhoods/villa-crespo",
  },
};

const highlights = [
  {
    name: "Outlet Shopping District",
    description: "Famous for factory outlets and discount shopping on Avenida Córdoba",
    bestFor: "Bargain hunters, fashion lovers",
    highlights: ["Nike outlet", "Adidas outlet", "Local brands"],
  },
  {
    name: "Palermo Adjacent",
    description: "Walking distance to Palermo Soho and Hollywood",
    bestFor: "Value seekers who want access",
    highlights: ["10-min walk to Soho", "Lower rent", "Same cafes nearby"],
  },
  {
    name: "Foodie Scene",
    description: "Growing restaurant and cafe culture",
    bestFor: "Food lovers, young expats",
    highlights: ["Trendy cafes", "Pizza traditions", "Emerging restaurants"],
  },
];

const rentPrices = [
  { type: "Studio", price: "$400-650", notes: "Great entry-level options" },
  { type: "1 Bedroom", price: "$600-875", notes: "Much cheaper than Palermo" },
  { type: "2 Bedroom", price: "$825-1,175", notes: "Perfect for couples" },
  { type: "3+ Bedroom", price: "$1,050-1,650", notes: "Family-sized value" },
];

const highlightsList = [
  { icon: ShoppingBag, title: "Outlet Shopping", description: "The best place in BA for discount shopping on major brands and local designers" },
  { icon: Utensils, title: "Food Scene", description: "Traditional pizzerias alongside trendy new cafes and restaurants" },
  { icon: TrendingUp, title: "Rapid Development", description: "New bars, cafes, and coworking spaces opening monthly" },
  { icon: Users, title: "Young Professional Vibe", description: "Attracting creatives and remote workers priced out of Palermo" },
];

const transport = [
  { line: "Subte B", stations: "Malabia, Ángel Gallardo", notes: "Direct to Palermo, downtown, and Retiro" },
  { line: "Bus", stations: "Av. Córdoba, Av. Scalabrini Ortiz", notes: "Excellent connections throughout the city" },
  { line: "Walk", stations: "To Palermo", notes: "15-minute walk to Palermo Soho cafes" },
];

export default function VillaCrespoPage() {
  const articleSchema = generateArticleSchema({
    headline: "Villa Crespo Buenos Aires - Up-and-Coming Value Guide",
    description: "Complete guide to Villa Crespo, Buenos Aires' best value neighborhood. Next to Palermo with outlet shopping and authentic character.",
    url: "https://buenosairesexpats.com/neighborhoods/villa-crespo",
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
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
            <span className="text-foreground">Villa Crespo</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/villa-crespo-hero.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
              Up-and-Coming Value
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Villa Crespo
            </h1>
            <p className="text-xl text-white/90 mb-6 drop-shadow-md">
              The best value in Buenos Aires. Right next to Palermo, with outlet shopping, 
              trendy cafes, and rents 30-40% lower than its famous neighbor.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>Great value</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Good safety</span>
              </div>
              <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                <Train className="w-4 h-4" />
                <span>Subte B access</span>
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
              <div className="text-3xl font-bold text-primary">$600-1,175</div>
              <div className="text-sm text-muted-foreground">Rent Range</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Good</div>
              <div className="text-sm text-muted-foreground">Safety</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">Subte B</div>
              <div className="text-sm text-muted-foreground">Transport</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Makes Villa Crespo Special</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Rent Prices in Villa Crespo</h2>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Why Expats Love Villa Crespo</h2>
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
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Safety in Villa Crespo</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Generally Safe</h4>
                    <p className="text-muted-foreground">
                      Villa Crespo is safe and improving. The main shopping areas on Córdoba are 
                      busy and well-lit. Like any developing area, stick to main streets at night.
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Safety Notes</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Avenida Córdoba is busy and safe during the day</li>
                    <li>• Quieter residential streets - normal precautions at night</li>
                    <li>• Rapidly gentrifying area with improving safety</li>
                    <li>• Similar safety profile to Palermo</li>
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
                    <strong>Villa Crespo is less polished than Palermo.</strong> You'll find 
                    more graffiti, fewer parks, and a grittier aesthetic. Some streets are still 
                    industrial. It's not as Instagram-perfect.
                  </p>
                  <p>
                    <strong>It's developing fast.</strong> New cafes and bars open constantly, 
                    but some areas still lack amenities. You might walk past a trendy wine bar 
                    and then an auto shop.
                  </p>
                  <p>
                    <strong>Reddit consensus:</strong> Villa Crespo is the smart choice for 
                    budget-conscious expats who want Palermo access without Palermo prices. 
                    "Live in VC, play in Palermo" is a common mantra. Perfect for remote workers 
                    and young professionals.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Move to Villa Crespo?</h2>
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
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-primary-foreground/70">
              <Link href="/housing" className="hover:text-primary-foreground underline underline-offset-2">Housing Guide</Link>
              <span>|</span>
              <Link href="/dining" className="hover:text-primary-foreground underline underline-offset-2">Dining Guide</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
