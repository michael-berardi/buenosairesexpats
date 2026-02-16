import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, MapPin, FileText, ArrowRight } from "lucide-react";

const popularLinks = [
  { title: "Digital Nomad Visa", href: "/visas/digital-nomad", icon: FileText },
  { title: "Cost of Living Guide", href: "/cost-of-living", icon: MapPin },
  { title: "Neighborhoods", href: "/neighborhoods", icon: MapPin },
  { title: "Contact Us", href: "/contact", icon: Search },
];

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="text-center">
            <CardContent className="pt-12 pb-12">
              {/* 404 Illustration */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-5xl font-bold text-primary">404</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Page Not Found
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Looks like this page packed its bags and moved to Argentina without telling us. 
                Let&apos;s get you back on track.
              </p>

              {/* Search suggestion */}
              <div className="bg-muted/50 rounded-lg p-4 mb-8 max-w-md mx-auto">
                <p className="text-sm text-muted-foreground mb-2">
                  Looking for something specific?
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="text-xs bg-background px-2 py-1 rounded">Visa guides</span>
                  <span className="text-xs bg-background px-2 py-1 rounded">Cost of living</span>
                  <span className="text-xs bg-background px-2 py-1 rounded">Neighborhoods</span>
                  <span className="text-xs bg-background px-2 py-1 rounded">Housing</span>
                </div>
              </div>

              {/* Primary CTA */}
              <Button asChild size="lg" className="mb-8">
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Homepage
                </Link>
              </Button>

              {/* Popular Links */}
              <div className="border-t pt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Or check out these popular pages:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
                  {popularLinks.map((link) => (
                    <Button
                      key={link.href}
                      asChild
                      variant="outline"
                      className="justify-start"
                    >
                      <Link href={link.href}>
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.title}
                        <ArrowRight className="w-3 h-3 ml-auto" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Still can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              and we&apos;ll point you in the right direction.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
