import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { 
  MapPin, 
  DollarSign, 
  Shield, 
  Train, 
  Coffee,
  ArrowRight,
  Star,
  Users
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Neighborhoods in Buenos Aires for Expats 2026",
  description: "Complete guide to Buenos Aires neighborhoods for expats. Compare Palermo, Recoleta, Belgrano, San Telmo and more. Safety, rent prices, and lifestyle factors.",
  keywords: ["Buenos Aires neighborhoods", "best areas expats Buenos Aires", "Palermo Recoleta Belgrano", "where to live Buenos Aires"],
  openGraph: {
    title: "Best Neighborhoods in Buenos Aires for Expats",
    description: "Find your perfect neighborhood in Buenos Aires. Detailed guides to Palermo, Recoleta, Belgrano, and more.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/neighborhoods",
  },
};

const neighborhoods = [
  {
    name: "Palermo",
    subareas: ["Soho", "Hollywood", "Botánico"],
    rentLevel: "High",
    rentPrice: "$950-1,750",
    safety: "Very Good",
    transport: "Excellent",
    expatScore: 10,
    bestFor: ["Young professionals", "Digital nomads", "Nightlife lovers"],
    description: "The most popular neighborhood for expats. Divided into trendy Palermo Soho with boutique shops and cafes, Palermo Hollywood with nightlife, and peaceful Palermo Botánico near the parks.",
    highlights: ["Best restaurants and cafes", "Vibrant nightlife", "Large parks", "Expat community"],
    considerations: ["Higher rent prices", "Can be noisy", "Touristy in some areas"],
  },
  {
    name: "Recoleta",
    rentLevel: "High",
    rentPrice: "$950-1,850",
    safety: "Excellent",
    transport: "Excellent",
    expatScore: 9,
    bestFor: ["Families", "Retirees", "Upscale living"],
    description: "Elegant and historic, Recoleta is Buenos Aires' most upscale neighborhood. Beautiful French architecture, the famous cemetery, and high-end shopping on Avenida Alvear.",
    highlights: ["Safest neighborhood", "Beautiful architecture", "Cultural attractions", "Parks and green spaces"],
    considerations: ["Most expensive rents", "Less nightlife", "Can feel stuffy"],
  },
  {
    name: "Belgrano",
    rentLevel: "Medium-High",
    rentPrice: "$700-1,400",
    safety: "Very Good",
    transport: "Very Good",
    expatScore: 8,
    bestFor: ["Families", "Long-term residents", "Quiet living"],
    description: "A peaceful, residential neighborhood with a strong community feel. Belgrano R and Coghlan are particularly popular with families and older expats seeking a quieter lifestyle.",
    highlights: ["Family-friendly", "Good schools", "Quiet streets", "Authentic Argentine feel"],
    considerations: ["Less central", "Fewer tourists", "Limited nightlife"],
  },
  {
    name: "San Telmo",
    rentLevel: "Medium",
    rentPrice: "$600-1,050",
    safety: "Moderate",
    transport: "Good",
    expatScore: 7,
    bestFor: ["Artists", "Budget-conscious", "History buffs"],
    description: "Buenos Aires' oldest neighborhood with cobblestone streets, antique shops, and tango culture. The Sunday feria on Defensa street is world-famous.",
    highlights: ["Historic charm", "Tango culture", "Sunday market", "Art scene"],
    considerations: ["Can be noisy", "Some areas less safe at night", "Older buildings"],
  },
  {
    name: "Villa Crespo",
    rentLevel: "Medium",
    rentPrice: "$600-1,050",
    safety: "Good",
    transport: "Good",
    expatScore: 7,
    bestFor: ["Young expats", "Foodies", "Value seekers"],
    description: "An up-and-coming neighborhood next to Palermo with lower rents but similar vibes. Known for outlet shopping on Avenida Córdoba and great food scene.",
    highlights: ["More affordable", "Trendy cafes", "Good location", "Authentic feel"],
    considerations: ["Less polished than Palermo", "Fewer parks", "Developing area"],
  },
  {
    name: "Puerto Madero",
    rentLevel: "Very High",
    rentPrice: "$1,175-2,900",
    safety: "Excellent",
    transport: "Moderate",
    expatScore: 6,
    bestFor: ["High-income expats", "Business travelers", "Modern amenities"],
    description: "The newest neighborhood with modern skyscrapers, luxury apartments, and waterfront dining. Very safe but can feel sterile and disconnected from the rest of the city.",
    highlights: ["Modern buildings", "Waterfront views", "Very safe", "High-end dining"],
    considerations: ["Expensive", "Less character", "Limited public transport", "Dead on weekends"],
  },
];

const quickComparison = [
  { factor: "Best Overall", winner: "Palermo", reason: "Perfect balance of amenities, transport, and expat community" },
  { factor: "Safest", winner: "Recoleta", reason: "Lowest crime rates, well-lit streets" },
  { factor: "Best Value", winner: "Villa Crespo", reason: "Palermo vibes at lower prices" },
  { factor: "Best for Families", winner: "Belgrano", reason: "Quiet, good schools, family-friendly" },
  { factor: "Best Nightlife", winner: "Palermo Hollywood", reason: "Bars, clubs, restaurants open late" },
  { factor: "Most Authentic", winner: "San Telmo", reason: "Historic, traditional Buenos Aires feel" },
];

export default function NeighborhoodsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Neighborhoods</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/neighborhoods-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20" variant="secondary">
              <MapPin className="w-3 h-3 mr-1" />
              Buenos Aires Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Best Neighborhoods for Expats
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Find your perfect barrio in Buenos Aires. Compare safety, rent prices, 
              transport, and lifestyle across the city's top expat areas.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Comparison</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {quickComparison.map((item) => (
              <Card key={item.factor} className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">{item.factor}</div>
                  <div className="font-bold text-lg text-primary">{item.winner}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.reason}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Neighborhood Guides</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {neighborhoods.map((hood) => (
              <Card key={hood.name} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-2xl">{hood.name}</CardTitle>
                      {hood.subareas && (
                        <CardDescription>{hood.subareas.join(" • ")}</CardDescription>
                      )}
                    </div>
                    <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded">
                      <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
                      <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                        {hood.expatScore}/10
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {hood.rentLevel}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      {hood.safety}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Train className="w-3 h-3" />
                      {hood.transport}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{hood.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold mb-2">Average Rent:</div>
                    <div className="text-lg font-bold text-primary">{hood.rentPrice}/month</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold mb-2">Best For:</div>
                    <div className="flex flex-wrap gap-2">
                      {hood.bestFor.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <div className="text-sm font-semibold mb-2 flex items-center gap-1">
                        <Star className="w-4 h-4 text-green-500" />
                        Highlights
                      </div>
                      <ul className="text-sm space-y-1">
                        {hood.highlights.map((item) => (
                          <li key={item} className="text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2 flex items-center gap-1">
                        <Shield className="w-4 h-4 text-amber-500" />
                        Considerations
                      </div>
                      <ul className="text-sm space-y-1">
                        {hood.considerations.map((item) => (
                          <li key={item} className="text-muted-foreground">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Buenos Aires Neighborhood Map</h2>
            <p className="text-muted-foreground mb-8">
              Understanding the layout of Buenos Aires helps you choose the right neighborhood. 
              The city is divided into barrios, each with its own character.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-gradient-to-br from-sky-100 to-amber-50 dark:from-sky-900/20 dark:to-amber-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map coming soon. For now, explore our detailed neighborhood guides above 
                      or contact us for personalized recommendations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tips for Choosing Your Neighborhood</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Train className="w-5 h-5 text-primary" />
                    Consider Transport Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Buenos Aires has excellent public transport, but some neighborhoods are better connected than others. 
                    Palermo, Recoleta, and Belgrano have multiple subway lines. San Telmo relies more on buses.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Budget for USD Rent
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Most landlords now quote rent in USD. While this protects against inflation, 
                    it means higher upfront costs. Factor in security deposit (usually 1-2 months) and 
                    potential guarantee (garantía) requirements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Visit Before Committing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Each neighborhood has a very different feel. If possible, spend a few days in 
                    different areas before signing a lease. What's charming during the day might be 
                    noisy at night.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-primary" />
                    Think About Lifestyle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Do you want to walk to cafes and restaurants? Palermo or Recoleta. 
                    Prefer quiet evenings? Belgrano or Núñez. Want authentic Buenos Aires? 
                    San Telmo or Almagro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Moving to a New Barrio?"
              description="Need help with your visa or rental contracts? Lucero Legal's immigration attorneys can guide you through the legal side of relocating to Buenos Aires."
              utm_content="neighborhoods-hub"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Still Deciding?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Get our detailed neighborhood comparison guide and personalized recommendations
              based on your budget and lifestyle preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/cost-of-living">
                  Compare Costs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/visas">
                  Explore Visa Options
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
