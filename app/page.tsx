import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { EditorialHero } from "@/components/editorial-hero";
import { PullQuote } from "@/components/pull-quote";
import {
  ArrowRight,
  Shield,
  Plane,
  DollarSign,
  MapPin,
  Heart,
  BookOpen,
  Users,
  GraduationCap,
  Briefcase,
  Building2,
  TrendingUp,
  Clock,
  Compass,
  Home as HomeIcon,
  Mail,
  Globe,
  ExternalLink,
} from "lucide-react";
import {
  generateWebSiteSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "Buenos Aires Expats | Your Insider City Guide to BA Life (2026)",
  description:
    "The hyper-local guide to living in Buenos Aires. Neighborhood-by-neighborhood reviews with real 2026 rent prices, barrio matcher quiz, coworking spots, Michelin dining guide, and street-level tips from expats who actually live here. Updated March 2026.",
  keywords: [
    "Buenos Aires expats",
    "living in Buenos Aires",
    "Palermo apartments",
    "BA digital nomad",
    "Buenos Aires neighborhoods",
    "Recoleta vs Palermo",
    "Buenos Aires rent prices 2026",
    "coworking Buenos Aires",
    "expat life Palermo",
    "best barrio Buenos Aires",
    "first week Buenos Aires",
    "Buenos Aires dining guide",
  ],
  openGraph: {
    title: "Buenos Aires Expats | Your Insider City Guide to BA Life",
    description:
      "Neighborhood reviews, real rent prices, barrio matcher quiz, coworking spots, and dining guides. The insider guide to Buenos Aires for expats and digital nomads.",
    type: "website",
    url: "https://buenosairesexpats.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buenos Aires Expats - Your insider guide to life in BA",
      },
    ],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com",
  },
};

/* ─── Data ──────────────────────────────────────────────────── */

const stats = [
  { value: "6", label: "Barrios", labelFull: "Neighborhoods Reviewed" },
  { value: "40+", label: "Guides", labelFull: "Local Guides" },
  { value: "2026", label: "Prices", labelFull: "Real 2026 Prices" },
  { value: "24", label: "Stories", labelFull: "Expat Stories" },
];

const contentAreas = [
  {
    icon: MapPin,
    title: "Neighborhood Reviews",
    description:
      "Deep-dive guides to Palermo, Recoleta, Belgrano, San Telmo, Villa Crespo, and Puerto Madero. Rent prices, safety ratings, and local insights.",
    href: "/neighborhoods",
    cta: "Compare barrios",
  },
  {
    icon: Compass,
    title: "Barrio Matcher Quiz",
    description:
      "Answer 7 questions to find your perfect Buenos Aires neighborhood based on budget, lifestyle, and priorities.",
    href: "/neighborhoods/quiz",
    cta: "Take the quiz",
  },
  {
    icon: DollarSign,
    title: "Cost of Living 2026",
    description:
      "Real monthly budgets with March 2026 prices. Rent by neighborhood, grocery costs, and what expats actually spend.",
    href: "/cost-of-living",
    cta: "See real costs",
  },
  {
    icon: BookOpen,
    title: "First Week Guide",
    description:
      "Day-by-day survival guide: SIM cards, SUBE, MercadoPago, finding your cafe, and the unwritten rules of BA life.",
    href: "/guides/first-week",
    cta: "Start here",
  },
  {
    icon: Heart,
    title: "Dining Guide",
    description:
      "Michelin-starred restaurants, neighborhood parrillas, and hidden gems. The definitive BA food guide.",
    href: "/dining",
    cta: "Explore dining",
  },
  {
    icon: Users,
    title: "Expat Stories",
    description:
      "24 real profiles from Americans, Brits, Australians, and Brazilians sharing their honest BA experiences.",
    href: "/stories",
    cta: "Read stories",
  },
];

const popularGuides = [
  {
    image: "/images/getting-started-hero.webp",
    badge: "New",
    badgeClass: "badge-primary",
    title: "Your First Week in BA",
    description:
      "Day-by-day survival guide from landing at Ezeiza to feeling like a local. SIM cards, SUBE, MercadoPago, mate etiquette, and more.",
    href: "/guides/first-week",
    readTime: "20 min",
  },
  {
    image: "/images/neighborhoods-hero.jpg",
    badge: "Interactive",
    badgeClass: "badge-accent",
    title: "Neighborhood Matcher Quiz",
    description:
      "Answer 7 questions to find your perfect barrio. Palermo, Recoleta, Belgrano, San Telmo, Villa Crespo, or Puerto Madero?",
    href: "/neighborhoods/quiz",
    readTime: "3 min",
  },
  {
    image: "/images/cost-of-living-card.webp",
    badge: "March 2026",
    badgeClass: "badge-secondary",
    title: "Cost of Living by Neighborhood",
    description:
      "Real monthly budgets: what a single person, couple, or family actually spends in Palermo vs Belgrano vs San Telmo.",
    href: "/cost-of-living",
    readTime: "10 min",
  },
  {
    image: "/images/visa-digital-nomad.jpg",
    badge: "Essential",
    badgeClass: "badge-primary",
    title: "Dining Guide: Michelin & Beyond",
    description:
      "From Aramburu (2 stars) to your neighborhood parrilla. The definitive guide to eating in Buenos Aires.",
    href: "/dining",
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

const realVoices = [
  {
    quote: "I moved to Buenos Aires thinking I'd stay 3 months. That was 4 years ago. The cost of living lets me actually save money while working remotely.",
    source: "r/digitalnomad",
    sourceUrl: "https://reddit.com/r/digitalnomad",
    context: "Discussion thread, 2024",
  },
  {
    quote: "Palermo Hollywood is where most expats start, but Villa Crespo is where the smart ones end up. Half the rent, twice the character.",
    source: "r/BuenosAires",
    sourceUrl: "https://reddit.com/r/BuenosAires",
    context: "Neighborhood advice thread",
  },
  {
    quote: "The healthcare system genuinely surprised me. I pay $80/month for private insurance that covers everything. Coming from the US, that's insane.",
    source: "r/expats",
    sourceUrl: "https://reddit.com/r/expats",
    context: "Healthcare in Argentina thread",
  },
];

const journeyCards = [
  {
    step: "01",
    title: "Planning Your Move",
    description:
      "Research neighborhoods, compare costs by barrio, and find the right visa before you arrive.",
    image: "/images/journey-planning.webp",
    icon: Compass,
    links: [
      { label: "Barrio Matcher Quiz", href: "/neighborhoods/quiz" },
      { label: "Cost of Living", href: "/cost-of-living" },
      { label: "Visa Guide", href: "/visas" },
      { label: "Why Buenos Aires?", href: "/why-argentina" },
    ],
  },
  {
    step: "02",
    title: "Just Arrived in BA",
    description:
      "Your first week survival guide: SIM card, SUBE, MercadoPago, neighborhood walks, and finding your rhythm.",
    image: "/images/journey-arrived.webp",
    icon: Plane,
    links: [
      { label: "First Week Guide", href: "/guides/first-week" },
      { label: "Getting Your DNI", href: "/guides/getting-dni" },
      { label: "Healthcare", href: "/healthcare" },
      { label: "Banking", href: "/banking" },
    ],
  },
  {
    step: "03",
    title: "Living Like a Local",
    description:
      "Find your permanent apartment, discover your neighborhood's hidden gems, and build your BA life.",
    image: "/images/hero-couple.jpg",
    icon: HomeIcon,
    links: [
      { label: "Neighborhoods", href: "/neighborhoods" },
      { label: "Dining Guide", href: "/dining" },
      { label: "Housing", href: "/housing" },
      { label: "Expat Stories", href: "/stories" },
    ],
  },
];

const quickLinks = [
  { label: "Neighborhood Matcher Quiz", href: "/neighborhoods/quiz" },
  { label: "First Week Guide", href: "/guides/first-week" },
  { label: "Dining Guide", href: "/dining" },
  { label: "Visa Options", href: "/visas" },
  { label: "Transportation", href: "/guides/transportation" },
  { label: "Learning Spanish", href: "/guides/learning-spanish" },
  { label: "Food & Dining", href: "/guides/food-dining" },
  { label: "Weather & Climate", href: "/guides/weather-climate" },
  { label: "Cultural Etiquette", href: "/guides/cultural-etiquette" },
  { label: "Working & Taxes", href: "/guides/working-taxes" },
  { label: "Banking", href: "/banking" },
  { label: "Housing", href: "/housing" },
  { label: "Resources", href: "/resources" },
  { label: "Expat Stories", href: "/stories" },
];

const realVoicesResources = {
  creators: [
    {
      name: "Sol Salute",
      url: "https://solsalute.com",
      description:
        "Living in Buenos Aires guide, updated regularly with real costs and practical tips.",
    },
    {
      name: "Pick Up The Fork",
      url: "https://pickupthefork.com",
      description:
        "Buenos Aires food blog by a local expat. Restaurant reviews, recipes, and food culture.",
    },
    {
      name: "A Gringo in Buenos Aires",
      url: "https://gringoinbuenosaires.com",
      description:
        "American expat blog covering daily life, culture, and practicalities.",
    },
  ],
  communities: [
    {
      name: "BAexpats.org",
      url: "https://baexpats.org",
      description:
        "Active forum with 10+ years of expat discussions, apartment listings, and advice.",
    },
    {
      name: "r/BuenosAires",
      url: "https://reddit.com/r/BuenosAires",
      description:
        "Reddit community for locals and expats. Great for quick questions.",
    },
    {
      name: "ExpatsBA.com",
      url: "https://expatsba.com",
      description:
        "Comprehensive community forum with neighborhood guides and event listings.",
    },
  ],
};

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
          EDITORIAL HERO
          ═══════════════════════════════════════════ */}
      <EditorialHero
        badge="Updated March 2026"
        title="The Only Buenos Aires Guide Written by People Who Actually Live Here"
        subtitle="We'll tell you which barrio is actually worth it, what you'll really pay for rent, and the things nobody mentions until you've been here six months. This isn't a travel blog."
        imageSrc="/images/hero-street-cafe.webp"
        imageAlt="Buenos Aires street cafe in Palermo"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-200"
          >
            <Link href="/neighborhoods/quiz">
              Find Your Barrio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold transition-all duration-200"
          >
            <Link href="/guides/first-week">
              First Week Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-10">
          <div className="grid grid-cols-4 gap-3 sm:gap-6 bg-primary/5 border border-primary/10 rounded-2xl px-4 sm:px-8 py-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 font-medium">
                  <span className="sm:hidden">{stat.label}</span>
                  <span className="hidden sm:inline">{stat.labelFull}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </EditorialHero>

      {/* ═══════════════════════════════════════════
          FEATURED CONTENT GRID
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
            <h2 className="font-serif heading-lg mb-4">
              Your Buenos Aires City Guide
            </h2>
            <p className="text-body text-lg">
              Hyper-local guides written by expats who live in BA right now.
              Not generic Argentina content -- street-level neighborhood reviews,
              real rent prices, and the insider tips you only learn by living here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentAreas.map((area, index) => (
              <Link
                key={area.title}
                href={area.href}
                className={`group card-feature animate-fade-in ${
                  index < 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="icon-wrapper-enhanced">
                  <area.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="heading-sm mb-3">{area.title}</h3>
                <p className="text-body-sm mb-5 flex-grow">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
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
              <h2 className="font-serif heading-lg mb-2">Start Here</h2>
              <p className="text-body">
                The four resources most expats use in their first month.
                Interactive tools, day-by-day guides, and real data -- not
                generic travel content.
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
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
                    <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary/80 transition-colors">
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
            <h2 className="font-serif heading-lg mb-4">6 Visa Pathways to Argentina</h2>
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
                  <visa.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {visa.name}
                </h3>
                <p className="text-xs font-medium text-primary mb-2">
                  {visa.duration}
                </p>
                <p className="text-body-sm flex-grow">{visa.description}</p>
                <span className="inline-flex items-center text-sm font-semibold text-primary mt-4 group-hover:text-primary/80 transition-colors">
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
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
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
            <h2 className="font-serif heading-lg mb-4">Explore by Your Situation</h2>
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
                  <span className="text-amber-300 font-mono text-sm font-bold">
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
          REAL VOICES FROM BA
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif heading-lg mb-4">Real Voices from BA</h2>
            <p className="text-body text-lg">
              What expats and digital nomads are actually saying about life
              in Buenos Aires -- sourced from real community discussions,
              not marketing copy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {realVoices.map((voice, index) => (
              <PullQuote
                key={index}
                attribution={voice.context}
                source={voice.source}
              >
                {voice.quote}
              </PullQuote>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Quotes reflect common experiences shared across expat forums and
            communities.
          </p>
          <div className="text-center mt-8">
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
          REAL EXPAT STORIES
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Real Expat Stories</h2>
            <p className="text-muted-foreground text-lg mb-8">
              24 honest, first-person accounts from expats in Buenos Aires — their wins, struggles, and what they wish someone had told them before moving.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/stories">
                Read Their Stories <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MORE RESOURCES — QUICK LINKS
          ═══════════════════════════════════════════ */}
      <section className="section-padding-sm bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif heading-md mb-3">More Resources</h2>
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
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-stone-100 text-stone-700 border border-stone-200 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          REAL VOICES — EXTERNAL RESOURCES
          ═══════════════════════════════════════════ */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif heading-lg mb-4">
              Real Voices from Buenos Aires
            </h2>
            <p className="text-body text-lg">
              We&apos;re not the only ones writing about BA life. These are
              independent creators and communities we genuinely recommend --
              people doing the work on the ground.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Content Creators */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6 text-foreground">
                Expat Content Creators
              </h3>
              <div className="space-y-4">
                {realVoicesResources.creators.map((creator) => (
                  <a
                    key={creator.name}
                    href={creator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-stone-200 bg-white p-5 transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {creator.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {creator.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Communities */}
            <div>
              <h3 className="font-serif text-xl font-semibold mb-6 text-foreground">
                Expat Communities
              </h3>
              <div className="space-y-4">
                {realVoicesResources.communities.map((community) => (
                  <a
                    key={community.name}
                    href={community.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-stone-200 bg-white p-5 transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {community.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                          {community.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10">
            These are independent resources we recommend. We have no affiliation
            with any of them.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER / COMMUNITY CTA
          ═══════════════════════════════════════════ */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-5 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Stay Updated on Expat Life in BA
            </h2>
            <p className="text-primary-foreground/85 text-lg mb-8">
              Get the latest guides, visa updates, cost of living changes,
              and insider tips delivered to your inbox. Written by expats,
              for expats.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
            <p className="text-primary-foreground/60 text-sm mt-4">
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@buenosairesexpats.com"
                className="underline underline-offset-2 hover:text-primary-foreground/80"
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
