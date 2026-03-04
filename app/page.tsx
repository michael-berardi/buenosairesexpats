import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  ArrowRight,
  Shield,
  Plane,
  DollarSign,
  MapPin,
  Heart,
  BookOpen,
  Users,
  FileText,
  GraduationCap,
  Briefcase,
  Building2,
  TrendingUp,
  Clock,
  Compass,
  Home as HomeIcon,
  Mail,
  Star,
  Globe,
} from "lucide-react";
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Buenos Aires Expats | The Complete Guide to Living in Buenos Aires (2026)",
  description:
    "The most comprehensive resource for expats moving to Buenos Aires. 40+ guides, 6 visa pathways, real cost of living data, neighborhood reviews, healthcare, banking, and honest expat stories. Updated March 2026.",
  keywords: [
    "Buenos Aires expats",
    "living in Buenos Aires",
    "move to Buenos Aires",
    "Argentina expats",
    "Buenos Aires visa",
    "digital nomad Buenos Aires",
    "expat life Buenos Aires",
    "cost of living Buenos Aires",
    "Buenos Aires neighborhoods",
    "Argentina immigration",
    "expat guide Argentina 2026",
  ],
  openGraph: {
    title: "Buenos Aires Expats | The Complete Guide to Living in Buenos Aires",
    description:
      "40+ guides, 6 visa pathways, real expat stories. Everything you need to move to and thrive in Buenos Aires.",
    type: "website",
    url: "https://buenosairesexpats.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buenos Aires Expats - Your complete guide to life in Argentina",
      },
    ],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com",
  },
};

/* ─── Data ──────────────────────────────────────────────────── */

const stats = [
  { value: "40+", label: "Guides", labelFull: "Detailed Guides" },
  { value: "64+", label: "Profiles", labelFull: "Expat Profiles" },
  { value: "6", label: "Barrios", labelFull: "Neighborhoods Covered" },
  { value: "6", label: "Visas", labelFull: "Visa Pathways" },
];

const contentAreas = [
  {
    icon: FileText,
    title: "Visa Guides",
    description:
      "Compare all 6 visa options with requirements, costs, timelines, and step-by-step applications.",
    href: "/visas",
    cta: "Explore visas",
  },
  {
    icon: DollarSign,
    title: "Cost of Living",
    description:
      "Real 2026 budget breakdowns for singles, couples, and families. Rent, food, healthcare, and more.",
    href: "/cost-of-living",
    cta: "See costs",
  },
  {
    icon: MapPin,
    title: "Neighborhoods",
    description:
      "Detailed reviews of Palermo, Recoleta, Belgrano, San Telmo, and other top expat areas.",
    href: "/neighborhoods",
    cta: "Compare barrios",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Navigate prepaga insurance, find English-speaking doctors, and understand the health system.",
    href: "/healthcare",
    cta: "View options",
  },
  {
    icon: BookOpen,
    title: "Expat Guides",
    description:
      "9 in-depth guides covering safety, transport, food, taxes, Spanish, weather, and culture.",
    href: "/guides",
    cta: "Browse guides",
  },
  {
    icon: Users,
    title: "Expat Stories",
    description:
      "Real experiences from 64+ expats who moved to Buenos Aires. Honest accounts of what worked and what didn't.",
    href: "/stories",
    cta: "Read stories",
  },
];

const popularGuides = [
  {
    image: "/images/getting-started-hero.webp",
    badge: "Start Here",
    badgeClass: "badge-primary",
    title: "Getting Started in Buenos Aires",
    description:
      "Your first 90 days checklist. Everything from landing at Ezeiza to building your new life, organized by timeline.",
    href: "/guides/getting-started",
    readTime: "15 min",
  },
  {
    image: "/images/visa-digital-nomad.jpg",
    badge: "Most Popular",
    badgeClass: "badge-accent",
    title: "Argentina Digital Nomad Visa",
    description:
      "Complete guide to the 180-day remote work visa. Requirements, application process, costs, and tips for approval.",
    href: "/visas/digital-nomad",
    readTime: "12 min",
  },
  {
    image: "/images/cost-of-living-card.webp",
    badge: "Updated 2026",
    badgeClass: "badge-secondary",
    title: "Cost of Living in Buenos Aires",
    description:
      "Real monthly budget breakdowns with current prices. Rent, groceries, dining, transport, and entertainment costs.",
    href: "/cost-of-living",
    readTime: "10 min",
  },
  {
    image: "/images/neighborhoods-hero.jpg",
    badge: "Essential",
    badgeClass: "badge-primary",
    title: "Safety Guide for Expats",
    description:
      "Honest safety info: neighborhood breakdowns, common scams, emergency numbers, and solo travel tips.",
    href: "/guides/safety",
    readTime: "12 min",
  },
];

const visaPathways = [
  {
    icon: Globe,
    name: "Digital Nomad Visa",
    duration: "180 days",
    description: "Work remotely for up to 6 months. Ideal for freelancers and remote workers.",
    href: "/visas/digital-nomad",
    popular: true,
  },
  {
    icon: Briefcase,
    name: "Work Visa",
    duration: "1-3 years",
    description: "For employees with a job offer from an Argentine company.",
    href: "/visas/work",
    popular: false,
  },
  {
    icon: Clock,
    name: "Retirement Visa",
    duration: "1 year renewable",
    description: "For retirees with stable pension or passive income.",
    href: "/visas/retirement",
    popular: false,
  },
  {
    icon: GraduationCap,
    name: "Student Visa",
    duration: "Duration of studies",
    description: "Study at Argentine universities or language schools.",
    href: "/visas/student",
    popular: false,
  },
  {
    icon: TrendingUp,
    name: "Investment Visa",
    duration: "1-3 years",
    description: "For significant investments in Argentine business or real estate.",
    href: "/visas/investment",
    popular: false,
  },
  {
    icon: Building2,
    name: "Nationality Pathways",
    duration: "Varies",
    description: "Explore citizenship by descent, marriage, or naturalization.",
    href: "/visas/nationalities",
    popular: false,
  },
];

const testimonials = [
  {
    quote:
      "I was paying $3,200 for a studio in SF. Here I have a two-bedroom with a balcony for $900. The math just made sense.",
    author: "Sarah M.",
    role: "Software Engineer, moved from San Francisco",
    initials: "SM",
    color: "bg-rose-500",
  },
  {
    quote:
      "After Brexit, I wanted somewhere with culture, good food, and affordable living. Buenos Aires ticked every box.",
    author: "James W.",
    role: "Freelance Designer, moved from London",
    initials: "JW",
    color: "bg-sky-500",
  },
  {
    quote:
      "My teacher's pension goes three times as far here. I live better on $2,200/month than I did on $6,000 back home.",
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
    description:
      "Research costs, compare visa options, and understand what to expect before you arrive.",
    image: "/images/journey-planning.webp",
    icon: Compass,
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
    description:
      "Get set up with essentials: your DNI, healthcare, banking, and navigating the city.",
    image: "/images/journey-arrived.webp",
    icon: Plane,
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
    description:
      "Find permanent housing, set up your taxes efficiently, and connect with the expat community.",
    image: "/images/hero-couple.jpg",
    icon: HomeIcon,
    links: [
      { label: "Housing", href: "/housing" },
      { label: "Working & Taxes", href: "/guides/working-taxes" },
      { label: "Dining Guide", href: "/dining" },
      { label: "Expat Stories", href: "/stories" },
    ],
  },
];

const quickLinks = [
  { label: "Transportation", href: "/guides/transportation" },
  { label: "Learning Spanish", href: "/guides/learning-spanish" },
  { label: "Food & Dining", href: "/guides/food-dining" },
  { label: "Weather & Climate", href: "/guides/weather-climate" },
  { label: "Cultural Etiquette", href: "/guides/cultural-etiquette" },
  { label: "Working & Taxes", href: "/guides/working-taxes" },
  { label: "Banking", href: "/banking" },
  { label: "Housing", href: "/housing" },
  { label: "Dining Guide", href: "/dining" },
  { label: "Resources", href: "/resources" },
  { label: "Expat Profiles", href: "/expat-profiles" },
  { label: "Why Argentina?", href: "/why-argentina" },
];

/* ─── Page ──────────────────────────────────────────────────── */

export default function Home() {
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
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
            <Badge
              variant="secondary"
              className="mb-6 bg-white/95 text-foreground backdrop-blur-sm"
            >
              <Star className="w-3 h-3 mr-1.5 text-amber-500" />
              Updated March 2026
            </Badge>
            <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-white drop-shadow-lg">
              Your Complete Guide to{" "}
              <span className="text-sky-300">Life in Buenos Aires</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              40+ guides, 6 visa pathways, real cost breakdowns, and honest
              stories from expats who&apos;ve actually done it. Everything you
              need to move to and thrive in Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 transition-all duration-200"
              >
                <Link href="/visas">
                  Explore Visa Options
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-all duration-200"
              >
                <Link
                  href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=hero&utm_content=homepage"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Free Legal Consultation
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
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

      {/* ═══════════════════════════════════════════
          FEATURED CONTENT GRID
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <h2 className="heading-lg mb-4">
              Everything You Need to Make the Move
            </h2>
            <p className="text-body text-lg">
              Comprehensive guides written by expats who&apos;ve actually done
              this. No fluff, no sugar-coating — just practical information
              about visas, costs, neighborhoods, healthcare, and daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentAreas.map((area, index) => (
              <Link
                key={area.title}
                href={area.href}
                className="group card-feature animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="icon-wrapper-enhanced">
                  <area.icon className="w-7 h-7 text-sky-700" />
                </div>
                <h3 className="heading-sm mb-3">{area.title}</h3>
                <p className="text-body-sm mb-5 flex-grow">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-sky-700 group-hover:text-sky-600 transition-colors">
                  {area.cta}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          POPULAR GUIDES
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="heading-lg mb-2">Most Popular Guides</h2>
              <p className="text-body">
                The four guides where most expats start their research. They
                cover the biggest questions about visas, budgets, safety, and
                getting settled.
              </p>
            </div>
            <Button asChild variant="outline" className="btn-outline shrink-0">
              <Link href="/guides">
                View All Guides
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group bg-white border border-stone-200 rounded-xl overflow-hidden h-full flex flex-col card-feature-image"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <span
                    className={`absolute top-3 left-3 ${guide.badgeClass}`}
                  >
                    {guide.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-700 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-body-sm mb-4 flex-grow">
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{guide.readTime} read</span>
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-sky-700 group-hover:text-sky-600 transition-colors">
                      Read
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISA PATHWAYS
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">6 Visa Pathways to Argentina</h2>
            <p className="text-body text-lg">
              Whether you&apos;re a digital nomad, retiree, student, or
              investor, there&apos;s a visa that fits your situation. Compare
              all options side by side.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {visaPathways.map((visa) => (
              <Link
                key={visa.name}
                href={visa.href}
                className="group relative card-feature"
              >
                {visa.popular && (
                  <span className="absolute -top-2.5 right-4 badge-accent">
                    Popular
                  </span>
                )}
                <div className="icon-wrapper-sm mb-4">
                  <visa.icon className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-sky-700 transition-colors">
                  {visa.name}
                </h3>
                <p className="text-xs font-medium text-sky-600 mb-2">
                  {visa.duration}
                </p>
                <p className="text-body-sm flex-grow">{visa.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-sky-700 mt-4 group-hover:text-sky-600 transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-body mb-4">
              Not sure which visa is right for you?
            </p>
            <Button asChild className="bg-sky-600 hover:bg-sky-500 text-white">
              <Link href="/visas/quiz">
                Take the Visa Quiz
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPLORE BY SITUATION
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Explore by Your Situation</h2>
            <p className="text-body text-lg">
              Whether you&apos;re still researching from abroad, just landed
              at Ezeiza, or have been here for years — we have guides for
              your specific stage in the journey.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {journeyCards.map((card) => (
              <div
                key={card.title}
                className="relative rounded-xl overflow-hidden h-full min-h-[380px] flex flex-col justify-end group"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative p-6 text-white">
                  <span className="text-sky-300 font-mono text-sm font-bold">
                    {card.step}
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold mt-1 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 leading-relaxed">
                    {card.description}
                  </p>
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

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">What Expats Are Saying</h2>
            <p className="text-body text-lg">
              Hear directly from software engineers, designers, retirees,
              and freelancers who relocated to Buenos Aires. Real people,
              unfiltered experiences.
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
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" className="btn-outline">
              <Link href="/stories">
                Read More Expat Stories
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXPAT PROFILES TEASER
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-sky-100 flex items-center justify-center">
                    <Users className="w-10 h-10 text-sky-600" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="heading-md mb-3">
                    64+ Real Expat Profiles
                  </h2>
                  <p className="text-body text-lg mb-6">
                    Browse our directory of verified expat bloggers and
                    content creators who share their Buenos Aires
                    experiences. From Americans and Brits to Australians
                    and Brazilians, find perspectives that match your
                    background.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      className="bg-sky-600 hover:bg-sky-500 text-white"
                    >
                      <Link href="/expat-profiles">
                        Browse Expat Profiles
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="btn-outline"
                    >
                      <Link href="/visas/nationalities">
                        Guides by Nationality
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MORE RESOURCES — QUICK LINKS
          ═══════════════════════════════════════════ */}
      <section className="section-padding-sm bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="heading-md mb-3">More Resources</h2>
            <p className="text-body">
              Explore our full library of guides, tools, and resources for
              every aspect of expat life in Buenos Aires.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-stone-100 text-stone-700 border border-stone-200 hover:bg-sky-50 hover:text-sky-700 hover:border-sky-200 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LUCERO LEGAL CTA
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6 max-w-4xl">
          <LuceroLegalCTA
            variant="full"
            headline="Need Help with Your Visa or Residency?"
            description="Navigating Argentina's immigration system can be complex. An experienced immigration attorney can help with visa applications, residency permits, DNI processing, and citizenship. Get a free consultation to understand your options."
            utm_content="homepage-bottom"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER / COMMUNITY CTA
          ═══════════════════════════════════════════ */}
      <section className="py-16 bg-sky-700 text-white">
        <div className="container mx-auto px-5 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Expat Life in BA
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Get the latest guides, visa updates, cost of living changes,
              and insider tips delivered to your inbox. Written by expats,
              for expats.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-white text-sky-700 hover:bg-white/90 font-semibold shadow-lg"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@buenosairesexpats.com"
                className="underline underline-offset-2 hover:text-white/80"
              >
                hello@buenosairesexpats.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          LEGAL DISCLAIMER
          ═══════════════════════════════════════════ */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex items-start gap-3 max-w-3xl mx-auto text-sm text-muted-foreground">
            <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> The information on this site is
              for educational purposes only and does not constitute legal
              advice. Immigration laws change frequently.{" "}
              <LuceroLegalCTA variant="inline" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
