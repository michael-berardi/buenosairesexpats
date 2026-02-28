import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import {
  Utensils,
  Star,
  MapPin,
  Award,
  ArrowRight,
  ChefHat,
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
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Buenos Aires Dining Guide"
    }]
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/dining",
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
    image: "/images/recoleta-dining.jpg",
  },
  {
    name: "Palermo",
    slug: "palermo",
    description: "The beating heart of BA's culinary scene. From world-famous parrillas to innovative tasting menus.",
    highlights: ["Don Julio (1 Star)", "Crizia (1 Star)", "Tegui"],
    restaurantCount: 8,
    michelinCount: 2,
    image: "/images/palermo-dining.jpg",
  },
  {
    name: "Belgrano",
    slug: "belgrano",
    description: "Sophisticated dining in a residential setting. Discover hidden gems and classic Argentine institutions.",
    highlights: ["Roux", "Corte Comedor", "La Casona de Belgrano"],
    restaurantCount: 8,
    michelinCount: 0,
    image: "/images/belgrano-dining.jpg",
  },
];

const quickStats = [
  { value: "4", label: "Michelin Stars", icon: Star },
  { value: "24", label: "Curated Restaurants", icon: Utensils },
  { value: "3", label: "Neighborhoods", icon: MapPin },
  { value: "10+", label: "Michelin-Recognized", icon: Award },
];

export default function DiningGuidePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Dining Guide" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 opacity-40 bg-[url('/images/dining-hero.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              <span>Michelin Guide 2025</span>
            </div>
            
            {/* Main title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">Buenos Aires</span>
              <span className="block text-sky-400 mt-2">
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
                <div key={stat.label} className="stat-card-dark">
                  <stat.icon className="stat-icon-dark" />
                  <div className="stat-value-dark">{stat.value}</div>
                  <div className="stat-label-dark">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Michelin Stars Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="badge-primary mb-4 inline-flex">
                <Award className="w-3 h-3 mr-1" />
                Michelin Guide 2025
              </span>
              <h2 className="heading-lg mb-4 text-stone-900">
                Michelin-Starred Restaurants
              </h2>
              <p className="text-body text-lg max-w-2xl mx-auto">
                Argentina&apos;s culinary excellence recognized by the world&apos;s most prestigious dining guide.
              </p>
            </div>

            {/* Restaurant cards */}
            <div className="grid lg:grid-cols-2 gap-8">
              {michelinStars.map((restaurant) => (
                <div key={restaurant.name} className="card-highlight">
                  {/* Award badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold mb-3">
                    <Star className="w-3 h-3 fill-sky-600" />
                    {restaurant.award}
                  </div>
                  
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold text-stone-900">
                      {restaurant.name}
                    </h3>
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: restaurant.stars }).map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-sky-500 text-sky-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-stone-600 mb-3">{restaurant.cuisine}</p>
                  
                  {/* Location & Price */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-stone-600">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {restaurant.neighborhood}
                    </span>
                    <span className="text-stone-600">|</span>
                    <span className="font-medium text-stone-700">{restaurant.price}</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-stone-600 leading-relaxed mb-4">
                    {restaurant.description}
                  </p>
                  
                  {/* Inspector Note */}
                  <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ChefHat className="w-4 h-4 text-sky-600" />
                      <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Inspector&apos;s Note</span>
                    </div>
                    <p className="text-sm text-stone-700 italic">
                      &ldquo;{restaurant.inspectorNote}&rdquo;
                    </p>
                  </div>
                  
                  {/* Must Try */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-stone-900 mb-2">Must Try:</p>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.mustTry.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Button variant="outline" className="w-full mt-auto" asChild>
                    <Link href={`/dining/${restaurant.neighborhood.toLowerCase().replace(/\s+/g, '-')}`}>
                      View in {restaurant.neighborhood} Guide
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Guides */}
      <section className="section-padding bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="badge-secondary mb-4 inline-flex">
                <MapPin className="w-3 h-3 mr-1" />
                Neighborhood Guides
              </span>
              <h2 className="heading-lg mb-4 text-stone-900">
                Explore by Neighborhood
              </h2>
              <p className="text-body text-lg max-w-2xl mx-auto">
                Curated guides to the best dining in Buenos Aires&apos; most prestigious neighborhoods.
              </p>
            </div>

            {/* Neighborhood cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {neighborhoods.map((hood) => (
                <Link key={hood.name} href={`/dining/${hood.slug}`} className="group">
                  <div className="card-highlight overflow-hidden h-full">
                    {/* Header with gradient */}
                    <div className="h-48 bg-gradient-to-br from-sky-600 to-sky-800 relative overflow-hidden -mx-6 -mt-6 mb-6">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Stats overlay */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-stone-800">
                          {hood.restaurantCount} Restaurants
                        </span>
                        {hood.michelinCount > 0 && (
                          <span className="px-3 py-1 bg-sky-400/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white flex items-center gap-1">
                            <Star className="w-3 h-3 fill-white" />
                            {hood.michelinCount}
                          </span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-3xl font-bold text-white mb-1">{hood.name}</h3>
                      </div>
                    </div>
                    
                    <p className="text-stone-600 mb-4">{hood.description}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-semibold text-stone-900 uppercase tracking-wider">Highlights</p>
                      {hood.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-3 text-stone-600">
                          <Utensils className="w-4 h-4 text-sky-500 flex-shrink-0" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Explore link */}
                    <div className="mt-auto flex items-center text-sky-600 font-semibold text-sm group-hover:text-sky-700 transition-colors">
                      Explore {hood.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              <span>Curated Excellence</span>
            </div>
            
            <h2 className="heading-lg mb-8">
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
              <div className="stat-card-dark">
                <div className="text-4xl font-bold text-sky-400 mb-2">10+</div>
                <div className="text-stone-600">Michelin-Recognized</div>
              </div>
              <div className="stat-card-dark">
                <div className="text-4xl font-bold text-sky-400 mb-2">24</div>
                <div className="text-stone-600">Curated Restaurants</div>
              </div>
              <div className="stat-card-dark">
                <div className="text-4xl font-bold text-sky-400 mb-2">3</div>
                <div className="text-stone-600">Neighborhoods</div>
              </div>
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
              utm_content="dining-hub"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-4">
              Ready to Experience Buenos Aires&apos; Finest?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start exploring our curated selection of the city&apos;s best restaurants, 
              from Michelin-starred institutions to hidden local gems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <Link href="/dining/recoleta">
                  <Star className="w-5 h-5 mr-2" />
                  Explore Recoleta
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white px-8" asChild>
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
