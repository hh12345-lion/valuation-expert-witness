import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import { getCaseTypesHubLinks } from "@/lib/seo/internalLinks";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { caseTypes } from "@/lib/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Case Types Requiring Valuation Expert Witnesses UK",
  description:
    "Valuation expert witnesses for shareholder disputes, divorce, compulsory purchase, professional negligence, IP infringement, probate, lease renewal, insurance, tax, and international arbitration.",
  path: "/case-types",
});

export default function CaseTypesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Types", path: "/case-types" },
        ])}
      />
      <PageHero
        photo={photoFor("/case-types")}
        title="Case Types Requiring Valuation Expert Witnesses UK"
        subtitle="From shareholder disputes and matrimonial financial remedy to compulsory purchase, IP infringement, and international arbitration. Each case type page explains which valuation experts are needed and the applicable legal standards."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <p className="max-w-3xl text-body leading-relaxed mb-10">
            Most legal disputes involving money ultimately require valuation expert evidence. Select the case type relevant to your matter for guidance on the applicable valuation standards, expert disciplines required, and key case law.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {caseTypes.map((caseType) => (
              <HubCard
                key={caseType.slug}
                title={caseType.shortTitle}
                description={caseType.paragraphs[0].slice(0, 140) + "..."}
                href={`/case-types/${caseType.slug}`}
              />
            ))}
          </div>
          <HubRelatedLinks
            title="All case type pages"
            links={getCaseTypesHubLinks()}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
