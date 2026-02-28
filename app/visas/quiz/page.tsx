import type { Metadata } from "next";
import { Suspense } from "react";
import { QuizClient } from "./quiz-client";

export const metadata: Metadata = {
  title: "Visa Finder Quiz - Find Your Argentina Visa",
  description:
    "Answer a few questions to find the best Argentina visa for your situation. Get personalized recommendations for Digital Nomad, Work, Retirement, Student, and Investment visas.",
  openGraph: {
    title: "Visa Finder Quiz - Find Your Argentina Visa",
    description: "Answer a few questions to find the best Argentina visa for your situation.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/visas/quiz",
  },
};

export default function VisaQuizPage() {
  return (
    <Suspense>
      <QuizClient />
    </Suspense>
  );
}
