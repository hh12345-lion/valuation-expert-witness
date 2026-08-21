"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/schema";

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              type="button"
              className="flex w-full min-h-[44px] items-center justify-between gap-4 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-heading text-left text-sm font-semibold text-heading break-words sm:text-base">
                {faq.question}
              </span>
              <span className="shrink-0 text-lg font-light text-accent" aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="pb-4 text-body leading-relaxed break-words [overflow-wrap:anywhere]">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
