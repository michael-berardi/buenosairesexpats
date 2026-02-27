import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import {
  CloudSun,
  Sun,
  CloudRain,
  Wind,
  Thermometer,
  Calendar,
  Shirt,
  Umbrella,
  ArrowRight,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Weather & Climate in Buenos Aires - Seasonal Guide 2026",
  description: "Complete seasonal guide to Buenos Aires weather. What to pack, best times to visit, winter heating issues, summer humidity, and clothing recommendations.",
  keywords: ["Buenos Aires weather", "Argentina climate", "BA seasons", "when to visit Buenos Aires", "Buenos Aires packing list"],
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/weather-climate",
  },
  openGraph: {
    title: "Weather & Climate in Buenos Aires - Seasonal Guide",
    description: "Season-by-season breakdown of Buenos Aires weather. What to expect and what to pack.",
  },
};

const seasons = [
  {
    name: "Summer",
    months: "December - February",
    tempHigh: "30°C / 86°F",
    tempLow: "20°C / 68°F",
    humidity: "High (70-90%)",
    rainfall: "Moderate",
    characteristics: [
      "Hot and humid",
      "Afternoon thunderstorms common",
      "Many locals leave for holidays (Jan)",
      "Outdoor events and festivals",
      "Beach trips to Mar del Plata",
    ],
    clothing: [
      "Light, breathable fabrics",
      "Cotton and linen",
      "Sandals and breathable shoes",
      "Sun hat and sunglasses",
      "Light jacket for air conditioning",
    ],
    icon: Sun,
    color: "orange",
  },
  {
    name: "Autumn",
    months: "March - May",
    tempHigh: "22°C / 72°F",
    tempLow: "12°C / 54°F",
    humidity: "Moderate",
    rainfall: "Moderate",
    characteristics: [
      "Mild and pleasant",
      "Beautiful fall foliage",
      "Less crowded than summer",
      "Great for walking tours",
      "Wine harvest season",
    ],
    clothing: [
      "Layers are key",
      "Light sweater or cardigan",
      "Jeans or light pants",
      "Light jacket",
      "Comfortable walking shoes",
    ],
    icon: CloudSun,
    color: "amber",
  },
  {
    name: "Winter",
    months: "June - August",
    tempHigh: "15°C / 59°F",
    tempLow: "8°C / 46°F",
    humidity: "Moderate",
    rainfall: "Low",
    characteristics: [
      "Mild but damp",
      "Buildings often poorly heated",
      "Indoor cultural activities",
      "Lower tourist prices",
      "Coldest in July",
    ],
    clothing: [
      "Warm layers",
      "Wool sweater or fleece",
      "Warm coat or jacket",
      "Scarf and light gloves",
      "Warm socks and closed shoes",
    ],
    icon: CloudRain,
    color: "blue",
  },
  {
    name: "Spring",
    months: "September - November",
    tempHigh: "24°C / 75°F",
    tempLow: "14°C / 57°F",
    humidity: "Moderate",
    rainfall: "Moderate to high",
    characteristics: [
      "Pleasant temperatures",
      "Jacaranda trees bloom (purple)",
      "Can be windy (viento)",
      "Best time to visit",
      "Outdoor cafes reopen",
    ],
    clothing: [
      "Layers for changing temps",
      "Light jacket or sweater",
      "T-shirts for warm days",
      "Jeans or light pants",
      "Light scarf for wind",
    ],
    icon: CloudSun,
    color: "green",
  },
];

const monthlyBreakdown = [
  { month: "January", temp: "Hot", rain: "Low", notes: "Peak summer, many closures" },
  { month: "February", temp: "Hot", rain: "Low", notes: "Still hot, Carnival events" },
  { month: "March", temp: "Warm", rain: "Moderate", notes: "Start of autumn, pleasant" },
  { month: "April", temp: "Mild", rain: "Moderate", notes: "Beautiful fall colors" },
  { month: "May", temp: "Cool", rain: "Moderate", notes: "Cooler, fewer tourists" },
  { month: "June", temp: "Cool", rain: "Low", notes: "Winter begins, damp" },
  { month: "July", temp: "Cold", rain: "Low", notes: "Coldest month, school holidays" },
  { month: "August", temp: "Cool", rain: "Low", notes: "Warming up slowly" },
  { month: "September", temp: "Mild", rain: "Moderate", notes: "Spring starts, windy" },
  { month: "October", temp: "Warm", rain: "Moderate", notes: "Jacarandas bloom" },
  { month: "November", temp: "Warm", rain: "High", notes: "Spring storms, pleasant" },
  { month: "December", temp: "Hot", rain: "Moderate", notes: "Summer begins, festive" },
];

const packingEssentials = [
  { category: "Year-Round", items: ["Comfortable walking shoes", "Sunscreen", "Sunglasses", "Reusable water bottle", "Daypack"] },
  { category: "Summer", items: ["Lightweight clothing", "Sandals", "Swimwear", "Sun hat", "Insect repellent"] },
  { category: "Winter", items: ["Warm coat", "Layers", "Scarf", "Light gloves", "Warm socks"] },
  { category: "Spring/Fall", items: ["Light jacket", "Layers", "Umbrella", "Light sweater", "Jeans"] },
];

const bestTimesToVisit = [
  {
    period: "September - November (Spring)",
    rating: "Best",
    reasons: [
      "Perfect weather (15-24°C / 59-75°F)",
      "Beautiful jacaranda blooms",
      "Fewer crowds than summer",
      "Outdoor cafes and events",
      "Wine regions accessible",
    ],
  },
  {
    period: "March - May (Autumn)",
    rating: "Great",
    reasons: [
      "Mild temperatures (12-22°C / 54-72°F)",
      "Stunning fall foliage",
      "Lower accommodation prices",
      "Harvest festivals",
      "Less humidity than summer",
    ],
  },
  {
    period: "December - February (Summer)",
    rating: "Good with caveats",
    reasons: [
      "Hot and humid (20-30°C / 68-86°F)",
      "Many locals away in January",
      "Some restaurants closed",
      "Beach day trips possible",
      "Festive atmosphere",
    ],
  },
  {
    period: "June - August (Winter)",
    rating: "Okay",
    reasons: [
      "Mild but damp (8-15°C / 46-59°F)",
      "Lowest prices of the year",
      "Poor heating in many buildings",
      "Great for indoor activities",
      "Fewer tourists",
    ],
  },
];

export default function WeatherClimatePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Weather & Climate" },
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Weather & Climate in Buenos Aires - Seasonal Guide",
    description: "Complete seasonal guide to Buenos Aires weather. What to pack, best times to visit, winter heating issues, summer humidity, and clothing recommendations.",
    url: "https://buenosairesexpats.com/guides/weather-climate",
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Weather & Climate</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <CloudSun className="w-3 h-3 mr-1" />
              Climate Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Weather & Climate in Buenos Aires
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Season-by-season breakdown of what to expect. Best times to visit, 
              what to pack, and how to handle the infamous winter heating situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Thermometer className="w-4 h-4" />
                <span>8°C - 30°C (46°F - 86°F)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Best: Sep-Nov</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Four Seasons Overview</h2>
            <p className="text-muted-foreground mb-8">
              Buenos Aires has a humid subtropical climate with four distinct seasons. 
              Unlike the Northern Hemisphere, seasons are reversed—summer is December-February 
              and winter is June-August.
            </p>
          </div>
        </div>
      </section>

      {/* Season Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {seasons.map((season) => (
                <Card key={season.name} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-${season.color}-100 flex items-center justify-center`}>
                        <season.icon className={`w-5 h-5 text-${season.color}-600`} />
                      </div>
                      <div>
                        <CardTitle>{season.name}</CardTitle>
                        <CardDescription>{season.months}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="p-3 bg-muted rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">High</div>
                        <div className="font-semibold">{season.tempHigh}</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg text-center">
                        <div className="text-sm text-muted-foreground">Low</div>
                        <div className="font-semibold">{season.tempLow}</div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">What to Expect:</div>
                      <ul className="space-y-1">
                        {season.characteristics.map((char, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Shirt className="w-4 h-4" />
                        What to Wear:
                      </div>
                      <ul className="space-y-1">
                        {season.clothing.map((item, index) => (
                          <li key={index} className="text-sm text-muted-foreground">• {item}</li>
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

      {/* Monthly Breakdown */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Month-by-Month Breakdown</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Month</th>
                        <th className="text-left py-3 px-2">Temperature</th>
                        <th className="text-left py-3 px-2">Rain</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlyBreakdown.map((month) => (
                        <tr key={month.month} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{month.month}</td>
                          <td className="py-3 px-2">
                            <Badge variant={
                              month.temp === "Hot" ? "destructive" :
                              month.temp === "Cold" ? "default" :
                              month.temp === "Warm" ? "secondary" : "outline"
                            }>
                              {month.temp}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-sm">{month.rain}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{month.notes}</td>
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

      {/* Best Times to Visit */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Best Times to Visit</h2>
            <div className="space-y-4">
              {bestTimesToVisit.map((time) => (
                <Card key={time.period}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{time.period}</CardTitle>
                      <Badge variant={
                        time.rating === "Best" ? "default" :
                        time.rating === "Great" ? "secondary" :
                        time.rating === "Good with caveats" ? "outline" : "destructive"
                      }>
                        {time.rating}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {time.reasons.map((reason, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Winter Heating Warning */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <AlertCircle className="w-5 h-5" />
                  The Winter Heating Reality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Here's what guidebooks won't tell you: Buenos Aires winters feel colder than 
                  the temperature suggests because of poor building insulation and inconsistent heating.
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-background rounded-lg">
                    <div className="font-medium">Central Heating is Rare</div>
                    <p className="text-sm text-muted-foreground">
                      Most apartments rely on individual units or space heaters. Some buildings 
                      have no heating at all.
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-background rounded-lg">
                    <div className="font-medium">Indoor Can Feel Colder Than Outside</div>
                    <p className="text-sm text-muted-foreground">
                      Old buildings with high ceilings and poor insulation trap cold air. 
                      You'll often need layers indoors.
                    </p>
                  </div>
                  <div className="p-3 bg-white dark:bg-background rounded-lg">
                    <div className="font-medium">Gas Shortages Happen</div>
                    <p className="text-sm text-muted-foreground">
                      During cold snaps, gas pressure can drop, making heaters less effective. 
                      Have a backup plan (electric blanket, extra layers).
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Renter tip:</strong> When apartment hunting in winter, ask about 
                    heating type and check if it actually works. A &quot;frio/calor&quot; (AC) unit 
                    is better than nothing, but central heating is gold.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Summer Humidity */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Sun className="w-5 h-5" />
                  Summer Humidity & Heat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Summer in Buenos Aires can be brutal. Temperatures in the 30s°C (86-95°F) 
                  combined with high humidity make it feel even hotter.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium mb-2">Challenges:</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Air conditioning is not universal</li>
                      <li>• Walking outdoors is exhausting midday</li>
                      <li>• Afternoon thunderstorms common</li>
                      <li>• Mosquitoes in humid areas</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Survival Tips:</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Plan indoor activities 12pm-4pm</li>
                      <li>• Carry water everywhere</li>
                      <li>• Seek cafes with AC</li>
                      <li>• Consider day trips to Tigre</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packing Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What to Pack</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {packingEssentials.map((category) => (
                <Card key={category.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Pro tip:</strong> Buenos Aires is fashionable. While you don't need 
                to dress up, avoid looking like a tourist (shorts in the city, hiking sandals, 
                etc.) if you want to blend in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Apps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Weather Resources</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AccuWeather</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Most accurate for BA. Check &quot;RealFeel&quot; for humidity-adjusted temps.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">SMN Argentina</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Official national weather service. Best for severe weather alerts.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Windy.com</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Essential for tracking the famous &quot;viento&quot; (wind) in spring.
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
                    &quot;Winter in BA is miserable not because it's cold, but because buildings 
                    have no insulation. I wear a jacket indoors. My apartment has a space 
                    heater that barely works.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/argentina expat</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Summer humidity is no joke. I thought I could handle heat coming from 
                    Texas. Nope. The humidity here is different. Plan your day around AC locations.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;October is magic. The jacarandas are blooming, weather is perfect, 
                    and the city feels alive. This is when I'd tell anyone to visit.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- BA resident, 4 years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Trip?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Check out our cost of living guide and neighborhood breakdowns to plan 
              the perfect time to visit or move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/cost-of-living">
                  Cost of Living Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
