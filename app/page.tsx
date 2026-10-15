import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import HubCard from "@/components/HubCard";
import JsonLd from "@/components/JsonLd";
import { NotchPhoto } from "@/components/brand/Brand";
import { homepageSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { assetTypes } from "@/lib/data/asset-types";
import { createMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";

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
    photo: photos.gherkin,
  },
  {
    title: "RICS chartered surveyors",
    description:
      "MRICS and FRICS registered valuers for property, land, compulsory purchase, lease renewal, and plant and machinery valuation under the RICS Red Book.",
    href: "/asset-types/property-land-valuation",
    photo: photos.suburbanStreet,
  },
  {
    title: "Specialist valuers",
    description:
      "Sector experts for art, antiques, jewellery, financial instruments, agricultural assets, cryptocurrency, and other specialist asset classes requiring niche market knowledge.",
    href: "/asset-types/specialist-assets",
    photo: photos.studFarm,
  },
];

const forums = [
  "High Court, County Court, and Family Court",
  "Employment Tribunal and Lands Tribunal",
  "Court of Session and Sheriff Court (Scotland)",
  "Northern Ireland courts and UK-seated arbitration",
];

const facts = [
  { label: "Disciplines", value: "Forensic, RICS, specialist" },
  { label: "Asset hubs", value: "8 dedicated pages" },
  { label: "Case contexts", value: "10 UK litigation types" },
  { label: "Evidence rules", value: "CPR Part 35 / FPR Part 25" },
  { label: "Property standard", value: "RICS Red Book (VPS 4)" },
  { label: "S994 fair value", value: "Minority discount often disapplied" },
];

function trimTo(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "...";
}

function Chevron() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 h-2 w-3 shrink-0 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]"
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />

      <section className="relative overflow-hidden bg-surface">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 hidden h-full w-[26rem] bg-lavender [clip-path:polygon(0_0,100%_0,50%_100%)] lg:block"
        />
        <div className="page-container relative grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:items-center lg:gap-14 lg:py-20">
          <div className="lg:col-span-6">
            <h1 className="font-heading text-4xl font-extrabold leading-[1.02] text-heading sm:text-5xl md:text-6xl">
              Valuation Expert Witness
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
              Instruction support for business, property, IP, plant and machinery, art, and specialist
              assets in UK litigation and arbitration. CPR Part 35 compliant expert evidence across
              forensic accounting, RICS valuation, and niche disciplines.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn-primary v-notch-sm pr-9">
                Instruct an expert
              </Link>
              <Link href="/how-to-instruct" className="btn-ghost">
                How to instruct
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <NotchPhoto
              photo={photos.christiesAuction}
              priority
              side="left"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="page-container grid gap-6 py-8 lg:grid-cols-12 lg:items-center">
          <p className="font-label text-lavender/70 lg:col-span-3">UK forums covered</p>
          <ul className="grid gap-x-8 gap-y-3 text-[0.95rem] text-lavender sm:grid-cols-2 lg:col-span-9">
            {forums.map((forum) => (
              <li key={forum} className="flex gap-3">
                <Chevron />
                {forum}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden bg-lavender lg:sticky lg:aspect-[4/5] lg:top-28">
              <Image
                src={photos.surveyorDrawing.src}
                alt={photos.surveyorDrawing.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
              <span aria-hidden="true" className="e-bars absolute bottom-0 right-0 h-28 w-20" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-heading text-2xl font-extrabold text-heading sm:text-3xl md:text-4xl">
              United Kingdom valuation expert witness instruction
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-body">
              This website is for UK litigation and arbitration only. We support solicitors and law
              firms instructing valuation expert witnesses under CPR Part 35 and FPR Part 25, with
              reference to the RICS Red Book, Companies Act 2006 fair value, and HMRC market value
              concepts. Professional designations such as ACA, FCA, MRICS, FRICS, and ICAEW Forensic
              Accreditation are UK qualifications.
            </p>
            <div className="mt-10 flex items-end justify-between gap-4 border-b-4 border-primary pb-3">
              <h3 className="font-heading text-xl font-bold text-heading">Services by valuation need</h3>
              <Link href="/services" className="font-ui text-sm font-bold text-accent hover:text-primary">
                All services
              </Link>
            </div>
            <ol className="divide-y divide-border">
              {services.map((service, index) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group grid gap-1 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4"
                  >
                    <span className="font-heading text-lg font-extrabold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="font-heading block text-lg font-bold text-heading group-hover:text-accent">
                        {service.shortTitle}
                      </span>
                      <span className="mt-1 block text-[0.95rem] leading-relaxed text-body">
                        {trimTo(service.description, 140)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="surface-grid py-14 md:py-20">
        <div className="page-container">
          <h2 className="font-heading max-w-2xl text-2xl font-extrabold text-heading sm:text-3xl md:text-4xl">
            Three expert disciplines
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {disciplines.map((card) => (
              <Link key={card.href} href={card.href} className="group flex flex-col bg-white">
                <div className="v-notch relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={card.photo.src}
                    alt={card.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-heading group-hover:text-accent">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body">{card.description}</p>
                  <span className="font-ui mt-5 text-sm font-bold text-primary">Find out more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-container">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-heading text-2xl font-extrabold text-heading sm:text-3xl md:text-4xl">
              By asset type
            </h2>
            <Link href="/valuation-types" className="font-ui text-sm font-bold text-accent hover:text-primary">
              Read the valuation types guide
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {assetTypes.map((asset) => (
              <HubCard
                key={asset.slug}
                title={asset.shortTitle}
                description={trimTo(asset.paragraphs[0], 100)}
                href={`/asset-types/${asset.slug}`}
              />
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-body">
            Each asset page explains which discipline to instruct, the usual methodology, and the
            main legal contexts.
          </p>
        </div>
      </section>

      <section className="bg-lavender py-14 md:py-16">
        <div className="page-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-heading text-2xl font-extrabold text-heading sm:text-3xl">
              Key facts for UK valuation litigation
            </h2>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-body">
              Inspired Education v Crombie [2025] EWHC 1236 (Ch) confirms that valuation expert
              evidence must use instructions consistent with standard market value definitions and
              show rigour and independence.{" "}
              <Link
                href="/guides/valuation-expert-instruction-guide"
                className="font-ui font-bold text-accent underline underline-offset-4 hover:text-primary"
              >
                Read the instruction guide
              </Link>
            </p>
          </div>
          <dl className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-white p-5">
                <dt className="font-label text-accent">{fact.label}</dt>
                <dd className="font-heading mt-2 text-base font-bold text-heading">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection />
    </>
  );
}
