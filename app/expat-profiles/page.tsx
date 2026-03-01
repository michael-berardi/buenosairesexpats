"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { 
  Search,
  X,
  ArrowRight,
  MapPin,
  Users,
  Globe,
  User
} from "lucide-react";
import { 
  expatProfiles, 
  getAllRegions, 
  getRegionLabel,
  type ExpatRegion 
} from "@/lib/expat-profiles-data";

// Region icons mapping
const regionIcons: Record<ExpatRegion, string> = {
  "north-america": "🇺🇸",
  "europe": "🇪🇺",
  "asia": "🇯🇵",
  "middle-east": "🕌",
  "latin-america": "🌎",
  "oceania": "🇦🇺",
};

// Region colors for badges
const regionColors: Record<ExpatRegion, string> = {
  "north-america": "bg-blue-100 text-blue-800 border-blue-200",
  "europe": "bg-indigo-100 text-indigo-800 border-indigo-200",
  "asia": "bg-rose-100 text-rose-800 border-rose-200",
  "middle-east": "bg-amber-100 text-amber-800 border-amber-200",
  "latin-america": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "oceania": "bg-cyan-100 text-cyan-800 border-cyan-200",
};

export default function ExpatProfilesPage() {
  const [activeRegion, setActiveRegion] = useState<ExpatRegion | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(16);

  const regions = getAllRegions();

  // Filter expats based on region and search
  const filteredExpats = useMemo(() => {
    let filtered = expatProfiles;

    // Filter by region
    if (activeRegion !== "all") {
      filtered = filtered.filter(p => p.region === activeRegion);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.nationality.toLowerCase().includes(query) ||
        p.bio.toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [activeRegion, searchQuery]);

  const visibleExpats = filteredExpats.slice(0, visibleCount);
  const hasMore = visibleExpats.length < filteredExpats.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 16);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const clearFilters = () => {
    setActiveRegion("all");
    setSearchQuery("");
    setVisibleCount(16);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Full width with background */}
      <section className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-street-cafe.webp"
            alt="Buenos Aires street"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Globe className="w-3 h-3 mr-1" />
              Global Community
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Meet the Expats of{" "}
              <span className="text-sky-400">Buenos Aires</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Discover {expatProfiles.length} expats from around the world who have made Buenos Aires their home. 
              Read their stories and connect with the global expat community.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, country, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 py-6 bg-white/95 backdrop-blur-sm border-0 shadow-xl text-base"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>

            {/* Quick Stats */}
            <div className="flex justify-center gap-6 md:gap-10 text-white/90">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-400" />
                <span className="font-semibold">{expatProfiles.length}</span>
                <span className="text-white/70 hidden sm:inline">Profiles</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span className="font-semibold">{regions.length}</span>
                <span className="text-white/70 hidden sm:inline">Regions</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-400" />
                <span className="font-semibold">190+</span>
                <span className="text-white/70 hidden sm:inline">Topics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-4 px-4 md:mx-0 md:px-0">
            {/* All Filter */}
            <button
              onClick={() => setActiveRegion("all")}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                transition-all duration-200 border
                ${activeRegion === "all" 
                  ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                  : "bg-muted hover:bg-muted/80 border-transparent"
                }
              `}
            >
              <Users className="w-4 h-4" />
              All
              <Badge variant="secondary" className="ml-1 text-xs">
                {expatProfiles.length}
              </Badge>
            </button>

            {/* Region Filters */}
            {regions.map((region) => {
              const count = expatProfiles.filter(p => p.region === region.id).length;
              const isActive = activeRegion === region.id;
              
              return (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                    transition-all duration-200 border
                    ${isActive 
                      ? "bg-primary text-primary-foreground border-primary shadow-sm" 
                      : "bg-muted hover:bg-muted/80 border-transparent"
                    }
                  `}
                >
                  <span>{regionIcons[region.id]}</span>
                  <span className="hidden sm:inline">{region.label}</span>
                  <span className="sm:hidden">{region.label.split(" ")[0]}</span>
                  <Badge 
                    variant={isActive ? "outline" : "secondary"} 
                    className={`ml-1 text-xs ${isActive ? "border-primary-foreground/30" : ""}`}
                  >
                    {count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <section className="py-8 md:py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold">
                {searchQuery ? `Search Results` : activeRegion === "all" ? "All Profiles" : getRegionLabel(activeRegion)}
              </h2>
              <p className="text-sm text-muted-foreground">
                {filteredExpats.length} expat{filteredExpats.length !== 1 ? "s" : ""} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>
            {(activeRegion !== "all" || searchQuery) && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                <X className="w-4 h-4 mr-1" />
                Clear filters
              </Button>
            )}
          </div>

          {/* Empty State */}
          {filteredExpats.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No expats found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={clearFilters}>Clear all filters</Button>
            </div>
          )}

          {/* Grid Layout */}
          {filteredExpats.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {visibleExpats.map((expat) => (
                  <Link
                    key={expat.id}
                    href={`/expat-profiles/${expat.id}`}
                    className="group block bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Card Header with Image */}
                    <div className="relative h-32 overflow-hidden bg-muted">
                      {expat.hasScreenshot ? (
                        <>
                          <img
                            src={`/images/expat-screenshots/${expat.id}.jpg`}
                            alt={`${expat.blogName}`}
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                          <User className="w-12 h-12 text-primary/30" />
                        </div>
                      )}
                      
                      {/* Region Badge */}
                      <Badge 
                        className={`absolute top-3 left-3 ${regionColors[expat.region]} border-0 shadow-sm`}
                      >
                        <span className="mr-1">{regionIcons[expat.region]}</span>
                        <span className="hidden sm:inline">{getRegionLabel(expat.region)}</span>
                      </Badge>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-base group-hover:text-primary transition-colors mb-1 line-clamp-1">
                        {expat.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        {expat.nationality} • {expat.yearsInBA}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {expat.bio}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {expat.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag} 
                            className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                        {expat.tags.length > 2 && (
                          <span className="text-xs px-2 py-0.5 text-muted-foreground">
                            +{expat.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-8">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleLoadMore}
                    className="min-w-[200px]"
                  >
                    Load more profiles
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Showing {visibleExpats.length} of {filteredExpats.length}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Join the Expat Community"
              description="Ready to start your own Buenos Aires story? Lucero Legal can help you navigate Argentine immigration so you can focus on building your new life."
              utm_content="expat-profiles-hub"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
