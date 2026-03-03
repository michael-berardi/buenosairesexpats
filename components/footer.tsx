"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/lib/i18n";

export function Footer() {
  const { t } = useTranslation();

  const visaLinks = [
    { key: "digitalNomad", href: "/visas/digital-nomad" },
    { key: "work", href: "/visas/work" },
    { key: "retirement", href: "/visas/retirement" },
    { key: "student", href: "/visas/student" },
    { key: "investment", href: "/visas/investment" },
    { key: "nationality", href: "/visas/nationalities" },
  ];

  const guideLinks = [
    { key: "costOfLiving", href: "/cost-of-living" },
    { key: "neighborhoods", href: "/neighborhoods" },
    { key: "healthcare", href: "/healthcare" },
    { key: "banking", href: "/banking" },
    { key: "housing", href: "/housing" },
    { key: "transportation", href: "/guides/transportation" },
    { key: "workingTaxes", href: "/guides/working-taxes" },
    { key: "gettingStarted", href: "/guides/getting-started" },
  ];

  const resourceLinks = [
    { label: t("navigation.stories") as string, href: "/stories" },
    { label: t("navigation.whyArgentina") as string, href: "/why-argentina" },
    { label: "Resources", href: "/resources" },
    { label: "Dining Guide", href: "/dining" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    {
      label: "Legal Services",
      href: "https://lucerolegal.com?utm_source=buenosairesexpats&utm_medium=footer",
      external: true,
    },
  ];

  const sisterSites = [
    {
      label: "Expats Argentina - Complete Argentina Guide",
      href: "https://expatsargentina.com",
    },
    {
      label: "Argentina Visa Law - Immigration Guide",
      href: "https://argentinavisalaw.com",
    },
  ];

  const getVisaLabel = (key: string) => {
    const item = t(`visaItems.${key}`) as Record<string, string>;
    return item?.title || key;
  };

  const getGuideLabel = (key: string) => {
    const item = t(`guideItems.${key}`) as Record<string, string>;
    return item?.title || key;
  };

  return (
    <footer className="border-t bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-bold text-xl">
                Buenos Aires <span className="text-sky-600">Expats</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.description") as string}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <a href="mailto:hello@buenosairesexpats.com" className="hover:text-foreground transition-colors">
                hello@buenosairesexpats.com
              </a>
            </p>
          </div>

          {/* Visas */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-sky-700">{t("footer.sections.visas") as string}</h3>
            <ul className="space-y-2">
              {visaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {getVisaLabel(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-sky-700">{t("footer.sections.guides") as string}</h3>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {getGuideLabel(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-sky-700">{t("footer.sections.resources") as string}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
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
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-sky-700">{t("footer.sections.company") as string}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Explore More - Sister Sites */}
        <div className="mt-10 pt-8 border-t border-stone-200">
          <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide text-sky-700">Explore More</h3>
          <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            {sisterSites.map((site) => (
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
