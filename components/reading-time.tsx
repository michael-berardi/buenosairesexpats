import { BookOpen } from "lucide-react";

interface ReadingTimeProps {
  content: string;
  className?: string;
}

export function ReadingTime({ content, className = "" }: ReadingTimeProps) {
  // Average reading speed: 200 words per minute
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className={`inline-flex items-center gap-1.5 text-sm text-muted-foreground ${className}`}>
      <BookOpen className="w-3.5 h-3.5" />
      <span>{readingTime} min read</span>
    </div>
  );
}

// Hook version for use in components
export function useReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}
