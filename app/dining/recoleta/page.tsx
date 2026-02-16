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
  Utensils,
  ArrowUpRight,
  Sparkles,
  Wine
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recoleta Dining Guide | Michelin Stars & Fine Dining | Buenos Aires",
  description: "The definitive guide to Recoleta's finest restaurants. Home to Aramburu, Argentina's only two-Michelin-starred restaurant, and elegant dining at Four Seasons.",
  keywords: ["Recoleta restaurants", "Aramburu Buenos Aires", "Elena Four Seasons", "Michelin star Recoleta", "fine dining Buenos Aires"],
  openGraph: {
    title: "Recoleta Dining Guide | Michelin Stars & Fine Dining",
    description: "Discover Recoleta's finest restaurants, including Aramburu - Argentina's only two-Michelin-starred restaurant.",
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
    description: "Argentina's only two-Michelin-starred restaurant and a Relais & Châteaux property. Chef Gonzalo Aramburu creates artistic, boundary-pushing cuisine that reimagines Argentine ingredients through a contemporary lens.",
    mustTry: ["24-course tasting menu", "Patagonian lamb", "Artisanal bread service"],
    reservations: "Essential - book 30+ days ahead",
    dressCode: "Smart elegant",
    hours: "Tue-Sat: 8:30 PM (one seating)",
    featured: true,
    inspectorNote: "A theatrical dining experience where each dish is a work of art. The intimate 18-seat dining room adds to the exclusivity.",
    award: "2 Michelin Stars | Relais & Châteaux"
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
    description: "Selected by the Michelin Guide and ranked among the 101 Best Steak Restaurants in the World. Elena elevates the Argentine parrilla experience with dry-aged steaks, premium Wagyu, and an exceptional wine cellar.",
    mustTry: ["45-day dry-aged T-bone", "Argentine Wagyu ribeye", "Josper-grilled vegetables"],
    reservations: "Highly recommended",
    dressCode: "Smart casual to elegant",
    hours: "Daily: 7:00 AM - 12:00 AM",
    featured: true,
    inspectorNote: "The gold standard for hotel dining in Buenos Aires. The two-story space combines historic elegance with contemporary sophistication.",
    award: "Michelin Selected | 101 Best Steaks"
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
    description: "Housed in the stunning Palacio Duhau, this Michelin-selected restaurant offers sophisticated Argentine cuisine in an opulent setting. The terrace overlooking the palace gardens is one of Buenos Aires' most elegant dining spaces.",
    mustTry: ["Grilled rib chops for two", "Patagonian lamb shoulder", "Wine cellar dinner"],
    reservations: "Recommended",
    dressCode: "Smart elegant",
    hours: "Daily: 7:00 AM - 12:00 AM",
    featured: true,
    inspectorNote: "The wine cellar features over 7,000 labels. The terrace is one of the city's most elegant outdoor dining spaces.",
    award: "Michelin Selected"
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
    description: "A sophisticated blend of French technique and Mediterranean flavors in an intimate townhouse setting. Chef Ismael León's seasonal menu showcases the best Argentine ingredients with European refinement.",
    mustTry: ["Duck magret", "House-made charcuterie", "Seasonal tasting menu", "Wine pairings"],
    reservations: "Recommended",
    dressCode: "Smart casual to elegant",
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
    description: "While technically in Puerto Madero, this legendary steakhouse is a must-visit for serious carnivores. Their own estancia supplies premium beef, and the open-fire grilling is masterful. A classic that's been serving the city's elite for decades.",
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

const quickStats = [
  { value: "2", label: "Michelin Stars", icon: Star },
  { value: "8", label: "Curated Restaurants", icon: Utensils },
  { value: "5", label: "Michelin-Recognized", icon: Award },
];

export default function RecoletaDiningPage() {
  const featuredRestaurants = restaurants.filter(r => r.featured);
  const otherRestaurants = restaurants.filter(r => !r.featured);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero - Premium Style */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950" />
          <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-cityscape.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl">
            <Button variant="outline" className="mb-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
              <Link href="/dining">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dining Guide
              </Link>
            </Button>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Michelin Guide 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Recoleta</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 mt-2">
                Dining Guide
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed max-w-2xl font-light">
              Home to Aramburu, Argentina&apos;s only two-Michelin-starred restaurant, 
              and the elegant dining rooms of the city&apos;s most prestigious hotels.
            </p>
            
            <div className="flex flex-wrap gap-6">
              {quickStats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 text-stone-300">
                  <stat.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants - Crown Jewels */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 px-4 py-1.5">
                <ChefHat className="w-4 h-4 mr-2" />
                Featured Restaurants
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">The Crown Jewels</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Recoleta&apos;s most exceptional dining experiences, from Michelin-starred temples to legendary hotel restaurants.
              </p>
            </div>

            <div className="space-y-12">
              {featuredRestaurants.map((restaurant, index) => (
                <Card key={restaurant.name} className="overflow-hidden border-0 shadow-xl">
                  <div className="grid lg:grid-cols-5">
                    {/* Image side */}
                    <div className={`lg:col-span-2 h-72 lg:h-auto bg-gradient-to-br ${index === 0 ? 'from-amber-600 to-orange-700' : index === 1 ? 'from-stone-600 to-stone-800' : 'from-slate-600 to-slate-800'} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      
                      {/* Award badge */}
                      <div className="absolute top-6 left-6">
                        {restaurant.stars > 0 ? (
                          <div className="flex gap-1">
                            {Array.from({ length: restaurant.stars }).map((_, i) => (
                              <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        ) : restaurant.michelinSelected ? (
                          <Badge className="bg-amber-500 text-amber-950 font-semibold px-3 py-1">
                            Michelin Selected
                          </Badge>
                        ) : null}
                      </div>
                      
                      {/* Price */}
                      <div className="absolute bottom-6 left-6">
                        <span className="text-3xl font-bold text-white">{restaurant.price}</span>
                      </div>
                    </div>
                    
                    {/* Content side */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      {/* Award line */}
                      <div className="flex items-center gap-2 text-amber-700 text-sm font-semibold mb-3">
                        <Award className="w-4 h-4" />
                        {restaurant.award}
                      </div>
                      
                      <h3 className="text-3xl font-bold text-stone-900 mb-2">{restaurant.name}</h3>
                      <p className="text-lg text-stone-600 mb-4">{restaurant.type}</p>
                      
                      <p className="text-stone-700 leading-relaxed mb-6">
                        {restaurant.description}
                      </p>
                      
                      {/* Inspector Note */}
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <ChefHat className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Inspector&apos;s Note</span>
                        </div>
                        <p className="text-sm text-stone-700 italic">
                          &ldquo;{restaurant.inspectorNote}&rdquo;
                        </p>
                      </div>
                      
                      {/* Details grid */}
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-stone-900 mb-2">Must Try</p>
                          <ul className="space-y-1">
                            {restaurant.mustTry.map((item) => (
                              <li key={item} className="text-sm text-stone-600 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2 text-stone-600">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {restaurant.address}
                          </div>
                          <div className="flex items-start gap-2 text-stone-600">
                            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {restaurant.hours}
                          </div>
                          <div className="flex items-start gap-2 text-stone-600">
                            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {restaurant.phone}
                          </div>
                        </div>
                      </div>
                      
                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-stone-500 mb-6 pt-4 border-t border-stone-100">
                        <span><strong>Reservations:</strong> {restaurant.reservations}</span>
                        <span className="hidden sm:inline">|</span>
                        <span><strong>Dress Code:</strong> {restaurant.dressCode}</span>
                      </div>
                      
                      {/* CTAs */}
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
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Recommendations */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-stone-200 text-stone-800 border-stone-300 px-4 py-1.5">
                <Utensils className="w-4 h-4 mr-2" />
                More Excellence
              </Badge>
              <h2 className="text-4xl font-bold mb-4 text-stone-900">Additional Recommendations</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Other exceptional restaurants in Recoleta worth discovering.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {otherRestaurants.map((restaurant) => (
                <Card key={restaurant.name} className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          {restaurant.michelinSelected && (
                            <Badge className="bg-amber-100 text-amber-800 text-xs">
                              <Award className="w-3 h-3 mr-1" />
                              Michelin
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl">{restaurant.name}</CardTitle>
                        <CardDescription>{restaurant.type}</CardDescription>
                      </div>
                      <Badge variant="outline" className="text-amber-600 border-amber-600">
                        {restaurant.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-stone-600 mb-4">{restaurant.description}</p>
                    <div className="space-y-2 text-sm text-stone-500 mb-4">
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
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10" asChild>
                <Link href="/dining/belgrano">
                  Belgrano Guide
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
