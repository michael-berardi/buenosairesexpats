import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { Breadcrumb } from "@/components/breadcrumb";
import { InsiderTip } from "@/components/insider-tip";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  ArrowLeft,
  ChefHat,
  Home,
  Utensils
} from "lucide-react";

export const metadata: Metadata = {
  title: "Belgrano Dining Guide | Hidden Gems",
  description: "Discover Belgrano's finest restaurants. Sophisticated dining in a residential setting, from classic Argentine institutions to contemporary culinary gems.",
  keywords: ["Belgrano restaurants", "Corte Comedor", "Roux Buenos Aires", "fine dining Belgrano", "Buenos Aires dining"],
  openGraph: {
    title: "Belgrano Dining Guide | Hidden Gems",
    description: "Explore Belgrano's sophisticated dining scene, from classic Argentine institutions to contemporary gems.",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Belgrano Dining Guide - Buenos Aires"
    }],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/dining/belgrano",
  },
};

const restaurants = [
  {
    name: "Cantina Chinatown",
    stars: 0,
    type: "Chinese",
    chef: "Traditional recipes",
    address: "Mendoza 1700, Belgrano",
    phone: "+54 11 4786-3523",
    website: "https://www.instagram.com/cantinachinatown",
    price: "$$",
    description: "An authentic standout in Buenos Aires' Barrio Chino. This popular neighborhood institution serves traditional Chinese dishes that go far beyond the usual tourist fare. The hand-pulled noodles, dumplings, and regional preparations draw crowds from across the city.",
    mustTry: ["Hand-pulled noodles", "Dumplings", "Peking duck", "Sichuan specialties"],
    reservations: "Walk-in preferred",
    dressCode: "Casual",
    hours: "Daily: 11:30 AM - 3:30 PM, 7:00 PM - 11:30 PM",
    featured: true
  },
  {
    name: "Corte Comedor",
    stars: 0,
    type: "Modern Parrilla & Butcher",
    chef: "Santiago Garat",
    address: "Av. Olazábal 1391, Belgrano",
    phone: "+54 11 4006-0962",
    website: "https://www.instagram.com/cortecomedor",
    price: "$$$",
    description: "A Michelin Guide-listed restaurant and butcher concept that has earned recognition for its approach to meat traceability and nose-to-tail dining. Chef Santiago Garat — a disciple of Francis Mallmann — focuses on dry-aged premium cuts with creative preparations in an industrial-chic space.",
    mustTry: ["Dry-aged steaks", "Nose-to-tail cuts", "House-made breads", "Seasonal cocktails"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 12:00 AM",
    featured: true
  },
  {
    name: "El Pobre Luis",
    stars: 0,
    type: "Classic Parrilla",
    chef: "Traditional recipes",
    address: "Arribeños 2393, Belgrano",
    phone: "+54 11 4704-4312",
    website: "https://www.instagram.com/elpobreluisparrilla",
    price: "$$",
    description: "A beloved neighborhood institution that has been serving some of Buenos Aires' best grilled meats for decades. The no-frills atmosphere, generous portions, and consistently excellent quality have earned it a devoted following. The chorizo and morcilla are legendary.",
    mustTry: ["Chorizo criollo", "Morcilla", "Vacío", "Provoleta"],
    reservations: "Recommended for weekends",
    dressCode: "Casual",
    hours: "Tue-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: true
  },
  {
    name: "La Casona de Belgrano",
    stars: 0,
    type: "Traditional Argentine",
    chef: "Classic recipes",
    address: "Arribeños 1701, Club Belgrano",
    phone: "+54 11 4784-2205",
    website: "https://www.instagram.com/lacasonadebelgrano",
    price: "$$",
    description: "Located inside the historic Club Belgrano (founded 1909), La Casona blends traditional bodegón cooking with more refined touches. The classic club setting provides a warm, nostalgic dining experience. Recently expanded to include premium gourmet meat cuts alongside timeless favorites.",
    mustTry: ["Empanadas", "Milanesa", "Pastas caseras", "Flan casero"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Orilla",
    stars: 0,
    type: "Contemporary Argentine",
    chef: "Fernando Trocca",
    address: "Montañeses 2585, Bajo Belgrano",
    phone: "+54 11 4788-0830",
    website: "https://www.orillarestaurant.com",
    price: "$$$",
    description: "Chef Fernando Trocca's intimate restaurant offers creative tasting menus that showcase Argentine ingredients through a modern lens. The small dining room and open kitchen create a personal, engaging experience. A hidden gem that serious food lovers seek out.",
    mustTry: ["Tasting menu", "Wine pairings", "Seasonal dishes"],
    reservations: "Essential",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Mengano",
    stars: 0,
    awards: ["Bib Gourmand"],
    type: "Contemporary Small Plates",
    chef: "Facundo Kelemen",
    address: "Juramento 1618, Belgrano",
    phone: "+54 11 4780-1450",
    website: "https://www.menganorestaurant.com",
    price: "$$$",
    description: "A tiny, acclaimed restaurant that holds a Michelin Bib Gourmand for two consecutive years. Chef Facundo Kelemen — a former lawyer turned chef who trained at Tegui and in New York — serves creative small plates in an intimate setting. The ever-changing menu reflects seasonal ingredients and a bold innovative spirit.",
    mustTry: ["Seasonal tasting menu", "Creative desserts", "Natural wines"],
    reservations: "Essential - limited seating",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Osaka Buenos Aires",
    stars: 0,
    type: "Nikkei (Japanese-Peruvian)",
    chef: "House team",
    address: "Soler 5608, Palermo",
    phone: "+54 11 4775-6964",
    website: "https://www.osaka.com.pe",
    price: "$$$",
    description: "While located at the Palermo-Belgrano border, this acclaimed Nikkei restaurant blends Japanese precision with Peruvian flavors. Part of an international group with locations across Latin America, the Buenos Aires outpost offers exceptional ceviches, tiraditos, and sushi in a sleek, modern space.",
    mustTry: ["Ceviche nikkei", "Tiradito", "Sushi omakase", "Pisco cocktails"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Mon-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  }
];

export default function BelgranoDiningPage() {
  const featuredRestaurants = restaurants.filter(r => r.featured);
  const otherRestaurants = restaurants.filter(r => !r.featured);

  const articleSchema = generateArticleSchema({
    headline: "Belgrano Dining Guide | Hidden Gems & Classic Institutions",
    description: "Discover Belgrano's finest restaurants from classic Argentine institutions to contemporary culinary gems.",
    url: "https://buenosairesexpats.com/dining/belgrano",
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Dining", item: "https://buenosairesexpats.com/dining" },
    { name: "Belgrano" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Breadcrumb items={[{ label: "Dining", href: "/dining" }, { label: "Belgrano" }]} />

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#292524] via-[#1c1917] to-[#0c0a09] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/belgrano-dining.jpg')" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/80 via-[#0c0a09]/40 to-transparent" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" className="mb-6 border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/dining">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dining Guide
              </Link>
            </Button>

            <Badge className="mb-4 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
              <Home className="w-3 h-3 mr-1" />
              Residential Sophistication
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Belgrano
              <span className="block text-emerald-400">Dining Guide</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl">
              Sophisticated dining in Buenos Aires&apos; most elegant residential neighborhood.
              Discover hidden gems and classic institutions beloved by locals.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-300">
              <span className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-emerald-400" />
                50 Best Restaurants
              </span>
              <span className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                7 Curated Restaurants
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                Local Favorites
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                <Star className="w-3 h-3 mr-1" />
                Featured Restaurants
              </Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Belgrano&apos;s Best</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The restaurants that define Belgrano&apos;s sophisticated dining scene.
              </p>
            </div>

            <div className="space-y-8">
              {featuredRestaurants.map((restaurant) => (
                <Card key={restaurant.name} className="overflow-hidden border-emerald-200/50">
                  <div className="grid md:grid-cols-3">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-emerald-200 to-teal-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        {restaurant.awards?.map((award) => (
                          <Badge key={award} className="mb-1 block bg-emerald-500/20 text-white border-emerald-500/30">
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">{restaurant.name}</h3>
                          <p className="text-muted-foreground">{restaurant.type}</p>
                        </div>
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          {restaurant.price}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {restaurant.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm font-medium mb-2">Must Try:</p>
                          <ul className="space-y-1">
                            {restaurant.mustTry.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {restaurant.address}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {restaurant.hours}
                          </div>
                          <a href={`tel:${restaurant.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                            <Phone className="w-4 h-4" />
                            {restaurant.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button asChild>
                          <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-4 h-4 mr-2" />
                            Website
                          </a>
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={`tel:${restaurant.phone}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Reserve
                          </a>
                        </Button>
                      </div>

                      <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
                        <span className="font-medium">Reservations:</span> {restaurant.reservations} • 
                        <span className="font-medium"> Dress Code:</span> {restaurant.dressCode}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <InsiderTip>
              Belgrano restaurants are quieter on weeknights, making reservations easier than in Palermo. Most kitchens open at 8 PM sharp -- arriving at opening gets you the best table without a wait.
            </InsiderTip>
          </div>
        </div>
      </section>

      {/* Other Restaurants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                <Utensils className="w-3 h-3 mr-1" />
                More to Discover
              </Badge>
              <h2 className="font-serif text-3xl font-bold mb-4">Additional Recommendations</h2>
              <p className="text-lg text-muted-foreground">
                More exceptional restaurants that showcase Belgrano&apos;s culinary diversity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {otherRestaurants.map((restaurant) => (
                <Card key={restaurant.name} className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                        <CardDescription>{restaurant.type}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                          {restaurant.price}
                        </Badge>
                        {restaurant.awards && (
                          <Badge className="ml-2 bg-emerald-100 text-emerald-800 text-xs">
                            {restaurant.awards[0]}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">
                      {restaurant.description}
                    </p>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {restaurant.address}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {restaurant.hours}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="w-4 h-4 mr-1" />
                          Website
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={`tel:${restaurant.phone}`}>
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1c1917] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Explore More Neighborhoods</h2>
            <p className="text-stone-300 mb-8">
              Discover the best dining in Recoleta and Palermo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10" asChild>
                <Link href="/dining/recoleta">
                  Recoleta Guide
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10" asChild>
                <Link href="/dining/palermo">
                  Palermo Guide
                </Link>
              </Button>
            </div>
            <p className="text-xs text-stone-400 mt-6 [&_span]:text-inherit [&_a]:text-stone-300"><LuceroLegalCTA variant="inline" /></p>
          </div>
        </div>
      </section>
    </div>
  );
}
