import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteAnalytics } from "@/components/analytics/SiteAnalytics";
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
    default: "Buenos Aires Expats | Insider City Guide to BA Life",
    template: "%s | Buenos Aires Expats",
  },
  description: "Hyper-local guide to Buenos Aires. Neighborhood reviews, real 2026 rent prices, barrio quiz, coworking spots, dining guides, and tips from expats living in BA.",
  keywords: ["Buenos Aires expats", "living in Buenos Aires", "Palermo apartments", "BA digital nomad", "Buenos Aires neighborhoods", "Recoleta expat", "San Telmo living", "coworking Buenos Aires", "Buenos Aires rent prices 2026", "barrio guide BA", "expat life Palermo", "Buenos Aires cost of living"],
  authors: [{ name: "Buenos Aires Expats" }],
  creator: "Buenos Aires Expats",
  metadataBase: new URL("https://buenosairesexpats.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://buenosairesexpats.com",
    siteName: "Buenos Aires Expats",
    title: "Buenos Aires Expats | Insider City Guide to BA Life",
    description: "Neighborhood reviews, real rent prices, coworking spots, dining guides, and street-level tips for expats in Buenos Aires.",
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Buenos Aires Expats - Your insider city guide to BA life',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buenos Aires Expats | Insider City Guide to BA Life",
    description: "Neighborhood reviews, real rent prices, coworking spots, dining guides, and street-level tips for expats in Buenos Aires.",
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

const luceroReferralTrackingScript = `(function(){var base={event_group:'referral',referral_type:'spoke_to_hub',source_site_id:'buenosairesexpats',source_network_id:'lucero',source_site_role:'spoke',source_segment:'audience-satellite',hub_site_id:'lucero-legal',destination_site_id:'lucero-legal',destination_network_id:'lucero',destination_site_role:'hub',destination_segment:'hub'};function cleanText(value){return (value||'').replace(/\\s+/g,' ').trim().slice(0,120);}document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href*="lucerolegal"]'):null;if(!a){return;}var data=Object.assign({},base,{link_url:a.href,link_text:cleanText(a.textContent),page_path:window.location.pathname,language:document.documentElement.lang||'en'});if(window.va){window.va('event',{name:'lucero_referral',data:data});}if(window.gtag){window.gtag('event','lucero_referral',data);}});})();`;

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
          <link rel="preconnect" href="https://challenges.cloudflare.com" />
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
        <SiteAnalytics
            measurementId="G-N5LLRYQ9J1"
            extraScripts={[
              {
                id: "lucero-click-tracking",
                code: luceroReferralTrackingScript,
              },
            ]}
          />
        </I18nProvider>
      </body>
    </html>
  );
}
