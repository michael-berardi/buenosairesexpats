"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "@/lib/i18n";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useTranslation();

  const locales = ["en", "es", "pt"] as const;
  const currentIndex = locales.indexOf(locale as "en" | "es" | "pt");
  const nextIndex = (currentIndex + 1) % locales.length;
  const nextLocale = locales[nextIndex];

  const toggleLocale = () => {
    setLocale(nextLocale);
  };

  const visaItems = [
    { key: "digitalNomad", href: "/visas/digital-nomad" },
    { key: "work", href: "/visas/work" },
    { key: "retirement", href: "/visas/retirement" },
    { key: "student", href: "/visas/student" },
    { key: "investment", href: "/visas/investment" },
    { key: "nationality", href: "/visas/nationalities" },
    { key: "quiz", href: "/visas/quiz" },
  ];

  const guideItems = [
    { key: "costOfLiving", href: "/cost-of-living" },
    { key: "neighborhoods", href: "/neighborhoods" },
    { key: "dining", href: "/dining" },
    { key: "healthcare", href: "/healthcare" },
    { key: "banking", href: "/banking" },
    { key: "housing", href: "/housing" },
    { key: "learningSpanish", href: "/guides/learning-spanish" },
    { key: "gettingDNI", href: "/guides/getting-dni" },
    { key: "foodDining", href: "/guides/food-dining" },
    { key: "safety", href: "/guides/safety" },
    { key: "weather", href: "/guides/weather-climate" },
    { key: "culturalEtiquette", href: "/guides/cultural-etiquette" },
    { key: "transportation", href: "/guides/transportation" },
    { key: "workingTaxes", href: "/guides/working-taxes" },
    { key: "gettingStarted", href: "/guides/getting-started" },
  ];

  const getVisaItem = (key: string) => {
    const items = t(`visaItems.${key}`) as Record<string, string>;
    return items || { title: key, description: "" };
  };

  const getGuideItem = (key: string) => {
    const items = t(`guideItems.${key}`) as Record<string, string>;
    return items || { title: key, description: "" };
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl sm:hidden">BA Expats</span>
          <span className="hidden sm:inline font-bold text-xl">
            Buenos Aires <span className="text-sky-600">Expats</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navigation.visas") as string}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {visaItems.map((item) => {
                      const visaData = getVisaItem(item.key);
                      return (
                        <li key={item.key}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{visaData.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {visaData.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>{t("navigation.guides") as string}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {guideItems.map((item) => {
                      const guideData = getGuideItem(item.key);
                      return (
                        <li key={item.key}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{guideData.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {guideData.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/stories" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  {t("navigation.stories") as string}
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  {t("navigation.about") as string}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button & Language Switcher */}
        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="flex items-center gap-1.5"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">{nextLocale.toUpperCase()}</span>
          </Button>
          <Button asChild size="sm" className="bg-sky-700 hover:bg-sky-600 text-white font-semibold shadow-md hover:shadow-lg transition-all">
            <Link href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=navbar" target="_blank" rel="noopener noreferrer">
              {t("navigation.freeConsultation") as string}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] max-w-full overflow-y-auto">
            <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to visa guides, cost of living information, neighborhoods, and other resources for expats moving to Buenos Aires.
            </SheetDescription>
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl">
                  Buenos Aires <span className="text-sky-600">Expats</span>
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLocale}
                  className="flex items-center gap-1"
                >
                  <Globe className="w-4 h-4" />
                  {nextLocale.toUpperCase()}
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  {t("navigation.visas") as string}
                </div>
                {visaItems.map((item) => {
                  const visaData = getVisaItem(item.key);
                  return (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {visaData.title}
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  {t("navigation.guides") as string}
                </div>
                {guideItems.map((item) => {
                  const guideData = getGuideItem(item.key);
                  return (
                    <SheetClose asChild key={item.key}>
                      <Link
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {guideData.title}
                      </Link>
                    </SheetClose>
                  );
                })}

                <div className="border-t border-border my-4" />

                <SheetClose asChild>
                  <Link href="/stories" className="text-foreground hover:text-primary transition-colors">
                    {t("navigation.stories") as string}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/why-argentina" className="text-foreground hover:text-primary transition-colors">
                    {t("navigation.whyArgentina") as string}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                    {t("navigation.about") as string}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </SheetClose>
              </nav>

              <Button asChild className="mt-4 bg-sky-700 hover:bg-sky-600 text-white font-semibold">
                <Link href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=mobile_nav" target="_blank" rel="noopener noreferrer">
                  {t("navigation.freeConsultation") as string}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
