import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  visas: [
    { label: "Digital Nomad Visa", href: "/visas/digital-nomad" },
    { label: "Work Visa", href: "/visas/work" },
    { label: "Retirement Visa", href: "/visas/retirement" },
    { label: "Student Visa", href: "/visas/student" },
    { label: "Visa by Nationality", href: "/visas/nationalities" },
  ],
  guides: [
    { label: "Cost of Living", href: "/cost-of-living" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Banking", href: "/banking" },
    { label: "Housing", href: "/housing" },
    { label: "Transportation", href: "/guides/transportation" },
    { label: "Working & Taxes", href: "/guides/working-taxes" },
    { label: "Getting Started", href: "/guides/getting-started" },
  ],
  resources: [
    { label: "Expat Stories", href: "/stories" },
    { label: "Why Argentina?", href: "/why-argentina" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  legal: [
    { label: "Free Consultation", href: "https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=footer", external: true },
    { label: "Visa Assistance", href: "https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=footer", external: true },
    { label: "Residency Help", href: "https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=footer", external: true },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                BA
              </div>
              <span className="font-bold text-xl">Buenos Aires Expats</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Honest resources for expats considering a move to Buenos Aires.
              Real talk about visas, costs, and life in Argentina.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href="mailto:hello@buenosairesexpats.com" className="hover:text-foreground transition-colors">
                hello@buenosairesexpats.com
              </a>
            </p>
          </div>

          {/* Visas */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Visas</h3>
            <ul className="space-y-2">
              {footerLinks.visas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Legal Services</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-xs text-muted-foreground/60">via Lucero Legal</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Buenos Aires Expats. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Information provided is for educational purposes only. 
            For visa assistance, we recommend{" "}
            <Link href="https://lucerolegal.org" className="underline hover:text-foreground">
              Lucero Legal
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
