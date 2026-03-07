import { MetadataRoute } from "next";
import { expatProfiles } from "@/lib/expat-profiles-data";
import { getAllSlugs } from "@/lib/nationality-data";
import { stories } from "@/lib/stories-data";

export const dynamic = "force-static";

const BASE_URL = "https://buenosairesexpats.com";

type SitemapEntry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const staticPages: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cost-of-living", changeFrequency: "weekly", priority: 0.9 },
  { path: "/healthcare", changeFrequency: "monthly", priority: 0.7 },
  { path: "/housing", changeFrequency: "monthly", priority: 0.7 },
  { path: "/banking", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/why-argentina", changeFrequency: "monthly", priority: 0.6 },
  { path: "/why-argentina/vs-europe", changeFrequency: "monthly", priority: 0.6 },
  { path: "/visas", changeFrequency: "weekly", priority: 0.9 },
  { path: "/visas/digital-nomad", changeFrequency: "weekly", priority: 0.9 },
  { path: "/visas/work", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visas/retirement", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visas/student", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visas/investment", changeFrequency: "weekly", priority: 0.8 },
  { path: "/visas/quiz", changeFrequency: "monthly", priority: 0.8 },
  { path: "/visas/nationalities", changeFrequency: "weekly", priority: 0.9 },
  { path: "/neighborhoods", changeFrequency: "monthly", priority: 0.8 },
  { path: "/neighborhoods/belgrano", changeFrequency: "monthly", priority: 0.7 },
  { path: "/neighborhoods/palermo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/neighborhoods/puerto-madero", changeFrequency: "monthly", priority: 0.6 },
  { path: "/neighborhoods/quiz", changeFrequency: "monthly", priority: 0.9 },
  { path: "/neighborhoods/recoleta", changeFrequency: "monthly", priority: 0.7 },
  { path: "/neighborhoods/san-telmo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/neighborhoods/villa-crespo", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dining", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dining/recoleta", changeFrequency: "monthly", priority: 0.6 },
  { path: "/dining/palermo", changeFrequency: "monthly", priority: 0.6 },
  { path: "/dining/belgrano", changeFrequency: "monthly", priority: 0.6 },
  { path: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { path: "/guides/transportation", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guides/working-taxes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/getting-started", changeFrequency: "monthly", priority: 0.8 },
  { path: "/guides/first-week", changeFrequency: "monthly", priority: 0.9 },
  { path: "/guides/getting-dni", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guides/safety", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guides/learning-spanish", changeFrequency: "monthly", priority: 0.6 },
  { path: "/guides/food-dining", changeFrequency: "monthly", priority: 0.6 },
  { path: "/guides/weather-climate", changeFrequency: "monthly", priority: 0.5 },
  { path: "/guides/cultural-etiquette", changeFrequency: "monthly", priority: 0.5 },
  { path: "/stories", changeFrequency: "weekly", priority: 0.7 },
  { path: "/expat-profiles", changeFrequency: "weekly", priority: 0.8 },
];

function absoluteUrl(path: string): string {
  if (path === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${path}/`;
}

function toSitemapEntry(
  path: string,
  lastModified: Date,
  changeFrequency: SitemapEntry["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const nationalityPages = getAllSlugs().map((slug) =>
    toSitemapEntry(`/visas/nationalities/${slug}`, now, "weekly", 0.8),
  );

  const profilePages = expatProfiles.map((profile) =>
    toSitemapEntry(`/expat-profiles/${profile.id}`, now, "monthly", 0.6),
  );

  const storyPages = stories.map((story) =>
    toSitemapEntry(`/stories/${story.id}`, now, "monthly", 0.6),
  );

  return [
    ...staticPages.map((page) =>
      toSitemapEntry(page.path, now, page.changeFrequency, page.priority),
    ),
    ...nationalityPages,
    ...profilePages,
    ...storyPages,
  ];
}
