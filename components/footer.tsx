"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/lib/i18n";
import { footerNav } from "@/lib/navigation";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-gradient-to-b from-amber-50/50 to-background">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-bold text-xl">
                Buenos Aires <span className="text-primary">Expats</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.description") as string}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href="/contact" className="hover:text-foreground transition-colors">
                Contact Us
              </a>
            </p>
          </div>

          {/* Visas */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">Visas</h3>
            <ul className="space-y-2">
              {footerNav.visas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">Guides</h3>
            <ul className="space-y-2">
              {footerNav.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">Resources</h3>
            <ul className="space-y-2">
              {footerNav.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">Company</h3>
            <ul className="space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sister Sites */}
        <div className="mt-10 pt-8 border-t border-stone-200">
          <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide text-primary">Explore More</h3>
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            {footerNav.sisterSites.map((site) => (
              <li key={site.href}>
                <Link
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {site.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Buenos Aires Expats. {t("footer.copyright") as string}
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            {t("footer.educational") as string}
          </p>
        </div>
      </div>
    </footer>
  );
}
