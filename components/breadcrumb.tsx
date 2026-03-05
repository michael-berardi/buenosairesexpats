import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

export function Breadcrumb({ items, baseUrl = "https://buenosairesexpats.com" }: BreadcrumbProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems
      .filter((item) => item.href)
      .map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {allItems.map((item, index) => (
              <span key={item.label} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5" />}
                {item.href && index < allItems.length - 1 ? (
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={index === allItems.length - 1 ? "text-foreground font-medium" : ""}>
                    {item.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
