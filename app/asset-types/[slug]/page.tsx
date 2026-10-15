import { notFound } from "next/navigation";
import DetailPageLayout from "@/components/DetailPageLayout";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { getAssetType } from "@/lib/data/asset-types";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const asset = getAssetType(slug);
  if (!asset) return {};
  return createMetadata({
    title: asset.metaTitle,
    description: asset.metaDescription,
    path: `/asset-types/${slug}`,
  });
}

export default async function AssetTypePage({ params }: Props) {
  const { slug } = await params;
  const asset = getAssetType(slug);
  if (!asset) notFound();

  const relatedLinks = [
    ...(asset.relatedCaseTypes?.map((l) => ({ ...l, type: "Related Case Type" })) ?? []),
    ...(asset.relatedServices?.map((l) => ({ ...l, type: "Related Service" })) ?? []),
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
          faqSchema(asset.faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Asset Types", path: "/asset-types" },
            { name: asset.shortTitle, path: `/asset-types/${slug}` },
          ]),
        ]}
      />
      <DetailPageLayout
        photo={photoFor(`/asset-types/${asset.slug}`)}
        title={asset.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Asset Types", href: "/asset-types" },
          { label: asset.shortTitle },
        ]}
        paragraphs={asset.paragraphs}
        faqs={asset.faqs}
        relatedLinks={relatedLinks}
      />
    </>
  );
}
