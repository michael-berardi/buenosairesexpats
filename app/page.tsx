import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  ArrowRight,
  Shield,
} from "lucide-react";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";

const features = [
  {
    image: "/images/visa-digital-nomad.jpg",
    title: "Visa Guides",
    description: "Step-by-step instructions for Digital Nomad, work, retirement, and student visas.",
    href: "/visas/digital-nomad",
    cta: "Explore visas",
  },
  {
    image: "/images/cost-of-living-card.webp",
    title: "Cost of Living",
    description: "Real budget breakdowns and cost calculators for Buenos Aires and beyond.",
    href: "/cost-of-living",
    cta: "See costs",
  },
  {
    image: "/images/neighborhoods-hero.jpg",
    title: "Neighborhood Guides",
    description: "Detailed reviews of Palermo, Recoleta, Belgrano, and other top expat areas.",
    href: "/neighborhoods",
    cta: "Compare neighborhoods",
  },
  {
    image: "/images/healthcare-clinic.jpg",
    title: "Healthcare",
    description: "Navigate prepaga insurance, find English-speaking doctors, and understand the system.",
    href: "/healthcare",
    cta: "View options",
  },
  {
    image: "/images/housing-apartment.jpg",
    title: "Housing",
    description: "Renting tips, apartment hunting guides, and real estate advice for foreigners.",
    href: "/housing",
    cta: "Find housing",
  },
  {
    image: "/images/community-expats.webp",
    title: "Expat Stories",
    description: "Real experiences from expats who've made the move. Learn from their successes and mistakes.",
    href: "/stories",
    cta: "Read stories",
  },
];

const stats = [
  { value: "40+", label: "Guides", labelFull: "Detailed Guides" },
  { value: "64+", label: "Profiles", labelFull: "Expat Profiles" },
  { value: "6", label: "Barrios", labelFull: "Neighborhoods Covered" },
  { value: "6", label: "Visas", labelFull: "Visa Pathways" },
];

const testimonials = [
  {
    quote: "I was paying $3,200 for a studio in SF. Here I have a two-bedroom with a balcony for $900. The math just made sense.",
    author: "Sarah M.",
    role: "Software Engineer, moved from San Francisco",
    initials: "SM",
    color: "bg-rose-500",
  },
  {
    quote: "After Brexit, I wanted somewhere with culture, good food, and affordable living. Buenos Aires ticked every box.",
    author: "James W.",
    role: "Freelance Designer, moved from London",
    initials: "JW",
    color: "bg-sky-500",
  },
  {
    quote: "My teacher's pension goes three times as far here. I live better on $2,200/month than I did on $6,000 back home.",
    author: "Robert C.",
    role: "Retired Teacher, moved from Phoenix",
    initials: "RC",
    color: "bg-amber-500",
  },
];

const journeyCards = [
  {
    step: "01",
    title: "Planning to Move",
    description: "Research costs, compare visa options, and understand what to expect before you arrive.",
    image: "/images/journey-planning.webp",
    links: [
      { label: "Cost of Living", href: "/cost-of-living" },
      { label: "Visa Guide", href: "/visas" },
      { label: "Find Your Visa", href: "/visas/quiz" },
      { label: "Why Buenos Aires?", href: "/why-argentina" },
    ],
  },
  {
    step: "02",
    title: "Just Arrived",
    description: "Get set up with essentials: your DNI, healthcare, banking, and navigating the city.",
    image: "/images/journey-arrived.webp",
    links: [
      { label: "Getting Started", href: "/guides/getting-started" },
      { label: "Getting Your DNI", href: "/guides/getting-dni" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Banking", href: "/banking" },
    ],
  },
  {
    step: "03",
    title: "Already Settled",
    description: "Find permanent housing, set up your taxes efficiently, and connect with the expat community.",
    image: "/images/hero-couple.jpg",
    links: [
      { label: "Housing", href: "/housing" },
      { label: "Working & Taxes", href: "/guides/working-taxes" },
      { label: "Expat Stories", href: "/stories" },
    ],
  },
];

const guideCards = [
  {
    image: "/images/visa-digital-nomad.jpg",
    badge: "Most Popular",
    badgeClass: "badge-primary",
    title: "Argentina Digital Nomad Visa",
    description: "Complete guide to the 180-day remote work visa, including requirements, application process, and tips for approval.",
    href: "/visas/digital-nomad",
    cta: "Read Guide",
  },
  {
    image: "/images/cost-of-living-card.webp",
    badge: "Updated Monthly",
    badgeClass: "badge-accent",
    title: "Cost of Living in Buenos Aires",
    description: "Real 2026 budget breakdowns for singles, couples, and families. Includes rent, food, healthcare, and entertainment.",
    href: "/cost-of-living",
    cta: "See Costs",
  },
  {
    image: "/images/community-expats.webp",
    badge: "Stories",
    badgeClass: "badge-secondary",
    title: "Real Expat Experiences",
    description: "Read honest accounts from expats who moved to Buenos Aires. Learn what worked and what didn't.",
    href: "/stories",
    cta: "Read Stories",
  },
];

export default function Home() {
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <Image
          src="/images/hero-street-cafe.webp"
          alt="Buenos Aires street cafe at golden hour in Palermo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30" />
        <div className="container mx-auto px-5 sm:px-6 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/95 text-foreground backdrop-blur-sm">
              Updated February 2026
            </Badge>
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white drop-shadow-lg">
              Your Honest Guide to{" "}
              <span className="text-sky-300">Life in Buenos Aires</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Real talk about moving to Argentina — from people who&apos;ve actually done it.
              We cover visa applications, monthly cost breakdowns, honest neighborhood reviews,
              healthcare navigation, and housing tips. Join thousands of expats
              who used these guides to make the leap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-200">
                <Link href="/visas">
                  Explore Visa Options
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-slate-900 font-semibold hover:bg-slate-100 shadow-lg shadow-black/20 border-0 transition-all duration-200">
                <Link href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=hero" target="_blank" rel="noopener noreferrer">
                  Free Legal Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Bar — merged into hero */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-4 gap-3 sm:gap-6 bg-white/10 backdrop-blur-md rounded-2xl px-4 sm:px-8 py-5">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80 mt-1 font-medium">
                    <span className="sm:hidden">{stat.label}</span>
                    <span className="hidden sm:inline">{stat.labelFull}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <h2 className="heading-lg mb-4">
              Everything You Need to Make the Move
            </h2>
            <p className="text-body text-lg">
              Comprehensive guides written by expats who&apos;ve actually done this — not travel bloggers passing through.
              No fluff, no sugar-coating. Just the practical information you need to navigate visas,
              find an apartment, set up healthcare, and build a life in Buenos Aires.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-white border border-stone-200 rounded-xl overflow-hidden h-full flex flex-col animate-fade-in card-feature-image"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="heading-sm mb-3">{feature.title}</h3>
                  <p className="text-body-sm mb-5 flex-grow">{feature.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-sky-700 group-hover:text-sky-600 transition-colors">
                    {feature.cta}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by Situation — image-backed overlay cards */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Explore by Your Situation</h2>
            <p className="text-body text-lg">
              Whether you&apos;re still researching from abroad, just landed at Ezeiza, or have been here for years — we have guides for your specific situation.
              Pick where you are in the journey and get the most relevant resources.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {journeyCards.map((card) => (
              <div key={card.title} className="relative rounded-xl overflow-hidden h-full min-h-[380px] flex flex-col justify-end group">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative p-6 text-white">
                  <span className="text-sky-300 font-mono text-sm font-bold">{card.step}</span>
                  <h3 className="text-xl md:text-2xl font-semibold mt-1 mb-2">{card.title}</h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{card.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {card.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides — image cards */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="heading-md mb-2">Most Popular Guides</h2>
              <p className="text-body">These three guides are where most expats start their research. They cover the biggest questions about visas, monthly budgets, and what daily life is really like on the ground in Buenos Aires.</p>
            </div>
            <Button asChild variant="outline" className="btn-outline">
              <Link href="/why-argentina">Why Buenos Aires?</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideCards.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-white border border-stone-200 rounded-xl overflow-hidden h-full flex flex-col card-feature-image"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className={`absolute top-3 left-3 ${guide.badgeClass}`}>
                    {guide.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="heading-sm mb-3">{guide.title}</h3>
                  <p className="text-body-sm mb-5 flex-grow">{guide.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-sky-700 group-hover:text-sky-600 transition-colors">
                    {guide.cta}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">What Expats Are Saying</h2>
            <p className="text-body text-lg">
              Hear directly from software engineers, designers, retirees, and freelancers who relocated to Buenos Aires.
              Their honest takes on costs, culture shock, and daily life might surprise you — these are real people sharing unfiltered experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                }}
              >
                <p className="text-body mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <LuceroLegalCTA variant="full" utm_content="homepage" />
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex items-start gap-3 max-w-3xl mx-auto text-sm text-muted-foreground">
            <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> The information on this site is for educational purposes only
              and does not constitute legal advice. Immigration laws change frequently.{" "}
              <LuceroLegalCTA variant="inline" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
