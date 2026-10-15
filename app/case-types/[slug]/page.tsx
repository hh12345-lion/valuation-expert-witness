import { notFound } from "next/navigation";
import DetailPageLayout from "@/components/DetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { getCaseType } from "@/lib/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) return {};
  return createMetadata({
    title: caseType.metaTitle,
    description: caseType.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: Props) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) notFound();

  const relatedLinks = [
    ...(caseType.relatedAssetTypes?.map((l) => ({ ...l, type: "Related Asset Type" })) ?? []),
    ...(caseType.relatedServices?.map((l) => ({ ...l, type: "Related Service" })) ?? []),
    { label: "Valuation Types Guide", href: "/valuation-types", type: "Pillar Guide" },
    { label: "How to Instruct", href: "/how-to-instruct", type: "Guide" },
  ].filter(
    (link, index, arr) =>
      arr.findIndex((item) => item.href === link.href) === index
  );

  return (
    <>
      <JsonLd
        data={[
          faqSchema(caseType.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Types", path: "/case-types" },
            { name: caseType.shortTitle, path: `/case-types/${slug}` },
          ]),
        ]}
      />
      <DetailPageLayout
        photo={photoFor(`/case-types/${caseType.slug}`)}
        title={caseType.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Types", href: "/case-types" },
          { label: caseType.shortTitle },
        ]}
        paragraphs={caseType.paragraphs}
        faqs={caseType.faqs}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
