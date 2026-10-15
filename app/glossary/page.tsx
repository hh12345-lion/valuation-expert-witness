import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { definedTermSetSchema, breadcrumbSchema } from "@/lib/schema";
import { glossaryTerms } from "@/lib/data/glossary";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Valuation Expert Witness Glossary",
  description:
    "Glossary of valuation terms for UK litigation: fair value, market value, DCF, RICS Red Book, CPR Part 35, minority discount, and 33 key concepts.",
  path: "/glossary",
});

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={[
          definedTermSetSchema(glossaryTerms),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Glossary", path: "/glossary" },
          ]),
        ]}
      />
      <PageHero
        photo={photoFor("/glossary")}
        title="Valuation Expert Witness Glossary"
        subtitle="Definitions of key valuation concepts, legal standards, and professional qualifications used in UK litigation expert evidence."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <dl className="grid grid-cols-1 gap-6 max-w-3xl">
            {glossaryTerms.map((term) => (
              <div
                key={term.id}
                id={term.id}
                className="rounded-[8px] border border-border bg-white p-5 shadow-[var(--shadow-card)] scroll-mt-24"
              >
                <dt className="font-bold text-heading">{term.name}</dt>
                <dd className="mt-2 text-body leading-relaxed">{term.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <CTASection />
    </>
  );
}
