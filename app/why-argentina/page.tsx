import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  Heart,
  Scale,
  DollarSign,
  Briefcase,
  Home,
  ArrowRight,
  Quote,
  Globe,
  Sparkles,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Expats Are Moving to Buenos Aires - Real Talk",
  description: "Honest insights from expats who made the move. The good, the bad, and what Reddit won't tell you about life in Buenos Aires.",
  keywords: ["moving to Buenos Aires", "expats Argentina", "Buenos Aires expat life", "Buenos Aires vs USA", "expat reality"],
  openGraph: {
    title: "Why Expats Are Moving to Buenos Aires - Real Talk",
    description: "Honest insights from expats who made the move. The good, the bad, and what Reddit won't tell you.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/why-argentina",
  },
};

const factors = [
  {
    icon: Heart,
    title: "Healthcare That Doesn't Bankrupt You",
    usSituation: "Medical debt is the #1 cause of bankruptcy. A specialist visit can cost $300-500, ER visits thousands. Many Americans avoid care due to costs.",
    argentinaAdvantage: "Specialist visits: $30-60. Quality private hospitals (Hospital Italiano, Swiss Medical) with English-speaking doctors. Many expats say care is BETTER than US.",
    stats: "US per capita: $12,914 | Argentina: ~$1,500",
    redditInsight: "Reddit expats consistently report being shocked at how good private healthcare is. One user said: 'I got an MRI for $150 that would have cost $3,000 back home.'",
  },
  {
    icon: Scale,
    title: "Escaping the Culture Wars",
    usSituation: "Political polarization affecting friendships, workplaces, even family gatherings. Many feel they can't have normal conversations anymore.",
    argentinaAdvantage: "Different political culture. While Argentines are passionate about politics, it's less personal. Many expats report feeling less daily stress about political identity.",
    stats: "63% of Americans report politics as a significant source of stress",
    redditInsight: "Multiple Reddit threads mention this: 'I don't have to worry about my neighbor's political sign anymore. People here care, but it's not defining every interaction.'",
  },
  {
    icon: DollarSign,
    title: "Your Dollar Actually Goes Further (For Now)",
    usSituation: "$3,000+ for a one-bedroom in NYC/SF/LA. $6,000+ for anything decent. Home ownership feels impossible for many under 40.",
    argentinaAdvantage: "$800-1,500 for a nice apartment in Palermo/Recoleta. Dining out: $10-20 for a great meal. You can live well on $2,000-2,500/month.",
    stats: "Cost of living 60-70% lower than major US cities (for expats earning in USD)",
    redditInsight: "BUT: Reddit users warn prices have risen significantly. One recent post: 'It's not as cheap as YouTubers claim anymore. Expect Western European prices for some things.'",
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance Is Real",
    usSituation: "10 days vacation is standard. 'Hustle culture' glorifies overwork. Many feel guilty taking time off.",
    argentinaAdvantage: "14+ days minimum by law. Long lunches are normal. People actually take vacations. Dinner at 10pm means work ends when it should.",
    stats: "US: No mandated PTO | Argentina: 14+ days minimum",
    redditInsight: "Reddit expats love this: 'People here work to live, not live to work. It's refreshing.' But note: 'Mañana' culture can frustrate Type-A expats.",
  },
  {
    icon: Home,
    title: "Dating & Social Life (Especially for Men)",
    usSituation: "Dating apps feel transactional. Many report difficulty forming genuine connections. Gender dynamics increasingly polarized.",
    argentinaAdvantage: "Multiple Reddit threads call BA 'the best city for dating.' Argentines are social, therapy-going, emotionally open. Women often take initiative.",
    stats: "Buenos Aires consistently ranked as one of the best cities for single expats",
    redditInsight: "One Reddit user: '10x better dating than any US city I've lived in. People are open, direct, and actually want to connect.' Warning: Learn Spanish and local slang (Lunfardo).",
  },
  {
    icon: Sparkles,
    title: "The European Vibe Without European Prices",
    usSituation: "Want that European café culture, architecture, and walkability? Prepare for $4,000+ monthly costs in Paris, Barcelona, or Lisbon.",
    argentinaAdvantage: "BA is called 'the Paris of South America' for a reason. Beautiful architecture, café culture, bookstores on every corner, world-class arts scene.",
    stats: "BA offers European lifestyle at 1/3 the cost",
    redditInsight: "Reddit: 'It's like Europe but with better steak and worse customer service.' The mix of Latin warmth and European sophistication is unique.",
  },
];

const testimonials = [
  {
    quote: "I came in winter and hated it. Cold, gray, over-hyped. But as spring hit and I met locals, something clicked. Six months later I didn't want to leave.",
    author: "Reddit user",
    location: "Digital nomad, 6 months",
    context: "Many Reddit users report this ' Stockholm syndrome' effect - initial disappointment followed by deep attachment",
  },
  {
    quote: "The dating scene here is incredible. People are in therapy, emotionally intelligent, and actually want to connect. It's nothing like the US.",
    author: "26M from US/Europe",
    location: "6 months in BA",
    context: "Multiple Reddit threads confirm this - BA consistently rated best city for dating",
  },
  {
    quote: "I was paying $600/month for health insurance with a $6,000 deductible in Texas. Here I pay $120 and actually use my coverage without fear.",
    author: "Former Texas resident",
    location: "Now in Recoleta",
    context: "Healthcare costs are consistently cited as a major factor in Reddit threads",
  },
];

const redditWarnings = [
  {
    title: "The Money Situation Is Complicated",
    detail: "You can't just use your credit card everywhere. You need to understand the 'blue dollar' vs official rate. Western Union is your friend, but not all branches are equal. Bring physical dollars if renting an apartment.",
    source: "Multiple Reddit threads on money management",
  },
  {
    title: "Scams Are Real (But Manageable)",
    detail: "Taxis will try to rip you off. Shopkeepers might 'forget' to give correct change. This isn't just a tourist thing - locals deal with it too. Learn the common scams, stay alert, and you'll be fine.",
    source: "r/digitalnomad expat experiences",
  },
  {
    title: "It's Not As Cheap As You Think Anymore",
    detail: "Prices have risen significantly. One recent Reddit post: 'Expect Western European prices for many things.' The blue dollar advantage isn't what it was. Budget $2,000-2,500 for a comfortable lifestyle, not $1,000.",
    source: "r/digitalnomad 2024-2026 updates",
  },
  {
    title: "Customer Service Is... Different",
    detail: "Don't expect US-style customer service. Things move slowly. People are late. Plans get canceled. If you're Type-A, this will frustrate you. Learn to embrace 'mañana' culture or you'll be miserable.",
    source: "Common theme across Reddit threads",
  },
  {
    title: "Winter Is Gray and Cold",
    detail: "July/August can be surprisingly cold and gray. Apartments often have poor heating. Many Reddit users report initial disappointment during winter months. Visit in spring (September-November) for your first trip.",
    source: "r/digitalnomad seasonal advice",
  },
];

export default function WhyArgentinaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Why Buenos Aires?</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Globe className="w-3 h-3 mr-1" />
              Based on Real Expat Experiences
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why Expats Are Actually Moving to Buenos Aires
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Not the Instagram version. Not the doom-and-gloom version. 
              The real story from Reddit, forums, and expats who made the leap.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>Real Reddit insights</span>
              <span>•</span>
              <span>The good AND the bad</span>
              <span>•</span>
              <span>No sugar-coating</span>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg">
                <Link href="/visas">
                  Explore Visa Options
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimer */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/50 border-dashed">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <strong>What this is:</strong> A synthesis of hundreds of Reddit posts, forum discussions, and real expat experiences. 
                  We&apos;ve read the threads where people vent, celebrate, warn, and encourage. This is the balanced truth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Factors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What&apos;s Actually Drawing Expats</h2>
            
            <div className="space-y-8">
              {factors.map((factor) => (
                <Card key={factor.title} className="overflow-hidden">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <factor.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle>{factor.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">The US Reality</div>
                        <p className="text-sm text-muted-foreground">{factor.usSituation}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">The BA Reality</div>
                        <p className="text-sm text-muted-foreground">{factor.argentinaAdvantage}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <div className="text-xs text-muted-foreground font-mono mb-2">{factor.stats}</div>
                      <div className="text-sm bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                        <span className="font-semibold text-blue-700 dark:text-blue-300">Reddit says:</span>{" "}
                        <span className="text-blue-600 dark:text-blue-200">{factor.redditInsight}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reddit Warnings Section */}
      <section className="py-16 bg-amber-50 dark:bg-amber-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl font-bold">What Reddit Warns About (That Other Sites Won&apos;t&nbsp;Tell&nbsp;You)</h2>
            </div>
            
            <div className="space-y-4">
              {redditWarnings.map((warning, index) => (
                <Card key={index} className="border-amber-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-amber-900 dark:text-amber-100">{warning.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{warning.detail}</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400">Source: {warning.source}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Talk Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Honest Bottom Line</h2>
            
            <Card>
              <CardContent className="pt-6 space-y-4">
                <p className="text-muted-foreground">
                  <strong>Buenos Aires is not a paradise.</strong> The inflation is exhausting. The bureaucracy will test your patience. 
                  You&apos;ll get scammed at least once. Winter is gray and depressing.
                </p>
                <p className="text-muted-foreground">
                  <strong>But.</strong> For expats earning in dollars or euros, it offers something increasingly rare: 
                  the ability to live well without grinding yourself into dust. You can afford a nice apartment. 
                  You can go to the doctor without fear. You can take vacations. You can date without apps feeling like a second job.
                </p>
                <p className="text-muted-foreground">
                  <strong>The Reddit consensus:</strong> Most people who stick it out past the 3-month mark end up loving it. 
                  The first winter is hard. The first scam attempt is frustrating. But then something clicks. 
                  The city grows on you. The people win you over. The lifestyle starts making sense.
                </p>
                <p className="text-muted-foreground">
                  As one Reddit user put it: <em>&quot;Maybe I have Stockholm syndrome, but I&apos;d like to return. 
                  It&apos;s a beautiful country with wonderful people whose joy de vivre is strong and resilient despite the adversities.&quot;</em>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Real Experiences (From Reddit & Forums)</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item, index) => (
              <Card key={index} className="bg-primary/5 border-primary/10">
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />
                  <p className="text-foreground mb-4 italic">&quot;{item.quote}&quot;</p>
                  <div className="text-sm mb-3">
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-muted-foreground">{item.location}</p>
                  </div>
                  <p className="text-xs text-muted-foreground italic">{item.context}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Is It For You? */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Should You Make the Move?</h2>
            <p className="text-muted-foreground mb-8">
              The Reddit consensus: Come for 3 months before committing. Visit in spring or fall, not winter. 
              Learn some Spanish before you arrive. Bring physical dollars. And know that the first month might suck 
              - but stick it out, and you might just fall in love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/cost-of-living">
                  See Real Cost Breakdown
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="full"
              headline="Ready to Make the Move?"
              description="Lucero Legal's immigration attorneys have helped hundreds of expats navigate Argentine visas, residency, and citizenship. Get expert guidance for your situation."
              utm_content="why-argentina"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
