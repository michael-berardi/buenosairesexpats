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
  Award,
  ArrowLeft,
  ChefHat,
  Utensils,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recoleta Dining Guide | Michelin Stars & Fine Dining | Buenos Aires",
  description: "The definitive guide to Recoleta's finest restaurants. Home to Aramburu, Argentina's only two-Michelin-starred restaurant, and elegant dining at Four Seasons.",
  keywords: ["Recoleta restaurants", "Aramburu Buenos Aires", "Elena Four Seasons", "Michelin star Recoleta", "fine dining Buenos Aires"],
  openGraph: {
    title: "Recoleta Dining Guide | Michelin Stars & Fine Dining",
    description: "Discover Recoleta's finest restaurants, including Aramburu - Argentina's only two-Michelin-starred restaurant.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/dining/recoleta",
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
    chef: "Juan Gaffuri",
    address: "Posadas 1086, Four Seasons Hotel",
    phone: "+54 11 4321-1200",
    website: "https://www.fourseasons.com/buenosaires/dining/restaurants/elena/",
    price: "$$$$",
    description: "Selected by the Michelin Guide and ranked among the 101 Best Steak Restaurants in the World. Elena elevates the Argentine parrilla experience with dry-aged steaks, premium Wagyu, and an exceptional wine cellar.",
    mustTry: ["Dry-aged T-bone", "Argentine Wagyu ribeye", "Josper-grilled vegetables"],
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
    michelinSelected: false,
    type: "Upscale Argentine Grill",
    chef: "Franco Rossi",
    address: "Avenida Alvear 1661, Park Hyatt",
    phone: "+54 11 5171-1234",
    website: "https://www.hyatt.com/park-hyatt/en-US/bueph-palacio-duhau-park-hyatt-buenos-aires/dining",
    price: "$$$$",
    description: "Housed in the stunning Palacio Duhau, this Michelin Guide-listed restaurant specializes in wood-fired cooking with premium meats and fish. The terrace overlooking the palace gardens is one of Buenos Aires' most elegant dining spaces.",
    mustTry: ["Wood-fired steaks", "Patagonian lamb shoulder", "Wine cellar dinner"],
    reservations: "Recommended",
    dressCode: "Smart elegant",
    hours: "Daily: 7:00 AM - 12:00 AM",
    featured: true,
    inspectorNote: "The wine cellar features approximately 500 Argentine labels. The terrace is one of the city's most elegant outdoor dining spaces.",
    award: "Michelin Guide"
  },
  {
    name: "Roux",
    stars: 0,
    michelinSelected: true,
    type: "French-Mediterranean",
    chef: "Martin Rebaudino",
    address: "Peña 2300, Recoleta",
    phone: "+54 11 4806-1116",
    website: "https://www.rouxresto.com",
    price: "$$$",
    description: "A Michelin-selected restaurant blending French technique with Mediterranean flavors in an intimate townhouse setting. Chef Martin Rebaudino's seasonal menu showcases the best Argentine ingredients with European refinement.",
    mustTry: ["Duck magret", "House-made charcuterie", "Seasonal tasting menu", "Wine pairings"],
    reservations: "Recommended",
    dressCode: "Smart casual to elegant",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  },
  {
    name: "Fervor",
    stars: 0,
    type: "Meats & Seafood Grill",
    chef: "House team",
    address: "Posadas 1519, Recoleta",
    phone: "+54 11 4804-4944",
    website: "https://fervorbrasas.com.ar",
    price: "$$$$",
    description: "A Michelin Guide-listed restaurant in the heart of Recoleta specializing in fire-cooked meats and seafood. The sleek dining room and open kitchen showcase dry-aged steaks on the bone alongside premium seafood preparations. A favorite among Recoleta locals and visiting food enthusiasts.",
    mustTry: ["Dry-aged bone-in steaks", "Fire-grilled seafood", "Provoleta", "Argentine wines"],
    reservations: "Recommended",
    dressCode: "Smart casual to elegant",
    hours: "Daily: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Cabaña Las Lilas",
    stars: 0,
    type: "Premium Parrilla",
    chef: "House specialty",
    address: "Av. Alicia Moreau de Justo 516, Puerto Madero",
    phone: "+54 11 4313-1336",
    website: "https://www.restaurantlaslilas.com.ar",
    price: "$$$$",
    description: "While technically in Puerto Madero, this legendary steakhouse is a must-visit for serious carnivores. Their own Estancia Las Lilas supplies premium Angus and Hereford beef, and the open-fire grilling is masterful. A Buenos Aires icon since 1995.",
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
    type: "Contemporary Bistro",
    chef: "Gonzalo Aramburu",
    address: "Vicente López 1661, Local 12, Recoleta",
    phone: "+54 11 4808-9000",
    website: "https://www.bisresto.com.ar",
    price: "$$$",
    description: "The casual sibling of two-starred Aramburu, overseen by Chef Gonzalo Aramburu. Awarded a Michelin Bib Gourmand for good quality, good value cooking. The contemporary dishes are creative yet approachable in a warm, bistro-style setting.",
    mustTry: ["Creative small plates", "Seasonal tasting menu", "House-made desserts"],
    reservations: "Recommended for dinner",
    dressCode: "Smart casual",
    hours: "Tue-Sun: 12:00 PM - 4:00 PM, 8:00 PM - 12:00 AM",
    featured: false
  },
  {
    name: "Restó",
    stars: 0,
    michelinSelected: true,
    type: "International",
    chef: "María Magdalena Piaggio",
    address: "Montevideo 938, Recoleta",
    phone: "+54 11 4815-8585",
    website: "https://www.instagram.com/resto.sca",
    price: "$$$",
    description: "Housed in the headquarters of Argentina's Central Architecture Society, this Michelin Guide-listed restaurant features Chef María Magdalena Piaggio's French-influenced cuisine with Spanish and Italian accents using Argentine ingredients. An architectural gem with an intimate dining room.",
    mustTry: ["Seasonal tasting menu", "French-influenced dishes", "House-made desserts"],
    reservations: "Recommended",
    dressCode: "Smart casual",
    hours: "Tue-Sat: 8:00 PM - 11:30 PM",
    featured: false
  }
];

const quickStats = [
  { value: "2", label: "Michelin Stars", icon: Star },
  { value: "8", label: "Curated Restaurants", icon: Utensils },
  { value: "6", label: "Michelin-Recognized", icon: Award },
];

export default function RecoletaDiningPage() {
  const featuredRestaurants = restaurants.filter(r => r.featured);
  const otherRestaurants = restaurants.filter(r => !r.featured);

  const articleSchema = generateArticleSchema({
    headline: "Recoleta Dining Guide | Michelin Stars & Fine Dining",
    description: "The definitive guide to Recoleta's finest restaurants including Aramburu, Argentina's only two-Michelin-starred restaurant.",
    url: "https://buenosairesexpats.com/dining/recoleta",
    datePublished: "2026-02-26",
    dateModified: "2026-02-26",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Dining", item: "https://buenosairesexpats.com/dining" },
    { name: "Recoleta" },
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-muted">
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />

      <Breadcrumb items={[{ label: "Dining", href: "/dining" }, { label: "Recoleta" }]} />

      {/* Hero - Premium Style */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#44403c]" />
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/recoleta-dining.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-[#1c1917]/60 to-transparent" />
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

            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
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
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">The Crown Jewels</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recoleta&apos;s most exceptional dining experiences, from Michelin-starred temples to legendary hotel restaurants.
              </p>
            </div>

            <div className="space-y-12">
              {featuredRestaurants.map((restaurant, index) => (
                <Card key={restaurant.name} className="overflow-hidden border-0 shadow-xl">
                  <div className="grid lg:grid-cols-5">
                    {/* Image side */}
                    <div className={`lg:col-span-2 h-72 lg:h-auto bg-gradient-to-br ${index === 0 ? 'from-amber-600 to-orange-700' : index === 1 ? 'from-stone-600 to-stone-800' : 'from-stone-500 to-stone-700'} relative overflow-hidden`}>
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
                      
                      <h3 className="text-3xl font-bold text-foreground mb-2">{restaurant.name}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{restaurant.type}</p>

                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {restaurant.description}
                      </p>
                      
                      {/* Inspector Note */}
                      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <ChefHat className="w-4 h-4 text-amber-600" />
                          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Inspector&apos;s Note</span>
                        </div>
                        <p className="text-sm text-foreground/80 italic">
                          &ldquo;{restaurant.inspectorNote}&rdquo;
                        </p>
                      </div>

                      {/* Details grid */}
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-foreground mb-2">Must Try</p>
                          <ul className="space-y-1">
                            {restaurant.mustTry.map((item) => (
                              <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {restaurant.address}
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {restaurant.hours}
                          </div>
                          <a href={`tel:${restaurant.phone}`} className="flex items-start gap-2 text-muted-foreground hover:text-foreground">
                            <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {restaurant.phone}
                          </a>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pt-4 border-t border-border">
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

            <InsiderTip className="mt-12 max-w-3xl mx-auto">
              Aramburu has only 18 seats with a single seating at 8:30 PM. Book at least 30 days ahead and mention any dietary restrictions when reserving -- the 24-course menu is fully customized.
            </InsiderTip>
          </div>
        </div>
      </section>

      {/* Additional Recommendations */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-secondary text-secondary-foreground border-border px-4 py-1.5">
                <Utensils className="w-4 h-4 mr-2" />
                More Excellence
              </Badge>
              <h2 className="font-serif text-4xl font-bold mb-4 text-foreground">Additional Recommendations</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                    <p className="text-sm text-muted-foreground mb-4">{restaurant.description}</p>
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
            <p className="text-sm text-muted-foreground"><LuceroLegalCTA variant="inline" /></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1c1917] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Explore More Neighborhoods</h2>
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
