import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expat Profiles in Buenos Aires",
  description:
    "Expat profiles from people building lives in Buenos Aires. Real stories with neighborhood picks, budgets, visas, and daily life tips.",
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
