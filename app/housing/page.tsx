import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  Home,
  DollarSign,
  FileText,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Housing & Renting in Argentina 2026",
  description: "Complete guide to renting apartments in Buenos Aires. Contracts, guarantees, neighborhoods, and avoiding scams. Updated for 2026.",
  keywords: ["renting Argentina", "Buenos Aires apartments", "Argentina housing", "expat housing Buenos Aires"],
  openGraph: {
    title: "Housing & Renting in Argentina 2026",
    description: "Complete guide to renting apartments in Buenos Aires. Contracts, guarantees, neighborhoods, and avoiding scams.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/housing",
  },
};

const rentalSteps = [
  {
    step: 1,
    title: "Set Your Budget",
    description: "Most landlords now quote rent in USD. Budget for 1-2 months security deposit and potential guarantee (garantía) requirements.",
  },
  {
    step: 2,
    title: "Choose Your Neighborhood",
    description: "Research areas based on your lifestyle, transport needs, and budget. Visit at different times of day before deciding.",
  },
  {
    step: 3,
    title: "Search for Apartments",
    description: "Use websites like ZonaProp, MercadoLibre, and Facebook groups. Work with reputable real estate agents who understand expat needs.",
  },
  {
    step: 4,
    title: "View and Inspect",
    description: "Check water pressure, hot water, heating/cooling, internet availability, and building amenities. Take photos and notes.",
  },
  {
    step: 5,
    title: "Negotiate and Secure",
    description: "Negotiate rent and terms. You'll need proof of income, ID, and potentially a local guarantee. Sign the contract and pay deposit.",
  },
];

const commonScams = [
  {
    scam: "Fake Listings",
    description: "Scammers post attractive apartments at low prices and ask for deposits before viewing.",
    prevention: "Never send money before viewing. Use reputable sites and agents.",
  },
  {
    scam: "Unregistered Agents",
    description: "Unlicensed 'agents' take fees but don't actually represent the property.",
    prevention: "Verify the agent's matrícula (license number) with the local real estate board.",
  },
  {
    scam: "Deposit Theft",
    description: "Landlords refuse to return security deposits citing fake damages.",
    prevention: "Document everything with photos when moving in. Get a detailed inventory signed.",
  },
  {
    scam: "Utility Bill Scams",
    description: "Landlords inflate utility bills or charge for services not provided.",
    prevention: "Request copies of actual utility bills. Set up accounts in your name when possible.",
  },
];

const contractTips = [
  "Always get a written contract (contrato de alquiler)",
  "Contract should specify rent amount, deposit, and payment terms",
  "Note the condition of all appliances and fixtures",
  "Clarify who pays for repairs and maintenance",
  "Understand the notice period for termination (usually 2-3 months)",
  "Keep copies of all payments and correspondence",
];

export default function HousingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Housing</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/housing-apartment.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20" variant="secondary">
              <Home className="w-3 h-3 mr-1" />
              Housing Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Finding a Home in Argentina
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Everything you need to know about renting in Buenos Aires.
              Avoid scams, understand contracts, and find your perfect apartment.
            </p>
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-500 text-white font-semibold">
              <Link href="#rental-process">
                Find Your Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-3mo</div>
              <div className="text-sm text-muted-foreground">Typical Deposit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">USD</div>
              <div className="text-sm text-muted-foreground">Standard Currency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2-3mo</div>
              <div className="text-sm text-muted-foreground">Notice Period</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1yr</div>
              <div className="text-sm text-muted-foreground">Typical Lease</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section id="rental-process" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Rental Process</h2>
            <div className="space-y-6">
              {rentalSteps.map((step) => (
                <Card key={step.step} className="flex gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where to Search */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Where to Search</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Online Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>ZonaProp</strong> - Largest property site, most listings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Argenprop</strong> - Major competitor to ZonaProp, good filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>MercadoLibre Inmuebles</strong> - Classifieds with owner listings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Facebook Groups</strong> - &quot;Expats in Buenos Aires&quot;, &quot;BA Apartments for Rent&quot;, neighborhood-specific groups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Real Estate Agents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Look for agents with matrícula (license)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Expat-specialized agents understand your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Fee is typically 1-2 months rent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Can help with guarantee requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/images/housing-apartment.jpg"
              alt="Stylish apartment interior in Buenos Aires"
              width={1200}
              height={500}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Scams to Avoid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Scams to Avoid</h2>
            <div className="space-y-4">
              {commonScams.map((scam, index) => (
                <Card key={index} className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300 text-lg">
                      <AlertTriangle className="w-5 h-5" />
                      {scam.scam}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{scam.description}</p>
                    <p className="text-sm"><strong>Prevention:</strong> {scam.prevention}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contract Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contract Essentials</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {contractTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Guarantee Problem */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Guarantee (Garantia) Challenge</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                The garantia is the single biggest pain point for expats renting in Buenos Aires.
                Almost every formal lease requires one, and understanding your options is essential
                before you start apartment hunting.
              </p>
            </div>

            <div className="grid gap-4 mt-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Garantia Propietaria (Property Guarantee)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The traditional option: a local property owner co-signs your lease, putting their
                    property as collateral. This is what most landlords prefer, but it&apos;s nearly
                    impossible for foreigners who don&apos;t have local connections with property owners.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Garantia Bancaria (Bank Guarantee)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Some banks offer rental guarantees for their account holders. You typically need
                    to have an established banking relationship and funds on deposit. Less common
                    but accepted by many landlords as equivalent to a property guarantee.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-700">Seguro de Caucion (Guarantee Insurance) - Best for Expats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    This is the most practical option for foreigners. Companies like <strong>Garantor</strong> and{" "}
                    <strong>Finaer</strong> issue guarantee policies that landlords accept in place of a
                    property guarantee. You pay a fee (typically 3-5% of the annual rent) and the
                    insurance company guarantees your lease.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Garantor:</strong> Popular with expats, English support available, online process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Finaer:</strong> Widely accepted by landlords, fast approval</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Larger deposit:</strong> Some landlords accept 3-6 months upfront instead of a guarantee</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Expat-friendly agencies:</strong> Some agencies specialize in guarantee-free rentals (higher fees)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Temporary housing first:</strong> Start with Airbnb while you build local connections and credit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* USD Leases Under Milei */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-900 mb-2">
                    2026 Update: USD-Denominated Leases
                  </h3>
                  <p className="text-amber-800 text-sm mb-3">
                    Under Milei&apos;s economic reforms and the deregulation of the rental market,
                    many landlords now prefer or require USD-denominated leases. The previous rental
                    law (Ley de Alquileres) that mandated peso-denominated contracts with annual
                    adjustments has been repealed, giving landlords more flexibility.
                  </p>
                  <ul className="space-y-1 text-amber-800 text-sm">
                    <li>-- Most expat-targeted apartments are priced in USD</li>
                    <li>-- Payment is often accepted in physical USD cash or bank transfer</li>
                    <li>-- Some landlords accept peso payments at the MEP dollar rate</li>
                    <li>-- Contract terms are now freely negotiable (no mandatory 3-year minimums)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Need Help with Rental Contracts?"
              description="Lucero Legal's team can review your rental contract, help with garantía requirements, and ensure your rights are protected as a tenant in Argentina."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Home?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Explore neighborhoods, compare costs, and connect with verified real estate agents 
              who specialize in helping expats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  <MapPin className="w-4 h-4 mr-2" />
                  Explore Neighborhoods
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link href="/resources">
                  Find Agents
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
