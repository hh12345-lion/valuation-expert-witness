"use client";

import Link from "next/link";

type Props = {
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onCustomize: () => void;
};

export default function CookieBanner({
  onAcceptAll,
  onRejectNonEssential,
  onCustomize,
}: Props) {
  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pb-[max(1rem,env(safe-area-inset-bottom))] cookie-banner-enter"
    >
      <div className="mx-auto max-w-4xl overflow-hidden border border-border bg-white shadow-[var(--shadow-lift)]">
        <div className="bg-primary px-5 py-3 sm:px-6">
          <h2 id="cookie-banner-title" className="font-heading text-base font-bold text-white sm:text-lg">
            Cookie preferences
          </h2>
        </div>
        <div className="px-5 py-4 sm:px-6 sm:py-5">
          <p id="cookie-banner-desc" className="text-sm leading-relaxed text-body sm:text-base">
            We use cookies to ensure the site works correctly and, with your consent, to analyse
            traffic and improve our service. You can accept all cookies, reject non-essential
            cookies, or customise your preferences.{" "}
            <Link href="/cookies" className="font-semibold text-accent underline hover:text-highlight">
              Cookie policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-semibold text-accent underline hover:text-highlight">
              Privacy policy
            </Link>
            .
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onAcceptAll}
              className="btn-primary flex-1"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={onRejectNonEssential}
              className="btn-ghost flex-1"
            >
              Reject non-essential
            </button>
            <button
              type="button"
              onClick={onCustomize}
              className="flex min-h-[44px] flex-1 items-center justify-center border border-border bg-section-alt px-5 text-sm font-semibold text-heading transition-colors hover:border-accent"
            >
              Customise preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
