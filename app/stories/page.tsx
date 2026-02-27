import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { Quote, ArrowRight, MapPin, Briefcase, Heart, AlertTriangle, Laugh, Sparkles, Building2, Users } from "lucide-react";
import { stories, getAllCategories, type StoryCategory } from "@/lib/stories-data";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Real Expat Stories - Buenos Aires Experiences",
  description: "Authentic stories from expats who moved to Buenos Aires. Successes, struggles, culture shocks, scams, romances, and business ventures - the real unfiltered truth about life in Argentina.",
  keywords: ["expat stories Buenos Aires", "moving to Argentina", "real experiences", "culture shock", "expat life"],
  alternates: {
    canonical: "https://buenosairesexpats.com/stories",
  },
};

const categoryIcons: Record<StoryCategory, typeof Heart> = {
  success: Sparkles,
  struggle: AlertTriangle,
  "culture-shock": Laugh,
  cautionary: AlertTriangle,
  love: Heart,
  business: Building2,
  "street-life": Users,
};

const categoryColors: Record<StoryCategory, string> = {
  success: "bg-green-100 text-green-800 border-green-200",
  struggle: "bg-orange-100 text-orange-800 border-orange-200",
  "culture-shock": "bg-purple-100 text-purple-800 border-purple-200",
  cautionary: "bg-red-100 text-red-800 border-red-200",
  love: "bg-pink-100 text-pink-800 border-pink-200",
  business: "bg-blue-100 text-blue-800 border-blue-200",
  "street-life": "bg-amber-100 text-amber-800 border-amber-200",
};

export default function StoriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Expat Stories" },
  ]);

  const categories = getAllCategories();

  // Get featured stories (mix of categories)
  const featuredStories = [
    stories.find(s => s.id === "erin-15-year-love-affair"),
    stories.find(s => s.id === "lisa-startup-queen"),
    stories.find(s => s.id === "alex-lisa-robbery"),
    stories.find(s => s.id === "street-cafe-chronicles"),
  ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Expat Stories</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-couple.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/90 text-foreground">
              <Quote className="w-3 h-3 mr-1" />
              Real Stories, Real People
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              The Unfiltered Truth About Life in Buenos Aires
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              No sugar-coating. No fake reviews. Just real stories from people who actually made the move - 
              the magical moments, the hard lessons, the embarrassing failures, and everything in between.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => {
                const Icon = categoryIcons[cat.id];
                return (
                  <Badge 
                    key={cat.id} 
                    className={`${categoryColors[cat.id]} px-3 py-1 cursor-pointer hover:opacity-80 transition-opacity`}
                  >
                    <Icon className="w-3 h-3 mr-1" />
                    {cat.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Start with these powerful stories that capture the full spectrum of the expat experience in Buenos Aires.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredStories.map((story) => {
                if (!story) return null;
                const Icon = categoryIcons[story.category];
                return (
                  <Card key={story.id} className="h-full flex flex-col group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <CardTitle className="text-xl">{story.name}</CardTitle>
                            <Badge className={categoryColors[story.category]}>
                              <Icon className="w-3 h-3 mr-1" />
                              {categories.find(c => c.id === story.category)?.label}
                            </Badge>
                          </div>
                          <CardDescription>{story.from} • {story.duration}</CardDescription>
                        </div>
                        <Badge variant="outline">{story.readTime}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                          <Briefcase className="w-3 h-3" />
                          {story.role}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3" />
                          {story.neighborhood}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground mb-4">
                        "{story.quote}"
                      </blockquote>
                      
                      <p className="text-sm text-muted-foreground mb-4">{story.summary}</p>
                      
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-muted-foreground mb-2">KEY MOMENTS:</div>
                        <ul className="text-sm space-y-1">
                          {story.highlights.slice(0, 3).map((highlight) => (
                            <li key={highlight} className="text-muted-foreground">• {highlight}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    
                    <CardContent className="pt-0 mt-auto">
                      <Button asChild className="w-full group-hover:bg-primary/90">
                        <Link href={`/stories/${story.id}`}>
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* All Stories by Category */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse stories by category or scroll through the complete collection.
              </p>
            </div>

            {categories.map((category) => {
              const categoryStories = stories.filter(s => s.category === category.id);
              if (categoryStories.length === 0) return null;
              const Icon = categoryIcons[category.id];
              
              return (
                <div key={category.id} className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${categoryColors[category.id]}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.label}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryStories.map((story) => (
                      <Card key={story.id} className="h-full flex flex-col hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">{story.name}</CardTitle>
                              <CardDescription className="text-xs">{story.from}</CardDescription>
                            </div>
                            <Badge variant="outline" className="text-xs">{story.readTime}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow pt-0">
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {story.summary}
                          </p>
                          <blockquote className="text-xs italic text-muted-foreground border-l-2 border-primary/30 pl-3">
                            "{story.quote.substring(0, 100)}..."
                          </blockquote>
                        </CardContent>
                        <CardContent className="pt-0 mt-auto">
                          <Button asChild variant="outline" size="sm" className="w-full">
                            <Link href={`/stories/${story.id}`}>
                              Read Story
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Reads / Micro Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Culture Shocks</h2>
              <p className="text-muted-foreground">
                Bite-sized moments that capture the essence of expat life in Buenos Aires.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🧉</div>
                    <div>
                      <h3 className="font-semibold mb-1">The Mate Pressure</h3>
                      <p className="text-sm text-muted-foreground">
                        "I didn't even like the taste of mate - hot grass water, basically. But I almost felt like I was insulting someone not taking a sip. 
                        After COVID it's fine not to accept the shared straw, but when I first moved here, refusing felt like a social crime."
                        <span className="text-xs text-muted-foreground block mt-1">- Expat in Palermo</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">⏰</div>
                    <div>
                      <h3 className="font-semibold mb-1">Argentine Time</h3>
                      <p className="text-sm text-muted-foreground">
                        "If they tell you 2 o'clock, that's when they leave their house. I've had friends confirm in the morning, 
                        text 'on my way' when they're just leaving, and show up an hour late saying 'traffic.' Every. Single. Time."
                        <span className="text-xs text-muted-foreground block mt-1">- British expat in Recoleta</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">👋</div>
                    <div>
                      <h3 className="font-semibold mb-1">The "Negro" Misunderstanding</h3>
                      <p className="text-sm text-muted-foreground">
                        "I heard a girl call her boyfriend 'negro' repeatedly and nearly had a heart attack. She explained it's like 'nigga' in the US - 
                        a term of affection. I had to explain that word is VERY different where I'm from. Cultural translation is hard."
                        <span className="text-xs text-muted-foreground block mt-1">- Expat in San Telmo</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🍖</div>
                    <div>
                      <h3 className="font-semibold mb-1">The Asado All-Nighter</h3>
                      <p className="text-sm text-muted-foreground">
                        "My first asado, we started at 11 PM. I thought we'd eat and be done by 1 AM. We were still there at 5 AM, 
                        talking politics and drinking wine. They see each other all week and STILL have things to talk about. The social stamina is unreal."
                        <span className="text-xs text-muted-foreground block mt-1">- Canadian expat in Belgrano</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💵</div>
                    <div>
                      <h3 className="font-semibold mb-1">The Cash Culture</h3>
                      <p className="text-sm text-muted-foreground">
                        "Coming from the US where I never carried cash, I had to learn to carry stacks of pesos everywhere. 
                        Nothing works without physical money - not the bus, not the corner store, not the guy selling empanadas. 
                        My wallet went from slim to George Costanza status."
                        <span className="text-xs text-muted-foreground block mt-1">- Expat in Villa Crespo</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Story to Tell?</h2>
            <p className="text-muted-foreground mb-8">
              Are you living (or have you lived) in Buenos Aires? We want your real story - 
              the good, the bad, the hilarious, and the heartbreaking. Help future expats know what they're getting into.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Submit Your Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">A Note on Safety</h3>
              <p className="text-sm text-amber-800">
                Several stories mention robberies and scams. While thousands of expats live safely in Buenos Aires, 
                crime does exist. Read our cautionary tales to learn common scams (like the "mustard trick"), 
                but don't let fear stop you from experiencing this incredible city. Stay aware, stay smart, 
                and <Link href="/contact" className="underline">reach out</Link> if you have questions about safety in specific neighborhoods.
              </p>
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
              headline="Ready to Write Your Own Story?"
              description="Every expat journey starts with the right visa. Lucero Legal can help you navigate Argentine immigration so you can focus on building your new life."
              utm_content="stories-hub"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey</h2>
            <p className="text-primary-foreground/90 mb-8">
              Get honest guides about visas, costs, and life in Buenos Aires from people who&apos;ve done it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/why-argentina">
                  Why Argentina?
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
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
