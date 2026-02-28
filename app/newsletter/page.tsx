import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight, MapPin, FileText, DollarSign, Users, Sparkles, CheckCircle } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Newsletter - Buenos Aires Expats",
  description: "Get weekly updates for expats considering a move to Buenos Aires. Visa tips, cost updates, real expat stories, and insider advice delivered to your inbox.",
  alternates: {
    canonical: "https://buenosairesexpats.com/newsletter",
  },
};

const newsletterBenefits = [
  {
    icon: FileText,
    title: "Visa Updates",
    description: "Stay informed about changing visa requirements, processing times, and new immigration policies that could affect your move."
  },
  {
    icon: DollarSign,
    title: "Cost of Living Tracker",
    description: "Monthly price updates on rent, food, and services. Know exactly what to budget before you arrive."
  },
  {
    icon: MapPin,
    title: "Neighborhood Spotlights",
    description: "Deep dives into Buenos Aires barrios. Real talk on safety, transport, and where different types of expats actually live."
  },
  {
    icon: Users,
    title: "Expat Stories",
    description: "Real experiences from people who made the move. What they wish they knew, mistakes to avoid, and success stories."
  }
];

const sampleTopics = [
  "What the blue dollar means for your budget in 2026",
  "Step-by-step guide to the Digital Nomad visa application",
  "Renting in Palermo vs. Belgrano: A cost breakdown",
  "Healthcare options for expats: prepaga vs. public",
  "Setting up your finances: Banking for foreigners in Argentina",
  "Finding community: Expat groups and local connections"
];

export default function NewsletterPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Newsletter" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Newsletter</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" />
              Weekly Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Buenos Aires Expats Newsletter
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get weekly tips on visas, neighborhoods, cost of living updates, and real talk
              about making the move to Argentina. Be the first to know when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500">
                <Link href="/contact">
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/guides/getting-started">
                  Read Our Guides
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What You'll Receive</h2>
              <p className="text-muted-foreground text-lg">
                Practical, no-nonsense information to help you navigate the move to Buenos Aires.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {newsletterBenefits.map((benefit) => (
                <Card key={benefit.title} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Topics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Topics We'll Cover</h2>
              <p className="text-muted-foreground">
                A preview of the practical advice and updates you'll receive.
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {sampleTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Subscribe */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Subscribe?</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                Moving to a new country is complex. Argentina adds extra layers with its unique 
                economic situation, visa processes, and cultural nuances. Our newsletter cuts 
                through the noise to deliver what you actually need to know.
              </p>
              <p className="mb-4">
                We don't sugarcoat the challenges. You'll get honest assessments of bureaucracy, 
                costs, and the realities of expat life. But you'll also get actionable solutions, 
                vetted resources, and the confidence that comes from being prepared.
              </p>
              <p>
                Whether you're just curious about Buenos Aires or already packing your bags, 
                our newsletter helps you make informed decisions about your move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-sky-600 to-sky-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-12 h-12 mx-auto mb-6 text-sky-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Stay Informed?</h2>
            <p className="text-sky-100 text-lg mb-8">
              Be among the first to receive our Buenos Aires expat newsletter.
              No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-white text-sky-700 hover:bg-sky-50">
                <Link href="/contact">
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/guides/getting-started">
                  Browse Free Guides
                </Link>
              </Button>
            </div>
            <p className="text-sm text-sky-200 mt-6">
              Our newsletter launches soon. Join the waitlist to be notified when we send our first issue.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
