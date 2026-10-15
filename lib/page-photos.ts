import { photos, type Photo } from "./photos";

/** Which photograph leads each page, keyed by route path. */
const BY_PATH: Record<string, Photo> = {
  "/services": photos.londonFromShard,
  "/valuation-types": photos.christiesAuction,
  "/asset-types": photos.goldNecklace,
  "/case-types": photos.shardThames,
  "/guides": photos.surveyorDrawing,
  "/contact": photos.highStreet,
  "/glossary": photos.patentDrawing,
  "/how-to-instruct": photos.bankOfEngland,
  "/qualifications": photos.surveyorDrawing,
  "/what-is-a-valuation-expert-witness": photos.christiesAuction,
  "/blog": photos.farmlandAerial,
  "/thank-you": photos.shardThames,
  "/not-found": photos.hs2Works,

  "/asset-types/business-share-valuation": photos.gherkin,
  "/asset-types/property-land-valuation": photos.suburbanStreet,
  "/asset-types/intellectual-property-valuation": photos.patentDrawing,
  "/asset-types/plant-machinery-valuation": photos.machineShop,
  "/asset-types/art-antiques-chattels": photos.paintedChest,
  "/asset-types/financial-instruments-securities": photos.bankOfEngland,
  "/asset-types/goodwill-intangible-assets": photos.highStreet,
  "/asset-types/specialist-assets": photos.studFarm,

  "/case-types/shareholder-disputes-business-valuation": photos.londonFromShard,
  "/case-types/divorce-matrimonial-valuation": photos.goldNecklace,
  "/case-types/compulsory-purchase-valuation": photos.hs2Works,
  "/case-types/professional-negligence-valuation": photos.surveyorDrawing,
  "/case-types/ip-infringement-valuation": photos.patentDrawing,
  "/case-types/probate-estate-disputes": photos.farmlandAerial,
  "/case-types/lease-renewal-rent-review": photos.highStreet,
  "/case-types/insurance-valuation-disputes": photos.containerShip,
  "/case-types/tax-valuation-disputes": photos.bankOfEngland,
  "/case-types/international-arbitration-valuation": photos.shardThames,

  "/guides/choosing-right-valuation-expert": photos.christiesAuction,
  "/guides/business-valuation-litigation-guide": photos.gherkin,
  "/guides/property-valuation-cpr35-guide": photos.suburbanStreet,
  "/guides/ip-valuation-litigation-guide": photos.patentDrawing,
  "/guides/multi-expert-valuation-cases": photos.londonFromShard,
  "/guides/valuation-expert-instruction-guide": photos.bankOfEngland,
};

export const fallbackPhoto: Photo = photos.shardThames;

export function photoFor(path: string): Photo {
  return BY_PATH[path] ?? fallbackPhoto;
}

/** The photograph for a path when one is assigned, without a fallback. */
export function assignedPhoto(path: string): Photo | undefined {
  return BY_PATH[path];
}
