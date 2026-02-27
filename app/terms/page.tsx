import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Service - Buenos Aires Expats",
  description: "Our terms of service outline the rules and regulations for using the Buenos Aires Expats website.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://buenosairesexpats.com/terms",
  },
};

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Terms of Service" },
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
            <span className="text-foreground">Terms of Service</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
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
                <h2 className="text-xl font-semibold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing or using Buenos Aires Expats (the &quot;Site&quot;), you agree to be bound by these 
                  Terms of Service. If you disagree with any part of these terms, you may not access the Site.
                </p>

                <h2 className="text-xl font-semibold mb-4">Use of the Site</h2>
                <p className="text-muted-foreground mb-4">You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Use the Site in any way that violates applicable laws or regulations</li>
                  <li>Impersonate or attempt to impersonate Buenos Aires Expats or another user</li>
                  <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of the Site</li>
                  <li>Attempt to gain unauthorized access to any portion of the Site</li>
                  <li>Use any robot, spider, or other automatic device to access the Site</li>
                  <li>Introduce any viruses, trojan horses, or other malicious code</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">
                  The Site and its original content, features, and functionality are owned by Buenos Aires Expats 
                  and are protected by international copyright, trademark, patent, trade secret, and other 
                  intellectual property laws. You may not reproduce, distribute, modify, create derivative works 
                  of, publicly display, or commercially exploit any content without our prior written consent.
                </p>

                <h2 className="text-xl font-semibold mb-4">User Content</h2>
                <p className="text-muted-foreground mb-6">
                  By submitting content to the Site (such as expat stories, comments, or forum posts), you grant 
                  us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, 
                  reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and 
                  display such content throughout the world in any media.
                </p>
                <p className="text-muted-foreground mb-6">
                  You represent and warrant that you own or control all rights to the content you submit, and 
                  that your content does not violate the rights of any third party.
                </p>

                <h2 className="text-xl font-semibold mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground mb-6">
                  The Site is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Buenos Aires Expats makes no 
                  representations or warranties of any kind, express or implied, regarding the Site or the 
                  information contained therein.
                </p>
                <p className="text-muted-foreground mb-6">
                  We do not warrant that the Site will be uninterrupted, timely, secure, or error-free, or that 
                  defects will be corrected. Immigration laws and regulations change frequently, and we cannot 
                  guarantee that all information on the Site is current or accurate.
                </p>

                <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">
                  In no event shall Buenos Aires Expats, its directors, employees, partners, agents, suppliers, 
                  or affiliates be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible 
                  losses, resulting from your access to or use of the Site.
                </p>

                <h2 className="text-xl font-semibold mb-4">Not Legal Advice</h2>
                <p className="text-muted-foreground mb-6">
                  The content on this Site is for informational purposes only and does not constitute legal, 
                  financial, or professional advice. Immigration laws are complex and change frequently. Always 
                  consult with a qualified Argentine immigration attorney for advice regarding your specific 
                  situation.
                </p>

                <h2 className="text-xl font-semibold mb-4">External Links</h2>
                <p className="text-muted-foreground mb-6">
                  The Site may contain links to third-party websites or services that are not owned or controlled 
                  by Buenos Aires Expats. We have no control over, and assume no responsibility for, the content, 
                  privacy policies, or practices of any third-party websites.
                </p>

                <h2 className="text-xl font-semibold mb-4">Indemnification</h2>
                <p className="text-muted-foreground mb-6">
                  You agree to defend, indemnify, and hold harmless Buenos Aires Expats and its licensees and 
                  licensors, and their employees, contractors, agents, officers, and directors, from and against 
                  any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses 
                  arising from your use of the Site or violation of these Terms.
                </p>

                <h2 className="text-xl font-semibold mb-4">Termination</h2>
                <p className="text-muted-foreground mb-6">
                  We may terminate or suspend your access to the Site immediately, without prior notice or 
                  liability, for any reason whatsoever, including without limitation if you breach these Terms.
                </p>

                <h2 className="text-xl font-semibold mb-4">Governing Law</h2>
                <p className="text-muted-foreground mb-6">
                  These Terms shall be governed and construed in accordance with the laws of the United States, 
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision 
                  of these Terms will not be considered a waiver of those rights.
                </p>

                <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  We will provide notice of any changes by posting the new Terms on this page and updating the 
                  &quot;Last updated&quot; date. Your continued use of the Site after any changes constitutes acceptance 
                  of the new Terms.
                </p>

                <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-6">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: <a href="mailto:legal@buenosairesexpats.com" className="text-primary hover:underline">legal@buenosairesexpats.com</a>
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
