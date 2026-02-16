import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DesktopOnly, MobileOnly } from "@/components/desktop-only";
import { 
  Languages, 
  BookOpen, 
  GraduationCap, 
  Globe, 
  MessageCircle,
  DollarSign,
  Clock,
  Users,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Spanish in Argentina - Complete Guide 2025",
  description: "Master Argentine Spanish with our complete guide. Learn about voseo, lunfardo slang, best language schools in Buenos Aires, and tips for accelerated learning.",
  keywords: ["learn Spanish Argentina", "Argentine Spanish", "voseo", "lunfardo", "Spanish classes Buenos Aires", "Porteño slang"],
  openGraph: {
    title: "Learning Spanish in Argentina - Complete Guide",
    description: "Master Argentine Spanish: voseo, lunfardo, and Porteño slang explained. Best schools and learning resources.",
  },
};

const languageSchools = [
  { name: "Vamos Academy", location: "Palermo", cost: "$150-250/week", notes: "Popular with expats, flexible scheduling, conversation-focused" },
  { name: "Academia Buenos Aires", location: "San Telmo", cost: "$180-300/week", notes: "Intensive programs, university credits available" },
  { name: "Expanish", location: "Palermo", cost: "$200-350/week", notes: "Modern facilities, small groups, activities included" },
  { name: "ICANA", location: "Microcentro", cost: "$100-180/week", notes: "Local institution, more affordable, traditional approach" },
  { name: "ECELA", location: "Recoleta", cost: "$220-400/week", notes: "Premium option, homestay programs, medical Spanish" },
];

const onlineResources = [
  { name: "italki", type: "Tutoring", cost: "$8-25/hour", notes: "Connect with Argentine tutors for conversation practice" },
  { name: "Preply", type: "Tutoring", cost: "$10-30/hour", notes: "Structured lessons with professional teachers" },
  { name: "Duolingo", type: "App", cost: "Free/$7/month", notes: "Good for basics, not Argentine-specific" },
  { name: "Babbel", type: "App", cost: "$14/month", notes: "More comprehensive than Duolingo" },
  { name: "Lingoda", type: "Group Classes", cost: "$100-200/month", notes: "Structured curriculum, small groups" },
];

const portenoSlang = [
  { term: "Che", meaning: "Hey / Dude", example: "Che, ¿cómo andás?" },
  { term: "Boludo/a", meaning: "Idiot (friendly) / Dude", example: "No seas boludo" },
  { term: "Mina", meaning: "Woman / Girl", example: "Esa mina es re linda" },
  { term: "Piola", meaning: "Cool / Smart", example: "Ese tipo es re piola" },
  { term: "Laburo", meaning: "Work", example: "Tengo mucho laburo" },
  { term: "Bondi", meaning: "Bus", example: "Tomé el bondi tarde" },
  { term: "Mufa", meaning: "Bad luck / Jinx", example: "No seas mufa" },
  { term: "Quilombo", meaning: "Mess / Trouble", example: "Qué quilombo acá" },
];

const voseoExamples = [
  { standard: "Tú hablas", argentine: "Vos hablás", english: "You speak" },
  { standard: "Tú comes", argentine: "Vos comés", english: "You eat" },
  { standard: "Tú vives", argentine: "Vos vivís", english: "You live" },
  { standard: "Tú eres", argentine: "Vos sos", english: "You are" },
  { standard: "Tú tienes", argentine: "Vos tenés", english: "You have" },
];

export default function LearningSpanishPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-foreground">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Learning Spanish</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-white dark:from-amber-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Languages className="w-3 h-3 mr-1" />
              Language Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learning Spanish in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master Argentine Spanish with its unique voseo, colorful lunfardo slang, 
              and Porteño expressions. From beginner to fluent with local insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>6-12 months to fluency</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4" />
                <span>$150-400/week classes</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Start before you arrive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Argentine Spanish Differences */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Argentine Spanish: What Makes It Different</h2>
            <p className="text-muted-foreground mb-8">
              Argentine Spanish (Rioplatense Spanish) is distinct from what you might learn 
              in Spain or other Latin American countries. Understanding these differences 
              will help you communicate effectively and avoid confusion.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Voseo (Using "Vos")
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Argentines use "vos" instead of "tú" for informal "you." The verb 
                    conjugations are different too - stress shifts to the last syllable.
                  </p>
                  <div className="space-y-2">
                    {voseoExamples.slice(0, 3).map((ex) => (
                      <div key={ex.standard} className="text-sm p-2 bg-muted rounded">
                        <span className="text-muted-foreground line-through">{ex.standard}</span>
                        <span className="mx-2">→</span>
                        <span className="font-medium text-green-600">{ex.argentine}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Pronunciation (Yeísmo)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The "ll" and "y" sounds are pronounced like "sh" in English, not "y" 
                    like in other Spanish varieties.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm p-2 bg-muted rounded">
                      <span className="font-medium">Llamar</span> → "shah-MAR" (not "yah-MAR")
                    </div>
                    <div className="text-sm p-2 bg-muted rounded">
                      <span className="font-medium">Yo</span> → "sho" (not "yo")
                    </div>
                    <div className="text-sm p-2 bg-muted rounded">
                      <span className="font-medium">Playa</span> → "PLAH-sha" (not "PLAH-ya")
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Lunfardo: Buenos Aires Street Slang</CardTitle>
                <CardDescription>
                  Originating from Italian immigrants and tango culture, lunfardo adds 
                  colorful vocabulary to everyday speech.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {portenoSlang.map((item) => (
                    <div key={item.term} className="p-3 bg-muted rounded-lg">
                      <div className="font-semibold text-primary">{item.term}</div>
                      <div className="text-sm text-muted-foreground">{item.meaning}</div>
                      <div className="text-xs text-muted-foreground italic mt-1">"{item.example}"</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Language Schools */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Top Language Schools in Buenos Aires</h2>
            
            {/* Desktop Table */}
            <DesktopOnly>
              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">School</th>
                          <th className="text-left py-3 px-2">Location</th>
                          <th className="text-left py-3 px-2">Cost (20hrs/week)</th>
                          <th className="text-left py-3 px-2">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {languageSchools.map((school) => (
                          <tr key={school.name} className="border-b last:border-0">
                            <td className="py-3 px-2 font-medium">{school.name}</td>
                            <td className="py-3 px-2">{school.location}</td>
                            <td className="py-3 px-2">{school.cost}</td>
                            <td className="py-3 px-2 text-sm text-muted-foreground">{school.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </DesktopOnly>
            
            {/* Mobile Cards */}
            <MobileOnly>
              <div className="space-y-4">
                {languageSchools.map((school) => (
                  <Card key={school.name}>
                    <CardContent className="pt-4">
                      <div className="font-semibold text-lg mb-2">{school.name}</div>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                        <div className="text-muted-foreground">{school.location}</div>
                        <div className="text-primary font-medium">{school.cost}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{school.notes}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </MobileOnly>
            
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Prices are approximate for intensive group classes. Private lessons typically cost 30-50% more.
            </p>
          </div>
        </div>
      </section>

      {/* Online Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Online Learning Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {onlineResources.map((resource) => (
                <Card key={resource.name} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.name}</CardTitle>
                    <CardDescription>{resource.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-medium text-primary mb-2">{resource.cost}</div>
                    <p className="text-sm text-muted-foreground">{resource.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tips for Accelerated Learning</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    Start Before Arrival
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Build a foundation with apps like Duolingo or Babbel before you arrive. 
                    Focus on basic grammar and vocabulary. You'll progress much faster 
                    once immersed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="w-5 h-5 text-blue-500" />
                    Language Exchange
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Join conversation exchanges (intercambios) via Meetup or Facebook groups. 
                    You help someone with English, they help you with Spanish. Free and social.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BookOpen className="w-5 h-5 text-green-500" />
                    Consume Local Media
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Watch Argentine shows on Netflix ("El Marginal," "Okupas"), listen to 
                    Argentine podcasts, and read local news. This trains your ear to the accent.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <GraduationCap className="w-5 h-5 text-purple-500" />
                    Take Intensive Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    If serious about fluency, commit to 4-6 weeks of intensive classes 
                    (20+ hours/week) when you first arrive. The immersion + instruction 
                    combo is powerful.
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
                    "The accent is tough at first. Even if you learned Spanish elsewhere, 
                    Argentines speak fast and the 'sh' sound for 'll' takes getting used to. 
                    Give yourself 2-3 months to adjust."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/argentina expat</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    "Don't stress about voseo. If you use 'tú' people will still understand you. 
                    Focus on comprehension first, then adopt local speech patterns naturally."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    "Language schools are great for structure, but you NEED conversation practice. 
                    My Spanish improved 10x faster once I started dating a local and hanging 
                    out with Argentine friends."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- BA resident, 2 years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
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
                      Learning Spanish in Argentina is rewarding but challenging. The accent is 
                      unique, locals speak fast, and English proficiency varies. Expect 6-12 months 
                      of consistent effort for conversational fluency. Don't get discouraged - Argentines 
                      are patient and appreciate any effort to speak their language.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Download our free Argentine Spanish cheat sheet with essential phrases, 
              slang, and pronunciation tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/resources/spanish-guide">
                  Get Free Cheat Sheet
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  View Cost of Living
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
