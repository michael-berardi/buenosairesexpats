import { ExternalLink } from "lucide-react";

interface SourceAttributionProps {
  source: string;
  url?: string;
  date?: string;
  className?: string;
}

export function SourceAttribution({ source, url, date, className = "" }: SourceAttributionProps) {
  return (
    <div className={`flex items-center gap-2 text-xs text-muted-foreground mt-2 ${className}`}>
      <span className="font-medium">Source:</span>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline inline-flex items-center gap-1"
        >
          {source}
          <ExternalLink className="w-3 h-3" />
        </a>
      ) : (
        <span>{source}</span>
      )}
      {date && <span className="text-muted-foreground/70">({date})</span>}
    </div>
  );
}
