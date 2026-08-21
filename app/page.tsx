import Link from "next/link";
import AlertBanner from "@/components/AlertBanner";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { homepageSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { assetTypes } from "@/lib/data/asset-types";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Valuation Expert Witness UK | Business, Property, IP & All Asset Types",
  description:
    "Find a qualified valuation expert witness in the UK. Business valuation, property valuation, intellectual property, plant and machinery, art, and all asset types for litigation and arbitration. CPR Part 35 compliant.",
  path: "/",
});

const disciplines = [
  {
    title: "Forensic accountants",
    description:
      "ACA and FCA qualified experts for business and share valuation, goodwill, intangible assets, and IP financial valuation in shareholder disputes, matrimonial proceedings, and HMRC challenges.",
    href: "/asset-types/business-share-valuation",
  },
  {
    title: "RICS chartered surveyors",
    description:
      "MRICS and FRICS registered valuers for property, land, compulsory purchase, lease renewal, and plant and machinery valuation under the RICS Red Book.",
    href: "/asset-types/property-land-valuation",
  },
  {
    title: "Specialist valuers",
    description:
      "Sector experts for art, antiques, jewellery, financial instruments, agricultural assets, cryptocurrency, and other specialist asset classes requiring niche market knowledge.",
    href: "/asset-types/specialist-assets",
  },
];

const facts = [
  { label: "Disciplines", value: "Forensic, RICS, specialist" },
  { label: "Asset hubs", value: "8 dedicated pages" },
  { label: "Case contexts", value: "10 UK litigation types" },
  { label: "Evidence rules", value: "CPR Part 35 / FPR Part 25" },
  { label: "Property standard", value: "RICS Red Book (VPS 4)" },
  { label: "S994 fair value", value: "Minority discount often disapplied" },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />
      <AlertBanner />

      {/* Asymmetric editorial hero — not a solid primary slab */}
      <section className="surface-grid border-b border-border">
        <div className="page-container grid gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <div className="lg:col-span-7 animate-fade-rise">
            <p className="font-label text-accent mb-4">United Kingdom · solicitors &amp; counsel</p>
            <h1 className="font-heading text-3xl font-bold leading-[1.15] text-heading sm:text-4xl md:text-5xl">
              Valuation Expert Witness
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Instruction support for business, property, IP, plant and machinery, art, and specialist
              assets in UK litigation and arbitration. CPR Part 35 compliant expert evidence across
              forensic accounting, RICS valuation, and niche disciplines.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary">
                Instruct an expert
              </Link>
              <Link href="/how-to-instruct" className="btn-ghost">
                How to instruct
              </Link>
            </div>
          </div>

          <aside className="border border-border bg-white p-6 shadow-[var(--shadow-lift)] lg:col-span-5 lg:self-start">
            <p className="font-label text-muted mb-4">UK forums covered</p>
            <ul className="space-y-3 text-sm leading-relaxed text-body">
              <li className="rule-accent pl-3">High Court, County Court, and Family Court</li>
              <li className="rule-accent pl-3">Employment Tribunal and Lands Tribunal</li>
              <li className="rule-accent pl-3">Court of Session and Sheriff Court (Scotland)</li>
              <li className="rule-accent pl-3">Northern Ireland courts and UK-seated arbitration</li>
            </ul>
            <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted">
              We do not accept instructions for proceedings outside the United Kingdom.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-b border-border py-10 md:py-12">
        <div className="page-container max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-heading sm:text-2xl">
            United Kingdom valuation expert witness instruction
          </h2>
          <p className="mt-4 text-body leading-relaxed">
            This website is for UK litigation and arbitration only. We support solicitors and law
            firms instructing valuation expert witnesses under CPR Part 35 and FPR Part 25, with
            reference to the RICS Red Book, Companies Act 2006 fair value, and HMRC market value
            concepts. Professional designations such as ACA, FCA, MRICS, FRICS, and ICAEW Forensic
            Accreditation are UK qualifications.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="page-container">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-heading text-xl font-bold text-heading sm:text-2xl md:text-3xl">
              Services by valuation need
            </h2>
            <Link href="/services" className="text-sm font-semibold text-accent hover:text-highlight">
              All services →
            </Link>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {services.map((service, index) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-label shrink-0 text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-lg font-bold text-heading group-hover:text-accent">
                    {service.shortTitle}
                  </span>
                  <span className="text-sm leading-relaxed text-body sm:ml-auto sm:max-w-md sm:text-right">
                    {service.description.slice(0, 110)}…
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="surface-grid border-y border-border py-14 md:py-16">
        <div className="page-container">
          <h2 className="font-heading text-xl font-bold text-heading mb-8 sm:text-2xl md:text-3xl">
            Three expert disciplines
          </h2>
          <div className="grid gap-0 border border-border bg-white md:grid-cols-3">
            {disciplines.map((card, i) => (
              <Link
                key={card.href}
                href={card.href}
                className={`block p-6 transition-colors hover:bg-section-alt ${
                  i < disciplines.length - 1 ? "border-b border-border md:border-b-0 md:border-r" : ""
                }`}
              >
                <h3 className="font-heading text-lg font-bold text-heading">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{card.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  Find out more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="page-container">
          <h2 className="font-heading text-xl font-bold text-heading mb-8 sm:text-2xl md:text-3xl">
            By asset type
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assetTypes.map((asset) => (
              <HubCard
                key={asset.slug}
                title={asset.shortTitle}
                description={asset.paragraphs[0].slice(0, 100) + "…"}
                href={`/asset-types/${asset.slug}`}
              />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-body leading-relaxed">
            Each asset page explains which discipline to instruct, the usual methodology, and the
            main legal contexts.{" "}
            <Link href="/valuation-types" className="font-semibold text-accent underline hover:text-highlight">
              Read the valuation types guide
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-primary py-12 md:py-14">
        <div className="page-container">
          <h2 className="font-heading text-xl font-bold text-white mb-8 sm:text-2xl">
            Key facts for UK valuation litigation
          </h2>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="border-l-2 border-accent pl-4">
                <dt className="font-label text-white/50">{fact.label}</dt>
                <dd className="mt-1 text-sm font-medium text-white sm:text-base">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-xs text-white/50">
            Inspired Education v Crombie [2025] EWHC 1236 (Ch) — expert rigour and independence required.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
