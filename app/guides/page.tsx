import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  BookOpen,
  ArrowRight,
  Plane,
  Shield,
  Bus,
  Utensils,
  Languages,
  CloudSun,
  Users,
  Briefcase,
  IdCard,
  Clock,
  CheckCircle,
  MapPin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Expat Guides to Buenos Aires - Complete Resource Library 2026",
  description:
    "All our Buenos Aires expat guides in one place. From getting started and safety to food, transportation, working, learning Spanish, and Argentine culture.",
  keywords: [
    "Buenos Aires guides",
    "expat guides Argentina",
    "Buenos Aires expat resources",
    "living in Buenos Aires",
    "moving to Argentina guides",
    "Buenos Aires 2026",
  ],
  openGraph: {
    title: "Expat Guides to Buenos Aires",
    description:
      "Complete guide library for expats in Buenos Aires. Getting started, safety, food, transport, working, Spanish, and more.",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buenos Aires Expats",
      },
    ],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/guides",
  },
};

const guides = [
  {
    title: "Your First Week in BA",
    description:
      "Day-by-day survival guide: SIM cards, SUBE, MercadoPago, finding your cafe, mate etiquette, and the unwritten rules of BA life.",
    href: "/guides/first-week",
    icon: Calendar,
    badge: "New",
    badgeClass: "bg-sky-100 text-sky-700 border-sky-200",
    readTime: "20 min",
    color: "sky",
  },
  {
    title: "Neighborhood Matcher Quiz",
    description:
      "Answer 7 questions to find your perfect Buenos Aires barrio based on budget, lifestyle, and priorities.",
    href: "/neighborhoods/quiz",
    icon: MapPin,
    badge: "Interactive",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
    readTime: "3 min",
    color: "amber",
  },
  {
    title: "Getting Started in Buenos Aires",
    description:
      "Your first 90 days checklist. Everything from landing at Ezeiza to building your new life, step by step.",
    href: "/guides/getting-started",
    icon: Plane,
    badge: "Start Here",
    badgeClass: "bg-sky-100 text-sky-700 border-sky-200",
    readTime: "15 min",
    color: "sky",
  },
  {
    title: "Safety Guide",
    description:
      "Honest safety information: neighborhood breakdowns, common scams to avoid, emergency numbers, and solo travel tips.",
    href: "/guides/safety",
    icon: Shield,
    badge: "Essential",
    badgeClass: "bg-green-100 text-green-700 border-green-200",
    readTime: "12 min",
    color: "green",
  },
  {
    title: "Getting Your DNI",
    description:
      "Step-by-step guide to obtaining your Argentine identity document. Requirements, documents, timeline, and common pitfalls.",
    href: "/guides/getting-dni",
    icon: IdCard,
    badge: "Essential",
    badgeClass: "bg-green-100 text-green-700 border-green-200",
    readTime: "10 min",
    color: "blue",
  },
  {
    title: "Food & Dining",
    description:
      "Best parrillas, empanada guide, vegetarian options, cafe culture, delivery apps, and real prices for eating out.",
    href: "/guides/food-dining",
    icon: Utensils,
    badge: "Popular",
    badgeClass: "bg-amber-100 text-amber-700 border-amber-200",
    readTime: "12 min",
    color: "amber",
  },
  {
    title: "Transportation",
    description:
      "SUBE card, Subte subway, colectivos, Uber, taxis, cycling with EcoBici, and airport transfer options.",
    href: "/guides/transportation",
    icon: Bus,
    badge: null,
    badgeClass: "",
    readTime: "10 min",
    color: "sky",
  },
  {
    title: "Learning Spanish",
    description:
      "Master Argentine Spanish: voseo, lunfardo slang, best language schools in Buenos Aires, and tips for fast progress.",
    href: "/guides/learning-spanish",
    icon: Languages,
    badge: null,
    badgeClass: "",
    readTime: "10 min",
    color: "purple",
  },
  {
    title: "Working & Taxes",
    description:
      "Monotributo explained, remote work considerations, starting a business, tax obligations, and coworking spaces in BA.",
    href: "/guides/working-taxes",
    icon: Briefcase,
    badge: null,
    badgeClass: "",
    readTime: "12 min",
    color: "sky",
  },
  {
    title: "Weather & Climate",
    description:
      "Season-by-season breakdown. What to pack, best times to visit, winter heating, summer humidity, and clothing tips.",
    href: "/guides/weather-climate",
    icon: CloudSun,
    badge: null,
    badgeClass: "",
    readTime: "8 min",
    color: "amber",
  },
  {
    title: "Cultural Etiquette",
    description:
      "Navigate Argentine social customs like a local. Greetings, dining etiquette, tipping, punctuality, and conversation norms.",
    href: "/guides/cultural-etiquette",
    icon: Users,
    badge: null,
    badgeClass: "",
    readTime: "10 min",
    color: "rose",
  },
];

const otherResources = [
  {
    title: "Cost of Living",
    description: "Detailed monthly budget breakdowns for Buenos Aires.",
    href: "/cost-of-living",
  },
  {
    title: "Neighborhoods",
    description: "Compare Palermo, Recoleta, Belgrano, and more.",
    href: "/neighborhoods",
  },
  {
    title: "Healthcare",
    description: "How the health system works and choosing a prepaga.",
    href: "/healthcare",
  },
  {
    title: "Banking",
    description: "Opening accounts and managing finances as an expat.",
    href: "/banking",
  },
  {
    title: "Housing",
    description: "Finding apartments, contracts, and tenant rights.",
    href: "/housing",
  },
  {
    title: "Visa Options",
    description: "Digital nomad, work, retirement, and student visas.",
    href: "/visas",
  },
];

export default function GuidesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Guides</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <BookOpen className="w-3 h-3 mr-1" />
              Expat Resource Library
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buenos Aires Expat Guides
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about living in Buenos Aires, written
              by expats who have actually done it. Practical, honest, and
              updated for 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>11 in-depth guides</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-sky-500" />
                <span>Updated March 2026</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="w-4 h-4 text-sky-500" />
                <span>Written by expats, for expats</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-sky-200">
              <CardContent className="pt-8 pb-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center">
                    <Plane className="w-8 h-8 text-sky-600" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge className="mb-2 bg-sky-100 text-sky-700 border-sky-200">
                      Recommended First Read
                    </Badge>
                    <h2 className="text-2xl font-bold mb-2">
                      Your First Week in Buenos Aires
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Just arrived or planning to? This day-by-day guide covers
                      everything from landing at Ezeiza to feeling like a local.
                      SIM cards, SUBE, MercadoPago, mate etiquette, and 30+
                      actionable tasks with real March 2026 prices.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        asChild
                        className="bg-sky-600 hover:bg-sky-500 text-white"
                      >
                        <Link href="/guides/first-week">
                          Read the First Week Guide
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                      >
                        <Link href="/neighborhoods/quiz">
                          Take the Barrio Quiz
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              All Guides
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Each guide is packed with practical advice, real prices, and
              honest tips from the expat community. No fluff, no
              sugar-coating.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="group">
                  <Card className="h-full transition-all duration-200 group-hover:border-sky-200 group-hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/20 flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                          <guide.icon className="w-6 h-6 text-sky-600" />
                        </div>
                        {guide.badge && (
                          <Badge
                            variant="outline"
                            className={guide.badgeClass}
                          >
                            {guide.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg group-hover:text-sky-700 transition-colors">
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{guide.readTime} read</span>
                        </div>
                        <span className="inline-flex items-center text-sm font-medium text-sky-700 group-hover:text-sky-600 transition-colors">
                          Read Guide
                          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Resources */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              More Resources
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Beyond our guide series, we have detailed pages on the
              practical topics that matter most to expats settling in Buenos
              Aires.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherResources.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group"
                >
                  <Card className="h-full transition-all duration-200 group-hover:border-sky-200 group-hover:shadow-md">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-sky-700 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      <span className="inline-flex items-center text-sm font-medium text-sky-700 mt-3 group-hover:text-sky-600 transition-colors">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Make the Move?
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Start with our First Week guide, find your perfect barrio with
              the quiz, and explore neighborhoods that match your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/guides/first-week">
                  First Week Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white"
              >
                <Link href="/neighborhoods/quiz">Find Your Barrio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
