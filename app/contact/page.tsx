import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Instruct a Valuation Expert Witness | Enquiry",
  description:
    "Send a brief enquiry to instruct a valuation expert witness for UK litigation. All asset types. Response within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a valuation expert witness"
        subtitle="A short enquiry is enough. Tell us the asset type, forum, and what you need — we will reply within one working day."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Enquiry" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-6">
              <p className="mb-6 max-w-lg text-sm leading-relaxed text-body">
                For UK matters only (England and Wales, Scotland, Northern Ireland, and UK-seated
                arbitration). Or email{" "}
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="font-semibold text-accent underline hover:text-highlight"
                >
                  {SITE_EMAIL}
                </a>
                .
              </p>
              <ContactForm />
            </div>
            <aside className="rule-accent h-fit border border-border bg-section-alt p-6 pl-5 lg:col-span-5 lg:col-start-8">
              <h2 className="font-heading text-lg font-bold text-heading">What we need</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-body">
                <li>Your name and work email</li>
                <li>Firm (if instructing as a solicitor)</li>
                <li>A short note on the asset and forum</li>
              </ul>
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted">
                We aim to respond within one working day. Urgent hearing dates should be mentioned in
                the enquiry.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
