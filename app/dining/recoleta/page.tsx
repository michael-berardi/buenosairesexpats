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
  Wine,
  DollarSign,
  Utensils
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recoleta Dining Guide | Michelin Stars & Fine Dining | Buenos Aires",
  description: "The definitive guide to Recoleta&apos;s finest restaurants. Home to Aramburu, Argentina&apos;s only two-Michelin-starred restaurant, and elegant dining at Four Seasons.",
  keywords: ["Recoleta restaurants", "Aramburu Buenos Aires", "Elena Four Seasons", "Michelin star Recoleta", "fine dining Buenos Aires"],
  openGraph: {
    title: "Recoleta Dining Guide | Michelin Stars & Fine Dining",
    description: "Discover Recoleta&apos;s finest restaurants, including Aramburu - Argentina&apos;s only two-Michelin-starred restaurant.",
  },
};

const restaurants = [
  {
    name: "Aramburu",
    stars: 2,
    type: "Contemporary Fine Dining",
    chef: "Gonzalo Aramburu",
    address: "Vicente López 1661, Recoleta",
    phone: "+54 11 4305-0439",
    website: "https://www.arambururesto.com.ar",
    price: "$$$$$",
    description: "Argentina&apos;s only two-Michelin-starred restaurant and a Relais & Châteaux property. Chef Gonzalo Aramburu creates artistic, boundary-pushing cuisine that reimagines Argentine ingredients through a contemporary lens. The intimate 18-seat dining room offers a theatrical tasting menu experience.",
    mustTry: ["24-course tasting menu", "Patagonian lamb", "Artisanal bread service"],
    reservations: "Essential - book 30+ days ahead",
    dressCode: "Smart elegant",
    hours: "Tue-Sat: 8:30 PM (one seating)",
    featured: true
  },
  {
    name: "Elena",
    stars: 0,
    michelinSelected: true,
    type: "Argentine Steakhouse",
    chef: "Germán Carrizo",
    address: "Posadas 1086, Four Seasons Hotel",
    phone: "+54 11 4321-1200",
    website: "https://www.fourseasons.com/buenosaires/dining/restaurants/elena/",
    price: "$$$$",
    description: "Selected by the Michelin Guide and ranked among the 101 Best Steak Restaurants in the World. Elena elevates the Argentine parrilla experience with dry-aged steaks, premium Wagyu, and an exceptional wine cellar. The two-story space in the Four Seasons combines historic elegance with contemporary sophistication.",
    mustTry: ["45-day dry-aged T-bone", "Argentine Wagyu ribeye", "Josper-grilled vegetables"],
    reservations: "Highly recommended",
    dressCode: "Smart casual to elegant",
    hours: "Daily: 7:00 AM - 12:00 AM",
    featured: true
  },
  {
    name: "Duhau Restaurante & Vinoteca",
    stars: 0,
    michelinSelected: true,
    type: "Contemporary Argentine",
    chef: "Martín Lukesch",
    address: "Avenida Alvear 1661, Park Hyatt",
    phone: "+54 11 5171-1234",
    website: "https://buenosaires.park.hyatt.com/en/hotel/dining/DuhauRestaurante.html",
    price: "$$$$",
    description: "Housed in the stunning Palacio Duhau, this Michelin-selected restaurant offers sophisticated Argentine cuisine in an opulent setting. The terrace overlooking the palace gardens is one of Buenos Aires&apos; most elegant dining spaces. The wine cellar features over 7,000 labels.",
    mustTry: ["Grilled rib chops for two", "Patagonian lamb shoulder", "Wine cellar dinner"],
    reservations: "Recommended",
    dressCode: "Smart elegant",
    hours: "Daily: 7:00 AM - 12:00 AM",
    featured: true
  },
  {
    name: "Roux",
    stars: 0,
    type: "French-Mediterranean",
    chef: "Ismael León",
    address: "Vicente López 1958, Recoleta",
    phone: "+54 11 4806-1116",
    website: "https://www.rouxresto.com",
    price: "$$$",
    description: "A sophisticated blend of French technique and Mediterranean flavors in an intimate townhouse setting. Chef Ismael León's seasonal menu showcases the best Argentine ingredients with European refinement. The wine list emphasizes small Argentine producers.",
    mustTry: ["Duck magret", "House-made charcuterie", "Seasonal tasting menu"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "La Bourgogne",
    stars: 0,
    type: "French Fine Dining",
    chef: "Jean-Paul Bondoux",
    address: "Avenida Alvear 1891, Alvear Palace Hotel",
    phone: "+54 11 4808-2100",
    website: "https://www.alvearpalace.com/restaurants",
    price: "$$$$",
    description: "The Alvear Palace Hotel's signature restaurant brings classic French haute cuisine to Buenos Aires. Chef Jean-Paul Bondoux maintains the traditions of French gastronomy with impeccable technique and the finest imported ingredients.",
    mustTry: ["Dover sole meunière", "Classic soufflés", "Grand Marnier crêpes"],
    reservations: "Recommended",
    dressCode: "Jacket required",
    hours: "Mon-Sat: 12:00 PM - 3:00 PM, 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Cabaña Las Lilas",
    stars: 0,
    type: "Premium Parrilla",
    chef: "House specialty",
    address: "Avenida Dávila 516, Puerto Madero",
    phone: "+54 11 4313-1336",
    website: "https://www.cabanalaslilas.com",
    price: "$$$$",
    description: "While technically in Puerto Madero, this legendary steakhouse is a must-visit for serious carnivores. Their own estancia supplies premium beef, and the open-fire grilling is masterful. A classic that's been serving the city&apos;s elite for decades.",
    mustTry: ["Bife de chorizo", "Ojo de bife", "Provoleta"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Daily: 12:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Bis Bistró",
    stars: 0,
    michelinSelected: true,
    type: "French Bistro",
    chef: "Oliverio Guerrero",
    address: "Avenida República de la India 15, Recoleta",
    phone: "+54 11 4808-9000",
    website: "https://www.bisbistro.com",
    price: "$$$",
    description: "A charming French bistro in the heart of Recoleta, selected by the Michelin Guide. Classic dishes executed with precision in a warm, brasserie-style setting. Perfect for a leisurely lunch or intimate dinner.",
    mustTry: ["Steak frites", "French onion soup", "Crème brûlée"],
    reservations: "Recommended for dinner",
    dressCode: "Smart casual",
    hours: "Tue-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Restó",
    stars: 0,
    michelinSelected: true,
    type: "Contemporary Argentine",
    chef: "María José Martínez",
    address: "Montevideo 938, Recoleta",
    phone: "+54 11 4815-8585",
    website: "https://www.resto.com.ar",
    price: "$$$",
    description: "A Recoleta institution that helped define modern Argentine cuisine. The seasonal menu celebrates local ingredients with creative preparations. The intimate dining room and attentive service make it a favorite among locals.",
    mustTry: ["Seasonal tasting menu", "Homemade pastas", "Argentine beef"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  }
];

export default function RecoletaDiningPage() {
  const featuredRestaurants = restaurants.filter(r => r.featured);
  const otherRestaurants = restaurants.filter(r => !r.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('/images/recoleta-dining.jpg')] bg-cover bg-center" />
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
              Michelin Guide 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Recoleta
              <span className="block text-amber-400">Dining Guide</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl">
              Home to Aramburu, Argentina&apos;s only two-Michelin-starred restaurant, 
              and the elegant dining rooms of the city&apos;s most prestigious hotels.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                2 Michelin Stars
              </span>
              <span className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-400" />
                8 Curated Restaurants
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                Buenos Aires&apos; Most Elegant
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
                Featured Restaurants
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Crown Jewels</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recoleta&apos;s most exceptional dining experiences, from Michelin-starred temples 
                to legendary hotel restaurants.
              </p>
            </div>

            <div className="space-y-8">
              {featuredRestaurants.map((restaurant) => (
                <Card key={restaurant.name} className="overflow-hidden border-amber-200/50">
                  <div className="grid md:grid-cols-3">
                    <div className="h-64 md:h-auto bg-gradient-to-br from-stone-200 to-stone-300 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        {restaurant.stars > 0 && (
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: restaurant.stars }).map((_, i) => (
                              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        )}
                        {restaurant.michelinSelected && !restaurant.stars && (
                          <Badge className="bg-amber-500/20 text-white border-amber-500/30">
                            Michelin Selected
                          </Badge>
                        )}
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
                                <span className="w-1 h-1 bg-amber-500 rounded-full" />
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
                <Utensils className="w-3 h-3 mr-1" />
                More Excellence
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Additional Recommendations</h2>
              <p className="text-lg text-muted-foreground">
                Other exceptional restaurants in Recoleta worth discovering.
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
                        {restaurant.michelinSelected && (
                          <Badge className="ml-2 bg-amber-100 text-amber-800">
                            Michelin
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
              Discover the best dining in Palermo and Belgrano.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10" asChild>
                <Link href="/dining/palermo">
                  Palermo Guide
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
