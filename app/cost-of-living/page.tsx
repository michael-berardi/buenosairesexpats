import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { EditorialHero } from "@/components/editorial-hero";
import { Breadcrumb } from "@/components/breadcrumb";
import { PullQuote } from "@/components/pull-quote";
import { InsiderTip } from "@/components/insider-tip";
import { SourceAttribution } from "@/components/source-attribution";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  DollarSign,
  Home,
  Utensils,
  Bus,
  Heart,
  Wifi,
  Film,
  AlertCircle,
  ArrowRight,
  Calculator,
  Laptop,
  Shirt
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cost of Living in Buenos Aires 2026",
  description: "Honest 2026 cost of living data from expats living in Buenos Aires. Real Reddit-verified prices for rent, food, healthcare. Not the YouTube version.",
  keywords: ["Buenos Aires cost of living 2026", "real prices Buenos Aires", "expat budget Reddit", "how much to live in BA"],
  openGraph: {
    title: "Cost of Living in Buenos Aires 2026",
    description: "Honest cost breakdowns from expats actually living here. Reddit-verified prices.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/cost-of-living",
  },
};

const monthlyCosts = {
  budget: {
    rent: 475,
    food: 240,
    transport: 35,
    utilities: 60,
    healthcare: 120,
    entertainment: 120,
    total: 1050,
  },
  moderate: {
    rent: 850,
    food: 420,
    transport: 60,
    utilities: 95,
    healthcare: 180,
    entertainment: 240,
    total: 1845,
  },
  comfortable: {
    rent: 1450,
    food: 600,
    transport: 95,
    utilities: 145,
    healthcare: 300,
    entertainment: 480,
    total: 3070,
  },
};

const expenseCategories = [
  {
    icon: Home,
    title: "Housing",
    description: "Reddit confirms: Landlords want USD cash. Airbnb is easiest for short-term. For long-term, bring physical dollars.",
    items: [
      { name: "Studio apartment (budget area)", price: "$475-700" },
      { name: "1-bedroom decent (Palermo/Recoleta)", price: "$850-1,200" },
      { name: "1-bedroom nice building with amenities", price: "$1,200-1,700" },
      { name: "2-bedroom in good area", price: "$1,200-2,100" },
    ],
  },
  {
    icon: Utensils,
    title: "Food & Dining",
    description: "Reddit reality: Not as cheap as YouTubers claim. Western European prices for many things now. Beef is still a bargain.",
    items: [
      { name: "Empanada at local spot", price: "$1-2" },
      { name: "Coffee at café", price: "$3.50-6" },
      { name: "Burger with fries", price: "$12-17" },
      { name: "Mid-range dinner for two", price: "$60-95" },
      { name: "Pizza (whole)", price: "$18-30" },
      { name: "Weekly groceries (one person)", price: "$60-120" },
      { name: "Bottle of wine (mid-range)", price: "$6-14" },
    ],
  },
  {
    icon: Bus,
    title: "Transportation",
    description: "Public transport is cheap. Uber works well. Avoid taxis (scam risk per Reddit).",
    items: [
      { name: "Subway/bus ride", price: "$0.35-0.60" },
      { name: "Monthly transport pass", price: "$30-50" },
      { name: "Uber/Cabify (short trip)", price: "$4-10" },
      { name: "Uber to airport (EZE)", price: "$30-50" },
    ],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Reddit consensus: Private healthcare is excellent and affordable. Many expats say BETTER than US.",
    items: [
      { name: "Basic prepaga plan", price: "$120-180/month" },
      { name: "Premium prepaga plan", price: "$240-420/month" },
      { name: "Doctor consultation (private)", price: "$35-70" },
      { name: "MRI scan", price: "$180-360" },
      { name: "Dental cleaning", price: "$50-100" },
    ],
  },
  {
    icon: Wifi,
    title: "Utilities & Internet",
    description: "Internet is fast and reliable. Utilities rising as Milei's reforms phase out subsidies.",
    items: [
      { name: "Internet (100 Mbps)", price: "$30-50/month" },
      { name: "Mobile plan (unlimited)", price: "$18-35/month" },
      { name: "Electricity (small apt)", price: "$50-100/month" },
      { name: "Gas & water", price: "$35-70/month" },
    ],
  },
  {
    icon: Film,
    title: "Entertainment",
    description: "Reddit note: Gym memberships are pricier than expected ($80-110/month). Nightlife is great value.",
    items: [
      { name: "Movie ticket", price: "$7-12" },
      { name: "Gym membership (decent)", price: "$80-110/month" },
      { name: "Beer at bar (pint)", price: "$5-8" },
      { name: "Night out (drinks)", price: "$35-70" },
      { name: "Tango show", price: "$50-120" },
    ],
  },
  {
    icon: Laptop,
    title: "Coworking",
    description: "Buenos Aires has a thriving coworking scene, especially in Palermo and Villa Crespo. Most offer fast Wi-Fi, coffee, and community events.",
    items: [
      { name: "Hot desk at coworking space", price: "$100-150/month" },
      { name: "Dedicated desk", price: "$150-250/month" },
      { name: "Day pass", price: "$10-20" },
      { name: "Private office (small)", price: "$300-500/month" },
    ],
  },
  {
    icon: Shirt,
    title: "Laundry",
    description: "Most apartments don't have in-unit washers. Lavanderías (laundromats) are everywhere and affordable.",
    items: [
      { name: "Laundry service (lavandería)", price: "$30-50/month" },
      { name: "Per load wash & fold", price: "$4-8" },
      { name: "Dry cleaning (per item)", price: "$5-12" },
    ],
  },
];

const neighborhoodComparison = [
  { name: "Palermo", rent: "$$$", vibe: "Trendy, nightlife, young professionals", transport: "Excellent", slug: "palermo" },
  { name: "Recoleta", rent: "$$$", vibe: "Upscale, historic, families", transport: "Excellent", slug: "recoleta" },
  { name: "Belgrano", rent: "$$", vibe: "Residential, quiet, families", transport: "Very Good", slug: "belgrano" },
  { name: "San Telmo", rent: "$$", vibe: "Bohemian, touristy, artsy", transport: "Good", slug: "san-telmo" },
  { name: "Villa Crespo", rent: "$", vibe: "Up-and-coming, authentic, younger", transport: "Good", slug: "villa-crespo" },
  { name: "Puerto Madero", rent: "$$$$", vibe: "Luxury, modern, waterfront", transport: "Moderate", slug: "puerto-madero" },
];

export default function CostOfLivingPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Cost of Living" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />
      <Breadcrumb items={[{ label: "Cost of Living" }]} />

      <EditorialHero
        badge="Cost of Living Guide"
        title="How Much Does It Really Cost to Live in Buenos Aires?"
        subtitle="We tracked our spending for a year across three different lifestyles -- budget, moderate, and comfortable. Here's the honest breakdown, verified against hundreds of Reddit threads and real expat budgets. No YouTube hype, just numbers."
        imageSrc="/images/housing-apartment.jpg"
        imageAlt="Apartment living in Buenos Aires"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" variant="default">
            <Link href="#budget-comparison">
              Calculate Your Budget
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-primary" />
            <span>USD pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-primary" />
            <span>Monthly breakdowns</span>
          </div>
        </div>
      </EditorialHero>

      {/* Monthly Budget Calculator */}
      <section id="budget-comparison" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif heading-md mb-4 text-center">Monthly Budget Estimates</h2>
            <p className="text-center text-body mb-8">
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
                  <div className="card-feature">
                    <div className="mb-4">
                      <h3 className="font-semibold text-lg">{key.charAt(0).toUpperCase() + key.slice(1)} Lifestyle</h3>
                      <p className="text-body-sm">
                        {key === "budget" && "Shared apartment, cooking at home, public transport"}
                        {key === "moderate" && "Private apartment, mix of cooking and dining out"}
                        {key === "comfortable" && "Nice apartment in good area, dining out, activities"}
                      </p>
                    </div>
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
                      <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-4">
                        <span className="font-bold">Total Monthly</span>
                        <span className="font-bold text-xl text-primary">${costs.total}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
            <SourceAttribution
              source="Expat community surveys & Reddit r/digitalnomad"
              date="February 2026"
              className="mt-4 justify-center"
            />
          </div>
        </div>
      </section>

      {/* Detailed Expenses */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif heading-md mb-12 text-center">Detailed Expense Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {expenseCategories.map((category) => (
              <div key={category.title} className="card-feature h-full flex flex-col">
                <div className="icon-wrapper mb-3">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                <p className="text-body-sm mb-4">{category.description}</p>
                <ul className="space-y-2 mt-auto">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-medium">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <SourceAttribution
            source="Local price checks & expat reports"
            date="2025-2026"
            className="mt-6 justify-center"
          />
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/community-expats.webp"
              alt="Expats enjoying life in Buenos Aires"
              width={1200}
              height={500}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Neighborhood Comparison */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif heading-md mb-8 text-center">Rent by Neighborhood</h2>
            
            {/* Mobile Card Layout */}
            <div className="block md:hidden space-y-4">
              {neighborhoodComparison.map((hood) => (
                <div key={hood.name} className="card-feature">
                  <div className="flex items-start justify-between mb-2">
                    <Link href={`/neighborhoods/${hood.slug}`} className="font-medium text-lg hover:text-primary hover:underline inline-flex items-center min-h-[44px]">
                      {hood.name}
                    </Link>
                    <span className="text-primary font-semibold">{hood.rent}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{hood.vibe}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground">Transport:</span>
                    <span>{hood.transport}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table Layout */}
            <div className="hidden md:block card-feature">
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
                          <Link href={`/neighborhoods/${hood.slug}`} className="hover:text-primary hover:underline inline-flex items-center min-h-[44px]">
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
            </div>
          </div>
        </div>
      </section>

      {/* Money Tips */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif heading-md mb-8 text-center">Money-Saving Tips</h2>
            <InsiderTip>
              Under Milei&apos;s economic reforms, the gap between official and blue dollar rates has narrowed
              dramatically in 2026 (just 2-5% vs. 100%+ in previous years). The MEP dollar is now the main
              legal way to buy USD at market rates. The blue dollar still exists but the arbitrage advantage
              is much smaller than before. Understand the new dollar reality before you arrive.
            </InsiderTip>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="card-feature h-full">
                <h3 className="font-semibold text-lg mb-2">Shop at Local Markets</h3>
                <p className="text-body-sm">
                  Ferias and mercados offer fresh produce at much better prices than supermarkets.
                  Try Mercado de San Telmo or your neighborhood feria.
                </p>
              </div>
              <div className="card-feature h-full">
                <h3 className="font-semibold text-lg mb-2">Take Public Transport</h3>
                <p className="text-body-sm">
                  The SUBE card works on buses, subways, and trains. It&apos;s incredibly cheap and
                  the subway is fast and reliable in the city center.
                </p>
              </div>
            </div>

            <InsiderTip author="Seasoned BA expats">
              Menu del d&iacute;a lunch specials are the local secret to eating well on a budget. Most restaurants
              in Palermo and San Telmo offer a two-course lunch with a drink for a fraction of dinner prices.
              Skip Puerto Madero entirely -- it&apos;s a tourist trap with double the prices.
            </InsiderTip>
          </div>
        </div>
      </section>

      {/* Reddit Reality Check */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif heading-sm mb-6 text-center">What Reddit Says (The Honest Version)</h2>
            <PullQuote attribution="r/digitalnomad" source="Reddit, 2024">
              It&apos;s not as cheap as YouTubers claim anymore. Expect Western European prices for many things.
              The blue dollar advantage isn&apos;t what it was.
            </PullQuote>
            <PullQuote attribution="r/digitalnomad expat" source="Reddit">
              Bring physical dollars if you want to rent outside Airbnb. Nobody will rent to you in pesos,
              and the process of getting dollars is equally taxing.
            </PullQuote>
            <PullQuote attribution="Recent BA resident" source="Reddit, Barcelona comparison">
              Gyms are &euro;70-90/month. Chicken breast is &euro;13/kg. Coffee is &euro;3-4. It&apos;s not the cheap paradise
              people think it is anymore.
            </PullQuote>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">
                    The Reality Check
                  </h3>
                  <p className="text-amber-800">
                    Prices have risen significantly in 2024-2026 as utility subsidies are phased out and the economy
                    stabilizes under Milei&apos;s reforms. While still cheaper than NYC/SF, Buenos Aires
                    is no longer the &quot;cheap paradise&quot; of 2020-2022. Budget $2,500-3,000/month for a comfortable
                    lifestyle, not $1,200. The savings are real compared to major US cities, but manage your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif heading-md mb-4">Find the Right Neighborhood for Your Budget</h2>
            <p className="text-body mb-8">
              Costs vary significantly by barrio. Take our quiz to find the neighborhood
              that matches your budget and lifestyle, or compare all neighborhoods side by side.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button asChild size="lg" variant="default">
                <Link href="/neighborhoods/quiz">
                  Take the Barrio Quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/neighborhoods">
                  Compare All Neighborhoods
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground"><LuceroLegalCTA variant="inline" /></p>
          </div>
        </div>
      </section>
    </div>
  );
}
