import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

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
      <span className="text-stone-600">
        For professional immigration assistance, contact{" "}
        <Link
          href={trackingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 font-semibold hover:text-sky-600 underline underline-offset-2 inline-flex items-center gap-1"
        >
          Lucero Legal
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
        .
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-stone-900 mb-1">
              {headline || "Need Immigration Help?"}
            </h3>
            <p className="text-sm text-stone-600 mb-3">
              {description ||
                "Lucero Legal's team of immigration attorneys specializes in Argentine visas and residency."}
            </p>
            <Link
              href={trackingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-600 transition-colors"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // variant === "full"
  return (
    <section className="relative bg-gradient-to-br from-sky-700 to-sky-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden">
      <Image
        src="/images/lucero-legal-cta-bg.webp"
        alt="Lucero Legal office in Buenos Aires"
        fill
        className="object-cover opacity-20 mix-blend-overlay"
        sizes="(max-width: 768px) 100vw, 800px"
      />
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {headline || "Ready to Make Your Move to Buenos Aires?"}
        </h2>
        <p className="text-sky-100 text-lg mb-8 max-w-2xl mx-auto">
          {description ||
            "Lucero Legal's team of immigration attorneys has helped hundreds of expats navigate Argentine visas, residency, and citizenship. Get expert guidance for your situation."}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-sky-800 font-semibold rounded-lg hover:bg-sky-50 transition-all duration-200 shadow-lg shadow-black/20"
          >
            Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/visas"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
          >
            Explore Visa Options
          </Link>
        </div>
        <p className="text-sky-200 text-xs mt-6">
          Lucero Legal is a licensed immigration law firm based in Buenos Aires.
        </p>
      </div>
    </section>
  );
}
