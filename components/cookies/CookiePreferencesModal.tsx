"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { CookieConsentPreferences } from "@/lib/cookies/types";

type Props = {
  initialPreferences: CookieConsentPreferences;
  onSave: (prefs: CookieConsentPreferences) => void;
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onClose: () => void;
};

const CATEGORIES = [
  {
    id: "necessary" as const,
    label: "Necessary Cookies",
    description:
      "Required for core site functionality, security, and consent storage. Always enabled.",
    locked: true,
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    description:
      "Help us understand how visitors use the site via Google Analytics and similar tools.",
    locked: false,
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    description:
      "Used for advertising measurement including Meta Pixel and LinkedIn Insight Tag.",
    locked: false,
  },
  {
    id: "preferences" as const,
    label: "Preferences",
    description:
      "Remember your settings and improve your experience via tools such as Hotjar.",
    locked: false,
  },
];

export default function CookiePreferencesModal({
  initialPreferences,
  onSave,
  onAcceptAll,
  onRejectNonEssential,
  onClose,
}: Props) {
  const [prefs, setPrefs] = useState(initialPreferences);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function toggle(id: keyof CookieConsentPreferences) {
    if (id === "necessary") return;
    setPrefs((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-4 bg-black/50"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-labelledby="cookie-prefs-title"
        aria-modal="true"
        tabIndex={-1}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[8px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] outline-none"
      >
        <div className="bg-primary px-5 py-4 flex items-center justify-between">
          <h2 id="cookie-prefs-title" className="text-lg font-bold text-white">
            Cookie Settings
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close cookie settings"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-4 space-y-4">
          <p className="text-sm text-body leading-relaxed">
            Manage which cookies we use. See our{" "}
            <Link href="/cookies" className="text-accent underline">
              Cookie Policy
            </Link>{" "}
            for full details.
          </p>

          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="rounded-[8px] border border-border p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-heading text-sm">{cat.label}</p>
                  <p className="mt-1 text-xs text-body leading-relaxed">{cat.description}</p>
                </div>
                {cat.locked ? (
                  <span className="shrink-0 text-xs font-semibold text-highlight uppercase">
                    Always on
                  </span>
                ) : (
                  <button
                    type="button"
                    role="switch"
                    aria-checked={prefs[cat.id]}
                    aria-label={`Toggle ${cat.label}`}
                    onClick={() => toggle(cat.id)}
                    className={`relative shrink-0 h-7 w-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                      prefs[cat.id] ? "bg-accent" : "bg-border"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                        prefs[cat.id] ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 py-4 border-t border-border flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={() => onSave(prefs)}
            className="min-h-[44px] flex-1 rounded-[4px] bg-accent px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent/90 transition-colors"
          >
            Save preferences
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="min-h-[44px] flex-1 rounded-[4px] border border-border px-4 py-2.5 text-sm font-semibold text-heading hover:border-accent transition-colors"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={onRejectNonEssential}
            className="min-h-[44px] flex-1 rounded-[4px] border border-border px-4 py-2.5 text-sm font-semibold text-body hover:border-primary transition-colors"
          >
            Reject non-essential
          </button>
        </div>
      </div>
    </div>
  );
}
