import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DesktopOnly, MobileOnly } from "@/components/desktop-only";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema, generateArticleSchema } from "@/lib/schema";
import {
  Utensils,
  Beef,
  Leaf,
  Coffee,
  ShoppingBag,
  Smartphone,
  Clock,
  DollarSign,
  MapPin,
  Star,
  AlertCircle,
  ArrowRight,
  Flame,
  ChefHat
} from "lucide-react";

export const metadata: Metadata = {
  title: "Food & Dining in Buenos Aires - Expat Guide 2026",
  description: "Complete guide to food and dining in Buenos Aires. Best parrillas, vegetarian options, empanada guide, cafe culture, and delivery apps for expats.",
  keywords: ["Buenos Aires food", "Argentine cuisine", "parrillas Buenos Aires", "empanadas", "BA restaurants", "food delivery Argentina"],
  alternates: {
    canonical: "https://buenosairesexpats.com/guides/food-dining",
  },
  openGraph: {
    title: "Food & Dining in Buenos Aires - Expat Guide",
    description: "Best restaurants, parrillas, cafes, and food culture in Buenos Aires. Real prices and local tips.",
  },
};

const parrillas = [
  { name: "Don Julio", neighborhood: "Palermo", price: "$$$$", notes: "World-famous, book weeks ahead", specialty: "Bife de chorizo" },
  { name: "La Cabrera", neighborhood: "Palermo", price: "$$$$", notes: "Upscale, generous portions", specialty: "Ojo de bife" },
  { name: "El Desnivel", neighborhood: "San Telmo", price: "$$", notes: "Local favorite, no frills", specialty: "Vacío" },
  { name: "La Brigada", neighborhood: "San Telmo", price: "$$$", notes: "Touristy but good", specialty: "Asado" },
  { name: "Parrilla Peña", neighborhood: "Recoleta", price: "$", notes: "Budget-friendly, authentic", specialty: "Choripán" },
  { name: "El Preferido", neighborhood: "Palermo", price: "$$$", notes: "Hip atmosphere, great wine", specialty: "Provoleta" },
];

const empanadaTypes = [
  { type: "Carne", filling: "Ground beef, onions, olives, eggs", region: "Classic everywhere", spice: "Medium" },
  { type: "Jamón y Queso", filling: "Ham and cheese", region: "Universal favorite", spice: "Mild" },
  { type: "Pollo", filling: "Shredded chicken", region: "Popular alternative", spice: "Mild" },
  { type: "Caprese", filling: "Tomato, mozzarella, basil", region: "Modern/vegetarian", spice: "Mild" },
  { type: "Humita", filling: "Corn, cheese, onion", region: "Northwest style", spice: "Mild" },
  { type: "Verdura", filling: "Spinach, cheese", region: "Vegetarian option", spice: "Mild" },
];

const veggieSpots = [
  { name: "Artemisia", neighborhood: "Palermo", type: "Vegetarian", notes: "Creative veggie dishes, cozy" },
  { name: "Sacro", neighborhood: "Palermo", type: "Vegan", notes: "Upscale vegan, beautiful space" },
  { name: "Bio Solo Organico", neighborhood: "Palermo", type: "Organic/Veg", notes: "Health-focused, organic wine" },
  { name: "Bodhi", neighborhood: "Various", type: "Vegetarian", notes: "Chinese-Argentine veggie, cheap" },
  { name: "Veggie Medio Oriente", neighborhood: "Villa Crespo", type: "Vegan", notes: "Middle Eastern flavors" },
];

const cafeCulture = [
  { name: "Café Tortoni", neighborhood: "Microcentro", vibe: "Historic, touristy", notes: "Oldest cafe, tango shows" },
  { name: "Las Violetas", neighborhood: "Almagro", vibe: "Classic, elegant", notes: "Beautiful stained glass" },
  { name: "Café Rivas", neighborhood: "San Telmo", vibe: "Literary, bohemian", notes: "Writer's favorite" },
  { name: "Full City Coffee", neighborhood: "Palermo", vibe: "Third-wave, hip", notes: "Best specialty coffee" },
  { name: "Negro Cueva de Café", neighborhood: "Palermo", vibe: "Modern, minimalist", notes: "Serious coffee, no WiFi" },
];

const deliveryApps = [
  { name: "Rappi", coverage: "Excellent", fees: "$1-3", notes: "Most popular, wide selection" },
  { name: "PedidosYa", coverage: "Excellent", fees: "$1-3", notes: "Strong restaurant network" },
  { name: "Uber Eats", coverage: "Good", fees: "$1-4", notes: "International chains" },
  { name: "Mercado Libre (Mercado Pago)", coverage: "Growing", fees: "Varies", notes: "Groceries + restaurants" },
];

const priceRanges = [
  { category: "Empanada (each)", cheap: "$2-3", mid: "$3-4", expensive: "$4-6" },
  { category: "Coffee at café", cheap: "$2-3", mid: "$3-5", expensive: "$5-8" },
  { category: "Lunch (menu del día)", cheap: "$5-8", mid: "$8-15", expensive: "$15-25" },
  { category: "Dinner for two (mid-range)", cheap: "$30-50", mid: "$50-80", expensive: "$80-150" },
  { category: "Parrilla dinner (per person)", cheap: "$15-25", mid: "$25-45", expensive: "$45-80" },
  { category: "Pizza (whole)", cheap: "$10-15", mid: "$15-25", expensive: "$25-40" },
  { category: "Bottle of wine (restaurant)", cheap: "$8-15", mid: "$15-30", expensive: "$30-60" },
];

export default function FoodDiningPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Guides", item: "https://buenosairesexpats.com/guides" },
    { name: "Food & Dining" },
  ]);

  const articleSchema = generateArticleSchema({
    headline: "Food & Dining in Buenos Aires - Expat Guide",
    description: "Complete guide to food and dining in Buenos Aires. Best parrillas, vegetarian options, empanada guide, cafe culture, and delivery apps for expats.",
    url: "https://buenosairesexpats.com/guides/food-dining",
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
            <span className="text-foreground">Food & Dining</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/food-dining-hero.webp')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20" variant="secondary">
              <Utensils className="w-3 h-3 mr-1" />
              Food Guide
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Food & Dining in Buenos Aires
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From world-class parrillas to cozy cafes, discover the best of Argentine 
              cuisine and dining culture. Real recommendations from expats living here.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/90">
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span>$5-80 per meal</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" />
                <span>Dinner starts at 9pm</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Palermo = food hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Argentine Cuisine Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Argentine Cuisine: What to Expect</h2>
            <Card className="mb-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Argentine cuisine is heavily influenced by Italian and Spanish immigrants, 
                  with beef playing a central role. Expect generous portions, late dining 
                  hours, and a strong cafe culture.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <Beef className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    <div className="font-semibold">Meat-Centric</div>
                    <p className="text-sm text-muted-foreground">Beef is king. Vegetarians need to seek out specific spots.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <Coffee className="w-8 h-8 mx-auto mb-2 text-amber-600" />
                    <div className="font-semibold">Cafe Culture</div>
                    <p className="text-sm text-muted-foreground">Coffee is social. Expect to linger over a cortado.</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="font-semibold">Late Dining</div>
                    <p className="text-sm text-muted-foreground">Lunch at 1-2pm, dinner at 9-11pm. Adapt or be alone.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parrillas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Flame className="w-6 h-6 text-red-500" />
              Best Parrillas (Steakhouses)
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Restaurant</th>
                        <th className="text-left py-3 px-2">Neighborhood</th>
                        <th className="text-left py-3 px-2">Price</th>
                        <th className="text-left py-3 px-2">Specialty</th>
                        <th className="text-left py-3 px-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parrillas.map((p) => (
                        <tr key={p.name} className="border-b last:border-0">
                          <td className="py-3 px-2 font-medium">{p.name}</td>
                          <td className="py-3 px-2">{p.neighborhood}</td>
                          <td className="py-3 px-2">{p.price}</td>
                          <td className="py-3 px-2 text-sm">{p.specialty}</td>
                          <td className="py-3 px-2 text-sm text-muted-foreground">{p.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Pro tip:</strong> Book Don Julio and La Cabrera well in advance (weeks). 
                  For authentic local experiences, try El Desnivel or Parrilla Peña - no reservations needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empanada Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Empanada Guide</h2>
            <p className="text-center text-muted-foreground mb-8">
              Argentina's favorite handheld food. Each region has its style - Salta-style 
              (baked, smaller) vs. Tucumán-style (baked, larger) vs. Cordobesa (sweet dough).
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {empanadaTypes.map((emp) => (
                <Card key={emp.type} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{emp.type}</CardTitle>
                    <CardDescription>{emp.region}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{emp.filling}</p>
                    <Badge variant="outline" className="text-xs">
                      {emp.spice}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Where to find the best:</strong> El Sanjuanino (Recoleta), 
                La Cocina (Palermo), or any neighborhood empanada shop with a line
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vegetarian & Vegan */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Leaf className="w-6 h-6 text-green-500" />
              Vegetarian & Vegan Options
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              While Argentina is meat-heavy, Buenos Aires has a growing veggie scene. 
              These spots cater specifically to plant-based diets.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {veggieSpots.map((spot) => (
                <Card key={spot.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{spot.name}</CardTitle>
                      <Badge variant={spot.type === "Vegan" ? "default" : "secondary"}>
                        {spot.type}
                      </Badge>
                    </div>
                    <CardDescription>{spot.neighborhood}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{spot.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>General tip:</strong> Most restaurants have at least one vegetarian 
                option (usually pasta or a milanesa de soja). Vegan is harder - use the 
                HappyCow app to find dedicated spots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cafe Culture */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Cafe Culture</h2>
            <p className="text-center text-muted-foreground mb-8">
              Coffee is a social ritual in Buenos Aires. The city is famous for its 
              historic cafes (bares notables) and growing specialty coffee scene.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {cafeCulture.map((cafe) => (
                <Card key={cafe.name}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cafe.name}</CardTitle>
                    <CardDescription>{cafe.neighborhood} • {cafe.vibe}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cafe.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Coffee Types to Know</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Cortado", desc: "Espresso with a splash of milk" },
                    { name: "Lagrima", desc: "Mostly milk with a drop of coffee" },
                    { name: "Café con leche", desc: "Half coffee, half milk" },
                    { name: "Americano", desc: "Espresso with hot water" },
                    { name: "Submarino", desc: "Hot milk with chocolate bar to melt" },
                    { name: "Capuchino", desc: "Similar to Italian cappuccino" },
                  ].map((coffee) => (
                    <div key={coffee.name} className="flex items-start gap-2">
                      <Coffee className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{coffee.name}:</span>
                        <span className="text-sm text-muted-foreground ml-1">{coffee.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Guide */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Price Guide (USD)</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2">Item</th>
                        <th className="text-left py-3 px-2">Cheap</th>
                        <th className="text-left py-3 px-2">Mid-Range</th>
                        <th className="text-left py-3 px-2">Upscale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {priceRanges.map((item) => (
                        <tr key={item.category} className="border-b last:border-0">
                          <td className="py-3 px-2">{item.category}</td>
                          <td className="py-3 px-2 text-green-600">{item.cheap}</td>
                          <td className="py-3 px-2 text-blue-600">{item.mid}</td>
                          <td className="py-3 px-2 text-purple-600">{item.expensive}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Apps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-500" />
              Food Delivery Apps
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {deliveryApps.map((app) => (
                <Card key={app.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{app.name}</CardTitle>
                      <Badge variant="outline">{app.coverage}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Delivery fee:</span>
                      <span className="font-medium">{app.fees}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{app.notes}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Tip:</strong> Delivery apps require a local phone number. 
                You can pay with cash (efectivo) or link a credit card. Tipping 
                delivery drivers is appreciated but not mandatory - round up or add $1-2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grocery Shopping */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <ShoppingBag className="w-6 h-6 text-green-600" />
              Grocery Shopping
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Supermarkets</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>Carrefour:</strong> Largest chain, good selection</li>
                    <li><strong>Coto:</strong> Local favorite, competitive prices</li>
                    <li><strong>Día:</strong> Budget option, basic selection</li>
                    <li><strong>Jumbo:</strong> Premium, imported goods</li>
                    <li><strong>Whole Foods-style:</strong> Dietéticas for organic/health</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Markets (Ferias)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong>San Telmo Market:</strong> Touristy but good</li>
                    <li><strong>Belgrano Market:</strong> Local, great produce</li>
                    <li><strong>Chinatown (Belgrano):</strong> Asian ingredients</li>
                    <li><strong>Neighborhood ferias:</strong> Best prices, fresh</li>
                    <li><strong>Ask locals:</strong> "¿Dónde está la feria?"</li>
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
                    "Food is NOT as cheap as YouTubers claim anymore. A decent meal out is 
                    $15-25 per person. Groceries are comparable to US prices for many items. 
                    The beef is still a bargain though."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/digitalnomad, 2024</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    "Dinner at 9pm is EARLY. Most Argentines eat at 10pm or later. If you 
                    show up at 7pm, you'll be eating alone."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- r/argentina</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground italic">
                    "Skip the tourist parrillas in Puerto Madero. Go to El Desnivel in San 
                    Telmo or any neighborhood parrilla with locals. Half the price, twice the authenticity."
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- BA resident, 3 years</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Hungry for More?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Explore neighborhoods with the best food scenes and discover local 
              favorites you won't find in guidebooks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/neighborhoods/palermo">
                  Palermo Food Scene
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" className="border border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white">
                <Link href="/cost-of-living">
                  Full Cost Breakdown
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
