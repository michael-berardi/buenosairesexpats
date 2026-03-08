"use client";

import { useTranslation } from "@/lib/i18n";
import { useCallback, useRef, useState } from "react";

const TURNSTILE_SITE_KEY = "0x4AAAAAACoCmeMPEb_yXo7j";
const API_URL = "https://www.lucerolegal.org/api/contact";
const SOURCE_SITE = "buenosairesexpats";

function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, { event_category: "contact", source_site: SOURCE_SITE, ...params });
  }
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const SERVICE_OPTIONS = [
  { value: "Digital Nomad Visa", key: "digitalNomad" },
  { value: "Work Visa", key: "work" },
  { value: "Student Visa", key: "student" },
  { value: "Retirement Visa", key: "retirement" },
  { value: "Residency / Citizenship", key: "residency" },
  { value: "Investment Visa", key: "investment" },
  { value: "General Inquiry", key: "general" },
];

export default function ContactForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);

  const inputBase =
    "w-full rounded-lg border border-stone-400 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  const getTurnstileToken = useCallback((): string | null => {
    const input = turnstileRef.current?.querySelector<HTMLInputElement>(
      'input[name="cf-turnstile-response"]'
    );
    return input?.value || null;
  }, []);

  const resetTurnstile = useCallback(() => {
    const w = window as unknown as Record<string, unknown>;
    if (typeof w.turnstile === "object" && w.turnstile !== null) {
      const ts = w.turnstile as { reset?: (el: HTMLElement) => void };
      if (turnstileRef.current && ts.reset) {
        ts.reset(turnstileRef.current);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // Validate required fields
    if (formRef.current && !formRef.current.checkValidity()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const turnstileToken = getTurnstileToken();
    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage(t("consultation.errorCaptcha") as string);
      trackEvent("contact_form_error", { error_type: "captcha_missing" });
      return;
    }

    const fd = new FormData(e.currentTarget);
    const selectedService = (fd.get("service") as string) || "";
    trackEvent("contact_form_submit", { service: selectedService });

    const payload = {
      name: fd.get("name") as string,
      email: fd.get("email") as string,
      phone: fd.get("phone") as string,
      country: fd.get("country") as string,
      service: fd.get("service") as string,
      message: fd.get("message") as string,
      sourceSite: SOURCE_SITE,
      source: "en",
      lang: "en",
      turnstileToken,
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
        resetTurnstile();
        trackEvent("contact_form_success", { service: selectedService });
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.error || (t("consultation.errorGeneric") as string));
        trackEvent("contact_form_error", { error_type: "api_error" });
      }
    } catch {
      setStatus("error");
      setErrorMessage(t("consultation.errorConnection") as string);
      trackEvent("contact_form_error", { error_type: "network_error" });
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-foreground">
          {t("consultation.successTitle") as string}
        </h3>
        <p className="mb-6 text-sm text-muted-foreground">
          {t("consultation.successDescription") as string}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-semibold text-primary hover:underline"
        >
          {t("consultation.submitAnother") as string}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`space-y-5${submitted ? " was-validated" : ""}`}
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-foreground">
          {t("consultation.nameLabel") as string} <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder={t("consultation.namePlaceholder") as string}
          aria-required="true"
          className={inputBase}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-foreground">
          {t("consultation.emailLabel") as string} <span className="text-red-500">*</span>
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder={t("consultation.emailPlaceholder") as string}
          aria-required="true"
          className={inputBase}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" className="mb-1 block text-sm font-medium text-foreground">
          {t("consultation.phoneLabel") as string}
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder={t("consultation.phonePlaceholder") as string}
          className={inputBase}
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="cf-country" className="mb-1 block text-sm font-medium text-foreground">
          {t("consultation.countryLabel") as string}
        </label>
        <input
          id="cf-country"
          name="country"
          type="text"
          autoComplete="country-name"
          placeholder={t("consultation.countryPlaceholder") as string}
          className={inputBase}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="cf-service" className="mb-1 block text-sm font-medium text-foreground">
          {t("consultation.serviceLabel") as string}
        </label>
        <select
          id="cf-service"
          name="service"
          className={inputBase}
          defaultValue=""
        >
          <option value="" disabled>
            {t("consultation.servicePlaceholder") as string}
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {t(`consultation.service_${opt.key}`) as string}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className="mb-1 block text-sm font-medium text-foreground">
          {t("consultation.messageLabel") as string} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          autoComplete="off"
          placeholder={t("consultation.messagePlaceholder") as string}
          aria-required="true"
          className={`${inputBase} resize-y`}
        />
      </div>

      {/* Turnstile */}
      <div
        ref={turnstileRef}
        className="cf-turnstile"
        data-sitekey={TURNSTILE_SITE_KEY}
        data-theme="light"
      />

      {/* Error */}
      {status === "error" && errorMessage && (
        <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      {/* Confidential note */}
      <p className="text-xs text-muted-foreground">
        {t("consultation.confidential") as string}
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? (t("consultation.submitting") as string)
          : (t("consultation.submit") as string)}
      </button>
    </form>
  );
}
