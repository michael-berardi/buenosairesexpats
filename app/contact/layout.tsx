import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Have questions, feedback, or want to share your story? Contact the Buenos Aires Expats team.",
  alternates: {
    canonical: "https://buenosairesexpats.com/contact",
  },
  openGraph: {
    title: "Contact Us | Buenos Aires Expats",
    description: "Have questions, feedback, or want to share your story? Contact the Buenos Aires Expats team.",
    url: "https://buenosairesexpats.com/contact",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
