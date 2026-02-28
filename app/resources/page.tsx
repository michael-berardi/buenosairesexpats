import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";
import {
  FileText,
  Building,
  Scale,
  Heart,
  Plane,
  Home,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Download,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Resources for Expats in Argentina",
  description: "Essential resources for expats moving to Argentina. Downloadable checklists, service directories, and guides for a smooth transition.",
  keywords: ["expat resources Argentina", "moving to Argentina checklist", "Buenos Aires services"],
  alternates: {
    canonical: "https://buenosairesexpats.com/resources",
  },
};

const resources = [
  {
    icon: FileText,
    title: "Moving Checklist",
    description: "Complete step-by-step checklist for moving to Argentina. From visa application to finding an apartment.",
    download: true,
    href: "/guides/getting-started",
  },
  {
    icon: Building,
    title: "Service Directory",
    description: "Verified lawyers, accountants, real estate agents, and other service providers who specialize in helping expats.",
    download: false,
    href: "#service-directory",
  },
  {
    icon: Scale,
    title: "Legal Resources",
    description: "Understanding Argentine law, contracts, and your rights as a foreign resident.",
    download: false,
    href: "/guides/getting-started",
  },
  {
    icon: Heart,
    title: "Healthcare Guide",
    description: "Complete guide to health insurance options, finding doctors, and navigating the healthcare system.",
    download: false,
    href: "/healthcare",
  },
  {
    icon: Plane,
    title: "Arrival Guide",
    description: "What to do in your first week in Argentina. Setting up your phone, bank account, and more.",
    download: false,
    href: "/guides/getting-started",
  },
  {
    icon: Home,
    title: "Housing Guide",
    description: "Everything about renting in Argentina. Contracts, guarantees, and avoiding common pitfalls.",
    download: false,
    href: "/housing",
  },
];

const checklistItems = [
  { category: "Before You Leave", items: [
    "Apply for visa (2-3 months before)",
    "Get apostilled documents (birth certificate, criminal record)",
    "Notify bank of travel plans",
    "Set up international health insurance",
    "Bring USD cash (essential for exchange)",
    "Get international driver's license",
  ]},
  { category: "First Week in Argentina", items: [
    "Get local SIM card",
    "Exchange USD at blue rate",
    "Open bank account (if possible)",
    "Get SUBE card for transport",
    "Register with immigration if required",
    "Find temporary accommodation",
  ]},
  { category: "First Month", items: [
    "Find long-term apartment",
    "Set up utilities (internet, gas, electricity)",
    "Get local health insurance (prepaga)",
    "Find a doctor and dentist",
    "Join expat groups and communities",
    "Start Spanish classes if needed",
  ]},
];

const serviceCategories = [
  { name: "Immigration Lawyers", icon: Scale, count: 12 },
  { name: "Real Estate Agents", icon: Home, count: 8 },
  { name: "Accountants", icon: Briefcase, count: 6 },
  { name: "Healthcare Providers", icon: Heart, count: 15 },
  { name: "Language Schools", icon: GraduationCap, count: 10 },
  { name: "Coworking Spaces", icon: Building, count: 14 },
];

export default function ResourcesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Resources" },
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
            <span className="text-foreground">Resources</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <FileText className="w-3 h-3 mr-1" />
              Essential Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expat Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need for a smooth transition to life in Argentina. 
              Downloadable checklists, verified service providers, and expert guides.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Resource Library</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {resources.map((resource) => (
              <Card key={resource.title} className="h-full flex flex-col">
                <CardHeader>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <resource.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    {resource.download && (
                      <Download className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={resource.href}>
                      {resource.download ? "Download" : "View Guide"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Checklist Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Moving Checklist</h2>
              <p className="text-muted-foreground">
                A preview of our comprehensive moving checklist. Download the full version for the complete timeline.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {checklistItems.map((section) => (
                <Card key={section.category} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg">
                <Link href="/guides/getting-started">
                  <Download className="w-4 h-4 mr-2" />
                  Download Full Checklist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Directory Preview */}
      <section id="service-directory" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Service Directory</h2>
              <p className="text-muted-foreground">
                Verified professionals who specialize in helping expats. All providers vetted by our team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceCategories.map((category) => (
                <Card key={category.name} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.count} verified providers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Full directory coming soon. For immigration help, see our trusted partner below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Trusted Immigration Help</h2>
            <p className="text-muted-foreground mb-8">
              Complex immigration matters require professional guidance. We&apos;ve worked with a 
              trusted partner who specializes in Argentine visas and has helped many of our readers.
            </p>
            <Card className="text-left">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">Immigration Support</h3>
                    <p className="text-muted-foreground mb-4">
                      Years of experience helping expats navigate visas, residency, and citizenship. 
                      English-speaking support that understands the specific issues foreigners face. 
                      Lucero Legal's team of immigration attorneys have guided many of our community members through the process.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">Digital Nomad Visas</Badge>
                      <Badge variant="secondary">Residency</Badge>
                      <Badge variant="secondary">Citizenship</Badge>
                      <Badge variant="secondary">Business Setup</Badge>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="https://lucerolegal.org" target="_blank" rel="noopener noreferrer">
                      Get Help
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lucero Legal CTA */}
      <section className="py-16 bg-sky-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Need Legal Help?</h2>
            <p className="text-sky-100 mb-8">
              For complex visa cases, business immigration, or legal advice, 
              our partner Lucero Legal specializes in expat immigration in Argentina.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-sky-700 hover:bg-sky-50">
              <Link href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=resources-cta" target="_blank" rel="noopener noreferrer">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
