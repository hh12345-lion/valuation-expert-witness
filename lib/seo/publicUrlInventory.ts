import { assetTypes } from "@/lib/data/asset-types";
import { caseTypes } from "@/lib/data/case-types";
import { guides } from "@/lib/data/guides";

import { getPublicSiteUrl } from "@/lib/site";

export const CANONICAL_HOST = getPublicSiteUrl();

export const APP_STATIC_PATHS: string[] = [
  "/",
  "/what-is-a-valuation-expert-witness",
  "/services",
  "/valuation-types",
  "/asset-types",
  "/case-types",
  "/qualifications",
  "/how-to-instruct",
  "/guides",
  "/glossary",
  "/contact",
  "/privacy",
  "/terms",
  "/cookies",
];

function dynamicPaths(): string[] {
  return [
    ...assetTypes.map((a) => `/asset-types/${a.slug}`),
    ...caseTypes.map((c) => `/case-types/${c.slug}`),
    ...guides.map((g) => `/guides/${g.slug}`),
  ];
}

export type PublicUrlInventory = {
  allPaths: string[];
  allUrls: string[];
};

export function buildPublicUrlInventory(): PublicUrlInventory {
  const combined = [...APP_STATIC_PATHS, ...dynamicPaths()];
  const allPaths = [...new Set(combined)].sort((a, b) => a.localeCompare(b));
  const allUrls = allPaths.map((path) =>
    path === "/" ? CANONICAL_HOST : `${CANONICAL_HOST}${path}`
  );

  return { allPaths, allUrls };
}

export function getChangeFreq(path: string): string {
  if (path === "/") return "weekly";
  if (path === "/privacy" || path === "/terms" || path === "/cookies") return "yearly";
  if (path.startsWith("/guides")) return "monthly";
  return "monthly";
}

export function getPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/valuation-types") return 0.95;
  if (path === "/asset-types") return 0.93;
  if (path === "/case-types" || path === "/services") return 0.92;
  if (path === "/what-is-a-valuation-expert-witness") return 0.9;
  if (path.startsWith("/asset-types/")) return 0.9;
  if (path.startsWith("/case-types/")) return 0.88;
  if (
    path === "/qualifications" ||
    path === "/how-to-instruct"
  ) {
    return 0.88;
  }
  if (path.startsWith("/guides/")) return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/contact") return 0.7;
  if (path === "/privacy" || path === "/terms" || path === "/cookies") return 0.3;
  return 0.7;
}
