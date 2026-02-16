import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  title: "Housing in Argentina - Renting Guide for Expats 2025",
  description: "Complete guide to renting apartments in Buenos Aires. Contracts, guarantees, neighborhoods, and avoiding scams. Updated for 2025.",
  keywords: ["renting Argentina", "Buenos Aires apartments", "Argentina housing", "expat housing Buenos Aires"],
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
          <div className="absolute inset-0 bg-[url('/images/housing-apartment.jpg')] bg-cover bg-center" />
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
      <section className="py-16">
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
                      <span><strong>ZonaProp</strong> - Largest property site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>MercadoLibre</strong> - Classifieds section</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Properati</strong> - Good search filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Facebook Groups</strong> - Expats BA, etc.</span>
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
            <h2 className="text-3xl font-bold mb-6">The Guarantee (Garantía) Challenge</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                One of the biggest challenges for expats is the "garantía" - a property guarantee 
                required by most landlords. Traditionally, this means having a local property owner 
                co-sign your lease, which is impossible for most foreigners.
              </p>
              <p className="mb-4">
                <strong>Alternatives include:</strong>
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Paying a larger security deposit (3-6 months)</li>
                <li>Using a garantía insurance company (seguro de caución)</li>
                <li>Finding landlords who accept international guarantees</li>
                <li>Working with expat-friendly agencies</li>
                <li>Airbnb or temporary housing while you build local connections</li>
              </ul>
              <p>
                Many landlords are becoming more flexible with foreigners, especially if you can 
                show proof of stable foreign income and pay several months upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Home?</h2>
            <p className="text-primary-foreground/80 mb-8">
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
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/resources/directory">
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
