import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/structured-data";
import { 
  MapPin, 
  DollarSign, 
  FileText, 
  Home as HomeIcon, 
  Heart, 
  Users, 
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  TrendingUp,
  Mail
} from "lucide-react";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";

const features = [
  {
    icon: FileText,
    title: "Visa Guides",
    description: "Step-by-step instructions for Digital Nomad, work, retirement, and student visas.",
    href: "/visas/digital-nomad",
  },
  {
    icon: DollarSign,
    title: "Cost of Living",
    description: "Real budget breakdowns and cost calculators for Buenos Aires and beyond.",
    href: "/cost-of-living",
  },
  {
    icon: MapPin,
    title: "Neighborhood Guides",
    description: "Detailed reviews of Palermo, Recoleta, Belgrano, and other top expat areas.",
    href: "/neighborhoods",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Navigate prepaga insurance, find English-speaking doctors, and understand the system.",
    href: "/healthcare",
  },
  {
    icon: HomeIcon,
    title: "Housing",
    description: "Renting tips, apartment hunting guides, and real estate advice for foreigners.",
    href: "/housing",
  },
  {
    icon: Users,
    title: "Expat Stories",
    description: "Real experiences from Americans who've made the move. Learn from their successes and mistakes.",
    href: "/stories",
  },
];

const stats = [
  { value: "50+", label: "In-depth Guides" },
  { value: "500+", label: "Community Members" },
  { value: "100+", label: "Verified Resources" },
  { value: "2025", label: "Latest Data" },
];

const testimonials = [
  {
    quote: "I was paying $3,200 for a studio in SF. Here I have a two-bedroom with a balcony for $900. The math just made sense.",
    author: "Sarah M.",
    role: "Software Engineer, Former SF",
  },
  {
    quote: "The political climate in Texas was affecting my mental health. Here I feel like I can just live without everything being a culture war battle.",
    author: "Marcus T.",
    role: "Former Austin, TX",
  },
  {
    quote: "My teacher's pension goes three times as far here. I live better on $2,200/month than I did on $6,000 in Arizona.",
    author: "Robert C.",
    role: "Retired Teacher, Former Phoenix",
  },
];

export default function Home() {
  // Generate structured data
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data */}
      <StructuredData data={websiteSchema} />
      <StructuredData data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        <Image
          src="/images/hero-cityscape.jpg"
          alt="Buenos Aires cityscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 bg-white/95 text-foreground backdrop-blur-sm">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated February 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
              Your Honest Guide to{" "}
              <span className="text-sky-300">Life in Buenos Aires</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Real talk about moving to Argentina. Visa guides, cost breakdowns, 
              neighborhood reviews, and a community of Americans who made the leap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 btn-press">
                <Link href="/visas/digital-nomad">
                  Explore Visa Options
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white">
                <Link href="/cost-of-living">
                  Calculate Costs
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Updated 2025 Data</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Honest, No-BS Info</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>By Americans, For Americans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Make the Move
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive guides written by Americans who&apos;ve actually done this. 
              No fluff, no sugar-coating, just practical information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className="group card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    href={feature.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Most Popular Guides</h2>
              <p className="text-muted-foreground">Start with these essential resources</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/why-argentina">Why Buenos Aires?</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="flex flex-col card-hover">
              <CardHeader>
                <Badge className="w-fit mb-2">Most Popular</Badge>
                <CardTitle>Argentina Digital Nomad Visa</CardTitle>
                <CardDescription>
                  Complete guide to the 180-day remote work visa, including requirements, 
                  application process, and tips for approval.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/visas/digital-nomad">Read Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col card-hover">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Updated Monthly</Badge>
                <CardTitle>Cost of Living in Buenos Aires</CardTitle>
                <CardDescription>
                  Real 2025 budget breakdowns for singles, couples, and families. 
                  Includes rent, food, healthcare, and entertainment.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/cost-of-living">See Costs</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col card-hover">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">Stories</Badge>
                <CardTitle>Real Expat Experiences</CardTitle>
                <CardDescription>
                  Read honest accounts from Americans who moved to Buenos Aires. 
                  Learn what worked and what didn&apos;t.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/stories">Read Stories</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-amber-50 dark:from-sky-950/20 dark:to-amber-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Get the Latest Updates</h2>
            <p className="text-muted-foreground mb-6">
              Join 2,400+ expats getting weekly updates on visa changes, cost of living, 
              and insider tips for living in Buenos Aires.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button className="btn-press">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Expats Are Saying</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Real stories from Americans who made the move
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-primary/5 border-primary/10 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <p className="text-foreground mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero-cityscape.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
            aria-hidden="true"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Explore Your Options?
            </h2>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Whether you&apos;re just curious or already packing, we&apos;ve got the resources 
              and community to help you figure it out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="btn-press">
                <Link href="/cost-of-living">
                  See Cost Breakdown
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
                <Link href="/neighborhoods">
                  Explore Neighborhoods
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex items-start gap-3 max-w-3xl mx-auto text-sm text-muted-foreground">
            <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Important:</strong> The information on this site is for educational purposes only 
              and does not constitute legal advice. Immigration laws change frequently. 
              For personalized visa assistance, we recommend{" "}
              <Link href="https://argentinavisalaw.com" className="underline hover:text-foreground">
                argentinavisalaw.com
              </Link>. 
              Katarina and her team have helped many of our readers navigate the process successfully.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
