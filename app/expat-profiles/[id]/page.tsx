import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  MapPin, 
  Briefcase, 
  Globe,
  Clock,
  Star,
  Camera,
  User
} from "lucide-react";
import Image from "next/image";
import { 
  expatProfiles, 
  getExpatById, 
  getExpatsByRegion,
  getRegionLabel,
  type ExpatRegion 
} from "@/lib/expat-profiles-data";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

// Generate static params for all expat profiles
export function generateStaticParams() {
  return expatProfiles.map((profile) => ({
    id: profile.id,
  }));
}

// Generate metadata for each profile
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}): Promise<Metadata> {
  const { id } = await params;
  const profile = getExpatById(id);
  
  if (!profile) {
    return {
      title: "Profile Not Found",
    };
  }

  return {
    title: `${profile.name} - ${profile.nationality} Expat in Buenos Aires`,
    description: profile.seoDescription,
    keywords: [
      `${profile.nationality} expat Buenos Aires`,
      `${profile.name} blog`,
      "expat life BA",
      "living in Argentina",
      ...(profile.tags || [])
    ],
    openGraph: {
      title: `${profile.name} - ${profile.nationality} in Buenos Aires`,
      description: profile.bio.slice(0, 200),
      type: "article",
    },
    alternates: {
      canonical: `https://buenosairesexpats.com/expat-profiles/${id}`,
    },
  };
}

// Region colors
const regionColors: Record<ExpatRegion, string> = {
  "north-america": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "europe": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
  "asia": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  "middle-east": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "latin-america": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  "oceania": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
};

export default async function ExpatProfilePage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const profile = getExpatById(id);

  if (!profile) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    headline: `${profile.name} - ${profile.nationality} Expat in Buenos Aires`,
    description: profile.seoDescription,
    url: `https://buenosairesexpats.com/expat-profiles/${profile.id}`,
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
  });

  // Get related expats (same region, excluding current)
  const relatedExpats = getExpatsByRegion(profile.region)
    .filter((p) => p.id !== profile.id)
    .slice(0, 3);

  // Get next and previous expats
  const currentIndex = expatProfiles.findIndex((p) => p.id === profile.id);
  const prevExpat = currentIndex > 0 ? expatProfiles[currentIndex - 1] : null;
  const nextExpat = currentIndex < expatProfiles.length - 1 ? expatProfiles[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/expat-profiles" className="hover:text-foreground">Expat Profiles</Link>
            <span>/</span>
            <span className="text-foreground">{profile.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className={regionColors[profile.region]}>
                <Globe className="w-3 h-3 mr-1" />
                {getRegionLabel(profile.region)}
              </Badge>
              {profile.featured && (
                <Badge className="bg-yellow-100 text-yellow-800">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge variant="outline">
                {profile.status === "active" ? "Active" : 
                 profile.status === "former" ? "Former Expat" : "Inactive"}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {profile.name}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {profile.nationality} • {profile.yearsInBA}
              {profile.neighborhood && ` • ${profile.neighborhood}`}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 text-sm mb-6">
              {profile.profession && (
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span>{profile.profession}</span>
                </div>
              )}
              {profile.neighborhood && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{profile.neighborhood}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{profile.yearsInBA}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a 
                  href={profile.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Visit {profile.blogName || "Blog"}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/expat-profiles">
                  Browse All Expats
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Website Screenshot */}
      {profile.hasScreenshot && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-muted-foreground" />
                  <h2 className="text-lg font-semibold">Website Preview</h2>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a 
                    href={profile.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit {profile.blogName}
                  </a>
                </Button>
              </div>
              
              <Card className="overflow-hidden shadow-lg">
                <a 
                  href={profile.blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] bg-muted group"
                >
                  <Image
                    src={`/images/expat-screenshots/${profile.id}.jpg`}
                    alt={`${profile.blogName} website screenshot`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 896px) 100vw, 896px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-white/90 text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      Click to visit {profile.blogName}
                    </span>
                  </div>
                </a>
                <CardContent className="py-4 bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{profile.blogName}</p>
                      <p className="text-sm text-muted-foreground">
                        {profile.nationality} expat in Buenos Aires
                      </p>
                    </div>
                    <Badge variant="secondary">{profile.yearsInBA}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Bio */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  About {profile.name}
                  <Badge variant="outline" className="font-normal">
                    {profile.nationality}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {profile.bio}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-8 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Topics & Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Info */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Blog Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Blog Name
                  </div>
                  <div className="text-lg">{profile.blogName || profile.name + "'s Blog"}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Website
                  </div>
                  <a 
                    href={profile.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-2"
                  >
                    {profile.blogUrl}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">
                    Status
                  </div>
                  <Badge variant={profile.status === "active" ? "default" : "secondary"}>
                    {profile.status === "active" ? "Currently Active" : 
                     profile.status === "former" ? "Former Expat" : "Inactive"}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            {prevExpat ? (
              <Button asChild variant="outline">
                <Link href={`/expat-profiles/${prevExpat.id}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {prevExpat.name}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextExpat ? (
              <Button asChild variant="outline">
                <Link href={`/expat-profiles/${nextExpat.id}`}>
                  {nextExpat.name}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Expats */}
      {relatedExpats.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                More {getRegionLabel(profile.region)} Expats
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedExpats.map((expat) => (
                  <Card key={expat.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Thumbnail */}
                    {expat.hasScreenshot ? (
                      <Link href={`/expat-profiles/${expat.id}`} className="block relative h-28 overflow-hidden bg-muted">
                        <img
                          src={`/images/expat-screenshots/${expat.id}.jpg`}
                          alt={`${expat.blogName} website`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </Link>
                    ) : (
                      <Link href={`/expat-profiles/${expat.id}`} className="block relative h-28 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        <User className="w-8 h-8 text-muted-foreground/30" />
                      </Link>
                    )}
                    
                    <CardHeader className="pb-2">
                      <Badge className={`w-fit mb-2 ${regionColors[expat.region]}`}>
                        {getRegionLabel(expat.region)}
                      </Badge>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {expat.name}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {expat.nationality} • {expat.yearsInBA}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {expat.bio}
                      </p>
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/expat-profiles/${expat.id}`}>
                          View Profile
                          <ArrowRight className="w-3 h-3 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Lucero Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Inspired to Make the Move?"
              description={`Ready to follow in ${profile.name}'s footsteps? Lucero Legal's immigration team can help with visas, residency, and all the legal paperwork.`}
              utm_content="expat-profile-detail"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Start Your Own Story</h2>
            <p className="primary-foreground/90 mb-8">
              Join the growing community of expats who have discovered life in Buenos Aires.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
