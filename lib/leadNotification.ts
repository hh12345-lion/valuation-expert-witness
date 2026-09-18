import { SITE_URL } from "@/lib/site";

/** Display name sent to n8n as `Brand name`. */
export const BRAND_NAME = "Valuation Expert Witness";

export type LeadWebhookInput = {
  fullName: string;
  email: string;
  phone?: string;
  formType?: "contact" | "instruct" | string;
  message?: string;
};

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url ||
    process.env.LEAD_NOTIFICATION_URL ||
    undefined
  );
}

/** Hostname from NEXT_PUBLIC_SITE_URL — no protocol, no www. */
export function getSiteDomain(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL;

  try {
    return new URL(raw).hostname.replace(/^www\./i, "");
  } catch {
    return "valuationexpertwitness.co.uk";
  }
}

export function isLeadWebhookConfigured(): boolean {
  return Boolean(getLeadWebhookUrl());
}

function sanitize(value: string): string {
  return value.replace(/<[^>]*>/g, "").trim();
}

/** Outbound JSON shape — identical across all brand sites (see Lead_notification_setup.md). */
export function buildLeadWebhookPayload(input: LeadWebhookInput) {
  const name = sanitize(input.fullName);
  const message = input.message ? sanitize(input.message) : "";
  const fullNameOutbound = message
    ? `${name} — ${message.slice(0, 500)}`
    : name;

  return {
    "Full Name": fullNameOutbound,
    Email: sanitize(input.email).toLowerCase(),
    "Phone Number": sanitize(input.phone ?? ""),
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
    message,
  };
}

export async function notifyLeadWebhook(
  input: LeadWebhookInput
): Promise<Response> {
  const webhookUrl = getLeadWebhookUrl();
  if (!webhookUrl) {
    throw new Error("WEBHOOK_MISSING");
  }

  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildLeadWebhookPayload(input)),
    signal: AbortSignal.timeout(12_000),
  });
}
