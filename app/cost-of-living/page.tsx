import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DollarSign, 
  Home, 
  Utensils, 
  Bus, 
  Heart, 
  Wifi, 
  Film,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  Calculator
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Cost of Living in Buenos Aires 2025 - Reddit-Verified Prices",
  description: "Honest 2025 cost of living data from Americans living in Buenos Aires. Real Reddit-verified prices for rent, food, healthcare. Not the YouTube version.",
  keywords: ["Buenos Aires cost of living 2025", "real prices Buenos Aires", "expat budget Reddit", "how much to live in BA"],
  openGraph: {
    title: "Real Cost of Living in Buenos Aires 2025",
    description: "Honest cost breakdowns from Americans actually living here. Reddit-verified prices.",
  },
};

const monthlyCosts = {
  budget: {
    rent: 400,
    food: 200,
    transport: 30,
    utilities: 50,
    healthcare: 100,
    entertainment: 100,
    total: 880,
  },
  moderate: {
    rent: 700,
    food: 350,
    transport: 50,
    utilities: 80,
    healthcare: 150,
    entertainment: 200,
    total: 1530,
  },
  comfortable: {
    rent: 1200,
    food: 500,
    transport: 80,
    utilities: 120,
    healthcare: 250,
    entertainment: 400,
    total: 2550,
  },
};

const expenseCategories = [
  {
    icon: Home,
    title: "Housing",
    description: "Reddit confirms: Landlords want USD cash. Airbnb is easiest for short-term. For long-term, bring physical dollars.",
    items: [
      { name: "Studio apartment (budget area)", price: "$400-600" },
      { name: "1-bedroom decent (Palermo/Recoleta)", price: "$700-1,000" },
      { name: "1-bedroom nice building with amenities", price: "$1,000-1,400" },
      { name: "2-bedroom in good area", price: "$1,000-1,800" },
    ],
  },
  {
    icon: Utensils,
    title: "Food & Dining",
    description: "Reddit reality: Not as cheap as YouTubers claim. Western European prices for many things now. Beef is still a bargain.",
    items: [
      { name: "Empanada at local spot", price: "$2-3" },
      { name: "Coffee at café", price: "$3-5" },
      { name: "Burger with fries", price: "$10-14" },
      { name: "Mid-range dinner for two", price: "$50-80" },
      { name: "Pizza (whole)", price: "$15-25" },
      { name: "Weekly groceries (one person)", price: "$50-100" },
      { name: "Bottle of wine (mid-range)", price: "$5-12" },
    ],
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Public transport is cheap. Uber works well. Avoid taxis (scam risk per Reddit).",
    items: [
      { name: "Subway/bus ride", price: "$0.30-0.50" },
      { name: "Monthly transport pass", price: "$25-40" },
      { name: "Uber/Cabify (short trip)", price: "$3-8" },
      { name: "Uber to airport (EZE)", price: "$25-40" },
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Reddit consensus: Private healthcare is excellent and affordable. Many expats say BETTER than US.",
    items: [
      { name: "Basic prepaga plan", price: "$100-150/month" },
      { name: "Premium prepaga plan", price: "$200-350/month" },
      { name: "Doctor consultation (private)", price: "$30-60" },
      { name: "MRI scan", price: "$150-300" },
      { name: "Dental cleaning", price: "$40-80" },
    ],
  },
  {
    icon: Wifi,
    title: "Utilities & Internet",
    description: "Internet is fast and reliable. Utilities are affordable but rising with inflation.",
    items: [
      { name: "Internet (100 Mbps)", price: "$25-40/month" },
      { name: "Mobile plan (unlimited)", price: "$15-30/month" },
      { name: "Electricity (small apt)", price: "$40-80/month" },
      { name: "Gas & water", price: "$30-60/month" },
    ],
  },
  {
    icon: Film,
    title: "Entertainment",
    description: "Reddit note: Gym memberships are pricier than expected ($70-90/month). Nightlife is great value.",
    items: [
      { name: "Movie ticket", price: "$6-10" },
      { name: "Gym membership (decent)", price: "$70-90/month" },
      { name: "Beer at bar (pint)", price: "$4-7" },
      { name: "Night out (drinks)", price: "$30-60" },
      { name: "Tango show", price: "$40-100" },
    ],
  },
];

const neighborhoodComparison = [
  { name: "Palermo", rent: "$$$", vibe: "Trendy, nightlife, young professionals", transport: "Excellent" },
  { name: "Recoleta", rent: "$$$", vibe: "Upscale, historic, families", transport: "Excellent" },
  { name: "Belgrano", rent: "$$", vibe: "Residential, quiet, families", transport: "Very Good" },
  { name: "San Telmo", rent: "$$", vibe: "Bohemian, touristy, artsy", transport: "Good" },
  { name: "Villa Crespo", rent: "$", vibe: "Up-and-coming, authentic, younger", transport: "Good" },
  { name: "Caballito", rent: "$", vibe: "Traditional, residential, local", transport: "Very Good" },
];

export default function CostOfLivingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Cost of Living</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden min-h-[400px] flex items-center">
        <Image
          src="/images/housing-apartment.jpg"
          alt="Buenos Aires apartment"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated February 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Cost of Living in Buenos Aires
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Real budget breakdowns from Americans living here. From bare-bones to comfortable living, 
              see exactly what you'll spend each month.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-sky-300" />
                <span>USD pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-sky-300" />
                <span>Monthly breakdowns</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Budget Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Monthly Budget Estimates</h2>
            <p className="text-center text-muted-foreground mb-8">
              For a single person living in Buenos Aires. Prices in USD.
            </p>

            <Tabs defaultValue="moderate" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="budget">Budget</TabsTrigger>
                <TabsTrigger value="moderate">Moderate</TabsTrigger>
                <TabsTrigger value="comfortable">Comfortable</TabsTrigger>
              </TabsList>

              {Object.entries(monthlyCosts).map(([key, costs]) => (
                <TabsContent key={key} value={key}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="capitalize">{key} Lifestyle</CardTitle>
                      <CardDescription>
                        {key === "budget" && "Shared apartment, cooking at home, public transport"}
                        {key === "moderate" && "Private apartment, mix of cooking and dining out"}
                        {key === "comfortable" && "Nice apartment in good area, dining out, activities"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-muted-foreground" />
                            <span>Rent</span>
                          </div>
                          <span className="font-semibold">${costs.rent}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-muted-foreground" />
                            <span>Food & Dining</span>
                          </div>
                          <span className="font-semibold">${costs.food}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Bus className="w-4 h-4 text-muted-foreground" />
                            <span>Transportation</span>
                          </div>
                          <span className="font-semibold">${costs.transport}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-muted-foreground" />
                            <span>Utilities & Internet</span>
                          </div>
                          <span className="font-semibold">${costs.utilities}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-muted-foreground" />
                            <span>Healthcare</span>
                          </div>
                          <span className="font-semibold">${costs.healthcare}</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b">
                          <div className="flex items-center gap-2">
                            <Film className="w-4 h-4 text-muted-foreground" />
                            <span>Entertainment</span>
                          </div>
                          <span className="font-semibold">${costs.entertainment}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 bg-primary/5 rounded-lg px-4">
                          <span className="font-bold">Total Monthly</span>
                          <span className="font-bold text-xl text-primary">${costs.total}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Detailed Expenses */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Detailed Expense Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {expenseCategories.map((category) => (
              <Card key={category.title} className="h-full">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="font-medium">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Rent by Neighborhood</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Neighborhood</th>
                        <th className="text-left py-3 px-2">Rent Level</th>
                        <th className="text-left py-3 px-2">Vibe</th>
                        <th className="text-left py-3 px-2">Transport</th>
                      </tr>
                    </thead>
                    <tbody>
                      {neighborhoodComparison.map((hood) => (
                        <tr key={hood.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">
                            <Link href={`/neighborhoods/${hood.name.toLowerCase().replace(" ", "-")}`} className="hover:text-primary hover:underline">
                              {hood.name}
                            </Link>
                          </td>
                          <td className="py-3 px-2">{hood.rent}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{hood.vibe}</td>
                          <td className="py-3 px-2 text-sm">{hood.transport}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Money Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Money-Saving Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Use the Blue Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Exchange USD cash at the "blue dollar" rate for 30-50% more pesos than the official rate. 
                    Use reputable exchange houses (cuevas) or Western Union transfers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Shop at Local Markets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ferias and mercados offer fresh produce at much better prices than supermarkets. 
                    Try Mercado de San Telmo or your neighborhood feria.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Take Public Transport</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The SUBE card works on buses, subways, and trains. It's incredibly cheap and 
                    the subway is fast and reliable in the city center.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Eat Like a Local</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Menu del día lunch specials offer great value. Avoid touristy restaurants in 
                    Puerto Madero for better prices in Palermo or San Telmo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reddit Reality Check */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What Reddit Says (The Honest Version)</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;It&apos;s not as cheap as YouTubers claim anymore. Expect Western European prices for many things. 
                    The blue dollar advantage isn&apos;t what it was.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad, 2024</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Bring physical dollars if you want to rent outside Airbnb. Nobody will rent to you in pesos, 
                    and the process of getting dollars is equally taxing.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad expat</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Gyms are €70-90/month. Chicken breast is €13/kg. Coffee is €3-4. It&apos;s not the cheap paradise 
                    people think it is anymore.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Recent BA resident comparison to Barcelona</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      The Reality Check
                    </h3>
                    <p className="text-amber-800 dark:text-amber-200 text-sm">
                      Prices have risen significantly in 2024-2025. While still cheaper than NYC/SF, Buenos Aires 
                      is no longer the &quot;cheap paradise&quot; of 2020-2022. Budget $2,000-2,500/month for a comfortable 
                      lifestyle, not $1,200. The savings are real compared to major US cities, but manage your expectations.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Make the Move?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Explore neighborhoods, visa options, and get personalized advice for your move to Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/visas/digital-nomad">
                  Visa Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
