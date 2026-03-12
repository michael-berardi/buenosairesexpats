import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { EditorialHero } from "@/components/editorial-hero";

export const metadata: Metadata = {
  title: "About Buenos Aires Expats",
  description: "Who writes Buenos Aires Expats, how the site is supported, and how we keep the guidance useful.",
  keywords: ["about Buenos Aires Expats", "Argentina expat resource", "Buenos Aires guide"],
  alternates: {
    canonical: "https://buenosairesexpats.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <EditorialHero
        badge="About the guide"
        title="Who runs Buenos Aires Expats"
        subtitle="What we cover, how the site is supported, and how we decide when a question needs a lawyer instead of another article."
      />

      {/* What This Site Is */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">What You&apos;ll Find Here</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Buenos Aires Expats is a guide for people considering a move to Buenos Aires. We
                cover neighborhoods, cost of living, visas, and the practical realities of expat
                life in the city.
              </p>
              <p>
                The goal is practical reporting you can actually use. Buenos Aires does some
                things exceptionally well. It also has bureaucracy, inflation, and plenty of
                friction. We try to cover both without pretending the hard parts do not exist.
              </p>
              <p>
                We update our guides regularly because Argentina changes fast. The rent prices you
                read in a 2023 blog post are almost certainly wrong by now. Ours are current
                to 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make Money */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              How We Make Money
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                This site is supported by Lucero Legal, a Buenos Aires immigration law firm. They
                help fund the site and in return, we include links to their services on
                visa-related pages.
              </p>
              <p>
                Does this affect our advice? We don&apos;t think so, and here&apos;s why: we still
                recommend the DIY approach when it makes sense. Plenty of visa processes
                don&apos;t need a lawyer, and we say so. But when a process is genuinely
                complex &mdash; like converting a tourist visa to permanent residency &mdash;
                professional help can save you months of frustration, and Lucero Legal is the firm
                we&apos;d point you to.
              </p>
              <p>
                We also use a small number of affiliate links (for services like Wise for money
                transfers). If you sign up through those links, we earn a small commission. We
                only link to services our community actually uses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              What We Don&apos;t Do
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">&mdash;</span>
                <span>We don&apos;t fabricate testimonials or user stories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">&mdash;</span>
                <span>We don&apos;t inflate our stats to look bigger than we are</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">&mdash;</span>
                <span>We don&apos;t accept payment for positive reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">&mdash;</span>
                <span>We don&apos;t disguise advertising as editorial content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">&mdash;</span>
                <span>
                  We don&apos;t pretend to have a &ldquo;team of 20 writers across
                  Argentina&rdquo;
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions, suggestions, or feedback? We&apos;d love to hear from you.
            </p>
            <Button asChild size="lg">
              <Link href="mailto:hello@buenosairesexpats.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> The information on Buenos Aires Expats is for general
              informational purposes only and does not constitute legal, financial, or
              professional advice. Immigration laws and regulations change frequently. While we
              strive to keep content current, we cannot guarantee accuracy for your specific
              situation. For personalized legal advice regarding visas or residency, consult a
              qualified Argentine immigration attorney.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
