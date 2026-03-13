import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";
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
  title: "Banking & Money in Argentina 2026",
  description: "Complete guide to banking in Argentina for expats. Opening accounts, transferring money, the blue dollar, and managing finances.",
  keywords: ["banking Argentina expats", "blue dollar Argentina", "transfer money Argentina", "Argentina bank account"],
  openGraph: {
    title: "Banking & Money in Argentina 2026",
    description: "Complete guide to banking in Argentina for expats. Opening accounts, transferring money, the blue dollar, and managing finances.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
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
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Banking" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background">
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
              Navigate Argentina&apos;s unique financial system. Understanding the blue dollar,
              transferring money, and managing your finances as an expat.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
              <Link href="#how-money-works">
                Read the Full Guide
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How Money Works in Argentina — Editorial Guide */}
      <section id="how-money-works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How Money Actually Works for Expats in Argentina</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Argentina&apos;s financial system is unlike anywhere else you&apos;ve lived. If you come from the US,
                Europe, or most of Asia, you&apos;re used to one exchange rate, one banking system, and cards that
                work everywhere. Argentina has historically had none of that, and while Milei&apos;s 2024&ndash;2026
                reforms have simplified things, the system still has quirks that catch newcomers off guard.
              </p>
              <p>
                The single most important thing to understand before you arrive: <strong>Argentina runs on
                cash more than you expect.</strong> Landlords typically want rent in physical US dollars.
                Many small businesses prefer cash. Card payments work at most established shops and restaurants,
                but the infrastructure is patchier than in Europe or the US. Your first week will feel smoother
                if you land with a few hundred dollars in cash and a plan for how to get more.
              </p>
              <p>
                The second thing to understand: the peso is not your operating currency. Most expats think in
                dollars and spend in pesos. Your rent, savings, and international transfers stay denominated
                in USD, while your daily coffee, groceries, and Uber rides happen in pesos. Managing the
                boundary between those two currencies is the core financial skill of living here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Dollar Landscape — 2026 */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Dollar Landscape in 2026</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                For years, Argentina was famous for having three or four different dollar rates depending
                on how you accessed your money. The &ldquo;blue dollar&rdquo; &mdash; the informal market rate &mdash; could
                be 100% higher than the official bank rate. Entire YouTube channels were built around
                explaining which rate to use. That era is largely over.
              </p>
              <p>
                Under Milei&apos;s economic reforms, the gap between the official and blue dollar rates has
                collapsed to just 2&ndash;5% in 2026. Capital controls have been relaxed, the crawling peg
                devaluation keeps the official rate closer to reality, and the MEP (Mercado Electrónico
                de Pagos) dollar has become the primary legal route for buying USD at near-market rates.
                The blue dollar still exists &mdash; the cuevas on Florida Street are open &mdash; but the
                arbitrage advantage that made it essential is mostly gone.
              </p>
              <p>
                What this means for you: ATM withdrawals are no longer a terrible deal. Card payments
                no longer carry a hidden 50% penalty. And the urgency around &ldquo;always use the blue rate&rdquo;
                has faded. The system still has its wrinkles, but it&apos;s no longer the financial obstacle
                course it was in 2022.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-background rounded-lg border">
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
                  Still exists but the gap is now only 2&ndash;5%. Less relevant
                  than before. Cuevas still operate but the arbitrage advantage is minimal.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>2026 Update:</strong> The old advice of &ldquo;always use the blue rate&rdquo; is outdated.
                    The MEP dollar through a local brokerage is the recommended legal approach
                    for getting the best rate. Check current rates at DolarHoy.com before making large exchanges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Money Into Argentina */}
      <section id="money-transfer-methods" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">How to Get Money Into Argentina</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  This is the question every expat obsesses over in the first few months. The answer
                  depends on how much you need, how often, and whether you care about getting the
                  absolute best rate or just want something convenient. Most long-term expats end up
                  using two or three methods in combination: one for regular monthly transfers, one for
                  bringing initial cash, and one for emergencies.
                </p>
                <p>
                  The biggest shift in 2026 is that crypto transfers &mdash; particularly USDT (Tether) &mdash;
                  have become the default method for many tech-savvy expats. The rates are competitive,
                  the transfers are fast, and the Argentine crypto ecosystem is surprisingly mature.
                  But if you&apos;re not comfortable with crypto, Western Union and Wise both work well,
                  and physical USD cash still gets you the best flexibility for rent and large purchases.
                </p>
              </div>
            </div>
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Opening a Local Bank Account</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                You do not strictly need a local bank account to live in Argentina, especially if
                you&apos;re just staying for a few months. Many short-term expats manage entirely with
                cash, Mercado Pago, and their foreign cards. But if you&apos;re staying longer than
                six months, a local account makes life significantly easier. Utility bills,
                internet service, gym memberships, and many subscription services expect a local
                bank account or CBU (Clave Bancaria Uniforme) for automatic payments.
              </p>
              <p>
                The process varies by bank, but in general you&apos;ll need your DNI (if you have residency)
                or your passport plus a CDI (tax identification number, which you can get at AFIP with
                just your passport). Some banks are more foreigner-friendly than others &mdash; Banco Galicia
                and BBVA tend to have the smoothest onboarding for non-residents. Expect the process to
                take one to three visits and at least a week of waiting for the account to activate.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">Major Banks at a Glance</h3>
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

            <h3 className="text-xl font-semibold mb-4">What You&apos;ll Need</h3>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-2">
                  {[
                    "Valid passport",
                    "Argentine DNI (if you have residency) or proof of address",
                    "Proof of income or employment",
                    "CDI (Clave de Identificación) - tax ID number from AFIP",
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Fintech and Digital Wallets: The Easier Path</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                If traditional banks sound like a hassle, you&apos;re not alone. Most expats under 40
                skip the bank entirely for their first few months and rely on Argentina&apos;s fintech
                apps instead. The country&apos;s fintech ecosystem is one of the most advanced in Latin America,
                largely because Argentines themselves needed alternatives to a banking system they
                didn&apos;t trust. The result: apps that are easy to set up, widely accepted, and in some
                cases better than what the traditional banks offer.
              </p>
              <p>
                Mercado Pago is the one you cannot avoid. QR code payments through Mercado Pago are
                accepted at corner kiosks, pharmacies, cafés, and even some street vendors. Think of it
                as the Argentine equivalent of Venmo and Apple Pay combined. Ualá is the other major
                player &mdash; it&apos;s a digital bank that gives you a physical Mastercard, investment features,
                and a surprisingly good mobile app. Between these two, you can handle 90% of daily
                financial life without ever walking into a bank branch.
              </p>
            </div>
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
                    Ualá
                  </CardTitle>
                  <CardDescription>Digital bank, popular with younger users</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Easy onboarding (DNI required, but process is streamlined)</span>
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

      {/* Practical Tips */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What Most Guides Won&apos;t Tell You</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
              <p>
                The biggest financial mistake new expats make is arriving without physical USD
                cash. Even in 2026, with the dollar gap mostly closed, landlords and real estate
                agents overwhelmingly want rent paid in physical dollar bills. Not a bank transfer.
                Not crypto. Actual paper bills, ideally new $100 notes (pre-2006 series bills are
                sometimes rejected). If you plan to rent outside of Airbnb, bring enough cash to
                cover at least two months of rent plus deposit.
              </p>
              <p>
                The second mistake is assuming your foreign credit card will work everywhere.
                It works at most restaurants and shops in Palermo and Recoleta, but outside
                those tourist-friendly neighborhoods, cash and Mercado Pago are often the
                only options. Smaller shops, local restaurants in residential neighborhoods,
                and service providers (plumbers, electricians, house cleaners) are almost
                always cash-only.
              </p>
              <p>
                Finally, keep an eye on your card&apos;s foreign transaction fees. Many US and
                European cards charge 2&ndash;3% per transaction, which adds up fast. Cards with
                no foreign transaction fees (like Charles Schwab&apos;s debit card, Wise&apos;s
                multi-currency card, or Revolut) are worth setting up before you leave.
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Quick Reference</h3>
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
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground"><LuceroLegalCTA variant="inline" /></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Move?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Get our complete moving checklist and cost calculator to plan your finances 
              before arriving in Argentina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/guides/getting-started">
                  Download Checklist
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
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
