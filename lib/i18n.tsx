"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '@/messages/en.json';
import es from '@/messages/es.json';
import pt from '@/messages/pt.json';

type Locale = 'en' | 'es' | 'pt';
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, es, pt };

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string | Record<string, string>;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: Record<string, unknown>, path: string): string | Record<string, string> | undefined {
  const keys = path.split('.');
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  
  if (typeof current === 'string') {
    return current;
  }
  if (typeof current === 'object' && current !== null) {
    return current as Record<string, string>;
  }
  return undefined;
}

function createT(locale: Locale) {
  return (key: string): string | Record<string, string> => {
    const value = getNestedValue(translations[locale] as Record<string, unknown>, key);
    if (value === undefined) {
      const fallbackValue = getNestedValue(translations.en as Record<string, unknown>, key);
      if (fallbackValue === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      return fallbackValue;
    }
    return value;
  };
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'es' || savedLocale === 'pt')) {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'es') {
        setLocaleState('es');
      } else if (browserLang === 'pt') {
        setLocaleState('pt');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = createT(locale);

  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: 'en', setLocale: () => {}, t: createT('en') }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    return {
      locale: 'en' as Locale,
      setLocale: () => {},
      t: createT('en'),
    };
  }
  return context;
}

export function useTranslation() {
  return useI18n();
}
