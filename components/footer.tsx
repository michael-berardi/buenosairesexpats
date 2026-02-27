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
    { label: "Newsletter", href: "/newsletter" },
  ];

  const companyLinks = [
    { label: t("footer.sections.company") as string, href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ];

  const getVisaLabel = (key: string) => {
    const item = t(`visaItems.${key}`) as Record<string, string>;
    return item?.title || key;
  };

  const getGuideLabel = (key: string) => {
    const item = t(`guideItems.${key}`) as Record<string, string>;
    return item?.title || key;
  };

  const legalResult = t("footer.legalServices");
  const legalServices: { label: string }[] = Array.isArray(legalResult) 
    ? legalResult as { label: string }[]
    : [
        { label: "Free Consultation" },
        { label: "Visa Assistance" },
        { label: "Residency Help" },
      ];

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
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">{t("footer.sections.visas") as string}</h3>
            <ul className="space-y-2">
              {visaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {getVisaLabel(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">{t("footer.sections.guides") as string}</h3>
            <ul className="space-y-2">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {getGuideLabel(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">{t("footer.sections.resources") as string}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
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
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">{t("footer.sections.legal") as string}</h3>
            <ul className="space-y-2">
              {legalServices.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=footer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-xs text-muted-foreground/60">{t("footer.viaLucero") as string}</span>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">{t("footer.sections.company") as string}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
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
            © {new Date().getFullYear()} Buenos Aires Expats. {t("footer.copyright") as string}
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            {t("footer.educational") as string}{" "}
            <Link href="https://lucerolegal.org" className="underline hover:text-foreground">
              {t("footer.luceroLegal") as string}
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
