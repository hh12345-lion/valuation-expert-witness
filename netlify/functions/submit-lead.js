/**
 * Netlify Function backup: POST lead to n8n webhook (Lead_notification_setup.md).
 * Production prefers Next.js app/api/submit-lead/route.ts (webhook + soft-fail Sheets).
 * Env: Lead_notification_url, NEXT_PUBLIC_SITE_URL.
 */
const BRAND_NAME = "Valuation Expert Witness";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function getSiteDomain() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.valuationexpertwitness.co.uk";

  try {
    return new URL(raw).hostname.replace(/^www\./i, "");
  } catch {
    return "valuationexpertwitness.co.uk";
  }
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const webhookUrl =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;

  if (!webhookUrl) {
    console.error("Lead_notification_url is not configured");
    return {
      statusCode: 503,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Lead notification URL not configured" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message =
    typeof body.message === "string"
      ? body.message.trim()
      : typeof body.description === "string"
        ? body.description.trim()
        : "";

  if (!fullName || !email) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "fullName and email are required" }),
    };
  }

  const fullNameOutbound = message
    ? `${fullName} — ${message.slice(0, 500)}`
    : fullName;

  const payload = {
    "Full Name": fullNameOutbound,
    Email: email,
    "Phone Number": phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("Webhook failed:", response.status, text);
      return {
        statusCode: 502,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Webhook request failed" }),
      };
    }

    return {
      statusCode: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Webhook fetch error:", err);
    return {
      statusCode: 502,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Webhook request failed" }),
    };
  }
};
