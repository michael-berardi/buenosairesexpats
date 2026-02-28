import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DesktopOnly, MobileOnly } from "@/components/desktop-only";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import {
  Shield,
  MapPin,
  AlertTriangle,
  Phone,
  Smartphone,
  Users,
  Eye,
  Wallet,
  Car,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

export const metadata: Metadata = {
  title: "Safety in Buenos Aires - Complete Expat Guide 2026",
  description: "Complete safety guide for Buenos Aires expats. Neighborhood safety breakdown, common scams to avoid, emergency numbers, and solo travel tips.",
  keywords: ["Buenos Aires safety", "Argentina crime", "BA scams", "safe neighborhoods Buenos Aires", "solo female travel Argentina"],
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/safety",
  },
  openGraph: {
    title: "Safety in Buenos Aires - Complete Expat Guide",
    description: "Neighborhood safety ratings, common scams, and how to stay safe as an expat in Buenos Aires.",
  },
};

const neighborhoodsWithPages = new Set([
  "palermo", "recoleta", "belgrano", "puerto-madero", "san-telmo", "villa-crespo"
]);

const neighborhoodSafety = [
  { name: "Palermo", slug: "palermo", safety: "Very Safe", day: "Very Safe", night: "Safe", notes: "Touristy, well-lit, police presence" },
  { name: "Recoleta", slug: "recoleta", safety: "Very Safe", day: "Very Safe", night: "Safe", notes: "Upscale, residential, secure" },
  { name: "Belgrano", slug: "belgrano", safety: "Very Safe", day: "Very Safe", night: "Very Safe", notes: "Family area, quiet at night" },
  { name: "Puerto Madero", slug: "puerto-madero", safety: "Very Safe", day: "Very Safe", night: "Safe", notes: "Modern, monitored, some empty areas" },
  { name: "San Telmo", slug: "san-telmo", safety: "Moderate", day: "Safe", night: "Caution", notes: "Touristy but watch belongings" },
  { name: "Microcentro", slug: "microcentro", safety: "Moderate", day: "Safe", night: "Avoid", notes: "Empty at night, some sketchy blocks" },
  { name: "Villa Crespo", slug: "villa-crespo", safety: "Moderate", day: "Safe", night: "Caution", notes: "Up-and-coming, varies by block" },
  { name: "Caballito", slug: "caballito", safety: "Moderate", day: "Safe", night: "Caution", notes: "Residential, generally fine" },
  { name: "La Boca", slug: "la-boca", safety: "Caution", day: "Safe (Caminito only)", night: "Avoid", notes: "Stay on tourist path, don't wander" },
  { name: "Constitución", slug: "constitucion", safety: "Caution", day: "Caution", night: "Avoid", notes: "Transit hub, be alert" },
  { name: "Once/Abasto", slug: "once-abasto", safety: "Caution", day: "Caution", night: "Avoid", notes: "Crowded, watch your pockets" },
  { name: "Retiro", slug: "retiro", safety: "Caution", day: "Caution", night: "Avoid", notes: "Near bus station, stay alert" },
];

const commonScams = [
  {
    name: "The Mustard Scam",
    description: "Someone 'accidentally' spills mustard, ketchup, or bird poop on you. A 'helpful' stranger offers to clean it while an accomplice steals your bag.",
    prevention: "Keep bags in front of you. Politely decline help. Walk away quickly.",
    severity: "High",
  },
  {
    name: "Fake Taxi Scam",
    description: "Unofficial taxis overcharge, take longer routes, or drive to ATMs to force withdrawals. Some use rigged meters.",
    prevention: "Use Uber, Cabify, or official radio taxis only. Never hail street taxis.",
    severity: "High",
  },
  {
    name: "The Change Scam",
    description: "You pay with a large bill, they swap it for a counterfeit claiming you gave them fake money. Or they 'miscount' change.",
    prevention: "Count change carefully. Use small bills when possible. Pay with card when you can.",
    severity: "Medium",
  },
  {
    name: "Distraction Theft",
    description: "Someone asks for directions, drops something, or creates a commotion while an accomplice grabs your phone/bag.",
    prevention: "Be aware of your surroundings. Keep phone in front pocket. Cross body bags.",
    severity: "High",
  },
  {
    name: "ATM Skimming",
    description: "Card skimmers on ATMs capture your card data. Sometimes people watch you enter your PIN.",
    prevention: "Use ATMs inside banks. Cover the keypad. Check for tampering.",
    severity: "Medium",
  },
  {
    name: "Fake Police",
    description: "People posing as police ask to check your wallet for counterfeit money. They steal cash during the 'inspection'.",
    prevention: "Real police won't ask to see your wallet. Refuse and walk to a public place.",
    severity: "Medium",
  },
];

const emergencyNumbers = [
  { number: "911", service: "General Emergency", notes: "Police, fire, medical" },
  { number: "107", service: "Ambulance (SAME)", notes: "Public ambulance service" },
  { number: "101", service: "Police", notes: "Direct police line" },
  { number: "100", service: "Fire Department", notes: "Bomberos" },
  { number: "144", service: "Violence Hotline", notes: "Domestic violence, 24/7" },
  { number: "147", service: "Tourist Police", notes: "English-speaking officers" },
];

const safetyApps = [
  { name: "Mi Argentina", purpose: "Official gov app", notes: "Digital DNI, emergency contacts" },
  { name: "Cabify/Uber", purpose: "Safe transport", notes: "Trackable rides, no haggling" },
  { name: "Google Maps", purpose: "Navigation", notes: "Download offline maps" },
  { name: "WhatsApp", purpose: "Communication", notes: "Share location with friends" },
  { name: "BA Como Llego", purpose: "Public transit", notes: "Official BA transport app" },
];

const soloFemaleTips = [
  "Dress modestly to avoid unwanted attention—Argentine women tend to dress up but conservatively",
  "Avoid walking alone late at night, even in 'safe' neighborhoods",
  "Use Uber/Cabify at night instead of walking or public transit",
  "Catcalling is common but usually verbal only—ignore and keep walking",
  "Trust your instincts—if a situation feels off, leave immediately",
  "Join female expat groups on Facebook for real-time safety updates",
  "Share your location with a friend when going on dates or to new areas",
  "Avoid Retiro bus station area at night—take taxis to/from",
];

export default function SafetyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Safety" },
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Safety in Buenos Aires - Complete Expat Guide",
    description: "Complete safety guide for Buenos Aires expats. Neighborhood safety breakdown, common scams to avoid, emergency numbers, and solo travel tips.",
    url: "https://buenosairesexpats.com/guides/safety",
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/guides/getting-started" className="hover:text-foreground">Guides</Link>
            <span>/</span>
            <span className="text-foreground">Safety</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Shield className="w-3 h-3 mr-1" />
              Safety Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Safety in Buenos Aires
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Honest safety information for expats. Neighborhood breakdowns, common scams, 
              and practical tips to stay safe while enjoying the city.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Safer than most Latin American capitals</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>Petty theft is the main concern</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Assessment */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">The Real Safety Picture</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  Buenos Aires is generally safe compared to other Latin American capitals, 
                  but it's not crime-free. The main risks for expats are petty theft, scams, 
                  and pickpocketing—not violent crime.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200">
                    <div className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      What's Generally Safe
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Walking in Palermo/Recoleta during day</li>
                      <li>• Using Uber/Cabify</li>
                      <li>• Dining out at night in good areas</li>
                      <li>• Public transit (with awareness)</li>
                      <li>• ATMs inside banks</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200">
                    <div className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Common Risks
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Phone snatching on the street</li>
                      <li>• Pickpockets on crowded buses/subway</li>
                      <li>• Scams targeting tourists</li>
                      <li>• Walking with phone visible</li>
                      <li>• Unofficial taxis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhood Safety */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Neighborhood Safety Guide</h2>
            
            {/* Desktop Table */}
            <DesktopOnly>
              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Neighborhood</th>
                          <th className="text-left py-3 px-2">Overall</th>
                          <th className="text-left py-3 px-2">Day</th>
                          <th className="text-left py-3 px-2">Night</th>
                          <th className="text-left py-3 px-2">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {neighborhoodSafety.map((hood) => (
                          <tr key={hood.name} className="border-b last:border-0">
                            <td className="py-3 px-2 font-medium">
                              {neighborhoodsWithPages.has(hood.slug) ? (
                                <Link href={`/neighborhoods/${hood.slug}`} className="hover:text-primary hover:underline">
                                  {hood.name}
                                </Link>
                              ) : (
                                <span>{hood.name}</span>
                              )}
                            </td>
                            <td className="py-3 px-2">
                              <Badge variant={
                                hood.safety === "Very Safe" ? "default" :
                                hood.safety === "Moderate" ? "secondary" : "destructive"
                              }>
                                {hood.safety}
                              </Badge>
                            </td>
                            <td className="py-3 px-2 text-sm">{hood.day}</td>
                            <td className="py-3 px-2 text-sm">{hood.night}</td>
                            <td className="py-3 px-2 text-sm text-muted-foreground">{hood.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </DesktopOnly>
            
            {/* Mobile Cards */}
            <MobileOnly>
              <div className="space-y-3">
                {neighborhoodSafety.map((hood) => (
                  <Card key={hood.name}>
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        {neighborhoodsWithPages.has(hood.slug) ? (
                          <Link
                            href={`/neighborhoods/${hood.slug}`}
                            className="font-semibold hover:text-primary hover:underline"
                          >
                            {hood.name}
                          </Link>
                        ) : (
                          <span className="font-semibold">{hood.name}</span>
                        )}
                        <Badge variant={
                          hood.safety === "Very Safe" ? "default" : 
                          hood.safety === "Moderate" ? "secondary" : "destructive"
                        }>
                          {hood.safety}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                        <div>
                          <span className="text-muted-foreground">Day:</span> {hood.day}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Night:</span> {hood.night}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{hood.notes}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </MobileOnly>
          </div>
        </div>
      </section>

      {/* Common Scams */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              Common Scams to Avoid
            </h2>
            <div className="space-y-4">
              {commonScams.map((scam) => (
                <Card key={scam.name} className={scam.severity === "High" ? "border-red-200" : ""}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{scam.name}</CardTitle>
                      <Badge variant={scam.severity === "High" ? "destructive" : "secondary"}>
                        {scam.severity} Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{scam.description}</p>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300">
                        <strong>How to avoid:</strong> {scam.prevention}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-16 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Phone className="w-6 h-6 text-red-600" />
              Emergency Numbers
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyNumbers.map((emergency) => (
                <Card key={emergency.number} className="border-red-200">
                  <CardContent className="pt-6 text-center">
                    <a href={`tel:${emergency.number}`} className="text-3xl font-bold text-red-600 mb-2 block hover:underline">{emergency.number}</a>
                    <div className="font-semibold">{emergency.service}</div>
                    <p className="text-xs text-muted-foreground mt-1">{emergency.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white dark:bg-background rounded-lg border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Save these numbers in your phone now.</strong> The tourist police (147) 
                have English-speaking officers who can help with theft reports and emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Apps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-500" />
              Essential Safety Apps
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {safetyApps.map((app) => (
                <Card key={app.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{app.name}</CardTitle>
                    <CardDescription>{app.purpose}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{app.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solo Female Travel */}
      <section className="py-16 bg-purple-50 dark:bg-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Users className="w-6 h-6 text-purple-600" />
              Solo Female Travel Tips
            </h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {soloFemaleTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <div className="mt-6 p-4 bg-white dark:bg-background rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <strong>Join these communities:</strong> &quot;Girls LOVE Travel Buenos Aires&quot; 
                and &quot;Buenos Aires Expats&quot; Facebook groups for real-time safety updates 
                and meetups with other women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* General Safety Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">General Safety Tips</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    On the Street
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Don't walk with your phone out</li>
                    <li>• Keep bags in front, zipped closed</li>
                    <li>• Cross the street if someone is following</li>
                    <li>• Avoid empty streets at night</li>
                    <li>• Walk with purpose and confidence</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-primary" />
                    Money & Valuables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Carry only what you need for the day</li>
                    <li>• Use a money belt for large cash</li>
                    <li>• Keep cards separate from cash</li>
                    <li>• Photocopy important documents</li>
                    <li>• Use ATMs inside banks only</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary" />
                    Transportation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Use Uber/Cabify, not street taxis</li>
                    <li>• Share ride details with a friend</li>
                    <li>• Sit in the back seat</li>
                    <li>• On buses/subway, guard your pockets</li>
                    <li>• Avoid empty train cars</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    If Something Happens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Don't resist—your safety &gt; your stuff</li>
                    <li>• Report theft to tourist police (147)</li>
                    <li>• Cancel cards immediately</li>
                    <li>• File a police report for insurance</li>
                    <li>• Contact your embassy if passport stolen</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reddit Reality Check */}
      <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">What Reddit Says (The Honest Version)</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;I've lived here 3 years and never had an issue. The key is awareness—don't 
                    walk around staring at your phone, don't flash expensive items, and stick 
                    to well-lit areas at night.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/argentina expat</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;The mustard scam got me on day 3. I was so flustered I didn't realize my 
                    bag was open until later. They got my phone. Keep your bag in FRONT of you always.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    &quot;As a solo female, I've felt safer in Palermo than I did in parts of NYC or Paris. 
                    The catcalling is annoying but harmless. Just ignore and keep walking.&quot;
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Female expat, 2 years in BA</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Legal Residency = Better Protection"
              description="Legal residents have full access to Argentine police and legal systems. Lucero Legal can help you get proper residency status."
              utm_content="guides-safety"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Choose a Safe Neighborhood</h2>
            <p className="text-primary-foreground/90 mb-8">
              Explore our detailed neighborhood guides to find the best area for your 
              lifestyle and safety preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link href="/housing">
                  Find Safe Housing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
