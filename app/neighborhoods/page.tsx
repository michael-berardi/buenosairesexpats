import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EditorialHero } from "@/components/editorial-hero";
import { InsiderTip } from "@/components/insider-tip";
import { Breadcrumb } from "@/components/breadcrumb";
import { StructuredData } from "@/components/structured-data";
import { generateFAQPageSchema } from "@/lib/schema";
import {
  MapPin,
  DollarSign,
  Shield,
  Train,
  Coffee,
  ArrowRight,
  Star,
  Users,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best BA Neighborhoods for Expats 2026",
  description: "Complete guide to Buenos Aires neighborhoods for expats. Compare Palermo, Recoleta, Belgrano, San Telmo and more. Safety, rent prices, and lifestyle factors.",
  keywords: ["Buenos Aires neighborhoods", "best areas expats Buenos Aires", "Palermo Recoleta Belgrano", "where to live Buenos Aires"],
  openGraph: {
    title: "Best Neighborhoods in Buenos Aires for Expats",
    description: "Find your perfect neighborhood in Buenos Aires. Detailed guides to Palermo, Recoleta, Belgrano, and more.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
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
    editorial: "Palermo is where 80% of expats end up, and honestly? There's a good reason for that. The restaurant scene is world-class, the parks are beautiful, and you'll bump into other expats constantly. The downside: you'll pay a premium for what's essentially the 'safe choice.' If you're here for 3 months, Palermo is perfect. If you're staying longer, look at Villa Crespo.",
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
    editorial: "Recoleta is Buenos Aires' answer to Paris' 16th arrondissement — beautiful, safe, and a little stuffy. Perfect if you're a family or retiree who values quiet streets and elegant cafes over nightlife. Warning: you will walk past the same funeral home architecture every day and somehow never get tired of it.",
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
    editorial: "Belgrano is where the Argentine upper-middle class actually lives — and where smart long-term expats end up. It's quieter than Palermo, significantly cheaper than Recoleta, and has genuinely good schools. The 'boring' reputation is a feature, not a bug.",
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
    editorial: "San Telmo is magical on Sunday afternoons and questionable at 3 AM. The cobblestones, the tango, the Sunday feria — it's the most photogenic neighborhood in BA. But the older buildings mean occasional plumbing adventures, and some blocks need more awareness at night. Best for people who value character over convenience.",
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
    editorial: "Villa Crespo is the neighborhood that expats discover after living in Palermo for 6 months and realizing they're paying too much. Half the rent, walking distance to Palermo Soho, and increasingly great food scene. This is our pick for best value in BA right now.",
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
    editorial: "Puerto Madero looks incredible in photos and feels sterile in person. The apartments are modern, the waterfront is pretty, and you'll never feel unsafe. But it's disconnected from the real Buenos Aires. Most expats who move here end up feeling isolated. We only recommend it for short-term corporate relocations.",
  },
];

const neighborhoodFAQs = [
  {
    question: "Which Buenos Aires neighborhood is best for digital nomads?",
    answer: "Palermo is the top choice for digital nomads thanks to abundant coworking spaces, reliable WiFi cafes, and a large English-speaking expat community. Villa Crespo is an excellent budget alternative -- it's a 10-15 minute walk to Palermo Soho but with rents 30-40% lower. Both have great coffee shop culture for remote work.",
  },
  {
    question: "What's the average rent in Palermo in 2026?",
    answer: "In 2026, a 1-bedroom apartment in Palermo typically costs $950-1,400 USD per month. Studios range from $700-1,050, while 2-bedroom apartments run $1,400-2,100. Most landlords quote rent in USD and require a security deposit of 2-3 months upfront.",
  },
  {
    question: "Is San Telmo safe at night?",
    answer: "San Telmo has moderate safety. The main areas around Plaza Dorrego and Calle Defensa are generally safe, but you should exercise more caution on side streets after dark. Stick to well-lit streets like Defensa and Estados Unidos at night, avoid isolated areas, and use Uber or Cabify for late-night transport rather than hailing street taxis.",
  },
  {
    question: "Which Buenos Aires neighborhood has the best public transport?",
    answer: "Palermo and Recoleta have the best public transport coverage, each served by 2 subway (subte) lines plus extensive bus networks. Belgrano has Subte D access and commuter rail. San Telmo has Subte C and E nearby. Puerto Madero has the worst public transport -- no subway access, relying mainly on buses and taxis.",
  },
  {
    question: "Should I choose Palermo or Recoleta?",
    answer: "Choose Palermo if you're a young professional or digital nomad who values nightlife, trendy cafes, and a large expat social scene. Choose Recoleta if you're a family, retiree, or anyone who prioritizes safety, quiet streets, and elegant architecture over nightlife. Rent prices are similar in both, but Recoleta tends to have larger apartments in classic buildings.",
  },
  {
    question: "What is the cheapest neighborhood for expats in Buenos Aires?",
    answer: "Villa Crespo and San Telmo offer the best value for expats. Both have 1-bedroom apartments starting around $600-875 USD per month. Villa Crespo is ideal if you want proximity to Palermo's amenities at lower prices, while San Telmo appeals to those seeking historic charm and authentic Buenos Aires character on a budget.",
  },
  {
    question: "Is Buenos Aires safe for expats in 2026?",
    answer: "Buenos Aires is generally safe for expats, especially in the popular neighborhoods. Recoleta and Puerto Madero are the safest. Palermo and Belgrano are very safe with normal urban precautions. San Telmo and Villa Crespo require more awareness at night. Standard advice applies everywhere: don't flash expensive items, use ride-hailing apps at night, and stay aware of your surroundings in crowded areas.",
  },
];

export default function NeighborhoodsPage() {
  const faqSchema = generateFAQPageSchema(neighborhoodFAQs);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={faqSchema} />
      <Breadcrumb items={[
        { label: "Neighborhoods" },
      ]} />

      {/* Editorial Hero */}
      <EditorialHero
        badge="Neighborhood Guide · March 2026"
        title="Which Buenos Aires Barrio Is Actually Right for You?"
        subtitle="Everyone says 'move to Palermo.' We'll tell you when that's great advice and when it's completely wrong for your situation. An honest guide to the 6 neighborhoods where expats actually live."
        imageSrc="/images/neighborhoods-hero.jpg"
        imageAlt="Buenos Aires street with colorful buildings in San Telmo"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/neighborhoods/quiz">
              Take the Barrio Quiz
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#comparison">
              See Comparison Table
            </Link>
          </Button>
        </div>
      </EditorialHero>

      {/* Comparison Table */}
      <section id="comparison" className="py-12 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-5">
          <h2 className="font-serif text-2xl font-bold mb-6 text-center">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-semibold">Neighborhood</th>
                  <th className="text-left py-3 px-4 font-semibold">Rent (1BR USD)</th>
                  <th className="text-left py-3 px-4 font-semibold">Safety</th>
                  <th className="text-left py-3 px-4 font-semibold">Transit</th>
                  <th className="text-left py-3 px-4 font-semibold">Best For</th>
                  <th className="text-center py-3 px-4 font-semibold">Our Rating</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoods.map((hood) => (
                  <tr key={hood.name} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-medium">{hood.name}</td>
                    <td className="py-3 px-4">{hood.rentPrice}</td>
                    <td className="py-3 px-4">{hood.safety}</td>
                    <td className="py-3 px-4">{hood.transport}</td>
                    <td className="py-3 px-4">{hood.bestFor[0]}</td>
                    <td className="py-3 px-4 text-center font-bold text-primary">{hood.expatScore}/10</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Insider Tip about Rent */}
      <div className="container mx-auto px-5 py-4">
        <InsiderTip>
          Rent prices in BA are almost always quoted in USD now. Budget $600-1,200/month for a decent 1-bedroom in a safe neighborhood. The security deposit is typically 2-3 months upfront.
        </InsiderTip>
      </div>

      {/* Neighborhood Cards with Editorial Commentary */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center">Neighborhood Guides</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {neighborhoods.map((hood) => {
              const slug = hood.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Card key={hood.name} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-2xl">{hood.name}</CardTitle>
                        {hood.subareas && (
                          <p className="text-sm text-muted-foreground mt-1">{hood.subareas.join(" · ")}</p>
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
                    {/* Editorial voice */}
                    <blockquote className="font-serif italic text-foreground/80 border-l-4 border-primary/30 pl-4 mb-5 leading-relaxed">
                      {hood.editorial}
                    </blockquote>

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
                            <li key={item} className="text-muted-foreground">&bull; {item}</li>
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
                            <li key={item} className="text-muted-foreground">&bull; {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/neighborhoods/${slug}`}>
                          Explore {hood.name} Guide
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Tips for Choosing Your Neighborhood</h2>
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
                    it means higher upfront costs. Factor in security deposit (usually 2-3 months) and
                    potential guarantee (garantia) requirements.
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
                    different areas before signing a lease. What&apos;s charming during the day might be
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
                    Prefer quiet evenings? Belgrano or Nunez. Want authentic Buenos Aires?
                    San Telmo or Almagro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {neighborhoodFAQs.map((faq) => (
                <Card key={faq.question}>
                  <CardHeader>
                    <CardTitle className="flex items-start gap-3 text-lg">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-4">Still Deciding?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Take our Neighborhood Matcher Quiz -- answer 7 quick questions and
              we&apos;ll match you with the perfect barrio based on your budget,
              lifestyle, and priorities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods/quiz">
                  Take the Barrio Quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/cost-of-living">
                  Compare Costs by Neighborhood
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
