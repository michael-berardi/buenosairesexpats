import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Home, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 bg-background text-foreground">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for does not exist or may have been moved.
          Try one of the links below to find what you need.
        </p>

        <div className="flex justify-center mb-10">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="border-t pt-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Popular Sections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/why-argentina"
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors text-sm"
            >
              <Compass className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Expat Guides</span>
            </Link>
            <Link
              href="/visas"
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors text-sm"
            >
              <FileText className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Visas</span>
            </Link>
            <Link
              href="/neighborhoods"
              className="flex items-center gap-2 p-3 rounded-lg border hover:bg-muted/50 transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Neighborhoods</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
