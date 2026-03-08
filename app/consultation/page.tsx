import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Free Case Evaluation",
  description:
    "Request a free case evaluation from a qualified Argentina immigration attorney. Get personalized guidance on visas, residency, and citizenship.",
  alternates: {
    canonical: "https://buenosairesexpats.com/consultation",
  },
};

export default function ConsultationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Free Case Evaluation" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Free Case Evaluation</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Free case evaluation
          </p>
          <h1 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
            Get personalized immigration guidance
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Describe your situation and a qualified Argentina immigration
            attorney will respond within 24 hours with an initial assessment of
            your case.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr_280px]">
            {/* Form card */}
            <div className="rounded-xl border border-border bg-muted/20 p-6 sm:p-8">
              <ContactForm />
            </div>

            {/* Trust sidebar */}
            <aside className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">Confidential</p>
                  <p className="text-sm text-muted-foreground">
                    Your information remains strictly confidential.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">24-hour response</p>
                  <p className="text-sm text-muted-foreground">
                    A qualified attorney will review your case within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-foreground">Qualified attorneys</p>
                  <p className="text-sm text-muted-foreground">
                    Argentina-based immigration professionals.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
