import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, servicesSchema } from "@/lib/schema";
import { services } from "@/lib/data/services";
import { getServiceFaqs } from "@/lib/data/service-faqs";
import { siteFaqs } from "@/lib/data/faq";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Valuation Expert Witness Services UK | All Asset Types",
  description:
    "UK valuation expert witness services: business and share valuation, property valuation, IP valuation, plant and machinery, art and chattels, financial instruments, and CPR Part 35 expert reports.",
  path: "/services",
});

const allServiceFaqs = [
  ...services.flatMap((service) => getServiceFaqs(service.id)),
  ...siteFaqs,
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          servicesSchema,
          faqSchema(allServiceFaqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHero
        photo={photoFor("/services")}
        title="Valuation Expert Witness Services UK"
        subtitle="CPR Part 35 compliant valuation expert evidence for United Kingdom litigation and arbitration. Forensic accountants, RICS chartered surveyors, and specialist valuers across England, Wales, Scotland, and Northern Ireland."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0 space-y-16">
          <p className="text-body leading-relaxed max-w-3xl">
            Every service on this page is scoped to the United Kingdom. We do not refer valuation expert witnesses for proceedings outside England, Wales, Scotland, or Northern Ireland.
          </p>
          {services.map((service) => {
            const serviceFaqs = getServiceFaqs(service.id);
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <h2 className="text-xl sm:text-2xl font-bold text-heading mb-4 break-words">
                  {service.title}
                </h2>
                {service.paragraphs.map((p, i) => (
                  <p key={i} className="text-body leading-relaxed mb-4 max-w-3xl break-words">
                    {p}
                  </p>
                ))}
                <div className="mt-6 table-scroll rounded-[8px] border border-border bg-white shadow-[var(--shadow-card)]">
                  <table className="w-full text-sm min-w-[28rem] sm:min-w-[32rem]">
                    <caption className="sr-only">{service.methodology.title}</caption>
                    <thead>
                      <tr className="bg-primary text-white">
                        {service.methodology.headers.map((header) => (
                          <th key={header} className="px-3 sm:px-4 py-3 text-left font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {service.methodology.rows.map((row, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className={rowIndex % 2 === 0 ? "bg-white" : "bg-section-alt"}
                        >
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className="px-3 sm:px-4 py-3 text-body border-t border-border break-words"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {serviceFaqs.length > 0 && (
                  <div className="mt-10 max-w-3xl min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-heading mb-4">
                      {service.title}, FAQs
                    </h3>
                    <FAQAccordion faqs={serviceFaqs} />
                  </div>
                )}
              </div>
            );
          })}

          <div className="max-w-3xl min-w-0 pt-4 border-t border-border">
            <h2 className="text-xl sm:text-2xl font-bold text-heading mb-4">
              General Questions About Valuation Expert Witnesses
            </h2>
            <FAQAccordion faqs={siteFaqs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
