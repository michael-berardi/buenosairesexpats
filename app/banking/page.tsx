import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  DollarSign,
  Building,
  ArrowRightLeft,
  CreditCard,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Wallet,
  Smartphone
} from "lucide-react";

export const metadata: Metadata = {
  title: "Banking & Money in Argentina - Expat Guide 2026",
  description: "Complete guide to banking in Argentina for expats. Opening accounts, transferring money, the blue dollar, and managing finances.",
  keywords: ["banking Argentina expats", "blue dollar Argentina", "transfer money Argentina", "Argentina bank account"],
  alternates: {
    canonical: "https://buenosairesexpats.com/banking",
  },
};

const banks = [
  { name: "Banco Galicia", type: "Major Private", notes: "Good online banking, expat-friendly" },
  { name: "Banco Santander Río", type: "Major Private", notes: "International connections" },
  { name: "Banco Macro", type: "Major Private", notes: "Wide branch network" },
  { name: "BBVA Argentina", type: "Major Private", notes: "Strong digital platform" },
  { name: "Banco Nación", type: "Public", notes: "Government bank, sometimes required for certain procedures" },
];

const moneyTransferMethods = [
  {
    method: "Western Union",
    pros: ["Best exchange rates", "Widely available", "No recipient account needed"],
    cons: ["Fees can be high", "Pickup location required"],
    bestFor: "Regular transfers, accessing blue rate",
  },
  {
    method: "Crypto (USDT/Bitcoin)",
    pros: ["Excellent rates", "Fast", "Low fees"],
    cons: ["Requires technical knowledge", "Regulatory uncertainty"],
    bestFor: "Tech-savvy users, large amounts",
  },
  {
    method: "Wise (formerly TransferWise)",
    pros: ["Low fees", "Transparent", "Fast"],
    cons: ["Official rate only", "Recipient needs account"],
    bestFor: "Small transfers, convenience",
  },
  {
    method: "Cash Exchange (Cuevas)",
    pros: ["Blue rate", "Immediate cash", "No paperwork"],
    cons: ["Safety concerns", "Need trusted exchange"],
    bestFor: "Bringing initial cash, small amounts",
  },
];

const bankingTips = [
  "Bring USD cash for initial expenses - you'll get much better rates exchanging cash",
  "Open a local bank account for paying utilities and rent",
  "Get a local debit card for everyday purchases",
  "Credit cards are less widely accepted than in US/Europe",
  "Always carry some cash - many places don't accept cards",
  "Use Western Union for regular transfers to access better rates",
];

export default function BankingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Banking</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <DollarSign className="w-3 h-3 mr-1" />
              Money Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Banking & Money in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Navigate Argentina's unique financial landscape. Understanding the blue dollar, 
              transferring money, and managing your finances as an expat.
            </p>
          </div>
        </div>
      </section>

      {/* The Blue Dollar Explained */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding the Dollar in 2026</h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Argentina has historically had multiple exchange rates, but under President Milei&apos;s
                  economic reforms, the landscape has changed dramatically. The gap between the official
                  and blue dollar rates has narrowed to just 5-10% in 2026, down from over 100% in
                  previous years. The government&apos;s crawling peg devaluation and capital controls
                  relaxation have brought the rates much closer together.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">Official Rate</div>
                    <p className="text-sm text-muted-foreground">
                      The bank rate. Now much closer to market value under
                      Milei&apos;s reforms. ATM withdrawals are more reasonable than before.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                    <div className="font-semibold mb-2 text-green-700 dark:text-green-300">MEP Dollar</div>
                    <p className="text-sm text-muted-foreground">
                      The main legal way to buy USD at market rates. Accessed through
                      Argentine brokerage accounts (ALyCs). Small spread over official rate.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
                    <div className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Blue Rate</div>
                    <p className="text-sm text-muted-foreground">
                      Still exists but the gap is now only 5-10%. Less relevant
                      than before. Cuevas still operate but the arbitrage advantage is minimal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>2026 Update:</strong> The dollar gap has narrowed significantly under Milei&apos;s
                    reforms. The old advice of &quot;always use the blue rate&quot; is less critical now.
                    The MEP dollar through a local brokerage is the recommended legal approach
                    for getting the best rate. Check current rates at Blue Dollar.net or DolarHoy.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Transfer Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Transferring Money to Argentina</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {moneyTransferMethods.map((method) => (
                <Card key={method.method} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{method.method}</CardTitle>
                    <CardDescription>Best for: {method.bestFor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-sm font-semibold mb-2">Pros:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {method.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Cons:</div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {method.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Opening a Bank Account */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Opening a Bank Account</h2>
            <p className="text-muted-foreground mb-6">
              While not strictly necessary for all expats, a local bank account makes paying 
              rent, utilities, and receiving transfers much easier.
            </p>

            <h3 className="text-xl font-semibold mb-4">Major Banks</h3>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Bank</th>
                        <th className="text-left py-3 px-2">Type</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {banks.map((bank) => (
                        <tr key={bank.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{bank.name}</td>
                          <td className="py-3 px-2">{bank.type}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{bank.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {[
                    "Valid passport",
                    "Argentine DNI (if you have residency) or proof of address",
                    "Proof of income or employment",
                    "CDI (Clave de Identificación) - tax ID number",
                    "Sometimes a local reference or guarantee",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fintech & Digital Wallets */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Fintech & Digital Wallets</h2>
            <p className="text-muted-foreground mb-8 text-center">
              Argentina has a thriving fintech scene. These digital options are often easier to set up
              than traditional bank accounts and widely accepted for everyday payments.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Mercado Pago
                  </CardTitle>
                  <CardDescription>Argentina&apos;s most popular digital wallet</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Accepted almost everywhere (QR payments)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Easy to set up with passport + local phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Pay bills, transfer money, buy in MercadoLibre</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Free virtual debit card included</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Uala
                  </CardTitle>
                  <CardDescription>Digital bank, foreigner-friendly</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Open account with passport (no DNI required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Free Mastercard debit card (physical + virtual)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Works with Apple Pay and Google Pay</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Investment features and USD account available</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Essential Money Tips</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {bankingTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Wallet className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA variant="compact" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-primary-foreground/80 mb-8">
              Get our complete moving checklist and cost calculator to plan your finances 
              before arriving in Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/resources/checklist">
                  Download Checklist
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                <Link href="/cost-of-living">
                  Calculate Costs
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
