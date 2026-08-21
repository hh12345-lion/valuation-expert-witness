"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieSettingsLink({
  className = "text-sm text-muted hover:text-primary transition-colors text-left",
}: {
  className?: string;
}) {
  const { openPreferences } = useCookieConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie settings
    </button>
  );
}
