/** Live canonical host (apex). */
const PRODUCTION_SITE_URL = "https://valuationexpertwitness.co.uk";

/** Public origin for sitemap/canonicals — never localhost or Netlify preview. */
export function getPublicSiteUrl(): string {
  const fallback = PRODUCTION_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();

export const SITE_NAME = "ValuationExpertWitness";
export const SITE_EMAIL = "cases@valuationexpertwitness.co.uk";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/valuationexpertwitness";

/** Reusable copy: UK-only geographic scope (use in page content, not banners). */
export const UK_SERVICE_SCOPE =
  "ValuationExpertWitness.co.uk is a United Kingdom instruction service for solicitors and law firms. We connect enquiries to valuation expert witnesses for proceedings in England and Wales, Scotland, and Northern Ireland, and for UK-seated arbitration. We do not accept referrals for courts, tribunals, or regulatory matters outside the UK.";

export const COLORS = {
  primary: "#1A1F36",
  accent: "#C41E3A",
  highlight: "#0D7377",
  background: "#FAFBFC",
  sectionAlt: "#F0F1F5",
  border: "#D8DCE6",
  heading: "#1A1F36",
  body: "#3D4451",
} as const;
