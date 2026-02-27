import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Plane,
  Smartphone,
  CreditCard,
  Bus,
  MapPin,
  ShoppingCart,
  UtensilsCrossed,
  Home,
  Briefcase,
  Heart,
  Bike,
  Building,
  FileText,
  Users,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Clock,
  DollarSign,
  MessageCircle,
  Globe,
  Shield,
  Lightbulb,
  BookOpen,
} from "lucide-react";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { LastUpdated } from "@/components/last-updated";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Getting Started in Buenos Aires - Your First 90 Days Checklist (2026)",
  description:
    "The complete getting started checklist for moving to Buenos Aires. Step-by-step guide covering your first 24 hours, first week, first month, and first 3 months as an expat in Argentina.",
  keywords: [
    "moving to Buenos Aires",
    "Buenos Aires expat checklist",
    "first days Buenos Aires",
    "getting started Argentina",
    "Buenos Aires newcomer guide",
    "moving to Argentina 2026",
    "BA expat tips",
    "Buenos Aires arrival guide",
  ],
  openGraph: {
    title: "Getting Started in Buenos Aires - Your First 90 Days Checklist",
    description:
      "Everything you need to do in your first 90 days in Buenos Aires. From landing at EZE to building your new life in Argentina.",
    type: "article",
    publishedTime: "2025-06-01",
    modifiedTime: "2026-02-26",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/getting-started",
  },
};

const LAST_UPDATED = "2026-02-26";

const first24Hours = [
  {
    task: "Get a local SIM card",
    details:
      "Claro or Personal are the best options. Available at the airport kiosks or any kiosko in the city. Costs $5-10 USD for a prepaid SIM with data. You will need your passport. Claro tends to have the best coverage in the city, while Personal often has better data plans.",
    icon: Smartphone,
    priority: "essential",
  },
  {
    task: "Download essential apps",
    details:
      "WhatsApp (everyone uses it here, even businesses), MercadoPago (payments and transfers), Google Maps (download offline maps for BA), and Uber or Cabify for rides. These four apps will get you through the first few days.",
    icon: Globe,
    priority: "essential",
  },
  {
    task: "Get Argentine pesos",
    details:
      "Use an ATM at the airport for a small amount, then find a cambio (exchange house) in the city for better rates. Avoid the airport exchange counters - their rates are significantly worse. Western Union and crypto exchanges often offer competitive rates too.",
    icon: DollarSign,
    priority: "essential",
  },
  {
    task: "Get to your accommodation",
    details:
      "From Ezeiza (EZE), your best options are Uber/Cabify ($20-30), official airport taxi (remis, $25-35), or the Tienda Leon shuttle ($10-12 to downtown). The shuttle is cheapest but drops you at a terminal, not your door. Aeroparque (AEP) is much closer - a quick Uber for $5-10.",
    icon: Plane,
    priority: "essential",
  },
  {
    task: "Join expat WhatsApp and Telegram groups",
    details:
      "Search for 'Buenos Aires Expats' on Facebook, Telegram, and WhatsApp. These groups are goldmines for real-time advice, apartment leads, event invites, and making your first friends. The community is incredibly welcoming to newcomers.",
    icon: MessageCircle,
    priority: "recommended",
  },
];

const firstWeek = [
  {
    task: "Get a SUBE card for public transport",
    details:
      "The SUBE card works on all buses (colectivos), subways (subte), and trains. Buy one at any subway station or designated kiosko for about $2-3. Load it with credit and tap when boarding. A single ride costs around $0.15-0.30 - public transport is incredibly cheap.",
    icon: Bus,
    link: { text: "Transportation Guide", href: "/guides/transportation" },
  },
  {
    task: "Explore your neighborhood on foot",
    details:
      "Buenos Aires is a walking city. Spend a few days getting to know your barrio - find the nearest pharmacy (farmacia), laundry (lavadero), bakery (panaderia), and the best coffee spots. Each neighborhood has its own character and hidden gems.",
    icon: MapPin,
    link: { text: "Neighborhood Guide", href: "/neighborhoods" },
  },
  {
    task: "Find your nearest supermarket",
    details:
      "The main chains are Disco (mid-range), Jumbo (upscale, best imported goods), Coto (local favorite, good prices), and Dia (budget-friendly basics). For fresh produce, look for local verdulerías (greengrocers) and ferias (street markets) - much cheaper and fresher than supermarkets.",
    icon: ShoppingCart,
    link: { text: "Cost of Living", href: "/cost-of-living" },
  },
  {
    task: "Open a MercadoPago account",
    details:
      "MercadoPago is Argentina's equivalent of Venmo/PayPal and it is essential for daily life. You can set up a basic account with just your passport (no DNI needed initially). Use it to pay at shops, split bills, transfer money, and even pay for delivery. Many small businesses prefer MercadoPago over cash.",
    icon: CreditCard,
    link: { text: "Banking Guide", href: "/banking" },
  },
  {
    task: "Try the local food scene",
    details:
      "Start with the classics: empanadas (try carne, jamon y queso, and humita), a choripan from a street vendor, and a cafe con medialunas (coffee with croissants) at a local cafe. Don't miss your first proper asado (barbecue) experience - ask locals for their favorite parrilla.",
    icon: UtensilsCrossed,
    link: { text: "Food & Dining Guide", href: "/guides/food-dining" },
  },
  {
    task: "Learn basic Spanish survival phrases",
    details:
      "You don't need to be fluent, but a few key phrases go a long way: \"Cuanto sale?\" (How much?), \"La cuenta, por favor\" (The check, please), \"Donde queda...?\" (Where is...?), \"No entiendo\" (I don't understand), and \"Hablas ingles?\" (Do you speak English?). Argentines appreciate the effort.",
    icon: BookOpen,
    link: { text: "Learning Spanish Guide", href: "/guides/learning-spanish" },
  },
];

const firstMonth = [
  {
    task: "Start apartment hunting (if on Airbnb)",
    details:
      "Airbnb is fine for the first few weeks, but long-term rentals are much cheaper. Check ZonaProp and Argenprop for listings, and join Facebook groups like 'Buenos Aires Apartments for Rent' and 'Expats in Buenos Aires Housing.' Expect to pay 1-3 months upfront as a deposit. Palermo, Recoleta, and Belgrano are popular expat neighborhoods.",
    icon: Home,
    link: { text: "Housing Guide", href: "/housing" },
  },
  {
    task: "Research visa options based on your situation",
    details:
      "Most nationalities get 90 days as a tourist (extendable once for another 90 days). If you plan to stay longer, look into the Digital Nomad Visa, Rentista Visa, or other residency options. Start researching early - the process takes time and planning.",
    icon: FileText,
    link: { text: "Visa Options", href: "/visas" },
  },
  {
    task: "Find a local gym or activities",
    details:
      "Buenos Aires has excellent fitness options. Chain gyms like Megatlon and SportClub are well-equipped ($30-60/month). You will also find yoga studios, CrossFit boxes, and running groups in every neighborhood. Parque Tres de Febrero and the Costanera are popular for outdoor exercise.",
    icon: Heart,
  },
  {
    task: "Register for EcoBici if you cycle",
    details:
      "Buenos Aires has an extensive free bike-sharing system called EcoBici with stations across the city. Register with your passport at any station or through the BA Ecobici app. The city also has a growing network of protected bike lanes (ciclovías), especially in Palermo and Recoleta.",
    icon: Bike,
  },
  {
    task: "Get health insurance (prepaga)",
    details:
      "Argentina has excellent private healthcare at a fraction of US or European costs. The top prepagas (private health plans) are OSDE, Swiss Medical, and Galeno. Costs range from $50-200/month depending on coverage level. You can sign up without a DNI using your passport initially.",
    icon: Heart,
    link: { text: "Healthcare Guide", href: "/healthcare" },
  },
  {
    task: "Open a bank account (if you have temporary residency)",
    details:
      "With a DNI or temporary residency, you can open a bank account at Santander, BBVA, or Galicia. Without residency, your options are limited - stick with MercadoPago and international cards. Brubank and Uala are fintech alternatives that are easier to open.",
    icon: Building,
    link: { text: "Banking Guide", href: "/banking" },
  },
];

const firstThreeMonths = [
  {
    task: "Apply for your DNI if staying long-term",
    details:
      "The DNI (Documento Nacional de Identidad) is your Argentine ID card. You need residency approval first, then apply at RENAPER. The DNI unlocks everything: bank accounts, phone plans, contracts, and local pricing. Start the process early - it can take 2-6 months total.",
    icon: FileText,
    link: { text: "Getting Your DNI", href: "/guides/getting-dni" },
  },
  {
    task: "Set up monotributo if freelancing locally",
    details:
      "If you are doing any work for Argentine clients or billing locally, you will need a monotributo (simplified tax regime). It is relatively straightforward to set up with a DNI and an accountant. Categories range from A to K based on income, with monthly payments starting around $20.",
    icon: Briefcase,
  },
  {
    task: "Find a good accountant (contador)",
    details:
      "An Argentine accountant (contador) is essential if you are earning money, paying taxes, or navigating the financial system. Expect to pay $30-80/month for ongoing services. Ask other expats for recommendations - a bilingual contador who understands expat situations is worth their weight in gold.",
    icon: DollarSign,
  },
  {
    task: "Build your social network",
    details:
      "Attend expat meetups (Meetup.com has tons), join language exchange events (intercambios), take a tango or cooking class, or join a sports league. The expat community in BA is one of the most active in the world. You will make lifelong friends if you put yourself out there.",
    icon: Users,
  },
  {
    task: "Evaluate neighborhoods for a permanent move",
    details:
      "After trying your first neighborhood, explore others before committing long-term. Each barrio has a different vibe: Palermo is trendy and social, Recoleta is classic and elegant, Belgrano is family-friendly, San Telmo is bohemian, and Villa Crespo is the up-and-coming sweet spot of price and location.",
    icon: MapPin,
    link: { text: "Neighborhood Guide", href: "/neighborhoods" },
  },
];

const essentialApps = [
  {
    name: "MercadoPago",
    category: "Payments & Transfers",
    description:
      "Argentina's essential payment app. Send and receive money, pay at stores by scanning QR codes, pay utility bills, and even invest. Think of it as Venmo, Apple Pay, and a basic banking app rolled into one. You absolutely need this.",
  },
  {
    name: "PedidosYa",
    category: "Food Delivery",
    description:
      "The most popular food delivery app in Argentina. Browse thousands of restaurants, order groceries, and get items delivered to your door. Similar to DoorDash or Deliveroo. Accepts cash, card, or MercadoPago.",
  },
  {
    name: "Uber / Cabify",
    category: "Transportation",
    description:
      "Both work well in Buenos Aires. Uber is technically in a legal gray area but widely used. Cabify is the fully legal alternative. Prices are very affordable - a 20-minute ride typically costs $3-5. Both are much safer than hailing street taxis.",
  },
  {
    name: "Google Maps",
    category: "Navigation",
    description:
      "Works great for walking directions and driving. Download the offline map for Buenos Aires in case you lose signal. For public transport routes, BA Como Llego (the official city app) sometimes has more accurate bus routes.",
  },
  {
    name: "WhatsApp",
    category: "Communication",
    description:
      "Not just a messaging app here - it is the primary communication tool for everything. Businesses take orders via WhatsApp, landlords communicate through it, and it is how you will coordinate with new friends. Having it is non-negotiable.",
  },
  {
    name: "Duolingo / Babbel",
    category: "Language Learning",
    description:
      "Start learning Spanish before you arrive or continue once you are here. Even 10 minutes a day helps. Pair app learning with in-person language exchanges (intercambios) for the fastest progress. Argentine Spanish has unique features (vos instead of tu, the 'sh' sound for ll/y).",
  },
  {
    name: "BA Como Llego",
    category: "Public Transit",
    description:
      "The official Buenos Aires transit app. Shows real-time bus arrivals, subte schedules, and the best routes to get anywhere in the city. More reliable than Google Maps for colectivo (bus) routes since it uses official city data.",
  },
];

const commonMistakes = [
  {
    mistake: "Flashing expensive electronics in public",
    why: "Phone snatching is the most common crime targeting expats. Walking down the street staring at your iPhone is an invitation.",
    fix: "Keep your phone in your front pocket. If you need to use it, step into a shop or cafe. Use earbuds to take calls hands-free. Consider a cheap secondary phone for walking around.",
    link: { text: "Safety Guide", href: "/guides/safety" },
  },
  {
    mistake: "Changing money on the street",
    why: "The 'blue dollar' (parallel exchange rate) used to offer significantly better rates, making street exchange popular. As of 2026, the official and blue rates have largely converged, so the risk is no longer worth the minimal gain.",
    fix: "Use official exchange houses (casas de cambio), ATMs, or Western Union. The rates are now competitive and you avoid the risk of counterfeit bills or getting scammed.",
  },
  {
    mistake: "Signing rental contracts without understanding the terms",
    why: "Argentine rental contracts often include clauses about inflation adjustments, early termination penalties, and deposit conditions that can surprise you. Some informal contracts offer no legal protection.",
    fix: "Have a bilingual friend or lawyer review any contract before signing. Understand the adjustment formula (ICL index), cancellation terms, and exactly what your deposit covers. Ask about utility transfers.",
    link: { text: "Housing Guide", href: "/housing" },
  },
  {
    mistake: "Ignoring health insurance",
    why: "Argentina has public healthcare, but wait times can be long and quality varies. A medical emergency without coverage can still be expensive, and some expats have found themselves in difficult situations.",
    fix: "Get a prepaga (private health plan) within your first month. OSDE, Swiss Medical, and Galeno are the top options. Plans start at $50-80/month and cover everything from doctor visits to surgery. It is one of the best value propositions in BA.",
    link: { text: "Healthcare Guide", href: "/healthcare" },
  },
  {
    mistake: "Not having a backup plan for money access",
    why: "ATMs can have withdrawal limits, your foreign card might get blocked, and exchange rates fluctuate. Relying on a single source of funds is risky.",
    fix: "Bring multiple cards from different banks. Set up Wise or Remitly for international transfers. Keep some emergency cash in USD. Tell your bank you are traveling to Argentina so they don't freeze your card.",
    link: { text: "Banking Guide", href: "/banking" },
  },
  {
    mistake: "Trying to do everything from day one",
    why: "Moving to a new country is overwhelming. Trying to find an apartment, set up banking, learn Spanish, and build a social life all in the first week leads to burnout and bad decisions.",
    fix: "Follow this checklist at the suggested pace. Give yourself grace during the first month. The adjustment period is real, and Buenos Aires is a city that rewards patience. The best decisions come after you have experienced the city for a while.",
  },
];

export default function GettingStartedPage() {
  const articleSchema = generateArticleSchema({
    headline:
      "Getting Started in Buenos Aires - Your First 90 Days Checklist",
    description:
      "The complete getting started checklist for moving to Buenos Aires. Step-by-step guide covering your first 24 hours, first week, first month, and first 3 months as an expat in Argentina.",
    url: "https://buenosairesexpats.com/guides/getting-started",
    datePublished: "2025-06-01",
    dateModified: LAST_UPDATED,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Getting Started" },
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Get Started Living in Buenos Aires",
    description:
      "A comprehensive step-by-step checklist for your first 90 days in Buenos Aires, from arrival to settling in.",
    totalTime: "P90D",
    steps: [
      {
        name: "Get a local SIM card",
        text: "Buy a Claro or Personal prepaid SIM at the airport or any kiosko. Costs $5-10 USD with data included.",
      },
      {
        name: "Download essential apps",
        text: "Install WhatsApp, MercadoPago, Google Maps, and Uber/Cabify on your phone.",
      },
      {
        name: "Get Argentine pesos",
        text: "Use an ATM or exchange house (cambio) to get local currency. Avoid airport exchange counters.",
      },
      {
        name: "Get a SUBE card for transport",
        text: "Purchase a SUBE card at any subway station for use on buses, subte, and trains.",
      },
      {
        name: "Open a MercadoPago account",
        text: "Set up MercadoPago with your passport for digital payments and transfers.",
      },
      {
        name: "Start apartment hunting",
        text: "Search ZonaProp, Argenprop, and Facebook groups for long-term rentals.",
      },
      {
        name: "Research visa options",
        text: "Determine which visa type suits your situation: Digital Nomad, Rentista, or other residency options.",
      },
      {
        name: "Get health insurance",
        text: "Sign up for a prepaga (private health plan) like OSDE, Swiss Medical, or Galeno.",
      },
      {
        name: "Apply for DNI if staying long-term",
        text: "Begin the residency and DNI application process at Migraciones and RENAPER.",
      },
      {
        name: "Build your social network",
        text: "Attend expat meetups, language exchanges, and local events to build community.",
      },
    ],
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Breadcrumb */}
      <div className="border-b bg-stone-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-stone-600">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-stone-900">
              Guides
            </Link>
            <span>/</span>
            <span className="text-stone-900">Getting Started</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 badge-primary" variant="secondary">
              <Clock className="w-3 h-3 mr-1" />
              Updated February 2026
            </Badge>
            <h1 className="heading-lg mb-6">
              Getting Started in Buenos Aires
              <span className="block text-sky-600 mt-2">
                Your First 90 Days Checklist
              </span>
            </h1>
            <p className="text-body text-lg mb-6">
              You made the leap. Welcome to Buenos Aires. Whether you are here
              for a few months or planning to build a new life, this
              step-by-step checklist will guide you from touchdown at Ezeiza to
              feeling like a local. Take it one day at a time - thousands of
              expats have walked this path before you, and it is absolutely
              worth it.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
              <div className="flex items-center gap-2 text-stone-600">
                <BookOpen className="w-4 h-4 text-sky-500" />
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>30+ actionable items</span>
              </div>
              <div className="flex items-center gap-2 text-stone-600">
                <Clock className="w-4 h-4 text-sky-500" />
                <span>90-day timeline</span>
              </div>
            </div>
            <LastUpdated date={LAST_UPDATED} />
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-stone-500 mb-3 text-center uppercase tracking-wide">
              Jump to Section
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "First 24 Hours", href: "#first-24-hours" },
                { label: "First Week", href: "#first-week" },
                { label: "First Month", href: "#first-month" },
                { label: "First 3 Months", href: "#first-3-months" },
                { label: "Essential Apps", href: "#essential-apps" },
                { label: "Mistakes to Avoid", href: "#common-mistakes" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-sm rounded-full border border-stone-200 text-stone-600 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* First 24 Hours */}
      <section id="first-24-hours" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="step-number">1</div>
              <div>
                <h2 className="heading-md">First 24 Hours</h2>
                <p className="text-body-sm">
                  Get connected, get cash, and get settled.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {first24Hours.map((item) => (
                <Card
                  key={item.task}
                  className={
                    item.priority === "essential"
                      ? "border-sky-200"
                      : ""
                  }
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="icon-wrapper flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">
                            {item.task}
                          </h3>
                          {item.priority === "essential" && (
                            <Badge variant="default" className="text-xs">
                              Essential
                            </Badge>
                          )}
                        </div>
                        <p className="text-body-sm">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-sky-50 dark:bg-sky-950/20 rounded-lg border border-sky-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-sky-800 dark:text-sky-200">
                  <strong>Pro tip:</strong> Don&apos;t stress about getting
                  everything perfect on day one. Your only real priorities are
                  connectivity (SIM card), cash, and getting to your
                  accommodation safely. Everything else can wait until tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Week */}
      <section id="first-week" className="section-padding bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="step-number">2</div>
              <div>
                <h2 className="heading-md">First Week</h2>
                <p className="text-body-sm">
                  Start building the daily rhythms of your new life.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {firstWeek.map((item) => (
                <div key={item.task} className="step-card">
                  <div className="icon-wrapper flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.task}</h3>
                    <p className="text-body-sm mb-3">{item.details}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-600 transition-colors"
                      >
                        {item.link.text}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>The adjustment period is real.</strong> You might feel
                  overwhelmed, lonely, or question your decision around day 3-5.
                  This is completely normal. Give yourself permission to take it
                  slow. The city will still be here tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Month */}
      <section id="first-month" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="step-number">3</div>
              <div>
                <h2 className="heading-md">First Month</h2>
                <p className="text-body-sm">
                  Time to set up the foundations for your longer-term stay.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {firstMonth.map((item) => (
                <Card key={item.task}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="icon-wrapper flex-shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {item.task}
                        </h3>
                        <p className="text-body-sm mb-3">{item.details}</p>
                        {item.link && (
                          <Link
                            href={item.link.href}
                            className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-600 transition-colors"
                          >
                            {item.link.text}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Lucero Legal CTA after visa section */}
            <div className="mt-8">
              <LuceroLegalCTA
                variant="compact"
                headline="Ready to Make It Official?"
                description="From tourist to resident - Lucero Legal can help you find the right visa path for your situation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* First 3 Months */}
      <section id="first-3-months" className="section-padding bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="step-number">4</div>
              <div>
                <h2 className="heading-md">First 3 Months</h2>
                <p className="text-body-sm">
                  You are settling in. Now it is time to put down roots.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {firstThreeMonths.map((item) => (
                <div key={item.task} className="step-card">
                  <div className="icon-wrapper flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.task}</h3>
                    <p className="text-body-sm mb-3">{item.details}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-600 transition-colors"
                      >
                        {item.link.text}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Apps */}
      <section id="essential-apps" className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-2 text-center">
              Essential Apps Guide
            </h2>
            <p className="text-body text-center mb-8">
              These seven apps will cover 95% of your daily needs in Buenos
              Aires. Download them all before you leave the airport.
            </p>
            <div className="space-y-4">
              {essentialApps.map((app) => (
                <Card key={app.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                      <Badge variant="secondary">{app.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body-sm">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section
        id="common-mistakes"
        className="section-padding bg-red-50 dark:bg-red-950/20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-2 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Common Mistakes to Avoid
            </h2>
            <p className="text-body text-center mb-8">
              Learn from the mistakes of those who came before you. Every
              one of these has tripped up at least a dozen expats.
            </p>
            <div className="space-y-4">
              {commonMistakes.map((item) => (
                <Card key={item.mistake} className="border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-700 dark:text-red-300">
                      {item.mistake}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-stone-600 mb-3">{item.why}</p>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            <strong>What to do instead:</strong> {item.fix}
                          </p>
                          {item.link && (
                            <Link
                              href={item.link.href}
                              className="inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-600 mt-2 transition-colors"
                            >
                              {item.link.text}
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Budget Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-md mb-2 text-center">
              First Month Budget Estimate
            </h2>
            <p className="text-body text-center mb-8">
              Here is what you can expect to spend in your first month getting
              set up. These are realistic 2026 numbers based on a comfortable
              but not extravagant lifestyle.
            </p>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[
                    {
                      item: "Temporary accommodation (Airbnb)",
                      cost: "$600-1,200",
                    },
                    { item: "SIM card + first month data", cost: "$10-20" },
                    { item: "SUBE card + transport", cost: "$15-25" },
                    { item: "Groceries", cost: "$150-250" },
                    {
                      item: "Eating out (casual, 2-3x/week)",
                      cost: "$100-200",
                    },
                    { item: "Health insurance (prepaga)", cost: "$50-200" },
                    { item: "Coworking or cafe hopping", cost: "$50-100" },
                    { item: "Entertainment & social", cost: "$100-200" },
                    {
                      item: "Miscellaneous (pharmacy, home supplies)",
                      cost: "$50-100",
                    },
                  ].map((item) => (
                    <div
                      key={item.item}
                      className="flex justify-between items-center py-2 border-b last:border-0"
                    >
                      <span className="text-stone-600">{item.item}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-stone-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Estimated Total</span>
                    <span className="font-bold text-sky-600">
                      $1,125-2,295
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 mt-1">
                    Costs vary significantly by neighborhood and lifestyle. See
                    our{" "}
                    <Link
                      href="/cost-of-living"
                      className="text-sky-700 underline hover:text-sky-600"
                    >
                      full cost of living breakdown
                    </Link>{" "}
                    for detailed numbers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-sm mb-6 text-center">
              Continue Your Journey
            </h2>
            <p className="text-body text-center mb-8">
              This checklist is just the beginning. Dive deeper into the topics
              that matter most for your situation.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Cost of Living",
                  description:
                    "Detailed breakdown of monthly expenses, from rent to groceries.",
                  href: "/cost-of-living",
                  icon: DollarSign,
                },
                {
                  title: "Neighborhoods",
                  description:
                    "Find the perfect barrio for your lifestyle and budget.",
                  href: "/neighborhoods",
                  icon: MapPin,
                },
                {
                  title: "Healthcare",
                  description:
                    "How the health system works and which prepaga to choose.",
                  href: "/healthcare",
                  icon: Heart,
                },
                {
                  title: "Banking",
                  description:
                    "Opening accounts, transferring money, and managing finances.",
                  href: "/banking",
                  icon: Building,
                },
                {
                  title: "Housing",
                  description:
                    "Finding apartments, understanding contracts, and tenant rights.",
                  href: "/housing",
                  icon: Home,
                },
                {
                  title: "Visa Options",
                  description:
                    "Digital nomad, rentista, work, and other visa pathways.",
                  href: "/visas",
                  icon: FileText,
                },
                {
                  title: "Safety Guide",
                  description:
                    "Neighborhood safety ratings, scams to avoid, and emergency numbers.",
                  href: "/guides/safety",
                  icon: Shield,
                },
                {
                  title: "Getting Your DNI",
                  description:
                    "Step-by-step guide to getting your Argentine identity document.",
                  href: "/guides/getting-dni",
                  icon: FileText,
                },
                {
                  title: "Food & Dining",
                  description:
                    "Best restaurants, local food culture, and delivery apps.",
                  href: "/guides/food-dining",
                  icon: UtensilsCrossed,
                },
              ].map((guide) => (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-feature h-full transition-all duration-200 group-hover:border-sky-200 group-hover:shadow-md">
                    <div className="icon-wrapper mb-3">
                      <guide.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-sky-700 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-body-sm">{guide.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Encouragement CTA */}
      <section className="section-padding bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-md mb-4">
              You Have Got This
            </h2>
            <p className="text-white/90 mb-4 text-lg">
              Moving to Buenos Aires is one of the most exciting decisions you
              will ever make. Yes, there will be challenges - paperwork,
              language barriers, and moments of doubt. But there is a reason
              thousands of expats call this city home: the incredible food, the
              warm people, the affordable lifestyle, and the energy of a city
              that never sleeps.
            </p>
            <p className="text-white/80 mb-8">
              Take it one step at a time. Follow this checklist. Ask for help
              when you need it. And most importantly - enjoy the adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link href="/cost-of-living">Full Cost Breakdown</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
