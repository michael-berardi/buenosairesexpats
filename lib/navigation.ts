export type NavItem = {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export const mainNav: NavSection[] = [
  {
    label: "Visas",
    items: [
      { label: "Digital Nomad Visa", href: "/visas/digital-nomad", description: "Work remotely from Argentina" },
      { label: "Work Visa", href: "/visas/work", description: "Employment-based residency" },
      { label: "Retirement Visa", href: "/visas/retirement", description: "Pension-based residency" },
      { label: "Student Visa", href: "/visas/student", description: "Study at Argentine universities" },
      { label: "Investment Visa", href: "/visas/investment", description: "Business and investment pathways" },
      { label: "Nationality Guide", href: "/visas/nationalities", description: "Country-specific visa info" },
      { label: "Visa Quiz", href: "/visas/quiz", description: "Find your best visa option" },
    ],
  },
  {
    label: "Guides",
    items: [
      { label: "First Week in BA", href: "/guides/first-week", description: "Your survival guide" },
      { label: "Neighborhoods", href: "/neighborhoods", description: "Find your perfect barrio" },
      { label: "Barrio Quiz", href: "/neighborhoods/quiz", description: "Match with a neighborhood" },
      { label: "Cost of Living", href: "/cost-of-living", description: "Real 2026 prices" },
      { label: "Dining Guide", href: "/dining", description: "Where and what to eat" },
      { label: "Healthcare", href: "/healthcare", description: "Medical care and insurance" },
      { label: "Banking", href: "/banking", description: "Accounts and money transfers" },
      { label: "Housing", href: "/housing", description: "Renting and buying" },
      { label: "Learning Spanish", href: "/guides/learning-spanish", description: "Language resources" },
      { label: "Getting Your DNI", href: "/guides/getting-dni", description: "National ID process" },
      { label: "Safety Tips", href: "/guides/safety", description: "Stay safe in BA" },
      { label: "Weather & Climate", href: "/guides/weather-climate", description: "What to expect" },
      { label: "Cultural Etiquette", href: "/guides/cultural-etiquette", description: "Local customs" },
      { label: "Transportation", href: "/guides/transportation", description: "Getting around BA" },
      { label: "Working & Taxes", href: "/guides/working-taxes", description: "Employment and tax info" },
      { label: "Getting Started", href: "/guides/getting-started", description: "Complete beginner guide" },
    ],
  },
];

export const topNav: NavItem[] = [
  { label: "Stories", href: "/stories" },
  { label: "Expat Profiles", href: "/expat-profiles" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  visas: [
    { label: "Digital Nomad Visa", href: "/visas/digital-nomad" },
    { label: "Work Visa", href: "/visas/work" },
    { label: "Retirement Visa", href: "/visas/retirement" },
    { label: "Student Visa", href: "/visas/student" },
    { label: "Investment Visa", href: "/visas/investment" },
    { label: "Nationality Guide", href: "/visas/nationalities" },
  ],
  guides: [
    { label: "First Week in BA", href: "/guides/first-week" },
    { label: "Barrio Quiz", href: "/neighborhoods/quiz" },
    { label: "Cost of Living", href: "/cost-of-living" },
    { label: "Neighborhoods", href: "/neighborhoods" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Banking", href: "/banking" },
    { label: "Housing", href: "/housing" },
    { label: "Transportation", href: "/guides/transportation" },
    { label: "Working & Taxes", href: "/guides/working-taxes" },
    { label: "Getting Started", href: "/guides/getting-started" },
  ],
  resources: [
    { label: "Expat Stories", href: "/stories" },
    { label: "Why Argentina?", href: "/why-argentina" },
    { label: "Resources", href: "/resources" },
    { label: "Dining Guide", href: "/dining" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  sisterSites: [
    { label: "Expats Argentina", href: "https://expatsargentina.com", external: true },
    { label: "Argentina Visa Law", href: "https://argentinavisalaw.com", external: true },
  ],
} satisfies Record<string, NavItem[]>;
