import type { FAQ } from "@/lib/schema";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="border-t border-border">
      {faqs.map((faq, index) => (
        <details key={index} className="faq group border-b border-border" open={index === 0}>
          <summary className="flex min-h-[44px] items-start justify-between gap-4 py-5">
            <span className="font-heading text-left text-base font-bold text-heading break-words sm:text-lg">
              {faq.question}
            </span>
            <span
              aria-hidden="true"
              className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center bg-lavender text-lg leading-none text-accent"
            >
              <span className="faq-sign inline-block transition-transform">+</span>
            </span>
          </summary>
          <div className="max-w-prose pb-6 leading-relaxed text-body break-words [overflow-wrap:anywhere]">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
