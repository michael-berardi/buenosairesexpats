import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare } from "lucide-react";
import ContactForm from "@/app/components/ContactForm";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Buenos Aires Expats. Questions about moving to Argentina, visa help, or sharing your expat story — we'd love to hear from you.",
  keywords: ["contact Buenos Aires Expats", "Argentina expat help", "moving to Argentina questions"],
  alternates: {
    canonical: "https://buenosairesexpats.com/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Contact" },
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
            <span className="text-foreground">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background dark:from-primary/10 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Mail className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have questions about moving to Argentina? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Form */}
              <div className="md:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Fill out the form and we&apos;ll get back to you within 48 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Share Your Story
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Are you an expat living in Argentina? We&apos;d love to feature your experience. Use the contact form and select &quot;General Inquiry&quot; to tell us about your story.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Legal Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      For visa and immigration questions, request a legal review from an Argentina immigration attorney:
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/consultation">
                        Request Legal Review
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Before You Contact Us</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Visa Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Check our detailed <Link href="/visas" className="text-primary hover:underline">visa guides</Link> first.
                    For complex legal situations, we recommend consulting an immigration attorney.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cost Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    See our <Link href="/cost-of-living" className="text-primary hover:underline">cost of living guide</Link> for
                    detailed budget breakdowns and current prices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Neighborhood Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore our <Link href="/neighborhoods" className="text-primary hover:underline">neighborhood guides</Link> for
                    detailed comparisons of Buenos Aires areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
