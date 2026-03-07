import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expat Profiles in Buenos Aires",
  description:
    "Browse expat profiles and real-life stories from people building lives in Buenos Aires, with practical context on neighborhoods, budgets, visas, and day-to-day life.",
  keywords: [
    "Buenos Aires expat profiles",
    "expats in Buenos Aires",
    "living in Buenos Aires",
    "Buenos Aires expat stories",
    "moving to Buenos Aires",
  ],
  alternates: {
    canonical: "https://buenosairesexpats.com/expat-profiles",
  },
};

export default function ExpatProfilesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
