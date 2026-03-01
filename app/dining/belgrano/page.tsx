import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
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
  title: "Belgrano Dining Guide | Hidden Gems & Classic Institutions | Buenos Aires",
  description: "Discover Belgrano's finest restaurants. Sophisticated dining in a residential setting, from classic Argentine institutions to contemporary culinary gems.",
  keywords: ["Belgrano restaurants", "Corte Comedor", "Roux Buenos Aires", "fine dining Belgrano", "Buenos Aires dining"],
  openGraph: {
    title: "Belgrano Dining Guide | Hidden Gems & Classic Institutions",
    description: "Explore Belgrano's sophisticated dining scene, from classic Argentine institutions to contemporary gems.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/dining/belgrano",
  },
};

const restaurants = [
  {
    name: "Roux",
    stars: 0,
    type: "French-Mediterranean",
    chef: "Ismael León",
    address: "Vicente López 1958, Belgrano",
    phone: "+54 11 4806-1116",
    website: "https://www.rouxresto.com",
    price: "$$$",
    description: "A sophisticated blend of French technique and Mediterranean flavors in an intimate townhouse setting. Chef Ismael León's seasonal menu showcases the best Argentine ingredients with European refinement. The elegant dining rooms and attentive service make this a favorite for special occasions.",
    mustTry: ["Duck magret", "House-made charcuterie", "Seasonal tasting menu", "Wine pairings"],
    reservations: "Recommended",
    dressCode: "Smart casual to elegant",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: true
  },
  {
    name: "Corte Comedor",
    stars: 0,
    type: "Modern Argentine",
    chef: "Pedro Bargero",
    address: "Sucre 676, Belgrano",
    phone: "+54 11 4006-0962",
    website: "https://www.cortecomedor.com",
    price: "$$$",
    description: "A contemporary restaurant that has earned international recognition for its creative approach to Argentine cuisine. Chef Pedro Bargero's open-fire cooking and innovative presentations have made this one of Buenos Aires' most exciting dining destinations. The industrial-chic space in a converted warehouse adds to the appeal.",
    mustTry: ["Fire-grilled meats", "Creative starters", "House-made breads", "Seasonal cocktails"],
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
    website: "https://www.elpobreluis.com",
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
    address: "Vidal 2856, Belgrano",
    phone: "+54 11 4784-2205",
    website: "https://www.lacasonadebelgrano.com",
    price: "$$",
    description: "Housed in a beautiful old mansion, La Casona offers traditional Argentine cuisine in an elegant setting. The historic building, with its stained glass and antique furnishings, provides a glimpse into Buenos Aires' past. The menu features classic dishes executed with care.",
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
    chef: "Martín Molteni",
    address: "Vuelta de Obligado 1864, Belgrano",
    phone: "+54 11 4788-0830",
    website: "https://www.orillarestaurant.com",
    price: "$$$",
    description: "Chef Martín Molteni's intimate restaurant offers creative tasting menus that showcase Argentine ingredients through a modern lens. The small dining room and open kitchen create a personal, engaging experience. A hidden gem that serious food lovers seek out.",
    mustTry: ["Tasting menu", "Wine pairings", "Seasonal dishes"],
    reservations: "Essential",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Mengano",
    stars: 0,
    awards: ["Latin America's 50 Best"],
    type: "Contemporary Small Plates",
    chef: "Dolores Valtuena",
    address: "Juramento 1618, Belgrano",
    phone: "+54 11 4780-1450",
    website: "https://www.menganorestaurant.com",
    price: "$$$",
    description: "A tiny, acclaimed restaurant that has earned a spot on Latin America's 50 Best list. Chef Dolores Valtuena serves creative small plates in an intimate setting. The ever-changing menu reflects seasonal ingredients and the chef's innovative spirit.",
    mustTry: ["Seasonal tasting menu", "Creative desserts", "Natural wines"],
    reservations: "Essential - limited seating",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Julia Restaurante",
    stars: 0,
    type: "Contemporary Argentine",
    chef: "Julia Zabala",
    address: "Sucre 1402, Belgrano",
    phone: "+54 11 4006-0962",
    website: "https://www.juliarestaurant.com.ar",
    price: "$$$",
    description: "A sophisticated restaurant that celebrates Argentine ingredients through a contemporary lens. Chef Julia Zabala's elegant presentations and refined techniques have made this a destination for discerning diners. The warm, inviting space matches the thoughtful cuisine.",
    mustTry: ["Seasonal menu", "Fish dishes", "Vegetable preparations"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Italpast",
    stars: 0,
    type: "Italian-Argentine",
    chef: "Traditional recipes",
    address: "Vidal 2885, Belgrano",
    phone: "+54 11 4784-5770",
    website: "https://www.italpast.com",
    price: "$$",
    description: "A classic Italian-Argentine restaurant that has been serving Belgrano for generations. The handmade pastas, traditional sauces, and warm atmosphere make it a neighborhood favorite. The portions are generous and the quality is consistently excellent.",
    mustTry: ["Ravioles caseros", "Sorrentinos", "Milanesa napolitana", "Tiramisú"],
    reservations: "Recommended weekends",
    dressCode: "Casual to smart casual",
    hours: "Tue-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
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

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/dining" className="hover:text-foreground">Dining</Link>
            <span>/</span>
            <span className="text-foreground">Belgrano</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-stone-800 via-stone-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/belgrano-dining.jpg')" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Belgrano
              <span className="block text-emerald-400">Dining Guide</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl">
              Sophisticated dining in Buenos Aires&apos; most elegant residential neighborhood. 
              Discover hidden gems and classic institutions beloved by locals.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-emerald-400" />
                50 Best Restaurants
              </span>
              <span className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-emerald-400" />
                8 Curated Restaurants
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
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4" variant="secondary">
                <Star className="w-3 h-3 mr-1" />
                Featured Restaurants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Belgrano&apos;s Best</h2>
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
              <h2 className="text-3xl font-bold mb-4">Additional Recommendations</h2>
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
                            50 Best
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

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Planning an Extended Stay?"
              description="Need a visa to enjoy Buenos Aires' incredible food scene long-term? Lucero Legal can help with residency and immigration."
              utm_content="dining-belgrano"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Explore More Neighborhoods</h2>
            <p className="text-stone-400 mb-8">
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
          </div>
        </div>
      </section>
    </div>
  );
}
