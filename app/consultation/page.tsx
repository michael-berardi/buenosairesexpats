import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import { StructuredData } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request Legal Review",
  description:
    "Request a legal review from an Argentina immigration attorney for visas, residency, citizenship, and status problems.",
  alternates: {
    canonical: "https://buenosairesexpats.com/consultation",
  },
  openGraph: {
    title: "Request Legal Review | Buenos Aires Expats",
    description: "Request a legal review from an Argentina immigration attorney for visas, residency, citizenship, and status problems.",
    url: "https://buenosairesexpats.com/consultation",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Buenos Aires Expats' }],
  },
};

export default function ConsultationPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://buenosairesexpats.com" },
    { name: "Request Legal Review" },
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
            <span className="text-foreground">Request Legal Review</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Legal review
          </p>
          <h1 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
            Request legal review for your Argentina move
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Describe the issue and an Argentina immigration attorney will reply
            within one business day with the clearest next step, the documents
            that matter, and whether the problem needs legal work now. The
            first review is free; if the matter needs ongoing help, Lucero
            Legal explains costs before any paid work begins.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              This works best when the issue is specific: a residency deadline, a visa choice,
              RADEX trouble, overstays, citizenship timing, or a move that now has real dates
              attached. An Argentina-based immigration attorney reviews what you
              send and gives you a grounded read on the realistic path forward.
            </p>
          </div>
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
                  <p className="font-semibold text-foreground">Argentina-licensed attorneys</p>
                  <p className="text-sm text-muted-foreground">
                    Argentina-based immigration professionals.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              What to Expect
            </h2>
            <p className="text-muted-foreground mb-6">
              After you send the form, this is how the review usually works:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mt-0.5">1</span>
                <div>
                  <p className="font-semibold text-foreground">Initial review within one business day</p>
                  <p className="text-sm text-muted-foreground">
                    An attorney reviews your submission and identifies which visa categories or residency pathways apply to your situation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mt-0.5">2</span>
                <div>
                  <p className="font-semibold text-foreground">Personalized assessment</p>
                  <p className="text-sm text-muted-foreground">
                    You receive a written summary outlining your best options, estimated timelines, and required documentation based on your nationality and circumstances.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mt-0.5">3</span>
                <div>
                  <p className="font-semibold text-foreground">Clear answer first, representation only if needed</p>
                  <p className="text-sm text-muted-foreground">
                    You receive a practical answer about whether the matter needs legal representation now or whether you can keep moving on your own.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold mt-0.5">4</span>
                <div>
                  <p className="font-semibold text-foreground">Optional follow-up consultation</p>
                  <p className="text-sm text-muted-foreground">
                    If you decide to move forward, you can schedule a detailed consultation to discuss your case in depth and begin the application process.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Do I need a lawyer to get a visa for Argentina?
                </h3>
                <p className="text-muted-foreground">
                  It depends on your situation. Some visa categories, like the{" "}
                  <Link href="/visas/digital-nomad" className="text-primary hover:underline">digital nomad visa</Link>,
                  have relatively straightforward applications. Others, such as{" "}
                  <Link href="/visas/work" className="text-primary hover:underline">work visas</Link>{" "}
                  or residency through investment, involve complex documentation requirements
                  where professional legal guidance can prevent costly delays and rejections.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  How long does the immigration process typically take?
                </h3>
                <p className="text-muted-foreground">
                  Timelines vary significantly depending on the visa type and your nationality.
                  A temporary residency application through{" "}
                  <Link href="/visas/nationalities" className="text-primary hover:underline">Mercosur nationality pathways</Link>{" "}
                  can be processed in a few weeks, while other categories may take several months.
                  An attorney can give you a realistic timeline based on your specific case.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Is there a charge for the initial review?
                </h3>
                <p className="text-muted-foreground">
                  The first review is offered without charge. If your situation
                  needs ongoing representation, that is discussed separately
                  before any paid work begins. You still get a clear view of
                  the realistic options and next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="py-10 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold mb-4">
              Helpful Resources
            </h2>
            <p className="text-muted-foreground mb-4">
              Before or after your consultation, these guides can help you prepare:
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/visas" className="text-primary hover:underline font-medium">
                  Argentina Visa Guide
                </Link>{" "}
                <span className="text-muted-foreground">&mdash; Overview of all visa categories and eligibility requirements</span>
              </li>
              <li>
                <Link href="/guides/getting-dni" className="text-primary hover:underline font-medium">
                  Getting Your DNI
                </Link>{" "}
                <span className="text-muted-foreground">&mdash; Step-by-step guide to obtaining your national ID after arrival</span>
              </li>
              <li>
                <Link href="/cost-of-living" className="text-primary hover:underline font-medium">
                  Cost of Living in Buenos Aires
                </Link>{" "}
                <span className="text-muted-foreground">&mdash; Real 2026 prices to help you plan your budget</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
