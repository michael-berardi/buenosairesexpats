"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const INTERNAL_TRAFFIC_STORAGE_KEY = "overseer_internal_traffic";
const INTERNAL_TRAFFIC_COOKIE = "overseer_internal_traffic";
const INTERNAL_TRAFFIC_QUERY_KEY = "overseer_internal";
const INTERNAL_TRAFFIC_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
const HEADLESS_USER_AGENT_PATTERN =
  /(HeadlessChrome|Playwright|Puppeteer|Selenium|PhantomJS|Cypress)/i;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

type ExtraScript = {
  id: string;
  code: string;
};

type SiteAnalyticsProps = {
  measurementId?: string;
  gaConfig?: Record<string, string | number | boolean>;
  gaInitCode?: string;
  extraScripts?: ExtraScript[];
};

function persistInternalTraffic(enabled: boolean) {
  if (typeof window === "undefined") {
    return;
  }

  if (enabled) {
    window.localStorage.setItem(INTERNAL_TRAFFIC_STORAGE_KEY, "1");
  } else {
    window.localStorage.removeItem(INTERNAL_TRAFFIC_STORAGE_KEY);
  }

  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  const maxAge = enabled ? INTERNAL_TRAFFIC_COOKIE_MAX_AGE : 0;
  const value = enabled ? "1" : "";
  document.cookie = `${INTERNAL_TRAFFIC_COOKIE}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
}

function stripInternalTrafficQueryParam() {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  if (!url.searchParams.has(INTERNAL_TRAFFIC_QUERY_KEY)) {
    return;
  }

  url.searchParams.delete(INTERNAL_TRAFFIC_QUERY_KEY);
  const nextUrl = `${url.pathname}${url.search}${url.hash}`;
  window.history.replaceState({}, "", nextUrl || "/");
}

function readInternalTrafficCookie() {
  if (typeof document === "undefined") {
    return false;
  }

  return document.cookie
    .split(";")
    .map((value) => value.trim())
    .some((value) => value === `${INTERNAL_TRAFFIC_COOKIE}=1`);
}

function detectInternalTraffic() {
  if (typeof window === "undefined") {
    return true;
  }

  const params = new URLSearchParams(window.location.search);
  const queryValue = params.get(INTERNAL_TRAFFIC_QUERY_KEY);

  if (queryValue === "1") {
    persistInternalTraffic(true);
    stripInternalTrafficQueryParam();
    return true;
  }

  if (queryValue === "0") {
    persistInternalTraffic(false);
    stripInternalTrafficQueryParam();
    return false;
  }

  if (
    window.localStorage.getItem(INTERNAL_TRAFFIC_STORAGE_KEY) === "1" ||
    readInternalTrafficCookie()
  ) {
    return true;
  }

  if (window.navigator.webdriver) {
    return true;
  }

  return HEADLESS_USER_AGENT_PATTERN.test(window.navigator.userAgent ?? "");
}

export function SiteAnalytics({
  measurementId,
  gaConfig = {},
  gaInitCode,
  extraScripts = [],
}: SiteAnalyticsProps) {
  const [{ resolved, internalTraffic }, setState] = useState({
    resolved: false,
    internalTraffic: true,
  });

  useEffect(() => {
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) {
        return;
      }

      const isInternal = detectInternalTraffic();
      setState({ resolved: true, internalTraffic: isInternal });

      if (measurementId) {
        window[`ga-disable-${measurementId}`] = isInternal;
      }
    });

    return () => {
      cancelled = true;
    };
  }, [measurementId]);

  if (!resolved || internalTraffic) {
    return null;
  }

  return (
    <>
      <Analytics beforeSend={(event) => (internalTraffic ? null : event)} />
      {measurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id={`ga4-${measurementId}`} strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function gtag(){window.dataLayer.push(arguments);};window['ga-disable-${measurementId}']=false;gtag('js',new Date());gtag('config','${measurementId}',${JSON.stringify(
              gaConfig
            )});${gaInitCode ?? ""}`}
          </Script>
        </>
      ) : null}
      {extraScripts.map((script) => (
        <Script key={script.id} id={script.id} strategy="afterInteractive">
          {script.code}
        </Script>
      ))}
    </>
  );
}
