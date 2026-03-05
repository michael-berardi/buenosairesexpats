import { Lightbulb } from "lucide-react";

interface InsiderTipProps {
  children: React.ReactNode;
  author?: string;
  className?: string;
}

export function InsiderTip({ children, author, className = "" }: InsiderTipProps) {
  return (
    <div className={`relative bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-6 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40">
          <Lightbulb className="w-4 h-4 text-amber-700 dark:text-amber-400" />
        </div>
        <span className="font-serif text-sm font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
          Insider Tip
        </span>
      </div>
      <div className="font-serif italic text-foreground/90 leading-relaxed">
        {children}
      </div>
      {author && (
        <p className="mt-3 text-xs text-amber-700 dark:text-amber-400 font-medium">
          — {author}
        </p>
      )}
    </div>
  );
}
