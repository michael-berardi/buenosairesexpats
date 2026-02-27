import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Buenos Aires Expats",
  description: "Have questions, feedback, or want to share your story? Contact the Buenos Aires Expats team.",
  alternates: {
    canonical: "https://buenosairesexpats.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
