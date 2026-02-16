"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const visaItems = [
  { title: "Digital Nomad Visa", href: "/visas/digital-nomad", description: "Work remotely from Argentina for up to 180 days" },
  { title: "Work Visa", href: "/visas/work", description: "Employment-based residency options" },
  { title: "Retirement Visa", href: "/visas/retirement", description: "Pension-based residency for retirees" },
  { title: "Student Visa", href: "/visas/student", description: "Study at Argentine universities" },
  { title: "Investment Visa", href: "/visas/investment", description: "Business and investment pathways" },
  { title: "Visa by Nationality", href: "/visas/nationalities", description: "Check requirements for your country" },
];

const guideItems = [
  { title: "Cost of Living", href: "/cost-of-living", description: "Detailed breakdown of monthly expenses" },
  { title: "Neighborhoods", href: "/neighborhoods", description: "Best areas to live in Buenos Aires" },
  { title: "Dining Guide", href: "/dining", description: "Michelin-starred restaurants and fine dining" },
  { title: "Healthcare", href: "/healthcare", description: "Insurance options and medical care" },
  { title: "Banking", href: "/banking", description: "Setting up accounts and transferring money" },
  { title: "Housing", href: "/housing", description: "Renting and buying property" },
  { title: "Learning Spanish", href: "/guides/learning-spanish", description: "Language schools and tips for mastering Spanish" },
  { title: "Getting Your DNI", href: "/guides/getting-dni", description: "Step-by-step guide to Argentine residency ID" },
  { title: "Local Food Guide", href: "/guides/food-dining", description: "Everyday restaurants, cafes, and Argentine cuisine" },
  { title: "Safety", href: "/guides/safety", description: "Staying safe and avoiding scams" },
  { title: "Weather", href: "/guides/weather-climate", description: "Seasons and what to expect" },
  { title: "Cultural Etiquette", href: "/guides/cultural-etiquette", description: "Customs, greetings, and social norms" },
  { title: "Why Argentina?", href: "/why-argentina", description: "Honest look at why Americans are considering leaving" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            BA
          </div>
          <span className="hidden font-bold text-xl sm:inline-block">
            Buenos Aires Expats
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Visas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {visaItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    {guideItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/stories" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Stories
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="default" size="sm">
            <Link href="/contact">Contact Us</Link>
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
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                  BA
                </div>
                <span className="font-bold text-xl">Buenos Aires Expats</span>
              </div>

              <nav className="flex flex-col gap-4">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Visas
                </div>
                {visaItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  Guides
                </div>
                {guideItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}

                <div className="border-t border-border my-4" />

                <SheetClose asChild>
                  <Link href="/stories" className="text-foreground hover:text-primary transition-colors">
                    Stories
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/why-argentina" className="text-foreground hover:text-primary transition-colors">
                    Why Argentina?
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </SheetClose>
              </nav>

              <Button asChild className="mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
