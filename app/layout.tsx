import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { I18nProvider } from "@/lib/i18n";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Buenos Aires Expats | Your Insider City Guide to BA Life",
    template: "%s | Buenos Aires Expats",
  },
  description: "The hyper-local guide to living in Buenos Aires. Neighborhood-by-neighborhood reviews, real 2026 prices, barrio comparisons, coworking spots, dining guides, and street-level tips from expats actually living in BA.",
  keywords: ["Buenos Aires expats", "living in Buenos Aires", "Palermo apartments", "BA digital nomad", "Buenos Aires neighborhoods", "Recoleta expat", "San Telmo living", "coworking Buenos Aires", "Buenos Aires rent prices 2026", "barrio guide BA", "expat life Palermo", "Buenos Aires cost of living"],
  authors: [{ name: "Buenos Aires Expats" }],
  creator: "Buenos Aires Expats",
  metadataBase: new URL("https://buenosairesexpats.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buenosairesexpats.com",
    siteName: "Buenos Aires Expats",
    title: "Buenos Aires Expats | Your Insider City Guide to BA Life",
    description: "Neighborhood reviews, real rent prices, coworking spots, dining guides, and street-level tips. The hyper-local guide to Buenos Aires for expats and digital nomads.",
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Buenos Aires Expats - Your insider city guide to BA life',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buenos Aires Expats | Your Insider City Guide to BA Life",
    description: "Neighborhood reviews, real rent prices, coworking spots, dining guides, and street-level tips. The hyper-local guide to Buenos Aires.",
    images: ['/images/og-image.png'],
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
  themeColor: '#c2410c',
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: `
          // Check for reduced motion preference
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.classList.add('reduce-motion');
          }
        `}} />
        <I18nProvider>
          <a href="#main-content" className="skip-nav">
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <Analytics />
        </I18nProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XH9E79KEDZ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XH9E79KEDZ');`}
        </Script>
        <Script id="lucero-click-tracking" strategy="afterInteractive">
          {`document.addEventListener('click',function(e){var a=e.target.closest('a[href*="lucerolegal"]');if(a){gtag('event','lucero_referral',{link_url:a.href,link_text:a.textContent.trim(),page_path:window.location.pathname});}});`}
        </Script>
      </body>
    </html>
  );
}
