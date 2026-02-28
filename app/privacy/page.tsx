import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy - Buenos Aires Expats",
  description: "Our privacy policy explains how we collect, use, and protect your personal information when you use Buenos Aires Expats.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy - Buenos Aires Expats",
    description: "Our privacy policy explains how we collect, use, and protect your personal information.",
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/privacy",
  },
};

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Privacy Policy" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: February 26, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6 prose prose-stone dark:prose-invert max-w-none">
                <h2 className="text-xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground mb-6">
                  Buenos Aires Expats (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website buenosairesexpats.com (the &quot;Site&quot;).
                </p>

                <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
                <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                <p className="text-muted-foreground mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us through our contact form</li>
                  <li>Submit your expat story</li>
                  <li>Participate in surveys or community discussions</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  This information may include your name, email address, and any other information 
                  you choose to provide.
                </p>

                <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground mb-6">
                  When you visit our Site, we automatically collect certain information about your 
                  device and usage patterns, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website or search terms</li>
                  <li>Device information (screen size, operating system)</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Provide and maintain our Site</li>
                  <li>Send newsletters and updates you&apos;ve subscribed to</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our content and user experience</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">Cookies and Tracking</h2>
                <p className="text-muted-foreground mb-6">
                  We use cookies and similar tracking technologies to enhance your browsing experience. 
                  You can set your browser to refuse all or some browser cookies, but this may affect 
                  the functionality of our Site.
                </p>

                <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground mb-6">
                  We use trusted third-party services to help us operate our Site:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li><strong>Vercel Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Email Service Providers:</strong> For newsletter delivery</li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  These services have their own privacy policies and may collect information 
                  according to their own practices.
                </p>

                <h2 className="text-xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information. However, no method of transmission over the Internet is 
                  100% secure, and we cannot guarantee absolute security.
                </p>

                <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to certain processing of your data</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">Children&apos;s Privacy</h2>
                <p className="text-muted-foreground mb-6">
                  Our Site is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13.
                </p>

                <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                </p>

                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:privacy@buenosairesexpats.com" className="text-primary hover:underline">privacy@buenosairesexpats.com</a>
                </p>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
