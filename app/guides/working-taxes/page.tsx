import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  DollarSign,
  Building,
  FileText,
  Globe,
  Calculator,
  Landmark,
  Users,
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  CreditCard,
  Laptop,
  Scale,
  BookOpen,
  Coffee,
  Lightbulb,
  Shield,
  Clock,
  MapPin
} from "lucide-react";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Working & Taxes in Argentina - Complete Expat Guide 2026",
  description: "Complete guide to working and taxes in Argentina for expats. Monotributo, remote work legality, starting a business, tax obligations by visa type, double taxation treaties, and coworking spaces in Buenos Aires.",
  keywords: [
    "working in Argentina",
    "Argentina taxes expats",
    "monotributo Argentina",
    "remote work Argentina",
    "freelancing Buenos Aires",
    "Argentina tax guide",
    "starting business Argentina",
    "SAS Argentina",
    "double taxation Argentina",
    "coworking Buenos Aires",
  ],
  openGraph: {
    title: "Working & Taxes in Argentina - Complete Expat Guide 2026",
    description: "Everything expats need to know about working legally in Argentina: monotributo, business setup, tax obligations, and practical tips for remote workers.",
    type: "article",
    publishedTime: "2025-06-15",
    modifiedTime: "2026-02-26",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/working-taxes",
  },
};

const monotributoCategories = [
  {
    category: "A",
    monthlyIncome: "Up to ARS 2,108,288",
    monthlyCost: "~$20 USD",
    bestFor: "Occasional freelancers, very low income",
  },
  {
    category: "B",
    monthlyIncome: "Up to ARS 3,133,941",
    monthlyCost: "~$25 USD",
    bestFor: "Part-time freelancers",
  },
  {
    category: "C",
    monthlyIncome: "Up to ARS 4,387,518",
    monthlyCost: "~$35 USD",
    bestFor: "Regular freelancers earning moderate income",
  },
  {
    category: "D",
    monthlyIncome: "Up to ARS 5,449,094",
    monthlyCost: "~$45 USD",
    bestFor: "Active freelancers and small consultants",
  },
  {
    category: "E",
    monthlyIncome: "Up to ARS 6,416,528",
    monthlyCost: "~$55 USD",
    bestFor: "Full-time freelancers, growing businesses",
  },
  {
    category: "F-K",
    monthlyIncome: "Up to ARS 25M+",
    monthlyCost: "$60-80+ USD",
    bestFor: "Higher earners nearing responsable inscripto threshold",
  },
];

const taxObligationsByVisa = [
  {
    visa: "Tourist Visa (90 days)",
    taxStatus: "Non-resident",
    obligations: "Pay taxes to home country only",
    details: [
      "No Argentine tax obligations on foreign income",
      "Remote work for foreign employers is a gray area but widely practiced",
      "Cannot invoice locally or open monotributo",
      "Must still comply with home country tax rules",
    ],
    color: "green",
  },
  {
    visa: "Digital Nomad Visa (180 days)",
    taxStatus: "Non-resident (generally)",
    obligations: "Home country taxes, no Argentine income tax",
    details: [
      "Specifically designed for remote workers serving foreign clients",
      "Not considered tax resident under 12-month rule",
      "No monotributo needed for foreign-source income",
      "Consult a tax professional for your specific situation",
    ],
    color: "blue",
  },
  {
    visa: "Temporary Resident (1-3 years)",
    taxStatus: "Potentially dual obligations",
    obligations: "May need to file in both countries",
    details: [
      "After 12 months in Argentina, may become tax resident",
      "Tax residency triggers worldwide income reporting",
      "Can register for monotributo to invoice locally",
      "Double taxation treaties may provide relief",
    ],
    color: "amber",
  },
  {
    visa: "Permanent Resident",
    taxStatus: "Full tax resident",
    obligations: "Worldwide income taxable in Argentina",
    details: [
      "Must report all global income to AFIP",
      "Subject to Argentine income tax (up to 35%)",
      "Personal assets tax may also apply",
      "Tax treaties can prevent double taxation",
    ],
    color: "red",
  },
];

const doubleTaxTreaties = [
  { country: "United Kingdom", status: "Treaty exists", notes: "Covers most income types including employment and pensions" },
  { country: "Canada", status: "Treaty exists", notes: "Prevents double taxation on employment and business income" },
  { country: "Germany", status: "Treaty exists", notes: "Comprehensive coverage for workers and investors" },
  { country: "France", status: "Treaty exists", notes: "Covers employment, dividends, interest, royalties" },
  { country: "Spain", status: "Treaty exists", notes: "Beneficial for the large Spanish expat community" },
  { country: "Italy", status: "Treaty exists", notes: "Important given Argentina's Italian diaspora ties" },
  { country: "Australia", status: "Treaty exists", notes: "Covers pensions and employment income" },
  { country: "Brazil", status: "Treaty exists", notes: "Mercosur neighbor, strong trade ties" },
  { country: "United States", status: "NO TREATY", notes: "Americans must use FEIE ($126,500 exclusion in 2026) or Foreign Tax Credits" },
];

const coworkingSpaces = [
  {
    name: "WeWork",
    neighborhood: "Palermo / Microcentro / Puerto Madero",
    price: "$200-300/month",
    vibe: "Corporate, premium",
    highlights: [
      "Multiple locations across BA",
      "Meeting rooms and event spaces",
      "Strong WiFi and printing",
      "Free coffee and beer",
    ],
  },
  {
    name: "Selina",
    neighborhood: "Palermo",
    price: "$150-200/month",
    vibe: "Digital nomad, social",
    highlights: [
      "Co-living and coworking combined",
      "Great for networking",
      "Rooftop and common areas",
      "Day passes available ($15-20)",
    ],
  },
  {
    name: "AreaTres",
    neighborhood: "Palermo / Belgrano",
    price: "$100-150/month",
    vibe: "Local, community-driven",
    highlights: [
      "More affordable than WeWork",
      "Strong local startup community",
      "Flexible plans",
      "Spanish practice opportunity",
    ],
  },
  {
    name: "Urban Station",
    neighborhood: "Various locations",
    price: "$80-120/month",
    vibe: "Budget-friendly, functional",
    highlights: [
      "Pay by the hour or month",
      "Good for occasional use",
      "Basic but reliable amenities",
      "Spread across the city",
    ],
  },
];

const businessSetupSteps = [
  {
    step: 1,
    title: "Get Your CDI (Tax ID for Foreigners)",
    description: "Apply at AFIP (federal tax agency). Requires passport and proof of address. Takes 1-2 weeks.",
  },
  {
    step: 2,
    title: "Choose Business Structure",
    description: "SAS (Simplified Joint Stock Company) is most common for foreigners. Can be formed with a single shareholder.",
  },
  {
    step: 3,
    title: "Open a Local Bank Account",
    description: "Required for the SAS. You'll need your DNI or CDI. Banks may request additional documentation.",
  },
  {
    step: 4,
    title: "Register with AFIP",
    description: "Register the company for taxes. Your accountant handles most of this process.",
  },
  {
    step: 5,
    title: "Get Municipal License (Habilitación)",
    description: "If you have a physical office, you'll need a municipal operating license from the city.",
  },
  {
    step: 6,
    title: "Hire an Accountant (Contador)",
    description: "Not optional. Budget $100-200/month. Essential for monthly tax filings and compliance.",
  },
];

const freelancerBankingOptions = [
  {
    method: "Wise (TransferWise)",
    pros: "Low fees, real exchange rate, USD/EUR/GBP accounts",
    cons: "Cannot convert directly to ARS at MEP rate",
    bestFor: "Receiving USD payments from clients",
  },
  {
    method: "Payoneer",
    pros: "Popular with freelancers, withdrawals to local bank, marketplace integrations",
    cons: "Higher fees than Wise, withdrawal rate not always best",
    bestFor: "Upwork, Fiverr, and marketplace freelancers",
  },
  {
    method: "Crypto (USDT/USDC)",
    pros: "Best rates, widely used in Argentina, fast transfers",
    cons: "Legal gray area, volatile, requires some technical knowledge",
    bestFor: "Tech-savvy freelancers wanting best exchange rates",
  },
  {
    method: "MEP Dollar (via Broker)",
    pros: "Legal way to convert USD to ARS at favorable rate, fully compliant",
    cons: "Requires local brokerage account and DNI, 1-2 day settlement",
    bestFor: "Residents converting larger amounts legally",
  },
];

export default function WorkingTaxesPage() {
  const articleSchema = generateArticleSchema({
    headline: "Working & Taxes in Argentina - Complete Expat Guide 2026",
    description: "Complete guide to working and taxes in Argentina for expats. Monotributo, remote work legality, starting a business, tax obligations by visa type, and practical tips.",
    url: "https://buenosairesexpats.com/guides/working-taxes",
    datePublished: "2025-06-15",
    dateModified: "2026-02-26",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Working & Taxes" },
  ]);

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

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-foreground">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Working & Taxes</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Briefcase className="w-3 h-3 mr-1" />
              Updated February 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Working & Taxes in Argentina
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              The complete expat guide to working legally, understanding taxes, and navigating
              Argentina&apos;s unique economic landscape in 2026.
            </p>
            <p className="text-muted-foreground mb-8">
              Whether you&apos;re a remote worker, freelancer, or planning to start a business -
              this guide covers everything you need to know about earning money and staying
              compliant in Argentina.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Laptop className="w-4 h-4 text-emerald-500" />
                <span>Remote work info</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calculator className="w-4 h-4 text-emerald-500" />
                <span>Tax obligations explained</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="w-4 h-4 text-emerald-500" />
                <span>Business setup guide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Work Legal Status */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Laptop className="w-6 h-6 text-emerald-500" />
              Remote Work Legal Status
            </h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  The legal status of remote work in Argentina exists in a gray area that millions of digital
                  nomads navigate every year. Here is what you need to know about working remotely from
                  Buenos Aires in 2026.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What&apos;s Widely Accepted
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Working remotely for a foreign employer while on a tourist visa</li>
                      <li>Freelancing for international clients from Buenos Aires</li>
                      <li>Using coworking spaces as a tourist</li>
                      <li>Receiving payments into foreign bank accounts</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
                    <div className="font-semibold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      The Gray Areas
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>Tourist visa technically doesn&apos;t authorize &quot;work&quot; - but remote work for foreign entities isn&apos;t local employment</li>
                      <li>No clear legal framework distinguishes remote work from tourism</li>
                      <li>Immigration doesn&apos;t actively enforce against remote workers</li>
                      <li>Tax implications unclear for short-stay remote workers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">The Digital Nomad Visa Solution</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Argentina introduced its Digital Nomad Visa specifically to address this gray area.
                      It provides a clear legal framework for remote workers: 180 days of authorized stay,
                      explicitly permits remote work for foreign companies, and requires proof of income
                      ($1,500-2,500/month recommended). While optional (many still use tourist visas),
                      it&apos;s the safest legal option for longer stays.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/visas/digital-nomad">
                        Digital Nomad Visa Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Practical reality:</strong> Thousands of expats work remotely from Buenos Aires
                  on tourist visas, doing the &quot;border run&quot; to Uruguay every 90 days. While technically
                  a gray area, it&apos;s widely practiced and rarely questioned. That said, if you plan to
                  stay long-term, getting proper residency is the smart move both for legal clarity and
                  access to services like banking and healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monotributo */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <Calculator className="w-6 h-6 text-emerald-500" />
              Monotributo: Argentina&apos;s Simplified Tax Regime
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              The monotributo is Argentina&apos;s all-in-one tax system for freelancers and small
              businesses. A single monthly payment covers income tax, social security (jubilación),
              and healthcare (obra social). It is by far the easiest way to work legally and invoice
              in Argentina.
            </p>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>How Monotributo Works</CardTitle>
                <CardDescription>
                  Categories based on annual income - you pay a fixed monthly amount
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Category</th>
                        <th className="text-left py-3 px-2">Annual Income Limit</th>
                        <th className="text-left py-3 px-2">Monthly Cost</th>
                        <th className="text-left py-3 px-2">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monotributoCategories.map((cat) => (
                        <tr key={cat.category} className="border-b last:border-0">
                          <td className="py-3 px-2">
                            <Badge variant="secondary">{cat.category}</Badge>
                          </td>
                          <td className="py-3 px-2 text-sm">{cat.monthlyIncome}</td>
                          <td className="py-3 px-2 font-medium text-emerald-600">{cat.monthlyCost}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{cat.bestFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * ARS amounts are updated periodically by AFIP. USD equivalents are approximate
                  at blue/MEP dollar rates and fluctuate. Check with your accountant for current values.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-2 text-emerald-500" />
                  <div className="font-semibold mb-1">Tax Component</div>
                  <p className="text-sm text-muted-foreground">
                    Replaces income tax (ganancias) with a small fixed fee. Much simpler than the
                    full tax regime (responsable inscripto).
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <div className="font-semibold mb-1">Social Security</div>
                  <p className="text-sm text-muted-foreground">
                    Includes retirement contributions (jubilación). After 30 years, you qualify for
                    an Argentine pension.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                  <div className="font-semibold mb-1">Healthcare (Obra Social)</div>
                  <p className="text-sm text-muted-foreground">
                    Access to a health plan through your chosen obra social. Covers doctor visits,
                    medication, and hospital care.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-amber-200 bg-amber-50/50 dark:bg-amber-950/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">How to Register for Monotributo</h3>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal ml-4">
                      <li>Get your CUIL/CUIT number (requires DNI or CDI for foreigners)</li>
                      <li>Create a &quot;clave fiscal&quot; (digital tax key) at AFIP offices or online</li>
                      <li>Access the AFIP website and register for monotributo under your chosen category</li>
                      <li>Select your obra social (health provider) from the available list</li>
                      <li>Begin making monthly payments through the AFIP portal or your bank</li>
                    </ol>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>Pro tip:</strong> Have your accountant handle the registration. The AFIP
                      website is notoriously confusing, even for Argentines. Budget $50-100 for the
                      initial setup assistance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Starting a Business */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-emerald-500" />
              Starting a Business in Argentina
            </h2>
            <p className="text-muted-foreground mb-8">
              The SAS (Sociedad por Acciones Simplificada - Simplified Joint Stock Company) is
              the most common business structure for foreigners in Argentina. Introduced in 2017,
              it was designed to make company formation faster and cheaper. You can form a SAS as
              a single shareholder, making it ideal for solo entrepreneurs and freelancers who need
              a formal business entity.
            </p>

            <div className="space-y-6 mb-8">
              {businessSetupSteps.map((step, index) => (
                <Card key={step.step} className="relative">
                  {index !== businessSetupSteps.length - 1 && (
                    <div className="absolute left-8 top-full w-0.5 h-6 bg-border" />
                  )}
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Business Setup Costs (Estimated)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { item: "SAS formation (legal fees)", cost: "$500-1,500" },
                    { item: "Registration fees (IGJ)", cost: "$100-300" },
                    { item: "Accountant (monthly)", cost: "$100-200/month" },
                    { item: "Bank account opening", cost: "Free-$50" },
                    { item: "Digital signature (required)", cost: "$30-50/year" },
                    { item: "Municipal license (if applicable)", cost: "$50-200/year" },
                  ].map((item) => (
                    <div key={item.item} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-muted-foreground">{item.item}</span>
                      <span className="font-semibold">{item.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Year 1 Total (approx.)</span>
                    <span className="font-bold text-emerald-600">$2,000-4,500</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Ongoing costs: $150-300/month (accountant + social charges + monotributo/taxes)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Argentine Employment Law */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
              <Scale className="w-6 h-6 text-emerald-500" />
              Argentine Employment Law
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              If you&apos;re hired by an Argentine company, the labor laws are very employee-friendly.
              Understanding these rules matters whether you&apos;re an employee or an employer.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Employee Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Aguinaldo (13th month salary):</strong> Paid in two installments (June and December). Equals one full month&apos;s salary per year.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Vacation:</strong> 14 days minimum (under 5 years), scaling up to 35 days (over 20 years of service).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Termination protection:</strong> Severance equals one month&apos;s salary per year of service. Very hard to fire employees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Maternity leave:</strong> 90 days paid. Paternity: 2 days (being expanded in many companies).</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    Employer Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Social contributions:</strong> 50-70% above gross salary in employer costs (social security, obra social, ART, union dues).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Mandatory insurance:</strong> ART (workplace risk insurance) is required for all employees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Calculator className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Payroll complexity:</strong> Monthly withholdings, union negotiations, and frequent regulatory changes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span><strong>High severance risk:</strong> Wrongful termination claims are common and expensive. Budget 1-3 months salary per year of service.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Key insight for expats:</strong> Many foreign companies hesitate to hire
                  employees directly in Argentina due to the high social costs and strict labor laws.
                  This is why most expats work as freelancers (monotributo) or through their own SAS
                  company, even when they have a single client. If an Argentine company wants to hire
                  you, understand that your &quot;real&quot; cost to the employer is 50-70% higher than
                  your gross salary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Obligations by Visa Type */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-emerald-500" />
              Tax Obligations by Visa Type
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Your tax obligations in Argentina depend primarily on your visa status and how long
              you&apos;ve been in the country. The critical threshold is the 12-month rule: spend more
              than 12 months in Argentina in any given year and you may be considered a tax resident.
            </p>

            <div className="space-y-6">
              {taxObligationsByVisa.map((visa) => (
                <Card key={visa.visa} className={`border-${visa.color}-200`}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3">
                      <CardTitle className="text-lg">{visa.visa}</CardTitle>
                      <Badge variant={
                        visa.color === "green" ? "default" :
                        visa.color === "blue" ? "secondary" :
                        visa.color === "amber" ? "secondary" :
                        "destructive"
                      }>
                        {visa.taxStatus}
                      </Badge>
                    </div>
                    <CardDescription className="font-medium">{visa.obligations}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {visa.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-700 dark:text-red-300 mb-1">
                    Important Disclaimer
                  </h3>
                  <p className="text-sm text-red-800 dark:text-red-200">
                    Tax laws change frequently in Argentina, and individual situations vary greatly.
                    This guide provides general information only. Always consult with a qualified
                    Argentine accountant (contador) and, for US citizens, a US tax professional
                    familiar with expat taxation. Getting this wrong can result in penalties in
                    both countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Double Taxation Treaties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <Globe className="w-6 h-6 text-emerald-500" />
              Double Taxation Treaties
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Argentina has double taxation treaties with approximately 20 countries. These
              treaties prevent you from paying tax on the same income in two countries. Notably,
              the United States does NOT have a treaty with Argentina - a major consideration
              for American expats.
            </p>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Country</th>
                        <th className="text-left py-3 px-2">Status</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {doubleTaxTreaties.map((treaty) => (
                        <tr
                          key={treaty.country}
                          className={`border-b last:border-0 ${treaty.status === "NO TREATY" ? "bg-red-50 dark:bg-red-950/10" : ""}`}
                        >
                          <td className="py-3 px-2 font-medium">{treaty.country}</td>
                          <td className="py-3 px-2">
                            <Badge variant={treaty.status === "NO TREATY" ? "destructive" : "default"}>
                              {treaty.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{treaty.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/50 dark:bg-red-950/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                      Special Note for US Citizens
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      The US has no double taxation treaty with Argentina. However, American expats
                      have two powerful tools to avoid double taxation:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Foreign Earned Income Exclusion (FEIE):</strong> Exclude up to $126,500 (2026) of foreign earned income from US taxes if you meet either the Physical Presence Test (330 days abroad) or the Bona Fide Residence Test.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Foreign Tax Credit (FTC):</strong> Credit taxes paid to Argentina against your US tax bill. Useful if you earn above the FEIE threshold or have non-employment income.</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mt-3">
                      <strong>FBAR reminder:</strong> If your foreign accounts exceed $10,000 at any point
                      during the year, you must file FinCEN Form 114. Penalties for non-filing are severe.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coworking Spaces */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <Coffee className="w-6 h-6 text-emerald-500" />
              Coworking Spaces in Buenos Aires
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Buenos Aires has a thriving coworking scene, ranging from premium international
              chains to budget-friendly local options. Many digital nomads also work from the
              city&apos;s excellent cafes.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {coworkingSpaces.map((space) => (
                <Card key={space.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{space.name}</CardTitle>
                      <Badge variant="secondary">{space.price}</Badge>
                    </div>
                    <CardDescription>
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {space.neighborhood} &middot; {space.vibe}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {space.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-1" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-amber-600" />
                  Cafe Culture as Workspace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Many expats skip coworking entirely and work from Buenos Aires&apos;s excellent cafes.
                  The culture of lingering over coffee is strong here - nobody will rush you out.
                  Popular work-friendly neighborhoods include Palermo (endless options), Recoleta
                  (quieter, more upscale), and Villa Crespo (local vibe, cheaper). WiFi quality varies,
                  so always have your phone hotspot as a backup. A cortado and medialunas will cost
                  you $3-5, making it a much cheaper office than any coworking space.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Coworking", cost: "$80-300/mo" },
                    { label: "Cafe (daily)", cost: "$3-8/day" },
                    { label: "Home internet", cost: "$15-30/mo" },
                    { label: "Mobile data", cost: "$5-15/mo" },
                  ].map((option) => (
                    <div key={option.label} className="p-3 bg-muted rounded-lg text-center">
                      <div className="text-xs text-muted-foreground">{option.label}</div>
                      <div className="font-semibold text-sm">{option.cost}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Banking for Freelancers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <CreditCard className="w-6 h-6 text-emerald-500" />
              Banking & Receiving Money as a Freelancer
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Getting paid and converting foreign currency to Argentine pesos is one of the most
              important (and confusing) aspects of working in Argentina. The multiple exchange
              rates and capital controls make this tricky but manageable once you understand the system.
            </p>

            <div className="space-y-4 mb-8">
              {freelancerBankingOptions.map((option) => (
                <Card key={option.method}>
                  <CardHeader>
                    <CardTitle className="text-lg">{option.method}</CardTitle>
                    <CardDescription>{option.bestFor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Pros</div>
                        <p className="text-sm text-muted-foreground">{option.pros}</p>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                        <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Cons</div>
                        <p className="text-sm text-muted-foreground">{option.cons}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-blue-200 bg-blue-50/50 dark:bg-blue-950/10">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Opening an Argentine Bank Account</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      To open a bank account in Argentina, you generally need a DNI (national ID).
                      Some banks will open accounts with a CDI (tax ID for foreigners), but options
                      are limited. Major banks include Banco Galicia, BBVA, Santander, and Brubank
                      (digital-first, easier for expats). With a bank account, you can access the
                      MEP dollar rate for legal currency conversion through a brokerage (ALyC),
                      which gives you rates close to the blue dollar, fully above board.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/banking">
                        Complete Banking Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Finding an Accountant */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-500" />
              Finding an Accountant (Contador)
            </h2>
            <Card className="mb-6">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  An accountant is not optional in Argentina - it is essential. The tax system is
                  complex, changes frequently, and the consequences of non-compliance range from
                  fines to having your CUIT blocked (which freezes your ability to invoice or operate).
                  Even the simplest monotributo requires periodic recategorization and annual
                  reporting. Your contador will handle monthly tax filings, keep you in the right
                  monotributo category, advise on deductions, and represent you before AFIP if needed.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">What to Expect</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Monthly cost: $100-200 USD</li>
                      <li>Initial setup: $50-150 extra</li>
                      <li>Monthly tax filings handled</li>
                      <li>Annual income tax return (if applicable)</li>
                      <li>Monotributo category optimization</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="font-semibold mb-2">How to Find One</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Ask in expat Facebook/WhatsApp groups</li>
                      <li>Palermo and Recoleta have English-speaking options</li>
                      <li>Verify they&apos;re registered (matrícula activa)</li>
                      <li>Get referrals from other expats, not ads</li>
                      <li>Interview 2-3 before committing</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 rounded-lg border border-emerald-200">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-emerald-800 dark:text-emerald-200">
                  <strong>Red flags when choosing an accountant:</strong> Anyone who promises to
                  &quot;make your taxes disappear,&quot; doesn&apos;t give you receipts for their services,
                  is unreachable for weeks, or pressures you into cash-only payments. A good
                  contador should proactively communicate about deadlines, be transparent about
                  costs, and explain the reasoning behind their advice. Communication in English
                  is worth paying a small premium for - misunderstandings about taxes can be expensive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Guides</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                  <h3 className="font-semibold mb-2">Digital Nomad Visa</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    180-day visa for remote workers. Requirements and application.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/visas/digital-nomad">
                      Read Guide
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Briefcase className="w-8 h-8 mx-auto mb-3 text-emerald-500" />
                  <h3 className="font-semibold mb-2">Work Visa</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Working for Argentine employers. Visa types and requirements.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/visas/work">
                      Read Guide
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <CreditCard className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                  <h3 className="font-semibold mb-2">Banking Guide</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bank accounts, exchange rates, and managing money.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/banking">
                      Read Guide
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6 text-center">
                  <DollarSign className="w-8 h-8 mx-auto mb-3 text-amber-500" />
                  <h3 className="font-semibold mb-2">Cost of Living</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete breakdown of expenses for expats in Buenos Aires.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/cost-of-living">
                      Read Guide
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LuceroLegalCTA
              variant="full"
              headline="Need Legal Help with Work Permits?"
              description="Working legally in Argentina requires the right visa and tax setup. Lucero Legal's immigration attorneys can help you navigate residency, work permits, and tax compliance."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
