import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface LuceroLegalCTAProps {
  variant: "full" | "compact" | "inline";
  headline?: string;
  description?: string;
  utm_source?: string;
  utm_content?: string;
}

export function LuceroLegalCTA({
  variant,
  headline,
  description,
  utm_source = "buenosairesexpats",
  utm_content,
}: LuceroLegalCTAProps) {
  const baseUrl = "https://lucerolegal.org";
  const trackingUrl = `${baseUrl}?utm_source=${utm_source}&utm_medium=referral${utm_content ? `&utm_content=${utm_content}` : ""}`;

  if (variant === "inline") {
    return (
      <span className="text-muted-foreground">
        For professional immigration assistance, consider{" "}
        <Link
          href={trackingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2 inline-flex items-center gap-1"
        >
          speaking with an immigration attorney
          <ExternalLink className="w-3 h-3" />
        </Link>
        .
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className="border border-border rounded-lg p-5">
        <p className="text-sm text-muted-foreground">
          {description || "Need help with visas or residency? An experienced immigration attorney can guide you through the process."}{" "}
          <Link
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline underline-offset-2 inline-flex items-center gap-1"
          >
            Learn more
            <ExternalLink className="w-3 h-3" />
          </Link>
        </p>
      </div>
    );
  }

  // variant === "full" — now a simple recommendation box instead of a hero banner
  return (
    <div className="border border-border rounded-lg p-6 md:p-8">
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {headline || "Need a legal read on your case?"}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        {description ||
          "If your question involves visas, residency, or citizenship timing, an Argentina-based immigration attorney can review the facts and tell you what matters next."}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={trackingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 underline underline-offset-2"
        >
          Request legal review
          <ExternalLink className="w-3 h-3" />
        </Link>
        <Link
          href="/visas"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground underline underline-offset-2"
        >
          Explore visa options
        </Link>
      </div>
    </div>
  );
}
