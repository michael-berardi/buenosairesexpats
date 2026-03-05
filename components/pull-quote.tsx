interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
  source?: string;
  className?: string;
}

export function PullQuote({ children, attribution, source, className = "" }: PullQuoteProps) {
  return (
    <blockquote className={`relative my-8 py-6 px-8 border-l-4 border-primary bg-muted/30 rounded-r-xl ${className}`}>
      <div className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
        {children}
      </div>
      {(attribution || source) && (
        <footer className="mt-4 text-sm text-muted-foreground">
          {attribution && <cite className="font-medium not-italic">— {attribution}</cite>}
          {source && <span className="ml-2 text-muted-foreground/70">via {source}</span>}
        </footer>
      )}
    </blockquote>
  );
}
