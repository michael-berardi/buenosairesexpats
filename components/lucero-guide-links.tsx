import { ExternalLink } from "lucide-react";

const BASE = "https://lucerolegal.org";
const UTM = "utm_source=buenosairesexpats&utm_medium=referral&utm_content=guide-link";

interface GuideLink {
  href: string;
  label: string;
  /** Page route prefixes where this link is relevant */
  pages: string[];
}

const guideLinks: GuideLink[] = [
  {
    href: `${BASE}/guias/proceso-inmigratorio?${UTM}`,
    label: "Complete Immigration Process Guide",
    pages: ["visas", "guides/getting-started", "guides/getting-dni"],
  },
  {
    href: `${BASE}/herramientas/visa-finder?${UTM}`,
    label: "Visa Finder Tool",
    pages: ["visas", "guides/getting-started"],
  },
  {
    href: `${BASE}/guias/costo-de-vida?${UTM}`,
    label: "Cost of Living in Argentina",
    pages: ["cost-of-living", "guides/getting-started", "guides/working-taxes", "why-argentina"],
  },
  {
    href: `${BASE}/guias/alquilar-departamento?${UTM}`,
    label: "Apartment Rental Guide",
    pages: ["housing", "neighborhoods", "guides/first-week"],
  },
  {
    href: `${BASE}/guias/sistema-de-salud?${UTM}`,
    label: "Healthcare System Guide",
    pages: ["healthcare"],
  },
  {
    href: `${BASE}/guias/abrir-cuenta-bancaria?${UTM}`,
    label: "Banking & Finance Guide",
    pages: ["banking", "guides/working-taxes"],
  },
  {
    href: `${BASE}/guias/primeros-30-dias?${UTM}`,
    label: "First 30 Days in Argentina",
    pages: ["guides/first-week", "guides/getting-started"],
  },
  {
    href: `${BASE}/guias/vivir-en-buenos-aires?${UTM}`,
    label: "Living in Buenos Aires",
    pages: ["neighborhoods", "guides/transportation", "guides/safety", "guides/cultural-etiquette"],
  },
  {
    href: `${BASE}/guias/visa-nomada-digital?${UTM}`,
    label: "Digital Nomad Visa Guide",
    pages: ["visas", "guides/working-taxes"],
  },
  {
    href: `${BASE}/guias/checklist-mudanza?${UTM}`,
    label: "Moving Checklist",
    pages: ["guides/getting-started", "guides/first-week", "why-argentina"],
  },
];

export function LuceroGuideLinks({
  page,
  maxLinks = 3,
}: {
  /** Current page route (e.g. "visas", "guides/getting-dni") */
  page: string;
  maxLinks?: number;
}) {
  const relevant = guideLinks
    .filter((g) => g.pages.some((p) => page.startsWith(p)))
    .slice(0, maxLinks);

  if (relevant.length === 0) return null;

  return (
    <div className="border border-border rounded-lg p-5 space-y-3">
      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        In-depth legal guides
      </p>
      <ul className="space-y-2">
        {relevant.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60 group-hover:text-primary" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
