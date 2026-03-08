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
import { mainNav, topNav } from "@/lib/navigation";

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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/70 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl sm:hidden">BA Expats</span>
          <span className="hidden sm:inline font-bold text-xl">
            Buenos Aires <span className="text-primary">Expats</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNav.map((section) => (
                <NavigationMenuItem key={section.label}>
                  <NavigationMenuTrigger>{section.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                              {item.description && (
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              )}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              {topNav.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Language Switcher */}
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
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-sheet"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] max-w-full overflow-y-auto" id="mobile-nav-sheet">
            <SheetTitle className="sr-only">Main Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate to visa guides, neighborhoods, and other resources for expats in Buenos Aires.
            </SheetDescription>
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl">
                  Buenos Aires <span className="text-primary">Expats</span>
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
                {mainNav.map((section) => (
                  <div key={section.label}>
                    <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      {section.label}
                    </div>
                    {section.items.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-1.5 text-foreground hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                ))}

                <div className="border-t border-border my-2" />

                {topNav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link href={item.href} className="text-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
