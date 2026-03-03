"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user previously dismissed
    if (localStorage.getItem("sticky-cta-dismissed") === "true") {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem("sticky-cta-dismissed", "true");
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden animate-in slide-in-from-bottom duration-300">
      <div className="bg-stone-800 text-white px-4 py-2.5 flex items-center justify-between gap-3 shadow-lg">
        <Link
          href="https://lucerolegal.org?utm_source=buenosairesexpats&utm_medium=sticky-cta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 text-sm"
        >
          Need visa help? Talk to an attorney
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <button
          onClick={handleDismiss}
          className="p-1 hover:bg-white/20 rounded transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
