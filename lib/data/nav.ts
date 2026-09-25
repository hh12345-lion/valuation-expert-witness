export type NavLink = { label: string; href: string };

import { assetTypes } from "./asset-types";
import { caseTypes } from "./case-types";
import { guides } from "./guides";
import { services } from "./services";

export const serviceNavLinks = services.map((s) => ({
  label: s.shortTitle,
  href: `/services#${s.id}`,
}));

export const assetTypeNavLinks = assetTypes.map((a) => ({
  label: a.shortTitle,
  href: `/asset-types/${a.slug}`,
}));

export const caseTypeNavLinks = caseTypes.map((c) => ({
  label: c.shortTitle,
  href: `/case-types/${c.slug}`,
}));

export const guideNavLinks = guides.map((g) => ({
  label: g.shortTitle,
  href: `/guides/${g.slug}`,
}));

export const resourcesNavLinks = [
  { label: "Valuation Types Guide", href: "/valuation-types" },
  { label: "What Is a Valuation Expert Witness?", href: "/what-is-a-valuation-expert-witness" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Glossary", href: "/glossary" },
];
