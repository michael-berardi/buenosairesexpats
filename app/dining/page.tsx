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
  Wine
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buenos Aires Dining Guide | Michelin-Starred & Fine Dining",
  description: "The definitive dining guide to Buenos Aires. Michelin-starred restaurants, world-class parrillas, and hidden gems in Recoleta, Palermo, and Belgrano.",
  keywords: ["Buenos Aires dining", "Michelin star Argentina", "best restaurants Buenos Aires", "Don Julio", "Aramburu", "fine dining BA"],
  openGraph: {
    title: "Buenos Aires Dining Guide | Michelin-Starred & Fine Dining",
    description: "The definitive dining guide to Buenos Aires. Michelin-starred restaurants and world-class culinary experiences.",
  },
};

const michelinStars = [
  { 
    name: "Aramburu", 
    stars: 2, 
    neighborhood: "Recoleta",
    cuisine: "Contemporary",
    description: "Argentina's only two-Michelin-starred restaurant. Chef Gonzalo Aramburu creates artistic, boundary-pushing cuisine."
  },
  { 
    name: "Don Julio", 
    stars: 1, 
    neighborhood: "Palermo",
    cuisine: "Argentine Steakhouse",
    description: "World's #1 steakhouse and Best Restaurant in Latin America 2024. A pilgrimage site for meat lovers."
  },
  { 
    name: "Trescha", 
    stars: 1, 
    neighborhood: "Villa Crespo",
    cuisine: "Contemporary",
    description: "Innovative tasting menus in an intimate setting. Chef Martín Molteni's creative playground."
  },
  { 
    name: "Crizia", 
    stars: 1, 
    neighborhood: "Palermo",
    cuisine: "Contemporary",
    description: "Newly starred in 2025. Chef Gabriel Oggero's ode to fire and Argentine ingredients."
  },
];

const neighborhoods = [
  {
    name: "Recoleta",
    slug: "recoleta",
    description: "Elegant dining in Buenos Aires' most refined neighborhood. Home to Aramburu and classic luxury hotels.",
    highlights: ["Aramburu (2 Michelin Stars)", "Elena at Four Seasons", "Duhau Restaurante"],
    image: "/images/dining-recoleta.jpg"
  },
  {
    name: "Palermo",
    slug: "palermo",
    description: "The beating heart of BA's culinary scene. From world-famous parrillas to innovative tasting menus.",
    highlights: ["Don Julio (1 Star)", "Crizia (1 Star)", "Tegui"],
    image: "/images/dining-palermo.jpg"
  },
  {
    name: "Belgrano",
    slug: "belgrano",
    description: "Sophisticated dining in a residential setting. Discover hidden gems and classic Argentine institutions.",
    highlights: ["Roux", "Corte Comedor", "La Casona de Belgrano"],
    image: "/images/dining-belgrano.jpg"
  },
];

export default function DiningGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-amber-950 via-amber-900 to-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('/images/dining-hero.jpg')] bg-cover bg-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30">
              <Award className="w-3 h-3 mr-1" />
              Michelin Guide 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Buenos Aires
              <span className="block text-amber-400">Dining Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-8 leading-relaxed">
              The definitive guide to Argentina's finest restaurants. 
              From Michelin-starred temples of gastronomy to legendary parrillas.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-400">
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                4 Michelin Stars
              </span>
              <span className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-amber-400" />
                World-Class Chefs
              </span>
              <span className="flex items-center gap-2">
                <Wine className="w-4 h-4 text-amber-400" />
                Exceptional Wine Lists
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Michelin Stars Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="secondary">
                <Award className="w-3 h-3 mr-1" />
                Michelin Guide 2025
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Michelin-Starred Restaurants</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Argentina's culinary excellence recognized by the world's most prestigious dining guide.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {michelinStars.map((restaurant) => (
                <Card key={restaurant.name} className="group hover:shadow-xl transition-all duration-300 border-amber-200/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors">
                          {restaurant.name}
                        </CardTitle>
                        <CardDescription className="text-base mt-1">
                          {restaurant.cuisine}
                        </CardDescription>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: restaurant.stars }).map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {restaurant.neighborhood}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{restaurant.description}</p>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/dining/${restaurant.neighborhood.toLowerCase().replace(/\s+/g, '-')}`}>
                        View in {restaurant.neighborhood} Guide
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Guides */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4" variant="secondary">
                <MapPin className="w-3 h-3 mr-1" />
                Neighborhood Guides
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Explore by Neighborhood</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Curated guides to the best dining in Buenos Aires' most prestigious neighborhoods.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {neighborhoods.map((hood) => (
                <Card key={hood.name} className="group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-stone-200 to-stone-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{hood.name}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6 flex-grow">
                    <p className="text-muted-foreground mb-4">{hood.description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-medium">Highlights:</p>
                      {hood.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Utensils className="w-3 h-3 text-amber-500" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={`/dining/${hood.slug}`}>
                        Explore {hood.name}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About the Guide */}
      <section className="py-20 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30">
              <ChefHat className="w-3 h-3 mr-1" />
              Curated Excellence
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Buenos Aires Dining Guide
            </h2>
            <p className="text-lg text-stone-400 mb-8 leading-relaxed">
              This guide represents the pinnacle of Buenos Aires dining. Every restaurant featured 
              has been selected for its exceptional quality, unique character, and contribution 
              to Argentina's world-renowned culinary scene. From the hallowed halls of Michelin-starred 
              institutions to the intimate neighborhood gems, these are the restaurants that define 
              Buenos Aires as a global gastronomic destination.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">10+</div>
                <div className="text-stone-400">Michelin-Recognized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-stone-400">Curated Restaurants</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-amber-400 mb-2">3</div>
                <div className="text-stone-400">Neighborhoods</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
