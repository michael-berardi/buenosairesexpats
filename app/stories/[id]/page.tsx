import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LuceroLegalCTA } from "@/components/lucero-legal-cta";
import { ArrowLeft, ArrowRight, MapPin, Briefcase, Clock, Quote } from "lucide-react";
import { stories, getStoryById, getAllCategories, type StoryCategory } from "@/lib/stories-data";
import { StructuredData } from "@/components/structured-data";
import { generateArticleSchema } from "@/lib/schema";

// Generate static params for all stories
export function generateStaticParams() {
  return stories.map((story) => ({
    id: story.id,
  }));
}

// Generate metadata for each story
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const story = getStoryById(id);
  
  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: `${story.name}'s Story - ${story.from} to Buenos Aires`,
    description: story.summary,
    keywords: ["expat story", "moving to Buenos Aires", `${story.from} to Argentina`, "expat experience"],
    openGraph: {
      title: `${story.name}'s Story - ${story.from} to Buenos Aires`,
      description: story.summary,
      type: "article",
      publishedTime: story.publishedAt,
      images: story.heroImage ? [{
        url: story.heroImage,
        alt: story.heroImageAlt || `${story.name}'s expat story`,
      }] : undefined,
    },
    alternates: {
      canonical: `https://buenosairesexpats.com/stories/${id}`,
    },
  };
}

// Category color mapping
const categoryColors: Record<StoryCategory, string> = {
  success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  struggle: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  "culture-shock": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  cautionary: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  love: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
  business: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "street-life": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
};

const categoryLabels: Record<StoryCategory, string> = {
  success: "Success Story",
  struggle: "Reality Check",
  "culture-shock": "Culture Shock",
  cautionary: "Cautionary Tale",
  love: "Love & Connection",
  business: "Entrepreneur",
  "street-life": "Street Life",
};

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = getStoryById(id);

  if (!story) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    headline: `${story.name}'s Story - ${story.from} to Buenos Aires`,
    description: story.summary,
    url: `https://buenosairesexpats.com/stories/${story.id}`,
    datePublished: story.publishedAt,
    dateModified: story.publishedAt,
  });

  // Get related stories (same category, excluding current)
  const relatedStories = stories
    .filter((s) => s.category === story.category && s.id !== story.id)
    .slice(0, 2);

  // Get next and previous stories
  const currentIndex = stories.findIndex((s) => s.id === story.id);
  const prevStory = currentIndex > 0 ? stories[currentIndex - 1] : null;
  const nextStory = currentIndex < stories.length - 1 ? stories[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={articleSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link href="/stories" className="hover:text-foreground">Stories</Link>
            <span>/</span>
            <span className="text-foreground">{story.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className={`relative ${story.heroImage ? 'min-h-[400px] flex items-end' : 'py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background'}`}>
        {/* Hero Image Background */}
        {story.heroImage && (
          <>
            <Image
              src={story.heroImage}
              alt={story.heroImageAlt || `${story.name}'s story`}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          </>
        )}
        
        <div className={`container mx-auto px-4 ${story.heroImage ? 'relative z-10 pb-12' : ''}`}>
          <div className="max-w-3xl mx-auto">
            <Badge className={`mb-4 ${story.heroImage ? 'bg-white/90 text-foreground' : categoryColors[story.category]}`}>
              {categoryLabels[story.category]}
            </Badge>
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${story.heroImage ? 'text-white' : ''}`}>
              {story.name}: {story.from} to Buenos Aires
            </h1>
            <p className={`text-lg mb-6 ${story.heroImage ? 'text-white/90' : 'text-muted-foreground'}`}>{story.summary}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span>{story.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{story.neighborhood}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span>{story.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">{story.readTime}</span>
              </div>
            </div>

            {story.source && (
              <p className="text-sm text-muted-foreground mt-4">
                Source: {story.source}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-8 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl md:text-2xl italic text-center">
              &ldquo;{story.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Highlights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-lg">Key Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {story.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Gallery Images */}
            {story.galleryImages && story.galleryImages.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {story.galleryImages.map((image, index) => (
                    <figure key={index} className="rounded-lg overflow-hidden border">
                      <div className="relative aspect-video">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      {image.caption && (
                        <figcaption className="px-3 py-2 text-sm text-muted-foreground bg-muted">
                          {image.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </div>
            )}

            {/* Story Content */}
            <div className="prose prose-lg max-w-none">
              {story.content.split('\n\n').map((paragraph, index) => {
                // Handle headers
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                // Handle bold text
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-semibold text-lg my-4">{paragraph.replace(/\*\*/g, '')}</p>;
                }
                // Handle lists
                if (paragraph.includes('\n- ')) {
                  const items = paragraph.split('\n- ').filter(Boolean);
                  return (
                    <ul key={index} className="list-disc pl-6 my-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                // Regular paragraphs
                return <p key={index} className="mb-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex justify-between">
            {prevStory ? (
              <Button asChild variant="outline">
                <Link href={`/stories/${prevStory.id}`}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous Story
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextStory ? (
              <Button asChild variant="outline">
                <Link href={`/stories/${nextStory.id}`}>
                  Next Story
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* Related Stories */}
      {relatedStories.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Similar Stories</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedStories.map((related) => (
                  <Card key={related.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className={`w-fit mb-2 ${categoryColors[related.category]}`}>
                        {categoryLabels[related.category]}
                      </Badge>
                      <CardTitle className="text-lg">{related.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{related.from} • {related.duration}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{related.summary}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/stories/${related.id}`}>
                          Read Story
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

      {/* Legal CTA */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <LuceroLegalCTA
              variant="compact"
              headline="Inspired? Get Help With Your Move"
              description="Ready to start your own Buenos Aires chapter? Lucero Legal's immigration team can help with visas, residency, and all the legal paperwork."
              utm_content="story-detail"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Have Your Own Story?</h2>
            <p className="text-primary-foreground/90 mb-8">
              Are you an expat living in Buenos Aires? We&apos;d love to hear your experience
              and possibly feature it here.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Share Your Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
