import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { LastUpdated } from "@/components/last-updated";
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateFAQPageSchema,
} from "@/lib/schema";
import {
  Plane,
  Smartphone,
  CreditCard,
  Coffee,
  MapPin,
  ShoppingCart,
  Bus,
  Utensils,
  Heart,
  Building,
  MessageCircle,
  Globe,
  Shield,
  Sun,
  ArrowRight,
  Clock,
  Star,
  CheckCircle,
  Lightbulb,
  Wallet,
  Wifi,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Your First Week in Buenos Aires | Day-by-Day Survival Guide (2026)",
  description:
    "A detailed day-by-day guide to your first 7 days in Buenos Aires. From landing at Ezeiza to feeling like a local -- SIM cards, SUBE, MercadoPago, neighborhoods, food, and the unwritten rules of BA life. Updated March 2026.",
  keywords: [
    "first week Buenos Aires",
    "just arrived Buenos Aires",
    "Buenos Aires day by day guide",
    "new to Buenos Aires",
    "BA survival guide",
    "Buenos Aires first time",
    "moving to BA checklist",
    "Ezeiza airport guide",
    "Buenos Aires tips newcomers",
  ],
  openGraph: {
    title: "Your First Week in Buenos Aires | Day-by-Day Survival Guide",
    description:
      "Day-by-day guide covering everything from landing at Ezeiza to feeling like a porteno. Updated March 2026.",
    type: "article",
    publishedTime: "2026-03-01",
    modifiedTime: "2026-03-01",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "First Week in Buenos Aires Guide",
      },
    ],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/first-week",
  },
};

const LAST_UPDATED = "2026-03-01";

/* ─── Data ──────────────────────────────────────────────── */

const days = [
  {
    day: 1,
    title: "Landing & Getting Set Up",
    subtitle: "From Ezeiza to your first empanada",
    icon: Plane,
    tasks: [
      {
        title: "Airport to city: know your options",
        icon: Plane,
        time: "1-2 hours",
        detail:
          "From Ezeiza (EZE): Uber/Cabify costs $20-30 and is the easiest option. Official remis taxis run $25-35 (book at the arrivals counter). The Tienda Leon shuttle is cheapest at $10-12 but drops you at a terminal in Retiro, not your door. If flying into Aeroparque (AEP), it's a quick $5-10 Uber to most neighborhoods.",
        proTip:
          "Download Uber and Cabify BEFORE you land and add your foreign credit card. You'll need one working when you arrive. Uber works everywhere; Cabify sometimes has better rates.",
      },
      {
        title: "Get a SIM card immediately",
        icon: Smartphone,
        time: "15 minutes",
        detail:
          "Buy a Claro or Personal prepaid SIM at the airport kiosk (arrivals hall). Costs $5-10 USD. You need your passport. Claro has the best city coverage; Personal often has better data plans. Get at least 10GB -- you'll burn through data with maps and translation apps.",
        proTip:
          "If the airport kiosks are closed (late arrivals), any kiosko in the city sells SIMs. Look for the Claro or Personal signs. Ask for a 'chip prepago con datos.'",
      },
      {
        title: "Download the essential 5 apps",
        icon: Globe,
        time: "10 minutes",
        detail:
          "WhatsApp (everyone uses it -- businesses, landlords, delivery), MercadoPago (Argentina's Venmo, works everywhere), Google Maps (download the BA offline map), Uber or Cabify, and Como Llego (official BA transit app, better than Google for buses). These five apps will get you through the first month.",
        proTip:
          "Set WhatsApp as your default messaging app. Seriously. Even your landlord, doctor, and plumber will message you on WhatsApp. It's the de facto communication platform in Argentina.",
      },
      {
        title: "Get Argentine pesos (the smart way)",
        icon: Wallet,
        time: "30 minutes",
        detail:
          "Skip the airport exchange counters (terrible rates). Withdraw a small amount from an ATM for immediate needs (taxi, food). For real money, use Western Union (best rates for USD/ARS), a cueva (informal exchange -- ask your Airbnb host), or bring physical USD and exchange at a cambio in the city center.",
        proTip:
          "The 'blue dollar' gap has narrowed dramatically under Milei's reforms. As of March 2026, the gap is only 2-5%, down from over 100% in 2023. Western Union and cambios still offer slightly better rates than banks or ATMs, but the difference is much smaller now.",
      },
      {
        title: "Your first meal: empanadas",
        icon: Utensils,
        time: "30 minutes",
        detail:
          "Don't overthink it. Walk to the nearest empanada shop and order 'una docena variada' (a dozen mixed). Standards: carne (beef), jamon y queso (ham and cheese), humita (corn). Price: about $10-15 for a dozen at a neighborhood spot. Pair with a Quilmes beer or a Malbec. Welcome to Buenos Aires.",
        proTip:
          "Locals eat empanadas with their hands. No fork required. If the empanada is well-made, it won't leak. The creased edge (repulgue) pattern often indicates the filling -- but honestly, just ask.",
      },
    ],
  },
  {
    day: 2,
    title: "Money, Transport & Your Barrio",
    subtitle: "Setting up the infrastructure of daily life",
    icon: CreditCard,
    tasks: [
      {
        title: "Set up MercadoPago",
        icon: CreditCard,
        time: "20 minutes",
        detail:
          "Open the MercadoPago app and create an account with your passport (no DNI needed for a basic account). Link your foreign debit card or load cash at a Rapipago/Pago Facil kiosk. MercadoPago is how you'll pay for most things -- restaurants, delivery, shops, and even street vendors.",
        proTip:
          "Many small businesses give a 10-15% discount for paying in cash ('efectivo') because they avoid card fees. Always ask 'Hay descuento por efectivo?' (Is there a cash discount?).",
      },
      {
        title: "Get your SUBE card",
        icon: Bus,
        time: "15 minutes",
        detail:
          "Buy a SUBE card at any subway (subte) station or designated kiosk. Costs about $2-3. Load it with credit (you can use MercadoPago!). This one card works on ALL public transport: subte, buses (colectivos), and trains. A single ride costs $0.30-0.60 -- absurdly cheap.",
        proTip:
          "The BA subte runs roughly 5 AM to 11 PM (shorter on Sundays). After that, night buses (colectivos nocturnos) run key routes. The bus system is actually more extensive than the subway -- learn to love it.",
      },
      {
        title: "Walk your neighborhood for 2 hours",
        icon: MapPin,
        time: "2 hours",
        detail:
          "This is non-negotiable. Spend two hours walking your immediate area. Find: the nearest pharmacy (farmacia), laundry (lavadero), supermarket (supermercado), bakery (panaderia), cafe with WiFi, and ATM. Note which streets are well-lit at night. Buenos Aires rewards those who walk it.",
        proTip:
          "Every neighborhood has a 'main drag' where commercial life concentrates. In Palermo it's Honduras/Thames; in Recoleta it's Av. Santa Fe; in San Telmo it's Defensa. Find yours and orient from there.",
      },
      {
        title: "Have a proper cafe experience",
        icon: Coffee,
        time: "1 hour",
        detail:
          "Sit down at a local cafe (not Starbucks). Order a 'cafe con leche' and 'medialunas' (croissants). In Buenos Aires, the cafe is your second living room. Linger. Read. People-watch. Nobody will rush you. Tipping: leave 10% or round up.",
        proTip:
          "For coworking, look for cafes with 'WiFi' signs in the window. In Palermo: Cuervo Cafe, Lattente, Full City Coffee House. In Recoleta: La Biela (historic), Roux Cafe. In San Telmo: Coffee Town, Federal.",
      },
    ],
  },
  {
    day: 3,
    title: "Food Shopping & Cooking Basics",
    subtitle: "Eating well for less than you'd believe",
    icon: ShoppingCart,
    tasks: [
      {
        title: "Stock your kitchen at the right places",
        icon: ShoppingCart,
        time: "1-2 hours",
        detail:
          "Supermarket chains: Coto (best prices, local favorite), Dia (budget basics), Disco (mid-range), Jumbo (upscale, best for imported goods). But the real secret is local markets: verdulerías (greengrocers) for produce at half supermarket prices, and carnicerías (butchers) for Argentine beef.",
        proTip:
          "Produce at a verdulería costs 40-60% less than at a supermarket and is fresher. A full week of fruits and vegetables for one person runs $5-8 at a verdulería. Learn to say 'un kilo de...' (a kilo of).",
      },
      {
        title: "Find your local feria (street market)",
        icon: Sun,
        time: "1 hour",
        detail:
          "Every neighborhood has a weekly feria with local produce, meat, cheese, and prepared foods. Palermo: Feria de Thames (Saturday). San Telmo: Feria de San Telmo (Sunday -- famous). Belgrano: Feria de Belgrano (weekend). These markets are where portenos actually shop.",
        proTip:
          "Bring your own bag (bolsa). Many vendors are cash-only. Arrive early (before 11 AM) for the best selection. The ferias are also great for meeting your neighbors.",
      },
      {
        title: "Cook your first asado at home",
        icon: Utensils,
        time: "2-3 hours",
        detail:
          "Go to a carnicería and ask for 'tira de asado' (short ribs, about $3-4/kg), 'vacio' (flank, $5-6/kg), or 'chorizo' (sausage, $2-3/kg). If your apartment has a parrilla (grill), use it. If not, a cast iron pan works. Season with salt only -- Argentine beef doesn't need anything else.",
        proTip:
          "Argentine portions are enormous. 400g of meat per person is the local standard, but 300g is plenty if you're not used to it. Always buy 'provoleta' cheese to grill as a starter -- it's the Argentine appetizer.",
      },
    ],
  },
  {
    day: 4,
    title: "Getting Connected",
    subtitle: "Building your social network in BA",
    icon: MessageCircle,
    tasks: [
      {
        title: "Join expat WhatsApp and Telegram groups",
        icon: MessageCircle,
        time: "30 minutes",
        detail:
          "Search for 'Buenos Aires Expats' on Telegram and Facebook. Key groups: BA Expats (general), BA Digital Nomads (remote workers), BA Foodies (restaurant recs), and BA Housing (apartment leads). These groups are goldmines for real-time advice and social events.",
        proTip:
          "Telegram groups tend to be more active and better moderated than Facebook groups. The 'BA Newcomers' groups are particularly welcoming. Lurk for a day to understand the vibe before posting.",
      },
      {
        title: "Visit a coworking space",
        icon: Wifi,
        time: "2-3 hours",
        detail:
          "If you work remotely, try a coworking space. Top picks: AreaTres (Palermo, professional, good events), Selina (Palermo, backpacker vibe, rooftop), Urban Station (multiple locations, by the hour), WeWork (Retiro/Puerto Madero, corporate). Day passes run $5-15.",
        proTip:
          "Many coworking spaces host weekly events -- happy hours, skill shares, language exchanges. These are the easiest way to meet people when you first arrive. AreaTres and Selina are particularly good for this.",
      },
      {
        title: "Attend a language exchange or meetup",
        icon: Globe,
        time: "2 hours",
        detail:
          "Language exchanges (intercambios) happen almost every night in BA. Mundolingo (multiple locations, free), Mate Club (Palermo, structured), and BA Language Exchange (various venues) are the biggest. Even if your Spanish is zero, go -- everyone speaks English and wants to practice.",
        proTip:
          "Meetup.com has dozens of active Buenos Aires groups: hiking, photography, book clubs, tech meetups, and more. The BA Tech community is particularly vibrant and welcoming to newcomers.",
      },
    ],
  },
  {
    day: 5,
    title: "Explore Beyond Your Barrio",
    subtitle: "Getting to know the real Buenos Aires",
    icon: MapPin,
    tasks: [
      {
        title: "Visit a different neighborhood",
        icon: MapPin,
        time: "Half day",
        detail:
          "If you're in Palermo, spend a morning in San Telmo. If in Recoleta, explore Villa Crespo. Take the subte or a bus -- experiencing the transit system is part of learning the city. Each barrio has a completely different personality, and you might find that your 'planned' neighborhood isn't actually your best fit.",
        proTip:
          "Take the Subte D from Palermo to downtown (Catedral station) and walk through Plaza de Mayo, past Casa Rosada, and down the pedestrian Florida street. Then walk south to San Telmo. This route gives you a concentrated taste of BA's architectural and cultural range.",
      },
      {
        title: "Have a proper parrilla dinner",
        icon: Utensils,
        time: "2-3 hours",
        detail:
          "Go to a real neighborhood parrilla (not a tourist trap). Order: provoleta (grilled cheese), morcilla (blood sausage -- trust us), entraña or vacio (flank cuts), and a Malbec from Mendoza. Budget: $15-25 per person with wine. Dinner starts at 9 PM at the earliest. 10 PM is normal.",
        proTip:
          "Don Julio is worth the hype if you can get a reservation (book weeks ahead). For no-reservation parrillas, try La Cabrera (Palermo), La Brigada (San Telmo), or El Pobre Luis (Belgrano). Ask for 'punto medio' (medium-rare) or 'jugoso' (rare).",
      },
      {
        title: "Walk through a park and drink mate",
        icon: Sun,
        time: "1-2 hours",
        detail:
          "Buy a thermos (termo), mate gourd, and yerba mate at any supermarket (total: $10-15). Fill the thermos with hot (not boiling) water and head to Bosques de Palermo, Parque Centenario, or Reserva Ecologica. Sit on the grass and practice the mate ritual. This is how portenos decompress.",
        proTip:
          "Mate etiquette: the cebador (preparer) drinks first, then passes clockwise. Don't move the bombilla (straw). Say 'gracias' when you're done (it means 'no more for me'). Don't say 'gracias' between rounds unless you want to stop.",
      },
    ],
  },
  {
    day: 6,
    title: "Practical Admin & Health",
    subtitle: "The boring stuff that saves you later",
    icon: Shield,
    tasks: [
      {
        title: "Research health insurance (prepaga)",
        icon: Heart,
        time: "1 hour",
        detail:
          "If you're staying more than a month, get a prepaga (private health plan). Top options: OSDE (premium, $240-600/month), Swiss Medical ($220-540/month), Galeno ($120-300/month). They cover doctor visits, specialists, prescriptions, and emergency care. Many have English-speaking staff.",
        proTip:
          "Public hospitals are free for everyone (including foreigners) but wait times are long. For urgent care, go to a guardia (ER) at a private hospital like Hospital Aleman, Hospital Britanico, or Hospital Italiano. They'll treat you and bill later.",
      },
      {
        title: "Locate the nearest pharmacy",
        icon: Heart,
        time: "15 minutes",
        detail:
          "Farmacias in BA are everywhere and many are open 24 hours (look for 'turno' or '24hs'). Chains: Farmacity (modern, well-stocked), Dr. Ahorro (discount), and local independent farmacias. Many medications that require prescriptions elsewhere are available over the counter here.",
        proTip:
          "Farmacias often have 2x1 promotions (buy one, get one free) on common items. The pharmacist (farmaceutico) is a trusted resource -- they can recommend treatments for minor issues without a doctor visit. This is normal and common in Argentina.",
      },
      {
        title: "Understand the safety basics",
        icon: Shield,
        time: "30 minutes",
        detail:
          "Buenos Aires is generally safe but has common-sense rules: don't flash expensive phones/cameras on the street, be aware in crowded areas (Subte, Florida street), avoid walking alone late in less-lit areas, use Uber/Cabify at night. Keep a copy of your passport and save emergency numbers in your phone.",
        proTip:
          "Emergency numbers: 911 (police), 107 (ambulance), 100 (fire). Tourist police: 0800-999-5000 (English-speaking). Save your embassy's number too. The biggest real risk for expats is petty theft (phone snatching) -- keep your phone in your pocket on busy streets.",
      },
    ],
  },
  {
    day: 7,
    title: "Finding Your Rhythm",
    subtitle: "You're not a tourist anymore",
    icon: Star,
    tasks: [
      {
        title: "Establish your daily routine",
        icon: Coffee,
        time: "All day",
        detail:
          "By now you know where your cafe is, which supermarket you prefer, and how to get around. Buenos Aires life has a rhythm: breakfast at home or a cafe (9-10 AM), work (10 AM - 1 PM), lunch break with a walk (1-3 PM), more work or errands (3-7 PM), gym or park (7-8 PM), dinner (9-10 PM). Embrace the late schedule.",
        proTip:
          "Portenos eat dinner at 9-10 PM and go to bed at midnight or later. If you try to eat at 6 PM, most restaurants will be empty or closed. Adjust your body clock -- it takes about a week but it's worth it for the social life.",
      },
      {
        title: "Start your apartment search (if on Airbnb)",
        icon: Building,
        time: "2-3 hours",
        detail:
          "Now that you know the city, start looking for a longer-term rental. Check ZonaProp, Argenprop, and Facebook groups ('Buenos Aires Apartments for Rent'). Expect: 1-3 months deposit upfront, rent quoted in USD, and some landlords requiring a garantia (local guarantor).",
        proTip:
          "Temporary rental agencies (like BATempRentals, Nestpick, or Imovelweb) specialize in expat-friendly contracts without a garantia. They're 10-20% more expensive than direct rentals but save enormous hassle. Many handle everything in English.",
      },
      {
        title: "Plan your visa next steps",
        icon: Globe,
        time: "1 hour",
        detail:
          "Most nationalities get 90 days as a tourist, extendable once at Migraciones. If you want to stay longer, now is the time to research: Digital Nomad Visa (6 months, renewable), Rentista Visa (passive income), or start a residency process. An immigration lawyer can save you months of confusion.",
        proTip:
          "The 'border run' (going to Uruguay for a day and re-entering for another 90 days) technically works but is increasingly scrutinized. If you plan to stay long-term, investing in a proper visa now saves headaches later.",
      },
    ],
  },
];

const faqs = [
  {
    question: "Is Buenos Aires safe for expats in 2026?",
    answer:
      "Buenos Aires is generally safe, comparable to major European cities. The main risks are petty theft (phone snatching, pickpocketing in crowded areas) rather than violent crime. Neighborhoods like Recoleta, Palermo, and Belgrano are very safe. Use common sense: don't flash valuables, be alert on the Subte, and use ride-sharing apps at night.",
  },
  {
    question: "How much money do I need for my first week in Buenos Aires?",
    answer:
      "Budget $300-500 for your first week excluding accommodation. This covers: SIM card ($5-10), SUBE card and transport ($10), groceries ($40-60), eating out ($80-120), MercadoPago setup ($50 initial load), and incidentals ($50-100). If you're already in an Airbnb, most other costs are minimal.",
  },
  {
    question: "Do I need to speak Spanish to live in Buenos Aires?",
    answer:
      "No, but it helps enormously. In Palermo and Recoleta, many people speak some English. Outside expat areas, English is rare. You can survive with Google Translate and basic phrases, but you'll miss 80% of the social and cultural experience. Take Spanish classes -- even basic conversational Spanish transforms your quality of life.",
  },
  {
    question: "What's the best neighborhood for someone who just arrived?",
    answer:
      "Palermo is the easiest landing spot: lots of English speakers, walking-friendly, great restaurants, and the largest expat community. Villa Crespo is similar but cheaper. Recoleta is best if you prioritize safety and elegance. Take our Neighborhood Matcher Quiz for a personalized recommendation.",
  },
  {
    question: "Can I use my credit card everywhere in Buenos Aires?",
    answer:
      "Most restaurants, supermarkets, and shops accept cards (Visa and Mastercard). But many small businesses, taxis, ferias (markets), and kioskos are cash-only. Always carry some pesos. MercadoPago fills many gaps -- more places accept it than international cards.",
  },
];

/* ─── Page ──────────────────────────────────────────────── */

export default function FirstWeekPage() {
  const articleSchema = generateArticleSchema({
    headline: "Your First Week in Buenos Aires: A Day-by-Day Survival Guide (2026)",
    description: "A detailed day-by-day guide to your first 7 days in Buenos Aires.",
    url: "https://buenosairesexpats.com/guides/first-week",
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "First Week in Buenos Aires" },
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Survive Your First Week in Buenos Aires",
    description:
      "Step-by-step guide from landing at Ezeiza airport to feeling settled in your Buenos Aires neighborhood.",
    totalTime: "P7D",
    steps: days.map((day) => ({
      name: `Day ${day.day}: ${day.title}`,
      text: day.subtitle,
      url: `https://buenosairesexpats.com/guides/first-week#day-${day.day}`,
    })),
  });

  const faqSchema = generateFAQPageSchema(faqs);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={howToSchema} />
      <StructuredData data={faqSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-foreground">
              Guides
            </Link>
            <span>/</span>
            <span className="text-foreground">First Week in Buenos Aires</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-white/15 text-white border-white/20">
              <Clock className="w-3 h-3 mr-1" />
              Updated March 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
              Your First Week in{" "}
              <span className="text-primary-foreground/70">Buenos Aires</span>
            </h1>
            <p className="text-xl text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              A detailed day-by-day guide from landing at Ezeiza to feeling like
              a local. Real prices, specific recommendations, and the unwritten
              rules of BA life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 20 min read
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" /> 30+ actionable tasks
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4" /> March 2026 prices
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-stone-900">
              How to Use This Week Without Burning Energy
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-stone-600">
              <p>
                The first week in Buenos Aires feels easier when you stop trying to solve
                everything at once. Most newcomers arrive with the right instinct but the wrong
                sequence: they start apartment hunting before they understand the city, worry
                about long-term banking before they can pay for lunch, or spend hours comparing
                neighborhoods they have not walked. The goal of this guide is to give you a sane
                order of operations so the city starts feeling usable before it starts feeling
                overwhelming.
              </p>
              <p>
                Think of the week in layers. The first layer is immediate survival: transport,
                data, cash, and a meal. The second is daily function: learning your barrio,
                figuring out how payments work, and finding the places you will actually reuse.
                Only after that does it make sense to push into bigger decisions like housing,
                health coverage, or visa planning. If you follow that progression, Buenos Aires
                usually feels much more coherent by day five than it does on the airport ride in.
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-semibold text-stone-900 mb-2">Start with function</h3>
                <p className="text-sm text-stone-600">
                  Prioritize connectivity, payments, and transport before lifestyle upgrades.
                </p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-semibold text-stone-900 mb-2">Walk before deciding</h3>
                <p className="text-sm text-stone-600">
                  A neighborhood only makes sense after you have spent real time moving through it.
                </p>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-5">
                <h3 className="font-semibold text-stone-900 mb-2">Delay irreversible choices</h3>
                <p className="text-sm text-stone-600">
                  Longer leases, visa strategy, and monthly commitments get easier once the first week is stable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Day Navigator */}
      <section className="py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 no-scrollbar">
            {days.map((day) => (
              <a
                key={day.day}
                href={`#day-${day.day}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-stone-100 text-stone-700 hover:bg-primary/5 hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
              >
                <span className="text-primary font-bold">Day {day.day}</span>
                <span className="hidden sm:inline">{day.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Day-by-Day Content */}
      {days.map((day) => (
        <section
          key={day.day}
          id={`day-${day.day}`}
          className={`py-16 ${day.day % 2 === 0 ? "bg-stone-50" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Day header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <day.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary uppercase tracking-wider">
                    Day {day.day}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
                    {day.title}
                  </h2>
                  <p className="text-stone-500">{day.subtitle}</p>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-6">
                {day.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className="bg-white rounded-xl border border-stone-200 p-6 md:p-8 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                        <task.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-lg font-semibold text-stone-900">
                            {task.title}
                          </h3>
                          {task.time && (
                            <Badge variant="outline" className="text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {task.time}
                            </Badge>
                          )}
                        </div>
                        <p className="text-stone-600 leading-relaxed mb-4">
                          {task.detail}
                        </p>
                        {task.proTip && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Lightbulb className="w-4 h-4 text-amber-600" />
                              <span className="text-sm font-semibold text-amber-700">
                                Pro Tip
                              </span>
                            </div>
                            <p className="text-sm text-amber-800">
                              {task.proTip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-stone-900">
              What Usually Goes Wrong in Week One
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-stone-600">
              <p>
                The most common mistake is treating Buenos Aires like a city that will explain
                itself instantly. It will not. Payment habits, meal times, service rhythms, and
                rental expectations become legible through repetition, not through one article or
                one errand. People who expect instant fluency usually interpret that friction as a
                sign that the city is disorganized, when in practice it often means they are still
                trying to operate on the tempo of somewhere else.
              </p>
              <p>
                The second mistake is making expensive choices from a tourist frame of mind.
                Locking into the first neighborhood, overpaying for a temporary rental, or
                assuming a border run will solve a long stay can all create avoidable stress. A
                better first week is usually quieter: learn the city, pay attention to what feels
                repeatable, and let the bigger commitments wait until your daily life has started
                to make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-stone-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 mb-8 text-center">
              By the end of the first week, most remaining questions are no longer about where to
              buy a SIM card or how to ride the Subte. They shift toward confidence: whether the
              city feels safe enough, how much cash buffer you actually need, and whether your
              original neighborhood choice still makes sense now that you have a few days of real
              experience behind it. These are the questions that come up most often at that stage.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-stone-50 rounded-xl border border-stone-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-stone-900 hover:bg-stone-100 transition-colors">
                    {faq.question}
                    <ArrowRight className="w-5 h-5 text-stone-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Continue Your BA Journey
            </h2>
            <p className="text-lg leading-relaxed text-stone-600 text-center max-w-3xl mx-auto mb-8">
              By this point, you should know which parts of Buenos Aires already feel intuitive
              and which parts still need a deeper read. Some people need to settle the housing
              question next. Others need to understand visa timelines, healthcare, or the real
              cost of staying longer than a trial month. These next guides are the ones that
              usually help you move from a decent first week into a version of city life that is
              actually sustainable.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/neighborhoods/quiz"
                className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <MapPin className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary">
                  Neighborhood Matcher Quiz
                </h3>
                <p className="text-sm text-stone-500">
                  Find your perfect barrio based on your budget and lifestyle.
                </p>
              </Link>
              <Link
                href="/cost-of-living"
                className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Wallet className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary">
                  Cost of Living 2026
                </h3>
                <p className="text-sm text-stone-500">
                  Full budget breakdowns with real prices for singles and
                  couples.
                </p>
              </Link>
              <Link
                href="/visas"
                className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Globe className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary">
                  Visa Options
                </h3>
                <p className="text-sm text-stone-500">
                  Compare all 6 visa pathways to find the right one for your
                  situation.
                </p>
              </Link>
              <Link
                href="/dining"
                className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Utensils className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary">
                  Dining Guide
                </h3>
                <p className="text-sm text-stone-500">
                  Michelin-starred restaurants and hidden gems across BA.
                </p>
              </Link>
              <Link
                href="/healthcare"
                className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Heart className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary">
                  Healthcare Guide
                </h3>
                <p className="text-sm text-stone-500">
                  Prepaga insurance, English-speaking doctors, and emergency
                  care.
                </p>
              </Link>
              <Link
                href="/guides/safety"
                className="group bg-white rounded-xl border border-stone-200 p-6 hover:border-primary/20 hover:bg-primary/5 transition-all"
              >
                <Shield className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-1 group-hover:text-primary">
                  Safety Guide
                </h3>
                <p className="text-sm text-stone-500">
                  Honest safety info: neighborhoods, scams, and emergency
                  numbers.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground"><LuceroLegalCTA variant="inline" /></p>
          </div>
        </div>
      </section>

      <LastUpdated date={LAST_UPDATED} />
    </div>
  );
}
