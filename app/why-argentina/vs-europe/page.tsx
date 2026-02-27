import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Sun, 
  Heart, 
  Briefcase,
  Users,
  ArrowRight,
  Globe,
  Plane
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Buenos Aires vs Europe - Honest Comparison for Expats 2026",
  description: "Real comparison of Buenos Aires vs Lisbon, Barcelona, Berlin, and Paris. Cost, lifestyle, visas, and quality of life for expats.",
  keywords: ["Buenos Aires vs Europe", "Buenos Aires vs Lisbon", "Buenos Aires vs Barcelona", "Argentina vs Europe expat"],
  openGraph: {
    title: "Buenos Aires vs Europe - Honest Comparison for Expats 2026",
    description: "Real comparison of Buenos Aires vs European cities. Cost, lifestyle, and quality of life.",
  },
};

const comparisons = [
  {
    city: "Lisbon",
    country: "Portugal",
    rent: "$1,500-2,500",
    baRent: "$800-1,500",
    visa: "Digital Nomad (1 year)",
    baVisa: "Digital Nomad (6 months)",
    pros: ["EU access", "English widely spoken", "Beaches nearby"],
    baPros: ["Lower cost", "Better nightlife", "More cosmopolitan"],
    winner: "depends",
    notes: "Lisbon is the digital nomad capital of Europe, but costs have skyrocketed. BA offers similar lifestyle at half the price.",
  },
  {
    city: "Barcelona",
    country: "Spain",
    rent: "$1,800-3,000",
    baRent: "$800-1,500",
    visa: "Digital Nomad (1 year)",
    baVisa: "Digital Nomad (6 months)",
    pros: ["Beach + city", "EU travel", "Better infrastructure"],
    baPros: ["Much cheaper", "Better steak", "More welcoming to foreigners"],
    winner: "ba",
    notes: "Barcelona is BA's European cousin - similar vibe, architecture, and lifestyle. But 2-3x more expensive.",
  },
  {
    city: "Berlin",
    country: "Germany",
    rent: "$1,200-2,200",
    baRent: "$800-1,500",
    visa: "Freelance (1-3 years)",
    baVisa: "Digital Nomad (6 months)",
    pros: ["Startup ecosystem", "Efficient", "English-friendly"],
    baPros: ["Warmer weather", "Better food", "Lower cost"],
    winner: "ba",
    notes: "Berlin used to be cheap - not anymore. BA offers similar 'gritty but cool' vibe with better weather.",
  },
  {
    city: "Paris",
    country: "France",
    rent: "$2,000-3,500",
    baRent: "$800-1,500",
    visa: "Talent Passport",
    baVisa: "Digital Nomad (6 months)",
    pros: ["Culture capital", "Career opportunities", "Travel hub"],
    baPros: ["1/3 the cost", "Similar architecture", "Better work-life balance"],
    winner: "ba",
    notes: "BA is literally called 'Paris of South America' - but you can actually afford to live well here.",
  },
];

const factors = [
  {
    icon: DollarSign,
    title: "Cost of Living",
    europe: "$3,000-5,000/month for comfortable lifestyle in major cities",
    argentina: "$2,000-2,500/month for equivalent or better lifestyle",
    winner: "Argentina",
    details: "Even with inflation, BA is significantly cheaper than any major European city. Your dollar goes 2-3x further.",
  },
  {
    icon: Heart,
    title: "Healthcare",
    europe: "Excellent public systems, but wait times and bureaucracy",
    argentina: "Excellent private care at 1/4 the cost, minimal wait times",
    winner: "Tie",
    details: "European public healthcare is great if you're a resident. Argentine private healthcare is world-class and affordable.",
  },
  {
    icon: Sun,
    title: "Weather",
    europe: "Varies wildly - grey winters in north, extreme heat in south",
    argentina: "Mild winters, hot summers, lots of sun year-round",
    winner: "Argentina",
    details: "BA has a climate similar to Barcelona or LA. European winters can be brutal and long.",
  },
  {
    icon: Briefcase,
    title: "Work Culture",
    europe: "Varies by country - Germany efficient, Spain relaxed, France protective",
    argentina: "Relaxed, relationship-focused, 'mañana' culture",
    winner: "Depends",
    details: "If you want efficiency, Europe wins. If you want work-life balance and less stress, Argentina wins.",
  },
  {
    icon: Users,
    title: "Social Life & Dating",
    europe: "Varies by city - Lisbon friendly, Paris notoriously difficult",
    argentina: "Extremely social, easy to meet people, great dating scene",
    winner: "Argentina",
    details: "Reddit consistently ranks BA as one of the best cities for dating. Argentines are open and social.",
  },
  {
    icon: Plane,
    title: "Travel Access",
    europe: "Unmatched - cheap flights to anywhere in Europe",
    argentina: "Great for South America, expensive to get to Europe/Asia",
    winner: "Europe",
    details: "This is Europe's biggest advantage. Weekend trips to Paris, Rome, or Berlin are cheap and easy.",
  },
];

export default function VsEuropePage() {
  const articleSchema = generateArticleSchema({
    headline: "Buenos Aires vs Europe - Honest Comparison for Expats 2026",
    description: "Real comparison of Buenos Aires vs Lisbon, Barcelona, Berlin, and Paris. Cost, lifestyle, visas, and quality of life for expats.",
    url: "https://buenosairesexpats.com/why-argentina/vs-europe",
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
            <Link href="/why-argentina" className="hover:text-foreground">Why Argentina</Link>
            <span>/</span>
            <span className="text-foreground">vs Europe</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Globe className="w-3 h-3 mr-1" />
              Expat Destination Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buenos Aires vs Europe
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              The honest comparison. BA vs Lisbon, Barcelona, Berlin, and Paris. 
              Cost, lifestyle, and what you actually get for your money.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Real cost data</span>
              <span>•</span>
              <span>Visa comparisons</span>
              <span>•</span>
              <span>No sugar-coating</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Bottom Line */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/10">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">The Bottom Line</h2>
                <p className="text-muted-foreground mb-4">
                  <strong>Buenos Aires offers a European lifestyle at South American prices.</strong> 
                  You'll get the cafe culture, architecture, and walkability of Barcelona or Paris, 
                  but at 1/3 the cost. The trade-offs are economic instability, less efficient bureaucracy, 
                  and fewer travel options.
                </p>
                <p className="text-muted-foreground">
                  <strong>Choose Europe if:</strong> You value travel access, political stability, 
                  and efficient systems. You have a high income and cost isn't a major concern.
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong>Choose Buenos Aires if:</strong> You want maximum quality of life for your budget, 
                  don't mind some chaos, and prioritize social life and work-life balance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* City Comparisons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">City-by-City Comparison</h2>
            <div className="space-y-6">
              {comparisons.map((city) => (
                <Card key={city.city} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-center justify-between">
                      <CardTitle>{city.city}, {city.country}</CardTitle>
                      <Badge variant={city.winner === "ba" ? "default" : city.winner === "depends" ? "secondary" : "outline"}>
                        {city.winner === "ba" ? "BA Wins" : city.winner === "depends" ? "Depends" : "Europe Wins"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">{city.city}</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rent:</span>
                            <span>{city.rent}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Visa:</span>
                            <span>{city.visa}</span>
                          </div>
                          <div className="mt-3">
                            <span className="text-muted-foreground">Pros:</span>
                            <ul className="mt-1">
                              {city.pros.map((pro) => (
                                <li key={pro} className="text-green-600">+ {pro}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Buenos Aires</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Rent:</span>
                            <span className="text-green-600 font-semibold">{city.baRent}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Visa:</span>
                            <span>{city.baVisa}</span>
                          </div>
                          <div className="mt-3">
                            <span className="text-muted-foreground">Pros:</span>
                            <ul className="mt-1">
                              {city.baPros.map((pro) => (
                                <li key={pro} className="text-green-600">+ {pro}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                      <strong>Verdict:</strong> {city.notes}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Factor Comparisons */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Factor-by-Factor Breakdown</h2>
            <div className="space-y-6">
              {factors.map((factor) => (
                <Card key={factor.title}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <factor.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{factor.title}</h3>
                          <Badge variant={factor.winner === "Argentina" ? "default" : factor.winner === "Europe" ? "secondary" : "outline"}>
                            {factor.winner} Wins
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Europe:</span>
                            <p>{factor.europe}</p>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Argentina:</span>
                            <p className="text-green-600">{factor.argentina}</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3 pt-3 border-t">
                          {factor.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reddit Insights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Reddit Says</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "I lived in Barcelona for 2 years and moved to BA last year. The lifestyle is remarkably similar 
                    - cafes, late dinners, walkable neighborhoods - but I pay €900 for a 2-bedroom here that would 
                    cost €2,200 in Barcelona. The quality of life for the cost is unmatched."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- r/digitalnomad</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "I chose Lisbon over BA because I wanted EU access and easier travel. But I spend €3,500/month 
                    for a lifestyle that would cost $2,000 in BA. Sometimes I wonder if I made the right choice."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- r/expats</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="italic text-muted-foreground">
                    "Berlin used to be cheap. It's not anymore. BA gives you that same 'gritty but cool' vibe 
                    with better weather and steak. But you give up the efficiency and travel options."
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">- r/BuenosAires</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Trade-offs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Real Trade-offs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What You Gain in BA</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>Significantly lower cost of living</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>Better work-life balance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>More social, open culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>Excellent food and wine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>Warmer weather</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">+</span>
                      <span>Affordable healthcare</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What You Give Up</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>Economic stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>Easy European travel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>Efficient bureaucracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>English accessibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>Political stability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">-</span>
                      <span>Career opportunities (for some fields)</span>
                    </li>
                  </ul>
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
            <h2 className="text-3xl font-bold mb-4">Still Deciding?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Read our full guide on why expats are moving to Buenos Aires, 
              or explore the cost of living breakdown to see real numbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/why-argentina">
                  Why Argentina?
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link href="/cost-of-living">
                  Cost Breakdown
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
