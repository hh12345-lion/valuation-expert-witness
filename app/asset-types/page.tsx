import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import { getAssetTypesHubLinks } from "@/lib/seo/internalLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { assetTypes } from "@/lib/data/asset-types";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Valuation Expert Witnesses by Asset Type | UK All Assets",
  description:
    "Valuation expert witnesses for every asset type: businesses, property, intellectual property, plant and machinery, art and chattels, financial instruments, and specialist assets.",
  path: "/asset-types",
});

export default function AssetTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Asset Types", path: "/asset-types" },
        ])}
      />
      <PageHero
        photo={photoFor("/asset-types")}
        title="Valuation Expert Witnesses by Asset Type"
        subtitle="Every asset type in UK litigation has its own dedicated page covering the correct expert discipline, valuation methodology, key legal contexts, and FAQs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Asset Types" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <p className="max-w-3xl text-body leading-relaxed mb-10">
            Different asset types require different expert disciplines and valuation methodologies. Select the asset type relevant to your case to find guidance on credentials, methodology, and the legal contexts where valuation expert evidence is most commonly needed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {assetTypes.map((asset) => (
              <HubCard
                key={asset.slug}
                title={asset.shortTitle}
                description={asset.paragraphs[0].slice(0, 140) + "..."}
                href={`/asset-types/${asset.slug}`}
              />
            ))}
          </div>
          <HubRelatedLinks
            title="All asset type pages"
            links={getAssetTypesHubLinks()}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
