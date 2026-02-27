import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  Bus,
  Train,
  Car,
  Bike,
  Plane,
  CreditCard,
  Clock,
  DollarSign,
  Smartphone,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Ship,
  Navigation
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buenos Aires Transportation Guide 2026",
  description: "Guide to Buenos Aires transportation: SUBE card, Subte subway, colectivos, Uber, taxis, cycling, airport transfers, and transit apps.",
  keywords: [
    "Buenos Aires transportation",
    "SUBE card Buenos Aires",
    "Subte subway",
    "colectivos Buenos Aires",
    "Uber Buenos Aires",
    "Buenos Aires taxi",
    "EcoBici",
    "Ezeiza airport transfer",
    "BA public transit",
    "getting around Buenos Aires"
  ],
  openGraph: {
    title: "Buenos Aires Transportation Guide 2026",
    description: "Everything you need to know about Buenos Aires transportation. SUBE card, Subte, buses, ride-hailing, cycling, and airport transfers.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/transportation",
  },
};

const subteLines = [
  { line: "A", color: "bg-cyan-500", route: "Plaza de Mayo - San Pedrito", notes: "Oldest subway line in South America (opened 1913). Runs through Av. de Mayo and connects key political/historical sites.", stations: 18 },
  { line: "B", color: "bg-red-500", route: "L.N. Alem - Juan Manuel de Rosas", notes: "Runs along Av. Corrientes. Great for theater district, Abasto shopping, and connecting to the suburbs.", stations: 17 },
  { line: "C", color: "bg-blue-600", route: "Constitución - Retiro", notes: "Connects the two major train terminals. Short north-south line, often the most crowded.", stations: 9 },
  { line: "D", color: "bg-green-600", route: "Catedral - Congreso de Tucumán", notes: "Runs through Palermo and Belgrano. Essential for expats living in Palermo.", stations: 16 },
  { line: "E", color: "bg-purple-600", route: "Bolívar - Plaza de los Virreyes", notes: "Serves southern neighborhoods. Connects to Retiro via Premetro extension.", stations: 15 },
  { line: "H", color: "bg-yellow-500", route: "Hospitales - Facultad de Derecho", notes: "The newest line. Runs north-south connecting multiple east-west lines. Still expanding.", stations: 12 },
];

const taxiScams = [
  { scam: "Rigged meters", description: "Some taxis have modified meters that tick faster than they should. The fare jumps unusually fast.", prevention: "Use radio taxis or apps. Compare the fare display rate to your phone's GPS distance." },
  { scam: "The long route", description: "Driver takes a circuitous route, especially from airports. Common when they sense you're new to the city.", prevention: "Have Google Maps running so the driver knows you're tracking the route." },
  { scam: "Bill swap", description: "You hand a 1,000 peso note, driver swaps it for a 100 and claims you underpaid.", prevention: "State the denomination out loud when paying. Use exact change when possible." },
  { scam: "Fake bills as change", description: "Driver gives you counterfeit bills as change, especially at night when visibility is low.", prevention: "Pay with small bills. Check bills have a watermark and security thread." },
];

const essentialApps = [
  { name: "BA Cómo Llego", purpose: "Official transit app", description: "The official Buenos Aires public transit app. Real-time bus tracking, Subte schedules, and multi-modal route planning. Works offline for Subte maps. This is the single most useful transit app in the city." },
  { name: "Google Maps", purpose: "Navigation & transit", description: "Reliable for transit directions and walking routes. The transit data is well-maintained for BA. Download the offline map for your area in case of spotty signal underground." },
  { name: "Uber", purpose: "Ride-hailing", description: "Works throughout Buenos Aires. Technically still in a legal gray area but widely used by locals and visitors alike. Cashless, tracked rides with upfront pricing." },
  { name: "Cabify", purpose: "Licensed ride-hailing", description: "The fully licensed alternative to Uber. Slightly more expensive but operates with full legal backing. Excellent for airport transfers." },
  { name: "MercadoPago", purpose: "SUBE loading & payments", description: "Argentina's dominant payment app. You can load your SUBE card directly from the app at NFC-enabled phones, pay at kiosks, and split ride costs with friends." },
];

export default function TransportationPage() {
  const articleSchema = generateArticleSchema({
    headline: "Getting Around Buenos Aires - Complete Transportation Guide 2026",
    description: "Complete guide to Buenos Aires transportation. SUBE card, Subte subway, colectivos, Uber, taxis, cycling, airport transfers, and essential transit apps.",
    url: "https://buenosairesexpats.com/guides/transportation",
    datePublished: "2026-02-01",
    dateModified: "2026-02-26",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Transportation" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Transportation</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Bus className="w-3 h-3 mr-1" />
              Updated February 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Getting Around Buenos Aires
            </h1>
            <p className="text-lg text-muted-foreground mb-2">Complete Transportation Guide 2026</p>
            <p className="text-xl text-muted-foreground mb-8">
              From the century-old Subte to ride-hailing apps, Buenos Aires has a transportation
              system that&apos;s affordable, extensive, and surprisingly easy to navigate once you
              know the basics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>SUBE card for all public transit</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <DollarSign className="w-4 h-4 text-green-600" />
                <span>$0.30-0.50 per ride</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Train className="w-4 h-4 text-purple-600" />
                <span>6 subway lines + 300 bus routes</span>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg">
                <Link href="#sube-card">
                  Get Started with SUBE
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SUBE Card */}
      <section id="sube-card" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <CreditCard className="w-7 h-7 text-blue-600" />
              The SUBE Card - Your Transit Lifeline
            </h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  The <strong>SUBE</strong> (Sistema Único de Boleto Electrónico) is a rechargeable
                  contactless card that you tap to pay on every form of public transport in Buenos
                  Aires — the Subte, all colectivos (buses), and commuter trains. You cannot board
                  public transit without one. Think of it as the Argentine Oyster card or MetroCard,
                  except it works across the entire country, not just the capital.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Where to Get One</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Any kiosco (corner store) — just ask for a &quot;SUBE&quot;</li>
                      <li>• Subway station ticket booths</li>
                      <li>• Post offices (Correo Argentino)</li>
                      <li>• Lottery agencies (agencias de lotería)</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Cost:</strong> Around $1-2 USD for the card itself. Buy it on your
                      first day — you will need it immediately.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-700 dark:text-green-300 mb-2">How to Load Credit</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• MercadoPago app (NFC tap on phone)</li>
                      <li>• Subway station kiosks</li>
                      <li>• Any kiosco with a SUBE terminal</li>
                      <li>• Automated machines at major stations</li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-2">
                      <strong>Pro tip:</strong> Load via MercadoPago to avoid lines. You hold the
                      SUBE to the back of your phone&apos;s NFC antenna and it tops up instantly.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                  <div className="flex items-start gap-2">
                    <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <strong>Discount system (Red SUBE):</strong> The SUBE card gives automatic
                        discounts when you transfer between modes of transport within two hours. Your
                        first ride is full price, the second ride is 50% off, and the third is 75% off.
                        This makes multi-leg commutes very cheap — a Subte ride followed by a bus
                        might total only $0.50 USD.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subte */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <Train className="w-7 h-7 text-purple-600" />
              Subte (Subway)
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Buenos Aires&apos; subway system is the oldest in South America and all of Latin America,
              with Line A opening in 1913. It&apos;s fast, cheap, and covers most areas you&apos;ll need as
              an expat. Six lines crisscross the city, and while it won&apos;t win any beauty contests,
              it gets you where you need to go.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {subteLines.map((line) => (
                <Card key={line.line}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${line.color} flex items-center justify-center text-white font-bold text-lg`}>
                        {line.line}
                      </div>
                      <div>
                        <CardTitle className="text-base">{line.route}</CardTitle>
                        <CardDescription>{line.stations} stations</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{line.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Operating Hours
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Monday-Saturday: 5:00 AM - 11:00 PM<br />
                      Sundays & holidays: 8:00 AM - 10:00 PM<br />
                      Trains run every 3-8 minutes depending on time.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      Cost
                    </div>
                    <p className="text-sm text-muted-foreground">
                      ~$0.30-0.35 USD per ride (flat fare regardless of distance).
                      Pay with SUBE card only — no cash accepted on the system.
                    </p>
                  </div>
                  <div>
                    <div className="font-semibold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      Rush Hour Tips
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Avoid 7:30-9:30 AM and 5:30-7:30 PM. Line C and Line D get
                      extremely packed. Let the first train pass if it&apos;s sardine-level full.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Insider tip:</strong> Line A still has some of the original 1913 Belgian
                wooden cars running on certain schedules. If you spot one, ride it — it&apos;s like
                stepping into a museum. The old cars have beautiful wooden interiors and brass
                fittings. They&apos;re slowly being retired, so catch them while you can.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Colectivos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Bus className="w-7 h-7 text-blue-600" />
              Colectivos (Buses)
            </h2>
            <p className="text-muted-foreground mb-6">
              The colectivo network is the backbone of Buenos Aires transportation. With over 300
              routes crisscrossing the city 24/7, buses go absolutely everywhere — including places
              the Subte doesn&apos;t reach. They&apos;re cheap, frequent, and once you learn the system,
              incredibly convenient. The learning curve is real though: there are no route maps at
              stops, and the buses don&apos;t always announce stops clearly.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    How to Ride
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      <span><strong>Flag the bus down.</strong> Stand at the stop and raise your hand as the bus approaches. They won&apos;t stop if you don&apos;t signal — this confuses every newcomer.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      <span><strong>Board through the front door.</strong> Tell the driver your destination or the number of sections (secciones). This determines the fare.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      <span><strong>Tap your SUBE card</strong> on the reader next to the driver. Wait for the beep confirming payment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      <span><strong>Press the timbre (bell)</strong> button before your stop to signal you want to get off. Exit through the back door.</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Info className="w-5 h-5 text-blue-600" />
                    Key Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Download <strong>BA Cómo Llego</strong> — it tells you exactly which bus to take, where to stand, and tracks the bus in real time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Buses run 24/7 but frequency drops dramatically after midnight. Night buses (nocturnos) run every 20-40 minutes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Cost is ~$0.30-0.50 USD depending on distance. Cheaper than the Subte for short rides</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Keep bags in front of you and be alert for pickpockets, especially on crowded routes during rush hour</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>Bus stops (paradas) often have no signage. Locals just know. Use the app until you learn your routes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>The colectivo experience:</strong> Don&apos;t be surprised if the driver takes
                off before you&apos;ve sat down, brakes aggressively, or drives like they&apos;re in a Formula 1 race.
                This is completely normal. Grab a rail, brace yourself, and embrace the chaos. After
                a few rides, you&apos;ll barely notice. Most locals stand in the aisle holding on with one hand
                while scrolling their phone with the other — you&apos;ll get there too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uber & Cabify */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Car className="w-7 h-7 text-gray-700 dark:text-gray-300" />
              Uber & Cabify
            </h2>
            <p className="text-muted-foreground mb-6">
              Ride-hailing has transformed getting around Buenos Aires. Both Uber and Cabify operate
              throughout the city and are the safest, most convenient option for door-to-door travel —
              especially at night.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card className="border-gray-300">
                <CardHeader>
                  <CardTitle className="text-lg">Uber</CardTitle>
                  <CardDescription>Widely used, technically gray area</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Legal status:</strong> Technically operates in a legal gray area. The city government has tried to ban it multiple times, but it continues to function. Millions use it daily with no issues.</li>
                    <li>• <strong>Payment:</strong> Credit card through the app only. Some drivers may ask you to pay cash — this is to avoid Uber&apos;s commission, and it&apos;s your call.</li>
                    <li>• <strong>Typical costs:</strong> $3-8 USD within the city for most trips. Surge pricing applies during rain, rush hour, and weekend nights.</li>
                    <li>• <strong>Pickup note:</strong> Some drivers ask you to sit in the front seat to avoid looking like an Uber ride. Don&apos;t be alarmed — this is common.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-blue-300">
                <CardHeader>
                  <CardTitle className="text-lg">Cabify</CardTitle>
                  <CardDescription>Fully licensed alternative</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Legal status:</strong> Fully licensed and regulated. Operates with city approval, so there&apos;s no gray area. Some expats prefer this for peace of mind.</li>
                    <li>• <strong>Payment:</strong> Credit card or cash through the app. More flexible than Uber.</li>
                    <li>• <strong>Typical costs:</strong> 10-20% more expensive than Uber on average, but prices are fixed upfront — no surge pricing.</li>
                    <li>• <strong>Best for:</strong> Airport transfers, business meetings, or when you want the assurance of a fully regulated service.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
              <p className="text-sm text-green-700 dark:text-green-300">
                <strong>Our recommendation:</strong> Use Uber for everyday trips around the city and
                Cabify for airport transfers or when you need a receipt for work. Both are significantly
                safer and cheaper than street taxis. The tracked routes, cashless payments, and driver
                ratings eliminate most of the risks associated with traditional taxis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taxis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Car className="w-7 h-7 text-yellow-500" />
              Taxis
            </h2>
            <p className="text-muted-foreground mb-6">
              Buenos Aires taxis are the iconic black-and-yellow cars you see everywhere. While ride-hailing
              apps have eaten into their market share, taxis remain useful when your phone dies, you&apos;re
              in a rush, or you&apos;re somewhere without signal. Just know the ground rules to avoid getting
              scammed.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Radio Taxis (Safer)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Called by phone or app (BA Taxi)</li>
                    <li>• Have a company name/number on the roof and doors</li>
                    <li>• Tracked by their dispatch company</li>
                    <li>• Generally more reliable meters</li>
                    <li>• Driver ID visible on dashboard</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    Street Taxis (Riskier)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hailed on the street (arm up)</li>
                    <li>• Higher risk of scams, especially at night</li>
                    <li>• Some are unmarked or have fake licenses</li>
                    <li>• More likely to have rigged meters</li>
                    <li>• Avoid near tourist areas and airports</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              Common Taxi Scams
            </h3>
            <div className="space-y-3 mb-6">
              {taxiScams.map((scam) => (
                <Card key={scam.scam} className="border-red-100">
                  <CardContent className="pt-4 pb-4">
                    <div className="font-medium text-red-700 dark:text-red-300 mb-1">{scam.scam}</div>
                    <p className="text-sm text-muted-foreground mb-2">{scam.description}</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-700 dark:text-green-300">{scam.prevention}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                <strong>BA Taxi app:</strong> The city&apos;s official taxi app lets you request metered
                taxis with GPS tracking, similar to Uber. The driver&apos;s name, photo, and license plate
                appear before pickup. It&apos;s the safest way to use a traditional taxi if you prefer them
                over ride-hailing apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cycling */}
      <section className="py-16 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Bike className="w-7 h-7 text-green-600" />
              Cycling & EcoBici
            </h2>
            <p className="text-muted-foreground mb-6">
              Buenos Aires has been investing heavily in cycling infrastructure, and the bike lane
              network now covers over 280 km across the city. For expats living in Palermo, Recoleta,
              or Puerto Madero, cycling is often the fastest and most enjoyable way to get around —
              especially on nice days.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bike className="w-5 h-5 text-green-600" />
                  EcoBici - Free Bike Share System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The city&apos;s public bike-sharing program is completely free for rides under 30 minutes.
                  There are over 400 stations and 4,000 bikes across the city. It&apos;s an incredible deal
                  and a fantastic way to explore Buenos Aires.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium mb-2">How to Register:</div>
                    <ol className="space-y-1 text-sm text-muted-foreground">
                      <li>1. Download the EcoBici BA app</li>
                      <li>2. Register with your email and ID</li>
                      <li>3. Foreign passports are accepted</li>
                      <li>4. Activation takes about 24 hours</li>
                      <li>5. Unlock bikes by scanning the QR code</li>
                    </ol>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Rules & Tips:</div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Free for rides up to 30 minutes</li>
                      <li>• Return to any station, take another</li>
                      <li>• Available 24/7 at most stations</li>
                      <li>• Helmets not provided (bring your own)</li>
                      <li>• Check brakes before riding — quality varies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Palermo</div>
                  <p className="text-sm text-muted-foreground">Best cycling area. Wide bike lanes, flat terrain, and beautiful tree-lined streets. Connected lanes to Bosques de Palermo park.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Puerto Madero</div>
                  <p className="text-sm text-muted-foreground">Scenic waterfront path along the docks. Flat, wide, and separated from traffic. Perfect for weekend rides.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">Costanera</div>
                  <p className="text-sm text-muted-foreground">Long riverside path ideal for exercise. Connects to the Ecological Reserve. Stunning sunset views.</p>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Safety warning:</strong> While bike lanes exist, Buenos Aires drivers can be
                  aggressive and don&apos;t always respect them. Always ride defensively, use lights at night,
                  and be especially careful at intersections. Avoid cycling during rush hour until you&apos;re
                  comfortable with the traffic patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Transfers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Plane className="w-7 h-7 text-sky-600" />
              Airport Transfers
            </h2>
            <p className="text-muted-foreground mb-6">
              Buenos Aires has two airports, and getting to and from them is one of the first
              challenges you&apos;ll face. Here&apos;s the breakdown so you don&apos;t overpay or get lost.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl">Ezeiza (EZE) - International Airport</CardTitle>
                    <Badge variant="secondary">35 km from city center</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ministro Pistarini International Airport is where most international flights arrive.
                    It&apos;s about 35 km southwest of the city center, and getting there takes 40-90 minutes
                    depending on traffic. The highway (Autopista Riccheri) can be a nightmare during
                    peak hours.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Taxi / Remis</span>
                        <Badge variant="outline">$25-40 USD</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Official taxi stand outside arrivals. Buy a voucher at the counter inside —
                        this guarantees a fixed price and a registered driver. Never accept rides
                        from people approaching you inside the terminal. Remis (private car services)
                        can be pre-booked and are slightly more expensive but more comfortable.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Cabify / Uber</span>
                        <Badge variant="outline">$20-35 USD</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Both work from EZE. Cabify has a designated pickup point. Uber pickup can be
                        trickier — drivers may ask you to meet them at departures level to avoid
                        taxi-driver confrontations. Usually cheaper than official taxis.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Tienda León Shuttle</span>
                        <Badge variant="outline">$10-15 USD</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        The best budget option. Comfortable coach buses run every 30 minutes to their
                        terminal near Retiro/Obelisco. The ride takes about 50-70 minutes. From there
                        you can taxi or Subte to your final destination. Book at the counter in arrivals
                        or online in advance.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Train (Roca line)</span>
                        <Badge variant="destructive">Not practical</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        While technically there&apos;s a train connection, it involves multiple transfers,
                        a bus to the station, and takes 2+ hours. Not worth the savings unless you&apos;re
                        extremely budget-conscious and have zero luggage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl">Aeroparque (AEP) - Domestic Airport</CardTitle>
                    <Badge variant="secondary">In the city, Palermo waterfront</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Jorge Newbery Airport sits right on the Río de la Plata waterfront in Palermo.
                    It handles domestic flights and some regional flights to Uruguay, Brazil, and Chile.
                    Getting here is dramatically easier than Ezeiza.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Taxi / Ride-hailing</span>
                        <Badge variant="outline">$5-10 USD</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Quick and cheap from most neighborhoods. 10-20 minutes to Palermo, Recoleta,
                        or Belgrano.
                      </p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">Bus (Lines 33, 45)</span>
                        <Badge variant="outline">~$0.35 USD</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Multiple bus lines pass the airport entrance. Extremely cheap but not ideal
                        with heavy luggage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inter-city Travel */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Navigation className="w-7 h-7 text-indigo-600" />
              Inter-city & Regional Travel
            </h2>
            <p className="text-muted-foreground mb-6">
              Buenos Aires is the transportation hub of Argentina. Whether you want a weekend in
              Uruguay, a trip to wine country, or a beach escape, the city has connections to
              everywhere you&apos;d want to go.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Bus className="w-5 h-5 text-blue-600" />
                    Retiro Bus Terminal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    South America&apos;s largest bus terminal connects Buenos Aires to every corner of
                    Argentina and neighboring countries. Long-distance buses (micros) are comfortable
                    — semi-cama (reclining) and cama (fully flat) classes available.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Mar del Plata:</strong> 5-6 hours ($20-40)</li>
                    <li>• <strong>Mendoza:</strong> 14-16 hours ($40-80)</li>
                    <li>• <strong>Iguazú Falls:</strong> 18 hours ($50-100)</li>
                    <li>• <strong>Bariloche:</strong> 20-22 hours ($60-120)</li>
                  </ul>
                  <p className="text-xs text-stone-700 mt-2">
                    Book on plataforma10.com.ar or busbud.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Ship className="w-5 h-5 text-cyan-600" />
                    Buquebus to Uruguay
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Fast ferries cross the Río de la Plata to Colonia del Sacramento (1 hour) and
                    Montevideo (2.5 hours). This is the classic expat weekend trip — Colonia is a
                    charming colonial town, and many expats use Uruguay for visa runs.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Colonia:</strong> 1 hour fast ferry ($40-80 round trip)</li>
                    <li>• <strong>Montevideo:</strong> 2.5 hours ($60-120 round trip)</li>
                    <li>• Departs from Puerto Madero terminal</li>
                    <li>• Book early for weekend deals</li>
                  </ul>
                  <p className="text-xs text-stone-700 mt-2">
                    Book at buquebus.com or coloniaexpress.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Plane className="w-5 h-5 text-sky-600" />
                    Domestic Flights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Aeroparque (AEP) handles most domestic routes. Airlines include Aerolíneas
                    Argentinas, Flybondi (budget), and JetSmart (budget).
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Bariloche:</strong> 2 hours ($50-150)</li>
                    <li>• <strong>Mendoza:</strong> 2 hours ($40-120)</li>
                    <li>• <strong>Iguazú:</strong> 2 hours ($50-130)</li>
                    <li>• <strong>Ushuaia:</strong> 3.5 hours ($80-200)</li>
                  </ul>
                  <p className="text-xs text-stone-700 mt-2">
                    Flybondi often has fares under $30 if booked early
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Train className="w-5 h-5 text-green-600" />
                    Trains to Tigre & Beyond
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    The Mitre commuter line runs from Retiro station to Tigre — the delta town famous
                    for its river islands, markets, and weekend escapes. It&apos;s a popular day trip that
                    feels like leaving the city entirely.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Retiro to Tigre:</strong> ~55 minutes</li>
                    <li>• <strong>Cost:</strong> ~$0.50 USD with SUBE</li>
                    <li>• <strong>Frequency:</strong> Every 10-20 minutes</li>
                    <li>• <strong>Tip:</strong> Take the Tren de la Costa for a scenic alternative route</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Apps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Smartphone className="w-7 h-7 text-blue-600" />
              Essential Transportation Apps
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Download these before you land. Your phone is your most important navigation tool
              in Buenos Aires, and these five apps will cover every transportation need you&apos;ll have.
            </p>
            <div className="space-y-4">
              {essentialApps.map((app) => (
                <Card key={app.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                      <Badge variant="secondary">{app.purpose}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Cost Reference</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {[
                    { mode: "Subte (subway) ride", cost: "$0.30-0.35", notes: "Flat fare, any distance" },
                    { mode: "Colectivo (bus) ride", cost: "$0.30-0.50", notes: "Varies by distance" },
                    { mode: "SUBE card purchase", cost: "$1-2", notes: "One-time cost" },
                    { mode: "Uber within city", cost: "$3-8", notes: "Higher during surge" },
                    { mode: "Cabify within city", cost: "$4-10", notes: "Fixed upfront price" },
                    { mode: "Taxi (city ride)", cost: "$3-8", notes: "Metered, flag drop + per km" },
                    { mode: "EcoBici bike (30 min)", cost: "Free", notes: "Must register in app" },
                    { mode: "EZE airport taxi", cost: "$25-40", notes: "Use official counter" },
                    { mode: "EZE Tienda León shuttle", cost: "$10-15", notes: "Best budget option" },
                    { mode: "AEP airport taxi", cost: "$5-10", notes: "Close to city center" },
                    { mode: "Train to Tigre", cost: "$0.50", notes: "SUBE card required" },
                  ].map((item) => (
                    <div key={item.mode} className="flex justify-between items-center py-2 border-b last:border-0">
                      <div>
                        <span className="text-muted-foreground">{item.mode}</span>
                        <span className="text-xs text-stone-700 block">{item.notes}</span>
                      </div>
                      <span className="font-semibold whitespace-nowrap">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-xs text-stone-700 text-center">
                    All prices in USD, approximate as of February 2026. Peso-denominated fares fluctuate
                    with the exchange rate. Public transit is exceptionally affordable for dollar earners —
                    you can easily get around the entire city for under $2/day using only public transport.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Practical Tips From Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    Do
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Get your SUBE card on day one</li>
                    <li>• Download BA Cómo Llego immediately</li>
                    <li>• Keep your SUBE loaded (check balance in the app)</li>
                    <li>• Learn your colectivo routes — they&apos;re faster than you think</li>
                    <li>• Walk when possible — BA is a beautiful walking city</li>
                    <li>• Use ride-hailing at night for safety</li>
                    <li>• Take advantage of the SUBE transfer discount</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    Don&apos;t
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Don&apos;t hail random taxis on the street at night</li>
                    <li>• Don&apos;t flash your phone on the bus or subway</li>
                    <li>• Don&apos;t forget to signal the bus to stop</li>
                    <li>• Don&apos;t accept unofficial rides at EZE airport</li>
                    <li>• Don&apos;t ride colectivos during rush hour if you can avoid it</li>
                    <li>• Don&apos;t expect drivers to speak English</li>
                    <li>• Don&apos;t leave your SUBE at zero — some buses won&apos;t let you board</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links & CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Continue Exploring</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Link href="/cost-of-living" className="group">
                    <h3 className="font-semibold mb-1 group-hover:text-primary">Cost of Living Guide</h3>
                    <p className="text-sm text-muted-foreground">See how transportation costs fit into your overall Buenos Aires budget.</p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Link href="/neighborhoods" className="group">
                    <h3 className="font-semibold mb-1 group-hover:text-primary">Neighborhood Guide</h3>
                    <p className="text-sm text-muted-foreground">Choose where to live based on transit access and commute times.</p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Link href="/guides/safety" className="group">
                    <h3 className="font-semibold mb-1 group-hover:text-primary">Safety Guide</h3>
                    <p className="text-sm text-muted-foreground">Stay safe on public transit and when using taxis at night.</p>
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Link href="/guides/getting-started" className="group">
                    <h3 className="font-semibold mb-1 group-hover:text-primary">Getting Started Guide</h3>
                    <p className="text-sm text-muted-foreground">Everything you need for your first week in Buenos Aires.</p>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <LuceroLegalCTA
              variant="compact"
              headline="Planning Your Move?"
              description="Need help with your visa to start exploring Buenos Aires? Lucero Legal can guide you through the process."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Buenos Aires?</h2>
            <p className="text-primary-foreground mb-8">
              With a SUBE card in your pocket and these apps on your phone, you&apos;re ready to navigate
              the city like a local. Buenos Aires rewards exploration — every neighborhood has its own
              character, and the best way to discover them is to just go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link href="/cost-of-living">
                  Cost of Living Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
