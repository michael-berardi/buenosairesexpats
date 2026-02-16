import { Clock } from "lucide-react";

interface LastUpdatedProps {
  date: string;
  className?: string;
}

export function LastUpdated({ date, className = "" }: LastUpdatedProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={`inline-flex items-center gap-1.5 text-sm text-muted-foreground ${className}`}>
      <Clock className="w-3.5 h-3.5" />
      <span>Last updated: {formattedDate}</span>
    </div>
  );
}
