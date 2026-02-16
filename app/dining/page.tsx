import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  Star, 
  MapPin, 
  Award,
  ArrowRight,
  ChefHat,
  Wine,
  Sparkles,
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buenos Aires Dining Guide | Michelin-Starred & Fine Dining",
  description: "The definitive dining guide to Buenos Aires. Michelin-starred restaurants, world-class parrillas, and hidden gems in Recoleta, Palermo, and Belgrano.",
  keywords: ["Buenos Aires dining", "Michelin star Argentina", "best restaurants Buenos Aires", "Don Julio", "Aramburu", "fine dining BA"],
  openGraph: {
    title: "Buenos Aires Dining Guide | Michelin-Starred & Fine Dining",
    description: "The definitive dining guide to Buenos Aires. Michelin-starred restaurants and world-class culinary experiences.",
    images: [{
      url: "/images/dining-og.jpg",
      width: 1200,
      height: 630,
      alt: "Buenos Aires Dining Guide"
    }]
  },
};

const michelinStars = [
  { 
    name: "Aramburu", 
    stars: 2, 
    neighborhood: "Recoleta",
    cuisine: "Contemporary",
    price: "$$$$$",
    description: "Argentina's only two-Michelin-starred restaurant. Chef Gonzalo Aramburu creates artistic, boundary-pushing cuisine that reimagines Argentine ingredients through a contemporary lens.",
    mustTry: ["24-course tasting menu", "Patagonian lamb", "Artisanal bread service"],
    inspectorNote: "A theatrical dining experience where each dish is a work of art. The intimate 18-seat dining room adds to the exclusivity.",
    award: "2 Michelin Stars | Relais & Châteaux"
  },
  { 
    name: "Don Julio", 
    stars: 1, 
    neighborhood: "Palermo",
    cuisine: "Argentine Steakhouse",
    price: "$$$$",
    description: "World's #1 steakhouse and Best Restaurant in Latin America 2024. Chef Pablo Rivero has elevated the Argentine parrilla to an art form.",
    mustTry: ["Bife de chorizo (45-day dry-aged)", "Ojo de bife", "Provoleta", "Wine cellar experience"],
    inspectorNote: "The gold standard for Argentine beef. The 45-day dry-aging process creates unparalleled depth of flavor.",
    award: "1 Michelin Star | Latin America's 50 Best #1"
  },
  { 
    name: "Trescha", 
    stars: 1, 
    neighborhood: "Palermo",
    cuisine: "Contemporary",
    price: "$$$$",
    description: "Innovative tasting menus in an intimate setting near Palermo. Chef Martín Molteni's creative playground where Argentine ingredients meet global techniques.",
    mustTry: ["Seasonal tasting menu", "Fire-cooked vegetables", "House-made charcuterie"],
    inspectorNote: "A hidden gem that serious food lovers seek out. The open kitchen creates a personal connection with the culinary team.",
    award: "1 Michelin Star"
  },
  { 
    name: "Crizia", 
    stars: 1, 
    neighborhood: "Palermo",
    cuisine: "Contemporary Fire Cooking",
    price: "$$$$",
    description: "Newly starred in 2025. Chef Gabriel Oggero's ode to fire and Argentine ingredients. Everything is cooked over open flames.",
    mustTry: ["Wood-fired oysters", "Smoked beet salad", "Fire-grilled sweetbreads", "Burnt cheesecake"],
    inspectorNote: "The industrial-chic space centers around a massive wood-fired grill. A celebration of fire and flavor.",
    award: "1 Michelin Star | New 2025"
  },
];

const neighborhoods = [
  {
    name: "Recoleta",
    slug: "recoleta",
    description: "Elegant dining in Buenos Aires' most refined neighborhood. Home to Aramburu and the city's most prestigious hotel restaurants.",
    highlights: ["Aramburu (2 Michelin Stars)", "Elena at Four Seasons", "Duhau Restaurante"],
    restaurantCount: 8,
    michelinCount: 1,
    image: "/images/dining-recoleta.jpg",
    color: "from-amber-600 to-orange-700"
  },
  {
    name: "Palermo",
    slug: "palermo",
    description: "The beating heart of BA's culinary scene. From world-famous parrillas to innovative tasting menus.",
    highlights: ["Don Julio (1 Star)", "Crizia (1 Star)", "Tegui"],
    restaurantCount: 8,
    michelinCount: 2,
    image: "/images/dining-recoleta.jpg",
    color: "from-emerald-600 to-teal-700"
  },
  {
    name: "Belgrano",
    slug: "belgrano",
    description: "Sophisticated dining in a residential setting. Discover hidden gems and classic Argentine institutions.",
    highlights: ["Roux", "Corte Comedor", "La Casona de Belgrano"],
    restaurantCount: 8,
    michelinCount: 0,
    image: "/images/dining-recoleta.jpg",
    color: "from-slate-600 to-slate-800"
  },
];

const quickStats = [
  { value: "4", label: "Michelin Stars", icon: Star },
  { value: "24", label: "Curated Restaurants", icon: Utensils },
  { value: "3", label: "Neighborhoods", icon: MapPin },
  { value: "10+", label: "Michelin-Recognized", icon: Award },
];

export default function DiningGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Hero Section - Premium Zagat-style */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-40 bg-[url('/images/dining-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-500/20 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-amber-500/10 rounded-full opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Michelin Guide 2025</span>
            </div>
            
            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">Buenos Aires</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 mt-2">
                Dining Guide
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-stone-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              The definitive guide to Argentina&apos;s finest restaurants. 
              From Michelin-starred temples of gastronomy to legendary parrillas.
            </p>
            
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {quickStats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <stat.icon className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-stone-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400">
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent" />
        </div>
      </section>

      {/* Michelin Stars Section - Card-based with inspector notes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200 px-4 py-1.5 text-sm">
                <Award className="w-4 h-4 mr-2" />
                Michelin Guide 2025
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
                Michelin-Starred Restaurants
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Argentina&apos;s culinary excellence recognized by the world&apos;s most prestigious dining guide.
              </p>
            </div>

            {/* Restaurant cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {michelinStars.map((restaurant, index) => (
                <Card key={restaurant.name} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-stone-50">
                  {/* Card header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${index % 2 === 0 ? 'from-amber-500 to-amber-600' : 'from-stone-600 to-stone-700'}`} />
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div>
                        {/* Award badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold mb-3">
                          <Star className="w-3 h-3 fill-amber-600" />
                          {restaurant.award}
                        </div>
                        
                        <CardTitle className="text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                          {restaurant.name}
                        </CardTitle>
                        <CardDescription className="text-base mt-1 text-stone-600">
                          {restaurant.cuisine}
                        </CardDescription>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array.from({ length: restaurant.stars }).map((_, i) => (
                          <Star key={i} className="w-7 h-7 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    
                    {/* Location & Price */}
                    <div className="flex items-center gap-4 mt-3 text-sm text-stone-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {restaurant.neighborhood}
                      </span>
                      <span className="text-stone-400">|</span>
                      <span className="font-medium text-stone-700">{restaurant.price}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Description */}
                    <p className="text-stone-600 leading-relaxed">
                      {restaurant.description}
                    </p>
                    
                    {/* Inspector Note - Michelin style */}
                    <div className="bg-amber-50/50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <ChefHat className="w-4 h-4 text-amber-600" />
                        <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Inspector&apos;s Note</span>
                      </div>
                      <p className="text-sm text-stone-700 italic">
                        &ldquo;{restaurant.inspectorNote}&rdquo;
                      </p>
                    </div>
                    
                    {/* Must Try */}
                    <div>
                      <p className="text-sm font-semibold text-stone-900 mb-2">Must Try:</p>
                      <div className="flex flex-wrap gap-2">
                        {restaurant.mustTry.map((item) => (
                          <span key={item} className="px-3 py-1 bg-white border border-stone-200 rounded-full text-sm text-stone-700">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button variant="outline" className="w-full mt-4 group/btn border-stone-300 hover:border-amber-500 hover:bg-amber-50" asChild>
                      <Link href={`/dining/${restaurant.neighborhood.toLowerCase().replace(/\s+/g, '-')}`}>
                        View in {restaurant.neighborhood} Guide
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Guides - Visual cards with hover effects */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-stone-200 text-stone-800 border-stone-300 px-4 py-1.5 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                Neighborhood Guides
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
                Explore by Neighborhood
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Curated guides to the best dining in Buenos Aires&apos; most prestigious neighborhoods.
              </p>
            </div>

            {/* Neighborhood cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {neighborhoods.map((hood) => (
                <Link key={hood.name} href={`/dining/${hood.slug}`} className="group">
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full bg-white">
                    {/* Image area with gradient */}
                    <div className={`h-56 bg-gradient-to-br ${hood.color} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Stats overlay */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-stone-800">
                          {hood.restaurantCount} Restaurants
                        </span>
                        {hood.michelinCount > 0 && (
                          <span className="px-3 py-1 bg-amber-400/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-950 flex items-center gap-1">
                            <Star className="w-3 h-3 fill-amber-950" />
                            {hood.michelinCount}
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-3xl font-bold text-white mb-1">{hood.name}</h3>
                        <p className="text-white/80 text-sm">{hood.description}</p>
                      </div>
                    </div>
                    
                    <CardContent className="pt-6">
                      {/* Highlights */}
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-stone-900 uppercase tracking-wider">Highlights</p>
                        {hood.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-3 text-stone-600">
                            <Utensils className="w-4 h-4 text-amber-500 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Explore link */}
                      <div className="mt-6 flex items-center text-amber-600 font-semibold text-sm group-hover:text-amber-700 transition-colors">
                        Explore {hood.name}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section - About the Guide */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              <span>Curated Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Buenos Aires Dining Guide
            </h2>
            
            <p className="text-xl text-stone-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              This guide represents the pinnacle of Buenos Aires dining. Every restaurant featured 
              has been selected for its exceptional quality, unique character, and contribution 
              to Argentina&apos;s world-renowned culinary scene. From the hallowed halls of Michelin-starred 
              institutions to the intimate neighborhood gems, these are the restaurants that define 
              Buenos Aires as a global gastronomic destination.
            </p>
            
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-bold text-amber-400 mb-2">10+</div>
                <div className="text-stone-400">Michelin-Recognized</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-bold text-amber-400 mb-2">24</div>
                <div className="text-stone-400">Curated Restaurants</div>
              </div>
              <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-5xl font-bold text-amber-400 mb-2">3</div>
                <div className="text-stone-400">Neighborhoods</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">
              Ready to Experience Buenos Aires&apos; Finest?
            </h2>
            <p className="text-lg text-amber-900/80 mb-8 max-w-2xl mx-auto">
              Start exploring our curated selection of the city&apos;s best restaurants, 
              from Michelin-starred institutions to hidden local gems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8" asChild>
                <Link href="/dining/recoleta">
                  <Star className="w-5 h-5 mr-2" />
                  Explore Recoleta
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-amber-900/30 text-amber-950 hover:bg-amber-400 px-8" asChild>
                <Link href="/dining/palermo">
                  <MapPin className="w-5 h-5 mr-2" />
                  Explore Palermo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
