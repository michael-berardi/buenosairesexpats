import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Buenos Aires Expats | Your Complete Guide to Living in Buenos Aires",
    template: "%s | Buenos Aires Expats",
  },
  description: "The ultimate resource for expats moving to Buenos Aires. Honest guides, visa information, cost of living data, neighborhood reviews, and a thriving expat community.",
  keywords: ["Buenos Aires expats", "living in Buenos Aires", "move to Buenos Aires", "Argentina expats", "Buenos Aires visa", "digital nomad Buenos Aires", "why leave America"],
  authors: [{ name: "Buenos Aires Expats" }],
  creator: "Buenos Aires Expats",
  metadataBase: new URL("https://buenosairesexpats.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buenosairesexpats.com",
    siteName: "Buenos Aires Expats",
    title: "Buenos Aires Expats | Your Complete Guide to Living in Buenos Aires",
    description: "The ultimate resource for expats moving to Buenos Aires. Honest guides, visa information, cost of living data, and a thriving expat community.",
    images: [{
      url: '/og-image.svg',
      width: 1200,
      height: 630,
      alt: 'Buenos Aires Expats - Your guide to life in Argentina',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buenos Aires Expats | Your Complete Guide to Living in Buenos Aires",
    description: "The ultimate resource for expats moving to Buenos Aires. Honest guides, visa information, cost of living data, and a thriving expat community.",
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: `
          // Check for reduced motion preference
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.classList.add('reduce-motion');
          }
        `}} />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
