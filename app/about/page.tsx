import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { 
  Globe, 
  Heart, 
  Users, 
  Shield,
  ArrowRight,
  CheckCircle,
  Mail
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Buenos Aires Expats",
  description: "Learn about Buenos Aires Expats, your trusted resource for moving to and living in Argentina. Our mission, values, and team.",
  keywords: ["about Buenos Aires Expats", "Argentina expat resource", "Buenos Aires guide"],
  alternates: {
    canonical: "https://buenosairesexpats.com/about",
  },
};

const values = [
  {
    icon: Heart,
    title: "Accuracy First",
    description: "We verify all information with legal professionals and update content regularly to reflect changing regulations and prices.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Real experiences from real expats. Our content is shaped by the community we serve.",
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Clear sponsorship disclosures, honest reviews, and no hidden agendas. Your trust is our most valuable asset.",
  },
  {
    icon: Globe,
    title: "Accessible to All",
    description: "Free resources for everyone. We believe quality information about moving abroad should be accessible.",
  },
];

const stats = [
  { value: "40+", label: "In-depth Guides" },
  { value: "500+", label: "Community Members" },
  { value: "100+", label: "Verified Resources" },
  { value: "2025", label: "Founded" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Globe className="w-3 h-3 mr-1" />
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Honest Info for Expats Considering Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Buenos Aires Expats was created to give expats the real story:
              honest, practical information from people who've actually made the move.
            </p>
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold">
              <Link href="/visas">
                Start Exploring
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Buenos Aires Expats began with a simple frustration: finding reliable, honest information
                about moving to Argentina was nearly impossible. Outdated blog posts,
                conflicting visa advice, and cost estimates that didn't match reality.
              </p>
              <p className="mb-4">
                After navigating the move ourselves and helping dozens of friends do the same, we realized 
                Expats needed a resource that told the truth: both the good and the challenging parts 
                of life in Buenos Aires.
              </p>
              <p className="mb-4">
                Today, Buenos Aires Expats is read by thousands of people each month. We've partnered with 
                immigration lawyers, real estate professionals, and long-term expats to provide the most 
                accurate and helpful information possible.
              </p>
              <p>
                Our content is regularly updated to reflect changes in immigration law, inflation-adjusted 
                prices, and the evolving expat experience in Buenos Aires and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Buenos Aires Expats is an independent resource created by expats who&apos;ve 
                  actually made the move. We&apos;re not sponsored by any law firm or business, 
                  which means we can give you the unfiltered truth about life in Argentina.
                </p>
                <p className="text-muted-foreground mb-4">
                  We do recommend service providers we&apos;ve personally worked with or who have 
                  helped members of our community. When we make a recommendation, we&apos;ll always 
                  tell you why and what our experience has been.
                </p>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Interested in working with us? Contact us at hello@buenosairesexpats.com
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Legal Disclaimer</h2>
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="pt-6">
                <p className="text-amber-800 dark:text-amber-200 text-sm mb-4">
                  <strong>Important:</strong> The information provided on Buenos Aires Expats is for 
                  general informational and educational purposes only. It is not intended to be 
                  and does not constitute legal, financial, or professional advice.
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm mb-4">
                  Immigration laws, regulations, and procedures change frequently. While we strive 
                  to keep our content current, we cannot guarantee that all information is up-to-date 
                  or accurate for your specific situation.
                </p>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  For personalized legal advice regarding visas, residency, or immigration matters, 
                  we strongly recommend consulting with a qualified Argentine immigration attorney. 
                  We&apos;ve worked with a trusted partner who has helped many of our readers successfully 
                  navigate the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions, suggestions, or feedback? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="mailto:hello@buenosairesexpats.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/newsletter">
                  Subscribe to Updates
                  <ArrowRight className="w-4 h-4 ml-2" />
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
              variant="compact"
              headline="Our Trusted Legal Partner"
              description="We recommend Lucero Legal for all immigration matters. Their team of attorneys has helped hundreds of our readers with visas, residency, and citizenship."
              utm_content="about"
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
              Explore our guides, read expat stories, and get the information you need
              to make your move to Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/visas">
                  Explore Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link href="/cost-of-living">
                  Calculate Costs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
