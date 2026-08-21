export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.valuationexpertwitness.co.uk";

export const SITE_NAME = "ValuationExpertWitness";
export const SITE_EMAIL = "cases@valuationexpertwitness.co.uk";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/valuationexpertwitness";

/** Reusable copy: UK-only geographic scope (use in page content, not banners). */
export const UK_SERVICE_SCOPE =
  "ValuationExpertWitness.co.uk is a United Kingdom instruction service for solicitors and law firms. We connect enquiries to valuation expert witnesses for proceedings in England and Wales, Scotland, and Northern Ireland, and for UK-seated arbitration. We do not accept referrals for courts, tribunals, or regulatory matters outside the UK.";

export const COLORS = {
  primary: "#1C1917",
  accent: "#0E7490",
  highlight: "#B45309",
  background: "#F8FAFC",
  sectionAlt: "#F1F5F9",
  border: "#CBD5E1",
  heading: "#1C1917",
  body: "#44403C",
} as const;
