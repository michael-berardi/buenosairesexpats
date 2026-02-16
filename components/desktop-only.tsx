"use client";

import { useEffect, useState } from "react";

interface DesktopOnlyProps {
  children: React.ReactNode;
}

export function DesktopOnly({ children }: DesktopOnlyProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  if (!isDesktop) {
    return null;
  }

  return <>{children}</>;
}

interface MobileOnlyProps {
  children: React.ReactNode;
}

export function MobileOnly({ children }: MobileOnlyProps) {
  const [isMobile, setIsMobile] = useState(true); // Default to true for SSR

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) {
    return null;
  }

  return <>{children}</>;
}
