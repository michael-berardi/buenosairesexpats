import type { Metadata } from "next";
import { Suspense } from "react";
import { NeighborhoodQuizClient } from "./quiz-client";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Buenos Aires Neighborhood Matcher Quiz | Find Your Perfect Barrio",
  description:
    "Answer 7 quick questions to find the best Buenos Aires neighborhood for your lifestyle. Compare Palermo, Recoleta, Belgrano, San Telmo, Villa Crespo, and Puerto Madero based on your budget, vibe, and priorities.",
  keywords: [
    "Buenos Aires neighborhood quiz",
    "which barrio Buenos Aires",
    "best neighborhood expats BA",
    "Palermo vs Recoleta",
    "where to live Buenos Aires",
    "Buenos Aires barrio finder",
    "neighborhood matcher BA",
  ],
  openGraph: {
    title: "Buenos Aires Neighborhood Matcher Quiz",
    description:
      "Answer 7 quick questions to find the best Buenos Aires barrio for your lifestyle, budget, and priorities.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Buenos Aires Neighborhood Matcher Quiz",
      },
    ],
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/neighborhoods/quiz",
  },
};

export default function NeighborhoodQuizPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Neighborhoods", item: "https://buenosairesexpats.com/neighborhoods" },
    { name: "Neighborhood Matcher Quiz" },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <Suspense>
        <NeighborhoodQuizClient />
      </Suspense>
    </>
  );
}
