import Link from "next/link";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import FAQAccordion from "./FAQAccordion";
import type { FAQ } from "@/lib/schema";
import type { ContentTable } from "@/lib/data/types";
import type { Photo } from "@/lib/photos";

type Breadcrumb = { label: string; href?: string };

export default function DetailPageLayout({
  title,
  breadcrumbs,
  paragraphs,
  faqs,
  tables,
  relatedLinks,
  photo,
}: {
  title: string;
  breadcrumbs: Breadcrumb[];
  paragraphs: string[];
  faqs: FAQ[];
  tables?: ContentTable[];
  relatedLinks?: { label: string; href: string; type: string }[];
  photo?: Photo;
}) {
  return (
    <>
      <PageHero title={title} breadcrumbs={breadcrumbs} photo={photo} />
      <section className="py-12 md:py-16">
        <div className="page-container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              {paragraphs.map((p, i) => (
                <p key={i} className="mb-5 text-[1.05rem] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
            <aside className="lg:col-span-4">
              <div className="bg-primary p-7 text-white lg:sticky lg:top-28">
                <span aria-hidden="true" className="e-bars mb-5 block h-9 w-7" />
                <p className="font-heading text-xl font-extrabold">Instructing on this?</p>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-lavender/85">
                  Tell us the asset, the forum, and the questions the expert must answer. We match
                  the enquiry to a suitable UK valuation expert witness.
                </p>
                <Link href="/contact" className="btn-light v-notch-sm mt-6 w-full pr-9">
                  Send an enquiry
                </Link>
                <Link
                  href="/how-to-instruct"
                  className="font-ui mt-4 block text-center text-sm font-semibold text-lavender underline underline-offset-4 hover:text-white"
                >
                  How to instruct
                </Link>
              </div>
            </aside>
          </div>

          {tables && tables.length > 0 && (
            <div className="mt-10 max-w-3xl space-y-8">
              {tables.map((table) => (
                <div key={table.title}>
                  <h2 className="font-heading mb-4 text-xl font-bold text-heading">{table.title}</h2>
                  <div className="table-scroll border border-border bg-white">
                    <table className="w-full min-w-[32rem] text-sm">
                      <thead>
                        <tr className="bg-primary text-white">
                          {table.headers.map((header) => (
                            <th key={header} className="px-4 py-3 text-left font-semibold">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "bg-white" : "bg-section-alt"}
                          >
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className="border-t border-border px-4 py-3 text-body"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="min-h-[44px] border-l-4 border-accent bg-surface px-5 py-4 transition-colors hover:bg-lavender"
                >
                  <p className="font-label text-accent mb-1">{link.type}</p>
                  <p className="font-heading font-semibold text-heading">{link.label}</p>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-14 max-w-3xl">
            <h2 className="font-heading mb-6 text-2xl font-bold text-heading">
              Frequently asked questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
