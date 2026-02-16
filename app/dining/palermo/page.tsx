import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone,
  Globe,
  Award,
  ArrowLeft,
  ChefHat,
  Flame
} from "lucide-react";

export const metadata: Metadata = {
  title: "Palermo Dining Guide | Don Julio & World-Class Restaurants | Buenos Aires",
  description: "The ultimate guide to Palermo&apos;s culinary scene. Home to Don Julio, Best Restaurant in Latin America 2024, and the vibrant heart of Buenos Aires dining.",
  keywords: ["Palermo restaurants", "Don Julio Buenos Aires", "Crizia restaurant", "Michelin star Palermo", "best restaurants BA"],
  openGraph: {
    title: "Palermo Dining Guide | Don Julio & World-Class Restaurants",
    description: "Discover Palermo&apos;s legendary dining scene, including Don Julio - Best Restaurant in Latin America 2024.",
  },
};

const restaurants = [
  {
    name: "Don Julio",
    stars: 1,
    awards: ["World&apos;s Best Steakhouse 2024", "Latin America&apos;s 50 Best #1 2024"],
    type: "Argentine Parrilla",
    chef: "Pablo Rivero",
    address: "Guatemala 4699, Palermo Soho",
    phone: "+54 11 4831-9564",
    website: "https://www.donjulioparrilla.com",
    price: "$$$$",
    description: "The world's most celebrated steakhouse and Best Restaurant in Latin America 2024. Don Julio has elevated the Argentine parrilla to an art form. Chef Pablo Rivero's dedication to premium beef, exceptional wine, and warm hospitality has made this a pilgrimage site for food lovers worldwide. The 45-day dry-aged steaks are legendary.",
    mustTry: ["Bife de chorizo (45-day dry-aged)", "Ojo de bife", "Provoleta", "Wine cellar experience"],
    reservations: "Essential - book 30+ days ahead online",
    dressCode: "Smart casual",
    hours: "Mon-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: true
  },
  {
    name: "Crizia",
    stars: 1,
    type: "Contemporary Fire Cooking",
    chef: "Gabriel Oggero",
    address: "Gorriti 5143, Palermo Soho",
    phone: "+54 11 5291-7077",
    website: "https://www.crizia.com.ar",
    price: "$$$$",
    description: "Newly awarded a Michelin star in 2025, Crizia is Chef Gabriel Oggero's ode to fire and Argentine ingredients. The open kitchen centers around a massive wood-fired grill, where everything from vegetables to premium meats is cooked over flames. The industrial-chic space and creative menu make this one of BA&apos;s most exciting dining experiences.",
    mustTry: ["Wood-fired oysters", "Smoked beet salad", "Fire-grilled sweetbreads", "Burnt cheesecake"],
    reservations: "Essential",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 12:00 AM",
    featured: true
  },
  {
    name: "Tegui",
    stars: 0,
    awards: ["Latin America&apos;s 50 Best"],
    type: "Contemporary Argentine",
    chef: "Germán Martitegui",
    address: "Costa Rica 5852, Palermo Hollywood",
    phone: "+54 11 5291-3330",
    website: "https://www.tegui.com.ar",
    price: "$$$$",
    description: "A Palermo institution and longtime member of Latin America&apos;s 50 Best. Behind an unmarked facade, Tegui offers one of Buenos Aires&apos; most refined tasting menus. Chef Germán Martitegui combines Argentine ingredients with international techniques in a sleek, contemporary space.",
    mustTry: ["Seasonal tasting menu", "Crispy langoustines", "Duck magret"],
    reservations: "Essential",
    dressCode: "Smart casual to elegant",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: true
  },
  {
    name: "El Preferido de Palermo",
    stars: 0,
    type: "Classic Bodegón",
    chef: "Traditional recipes",
    address: "Jorge Luis Borges 2108, Palermo Soho",
    phone: "+54 11 4774-6585",
    website: "https://www.elpreferidodepalermo.com",
    price: "$$",
    description: "A beloved neighborhood institution that's been serving classic Argentine fare since 1952. The bar seating, vintage decor, and timeless dishes make this a quintessential Buenos Aires experience. The tortilla española and milanesas are legendary among locals.",
    mustTry: ["Tortilla española", "Milanesa napolitana", "Rabas (fried calamari)", "Chorizo criollo"],
    reservations: "Walk-in preferred",
    dressCode: "Casual",
    hours: "Tue-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "La Cabrera",
    stars: 0,
    type: "Premium Parrilla",
    chef: "Gastón Rivera",
    address: "José Antonio Cabrera 5099, Palermo Soho",
    phone: "+54 11 4832-0704",
    website: "https://www.lacabrera.com.ar",
    price: "$$$",
    description: "One of Palermo&apos;s most popular parrillas, known for generous portions and an extensive wine list. The complimentary appetizers and side dishes that accompany each entrée make it excellent value. The outdoor seating on Cabrera street is perfect for people-watching.",
    mustTry: ["Bife de chorizo", "Ojo de bife", "Free appetizers", "Malbec selection"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Daily: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Anafe",
    stars: 0,
    awards: ["Latin America&apos;s 50 Best"],
    type: "Contemporary Small Plates",
    chef: "Luisa Martínez & Lula Martin del Campo",
    address: "Gorriti 4862, Palermo Soho",
    phone: "+54 11 2079-4660",
    website: "https://www.anafe.com.ar",
    price: "$$$",
    description: "A tiny, intimate restaurant from a talented female chef duo. Anafe serves creative small plates that change frequently based on seasonal ingredients. The cozy space and personal service make it feel like dining at a friend's home.",
    mustTry: ["Seasonal tasting menu", "Homemade bread", "Creative desserts"],
    reservations: "Essential - limited seating",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Mishiguene",
    stars: 0,
    awards: ["Latin America&apos;s 50 Best"],
    type: "Jewish-Argentine",
    chef: "Tomás Kalika",
    address: "Lafinur 3368, Palermo",
    phone: "+54 11 3969-0375",
    website: "https://www.mishiguene.com",
    price: "$$$",
    description: "A celebration of Jewish-Argentine cuisine that has earned international acclaim. Chef Tomás Kalika reimagines traditional recipes from Eastern European and Middle Eastern Jewish traditions with Argentine ingredients and modern technique.",
    mustTry: ["Pastrami", "Hummus variations", "Kibbeh", "Babka"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sun: 7:30 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Fogon Asado",
    stars: 0,
    type: "Modern Parrilla",
    chef: "Julian Díaz",
    address: "Uriarte 1423, Palermo Soho",
    phone: "+54 11 4832-6055",
    website: "https://www.fogonasado.com",
    price: "$$$",
    description: "A contemporary take on the Argentine asado experience. The open kitchen features multiple cooking techniques over fire, from traditional grilling to smoking and slow-roasting. The tasting menu format allows diners to experience the full range of fire cooking.",
    mustTry: ["Asado tasting menu", "Smoked brisket", "Fire-roasted vegetables"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sun: 8:00 PM - 12:00 AM",
    featured: false
  }
];

export default function PalermoDiningPage() {
  const featuredRestaurants = restaurants.filter(r => r.featured);
  const otherRestaurants = restaurants.filter(r => !r.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-amber-950 via-amber-900 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/images/palermo-dining.jpg')] bg-cover bg-center" />
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
            
            <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
              <Award className="w-3 h-3 mr-1" />
              Latin America&apos;s Best
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Palermo
              <span className="block text-amber-400">Dining Guide</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl">
              The beating heart of Buenos Aires&apos; culinary scene. Home to Don Julio, 
              Best Restaurant in Latin America 2024, and the city&apos;s most vibrant dining culture.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                2 Michelin Stars
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                World&apos;s #1 Steakhouse
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                50 Best Restaurants
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
                <ChefHat className="w-3 h-3 mr-1" />
                Legendary Restaurants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Icons</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These restaurants have put Buenos Aires on the global culinary map.
              </p>
            </div>

            <div className="space-y-8">
              {featuredRestaurants.map((restaurant) => (
                <Card key={restaurant.name} className="overflow-hidden border-amber-200/50">
                  <div className="grid md:grid-cols-3">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-amber-200 to-orange-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        {restaurant.stars > 0 && (
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: restaurant.stars }).map((_, i) => (
                              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        )}
                        {restaurant.awards?.map((award) => (
                          <Badge key={award} className="mb-1 block bg-amber-500/20 text-white border-amber-500/30">
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
                        <Badge variant="outline" className="text-amber-600 border-amber-600">
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
                                <Flame className="w-3 h-3 text-amber-500" />
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
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Phone className="w-4 h-4" />
                            {restaurant.phone}
                          </div>
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
                <Flame className="w-3 h-3 mr-1" />
                More Excellence
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Additional Recommendations</h2>
              <p className="text-lg text-muted-foreground">
                More exceptional restaurants that define Palermo&apos;s dining scene.
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
                        <Badge variant="outline" className="text-amber-600 border-amber-600">
                          {restaurant.price}
                        </Badge>
                        {restaurant.awards && (
                          <Badge className="ml-2 bg-amber-100 text-amber-800 text-xs">
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

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Explore More Neighborhoods</h2>
            <p className="text-stone-400 mb-8">
              Discover the best dining in Recoleta and Belgrano.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10" asChild>
                <Link href="/dining/recoleta">
                  Recoleta Guide
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10" asChild>
                <Link href="/dining/belgrano">
                  Belgrano Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
