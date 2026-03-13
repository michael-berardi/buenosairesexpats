import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { EditorialHero } from "@/components/editorial-hero";

export const metadata: Metadata = {
  title: "About Buenos Aires Expats",
  description: "Who runs Buenos Aires Expats, what the reporting covers, and where professional advice begins.",
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
        subtitle="Coverage, disclosures, and the point where a Buenos Aires move needs a lawyer or accountant instead of one more article."
      />

      {/* What This Site Is */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">What the reporting covers</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Coverage centers on the decisions people usually face before and shortly after a
                move to Buenos Aires: neighborhoods, cost of living, visas, and the practical
                realities of daily life in the city.
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
              Disclosure and sponsorship
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Lucero Legal, a Buenos Aires immigration law firm, supports the publication. In
                return, we include links to their services on
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

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              When the move stops being casual research
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                Neighborhood comparisons, first-month budgets, and questions about systems like
                SUBE or MercadoPago are usually manageable with detailed reporting. They are the
                kinds of decisions that benefit from context, current prices, and practical
                examples more than they benefit from immediate professional intervention.
              </p>
              <p>
                The threshold changes when the move starts carrying real consequences. Signed
                leases, school calendars, visa deadlines, foreign income questions, and anything
                involving residency strategy usually need more than one more article. That is the
                point where local legal or tax advice becomes much more valuable than additional
                editorial reading.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-4">Signals that you&apos;re beyond DIY research</h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&mdash;</span>
                  <span>You have a real move date and need to sequence housing, paperwork, and travel correctly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&mdash;</span>
                  <span>Your visa or residency path depends on income structure, family status, or multiple passports.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">&mdash;</span>
                  <span>You&apos;re making a commitment that becomes expensive if you misunderstand the rules.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
              Editorial Boundaries
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
              Contact the Team
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
