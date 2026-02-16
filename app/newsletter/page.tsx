import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter - Buenos Aires Expats",
  description: "Get weekly updates for Americans considering a move to Buenos Aires. Visa tips, cost updates, and real expat stories.",
};

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <span className="text-foreground">Newsletter</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white dark:from-sky-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">
              <Mail className="w-3 h-3 mr-1" />
              Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Newsletter
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join Americans who are exploring life in Buenos Aires. 
              Weekly tips on visas, neighborhoods, and real talk about the move.
            </p>
            <Button asChild size="lg">
              <Link href="/">
                Back to Home
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
