import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import { getGuidesHubLinks } from "@/lib/seo/internalLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { guides } from "@/lib/data/guides";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Valuation Expert Witness Guides for Solicitors",
  description:
    "Practical guides for instructing valuation expert witnesses: choosing the right expert, business valuation methodology, property CPR Part 35, IP valuation, and multi-expert cases.",
  path: "/guides",
});

export default function GuidesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        photo={photoFor("/guides")}
        title="Valuation Expert Witness Guides"
        subtitle="Practical guides for UK solicitors and barristers on instructing valuation expert witnesses across all asset types and litigation contexts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((guide) => (
              <HubCard
                key={guide.slug}
                title={guide.shortTitle}
                description={guide.metaDescription.slice(0, 120) + "..."}
                href={`/guides/${guide.slug}`}
              />
            ))}
          </div>
          <HubRelatedLinks title="All solicitor guides" links={getGuidesHubLinks()} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
