import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import {
  Users,
  Hand,
  Utensils,
  DollarSign,
  Clock,
  MessageCircle,
  Gift,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  XCircle,
  Lightbulb
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cultural Etiquette in Argentina - Expat Guide 2026",
  description: "Complete guide to Argentine cultural etiquette. Greeting customs, dining etiquette, tipping culture, punctuality, conversation topics, and social norms for expats.",
  keywords: ["Argentina culture", "Argentine etiquette", "Buenos Aires customs", "Porteño culture", "Argentina social norms"],
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/cultural-etiquette",
  },
  openGraph: {
    title: "Cultural Etiquette in Argentina - Expat Guide",
    description: "Navigate Argentine social customs like a local. Greetings, dining, tipping, and conversation etiquette.",
  },
};

const greetingCustoms = [
  {
    situation: "Meeting someone (informal)",
    action: "One kiss on the right cheek",
    notes: "Men and women, women and women. Men to men: handshake or hug if close.",
    importance: "Essential",
  },
  {
    situation: "Meeting someone (formal/business)",
    action: "Handshake, possibly with kiss if warm introduction",
    notes: "Let the Argentine lead. When in doubt, wait for them to initiate.",
    importance: "Important",
  },
  {
    situation: "Leaving a gathering",
    action: "Kiss everyone goodbye individually",
    notes: "Don't just wave from the door. Expect this to take 10-15 minutes.",
    importance: "Important",
  },
  {
    situation: "Entering a shop/cafe",
    action: "Say 'Buenos días/tardes' to everyone",
    notes: "Acknowledging people is expected. Ignoring is considered rude.",
    importance: "Essential",
  },
  {
    situation: "Addressing strangers",
    action: "Use 'usted' or 'vos' depending on age/context",
    notes: "'Che' is very informal. Use 'señor/señora' for older people.",
    importance: "Moderate",
  },
];

const diningEtiquette = [
  {
    topic: "Meal Times",
    rule: "Lunch 1-2pm, Dinner 9-11pm",
    explanation: "Eating earlier marks you as a tourist. Restaurants open late.",
  },
  {
    topic: "Table Manners",
    rule: "Keep hands visible, wrists on table edge",
    explanation: "Hiding hands under the table is suspicious. European style.",
  },
  {
    topic: "Cutting Food",
    rule: "Knife in right, fork in left",
    explanation: "Don't switch hands. Keep fork in left while eating.",
  },
  {
    topic: "Finishing Your Plate",
    rule: "Finish everything to show appreciation",
    explanation: "Leaving food suggests you didn't like it. Small portions are okay.",
  },
  {
    topic: "Toasting",
    rule: "Make eye contact when clinking glasses",
    explanation: "Superstition says 7 years bad sex if you don't. Seriously.",
  },
  {
    topic: "Asado Etiquette",
    rule: "Don't touch the grill, compliment the asador",
    explanation: "The grill master (asador) is king. Never criticize the meat.",
  },
];

const tippingGuidelines = [
  { situation: "Restaurants", amount: "10% (optional but appreciated)", notes: "Leave cash even if paying by card. Not obligatory but expected at nice places." },
  { situation: "Cafes/Coffee shops", amount: "Small change", notes: "Round up or leave coins. Not mandatory." },
  { situation: "Taxis/Uber", amount: "Round up", notes: "Tipping not expected. Round to nearest convenient amount." },
  { situation: "Delivery", amount: "$1-2 or round up", notes: "Appreciated but not required." },
  { situation: "Hairdresser", amount: "10-15%", notes: "Expected for good service." },
  { situation: "Hotel housekeeping", amount: "$2-5/day", notes: "Leave daily, not at end." },
  { situation: "Tour guides", amount: "$5-10", notes: "For free tours, tip is expected. For paid tours, optional." },
];

const conversationTopics = [
  {
    topic: "Fútbol (Soccer)",
    status: "Safe & Encouraged",
    notes: "Boca vs River is serious business. Pick a side or stay neutral. Great icebreaker.",
    icon: CheckCircle,
    color: "green",
  },
  {
    topic: "Tango",
    status: "Safe",
    notes: "Cultural pride. Even if you don't dance, appreciation is welcomed.",
    icon: CheckCircle,
    color: "green",
  },
  {
    topic: "Mate",
    status: "Safe",
    notes: "Ask about preparation, sharing customs. Shows cultural interest.",
    icon: CheckCircle,
    color: "green",
  },
  {
    topic: "Politics",
    status: "Proceed with Caution",
    notes: "Very polarized. Peronism vs anti-Peronism divides families. Listen more than speak.",
    icon: AlertCircle,
    color: "amber",
  },
  {
    topic: "Economy/Money",
    status: "Sensitive",
    notes: "Inflation is traumatic. Don't brag about dollar strength or cheap prices.",
    icon: AlertCircle,
    color: "amber",
  },
  {
    topic: "Malvinas/Falklands",
    status: "Avoid",
    notes: "Extremely sensitive national issue. Don't defend British position.",
    icon: XCircle,
    color: "red",
  },
  {
    topic: "Comparing to Brazil/Chile",
    status: "Avoid",
    notes: "Rivalries exist. Don't suggest other countries are 'better.'",
    icon: XCircle,
    color: "red",
  },
];

const punctualityRules = [
  {
    situation: "Business meetings",
    onTime: "Be on time",
    notes: "Professional settings expect punctuality, though Argentines may be 5-10 min late.",
  },
  {
    situation: "Social dinners",
    onTime: "Arrive 15-30 min late",
    notes: "Arriving exactly on time is awkward. Host may not be ready.",
  },
  {
    situation: "Parties/asados",
    onTime: "Arrive 1-2 hours late",
    notes: "Seriously. Showing up on time to a party is a faux pas.",
  },
  {
    situation: "Doctor appointments",
    onTime: "Arrive on time, expect to wait",
    notes: "You should be punctual. They won't be. Bring a book.",
  },
];

const giftGiving = [
  {
    occasion: "Dinner at someone's home",
    gift: "Wine, dessert, or flowers",
    notes: "Wine is safest. Ask if it's for now or later. Flowers: avoid purple (mourning).",
  },
  {
    occasion: "Birthday",
    gift: "Gift + card",
    notes: "Gifts opened when received. Don't be surprised if not reciprocated exactly.",
  },
  {
    occasion: "Business",
    gift: "Quality item from your country",
    notes: "Not obligatory. Avoid overly expensive gifts (looks like bribery).",
  },
  {
    occasion: "Thank you",
    gift: "Small thoughtful item",
    notes: "Handwritten notes are appreciated. Quality over quantity.",
  },
];

const personalSpace = [
  {
    aspect: "Physical Distance",
    argentina: "Close talkers",
    comparison: "Closer than US/UK, similar to Southern Europe",
    notes: "Don't back away—it's normal. Standing apart seems cold.",
  },
  {
    aspect: "Eye Contact",
    argentina: "Direct and sustained",
    comparison: "More than Northern Europe, similar to US",
    notes: "Shows interest and respect. Avoiding eye contact seems shifty.",
  },
  {
    aspect: "Touching",
    argentina: "Touch-oriented culture",
    comparison: "More than Anglo countries, less than some Latin cultures",
    notes: "Arm touches, shoulder pats common among friends.",
  },
  {
    aspect: "Volume",
    argentina: "Loud and expressive",
    comparison: "Louder than Northern Europe, similar to Italy",
    notes: "Animated conversations are normal. Not necessarily anger.",
  },
];

export default function CulturalEtiquettePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Cultural Etiquette" },
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Cultural Etiquette in Argentina - Expat Guide",
    description: "Complete guide to Argentine cultural etiquette. Greeting customs, dining etiquette, tipping culture, punctuality, conversation topics, and social norms for expats.",
    url: "https://buenosairesexpats.com/guides/cultural-etiquette",
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
            <span className="text-foreground">Cultural Etiquette</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Users className="w-3 h-3 mr-1" />
              Culture Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cultural Etiquette in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate Argentine social customs like a local. From the famous kiss greeting 
              to conversation taboos, master the unwritten rules of Porteño culture.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Hand className="w-4 h-4" />
                <span>One kiss on the cheek</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Punctuality is... flexible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Greeting Customs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Hand className="w-6 h-6 text-pink-500" />
              Greeting Customs: The Famous Kiss
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              The single cheek kiss (beso) is the cornerstone of Argentine social interaction. 
              Master this and you're halfway to fitting in.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Situation</th>
                        <th className="text-left py-3 px-2">What to Do</th>
                        <th className="text-left py-3 px-2">Notes</th>
                        <th className="text-left py-3 px-2">Importance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {greetingCustoms.map((custom) => (
                        <tr key={custom.situation} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{custom.situation}</td>
                          <td className="py-3 px-2">{custom.action}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{custom.notes}</td>
                          <td className="py-3 px-2">
                            <Badge variant={custom.importance === "Essential" ? "default" : "secondary"}>
                              {custom.importance}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-6 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200">
              <p className="text-sm text-pink-800 dark:text-pink-200">
                <strong>Pro tip:</strong> The kiss is on the <em>right</em> cheek (your left). 
                Lean right, touch cheeks, make a light kissing sound. Don't actually kiss the cheek—it's symbolic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Etiquette */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Utensils className="w-6 h-6 text-amber-600" />
              Dining Etiquette
            </h2>
            <div className="space-y-4">
              {diningEtiquette.map((item) => (
                <Card key={item.topic}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.topic}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <Badge variant="outline" className="w-fit">{item.rule}</Badge>
                      <p className="text-sm text-muted-foreground">{item.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipping Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              Tipping Culture
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Tipping (propina) is less obligatory than in the US but appreciated. 
              Here's what to expect.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Situation</th>
                        <th className="text-left py-3 px-2">Amount</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tippingGuidelines.map((tip) => (
                        <tr key={tip.situation} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{tip.situation}</td>
                          <td className="py-3 px-2">{tip.amount}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{tip.notes}</td>
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

      {/* Punctuality */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Clock className="w-6 h-6 text-blue-500" />
              Punctuality (Or Lack Thereof)
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Argentine time is flexible. Arriving exactly on time can be as awkward as being late. 
              Here's the breakdown:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {punctualityRules.map((rule) => (
                <Card key={rule.situation}>
                  <CardHeader>
                    <CardTitle className="text-lg">{rule.situation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2">{rule.onTime}</Badge>
                    <p className="text-sm text-muted-foreground">{rule.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>The 'hora Argentina':</strong> When someone says &quot;I'll be there at 9,&quot; 
                they often mean 9:30 or 10. Don't take it personally—it's cultural, not disrespectful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <MessageCircle className="w-6 h-6 text-purple-500" />
              Conversation Topics: Safe & Taboo
            </h2>
            <div className="space-y-4">
              {conversationTopics.map((topic) => (
                <Card key={topic.topic} className={topic.color === "red" ? "border-red-200" : ""}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{topic.topic}</CardTitle>
                      <div className="flex items-center gap-2">
                        <topic.icon className={`w-5 h-5 text-${topic.color}-500`} />
                        <Badge variant={topic.color === "green" ? "default" : topic.color === "amber" ? "secondary" : "destructive"}>
                          {topic.status}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{topic.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Space */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Personal Space & Body Language</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {personalSpace.map((item) => (
                <Card key={item.aspect}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.aspect}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2">
                      <span className="font-medium">Argentina:</span>{" "}
                      <span className="text-muted-foreground">{item.argentina}</span>
                    </div>
                    <div className="mb-2 text-sm text-muted-foreground">
                      <em>{item.comparison}</em>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gift Giving */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-red-500" />
              Gift Giving
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {giftGiving.map((gift) => (
                <Card key={gift.occasion}>
                  <CardHeader>
                    <CardTitle className="text-lg">{gift.occasion}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-2" variant="secondary">{gift.gift}</Badge>
                    <p className="text-sm text-muted-foreground">{gift.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mate Etiquette */}
      <section className="py-16 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 dark:text-green-300">Bonus: Mate Etiquette</CardTitle>
                <CardDescription>The sacred rules of sharing mate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium mb-2 text-green-700 dark:text-green-300">Do:</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Say &quot;gracias&quot; when done (passes it on)</li>
                      <li>• Drink the full gourd quickly</li>
                      <li>• Pass it back to the server (cebador)</li>
                      <li>• Ask about the yerba brand—it's conversation</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium mb-2 text-red-600">Don't:</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Move the bombilla (straw)—it disturbs the yerba</li>
                      <li>• Complain if it's too hot or bitter</li>
                      <li>• Wipe the spout before drinking (insulting)</li>
                      <li>• Say &quot;gracias&quot; unless you're done</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                    &quot;The goodbye kiss ritual is real. I once spent 20 minutes at a door 
                    kissing everyone goodbye. Just embrace it.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/argentina expat</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;If someone invites you to dinner at 9pm, they expect you at 9:30. 
                    If you show up at 9, they'll still be getting ready. I learned this the hard way.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;Never, ever say the Falklands 'aren't a big deal.' I made this mistake 
                    once. The conversation ended immediately. It's a genuine national trauma.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- BA resident, learned the hard way</p>
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
              headline="Making Buenos Aires Home?"
              description="Ready to commit to life in Argentina? Lucero Legal can help with visas, residency, and all the legal steps for your move."
              utm_content="guides-cultural-etiquette"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Argentina?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Now that you know the etiquette, explore our guides to make the most of 
              your time in Buenos Aires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/guides/learning-spanish">
                  Learn Spanish First
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/guides/food-dining">
                  Explore Food Culture
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
