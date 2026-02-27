"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const toggleLocale = () => {
    setLocale(locale === "en" ? "es" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="flex items-center gap-1.5"
    >
      <Globe className="w-4 h-4" />
      <span className="font-medium">{locale === "en" ? "ES" : "EN"}</span>
    </Button>
  );
}
