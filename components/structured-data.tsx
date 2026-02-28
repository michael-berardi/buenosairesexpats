"use client";

import Script from "next/script";
import { useId } from "react";

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  const id = useId();
  return (
    <Script
      id={`structured-data-${id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
