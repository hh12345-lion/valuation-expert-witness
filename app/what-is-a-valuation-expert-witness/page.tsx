import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "What Is a Valuation Expert Witness? | UK Role & All Asset Types",
  description:
    "A valuation expert witness provides independent opinions on the value of assets for UK courts and tribunals. Business, property, IP, plant, art, and specialist assets explained.",
  path: "/what-is-a-valuation-expert-witness",
});

export default function WhatIsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "What Is a Valuation Expert Witness?", path: "/what-is-a-valuation-expert-witness" },
        ])}
      />
      <PageHero
        photo={photoFor("/what-is-a-valuation-expert-witness")}
        title="What Is a Valuation Expert Witness?"
        subtitle="An independent professional who provides expert opinion evidence on the value of assets for UK courts, tribunals, and arbitration proceedings."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Valuation Expert Witness?" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container max-w-3xl min-w-0">
          <p className="text-body leading-relaxed mb-4">
            ValuationExpertWitness.co.uk is a United Kingdom instruction service. The role, credentials, and legal frameworks described on this page apply to expert evidence in England and Wales, Scotland, and Northern Ireland. We do not refer valuation expert witnesses for proceedings outside the UK.
          </p>
          <p className="text-body leading-relaxed mb-4">
            A valuation expert witness is a qualified professional who provides independent opinion evidence on the value of assets for UK litigation and arbitration. Unlike a transactional valuer who prepares valuations for deal purposes, a valuation expert witness prepares CPR Part 35 compliant expert reports, gives evidence under oath, and assists the court in understanding valuation methodology and conclusions.
          </p>
          <p className="text-body leading-relaxed mb-4">
            Valuation expert witnesses cover every asset type involved in UK litigation: business and share valuations by forensic accountants; property and land valuations by RICS chartered surveyors; intellectual property valuations by chartered accountants and IP specialists; plant and machinery valuations by RICS P&M specialists; art, antiques, and chattels by specialist valuers; financial instruments by CFA-qualified experts; and specialist assets including agricultural property, cryptocurrency, and classic vehicles.
          </p>
          <p className="text-body leading-relaxed mb-4">
            The expert&apos;s duty is to the court, not to the instructing party. Under CPR Part 35 and the Ikarian Reefer principles, the expert must provide independent opinion evidence, state assumptions clearly, address alternative methodologies, and not adopt a partial approach. In Inspired Education v Crombie [2025], the court rejected valuation expert evidence that lacked rigour and used instructions inconsistent with standard market value definitions.
          </p>
          <p className="text-body leading-relaxed mb-4">
            Valuation expert witnesses are instructed by solicitors and barristers in shareholder disputes, matrimonial financial remedy proceedings, compulsory purchase, professional negligence claims, IP infringement, probate disputes, lease renewal, insurance claims, tax disputes, and international arbitration. Complex cases frequently require multiple valuation experts across different disciplines.
          </p>
          <p className="text-body leading-relaxed">
            <Link href="/valuation-types" className="text-accent font-semibold underline hover:text-primary">
              Read the complete guide to valuation types in UK litigation
            </Link>
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
