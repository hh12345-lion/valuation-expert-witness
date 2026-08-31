"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/site";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
const formspreeUrl = formspreeId ? `https://formspree.io/f/${formspreeId}` : null;

async function submitToFormspree(form: HTMLFormElement): Promise<boolean> {
  if (!formspreeUrl) return false;
  try {
    const data = new FormData(form);
    const res = await fetch(formspreeUrl, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    return res.ok;
  } catch {
    return false;
  }
}

export default function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const leadPayload = {
      fullName: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      organisation: String(data.get("organisation") || "").trim(),
      formType: "contact" as const,
      message: String(data.get("description") || "").trim(),
    };

    if (!leadPayload.fullName || !leadPayload.email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email address.");
      return;
    }

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (res.ok) {
        router.push("/thank-you");
        return;
      }

      if (res.status === 503 && (await submitToFormspree(form))) {
        router.push("/thank-you");
        return;
      }

      setStatus("error");
      setErrorMessage(
        res.status === 503
          ? "Lead delivery is not configured. Please email us directly."
          : "Something went wrong. Please try again or email us directly."
      );
    } catch {
      if (await submitToFormspree(form)) {
        router.push("/thank-you");
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  const inputClass =
    "w-full min-h-[44px] min-w-0 border border-border bg-white px-3 py-2 text-base text-body focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 sm:text-sm";
  const labelClass = "mb-1 block text-sm font-medium text-heading";

  return (
    <form onSubmit={handleSubmit} className="min-w-0 max-w-lg space-y-4">
      <div className="min-w-0">
        <label htmlFor="name" className={labelClass}>
          Full name <span className="text-accent">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label htmlFor="email" className={labelClass}>
          Email address <span className="text-accent">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label htmlFor="organisation" className={labelClass}>
          Firm or organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          autoComplete="organization"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label htmlFor="phone" className={labelClass}>
          Telephone <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. 020 7123 4567"
          className={inputClass}
        />
      </div>

      <div className="min-w-0">
        <label htmlFor="description" className={labelClass}>
          Brief enquiry <span className="text-accent">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          className={`${inputClass} min-h-[100px] resize-y`}
          placeholder="Asset type, forum, and what expert evidence you need."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700" role="alert">
          {errorMessage ?? "Something went wrong. Please email "}
          <a href={`mailto:${SITE_EMAIL}`} className="underline">
            {SITE_EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
