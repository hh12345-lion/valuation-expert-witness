import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import {
  serviceNavLinks,
  assetTypeNavLinks,
  caseTypeNavLinks,
  resourcesNavLinks,
} from "@/lib/data/nav";
import { SITE_EMAIL, SITE_NAME, UK_SERVICE_SCOPE } from "@/lib/site";

const compactLinks = [
  ...serviceNavLinks.slice(0, 3),
  ...assetTypeNavLinks.slice(0, 2),
  ...caseTypeNavLinks.slice(0, 2),
  ...resourcesNavLinks.slice(0, 3),
  { label: "Valuation types", href: "/valuation-types" },
  { label: "How to instruct", href: "/how-to-instruct" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-section-alt">
      {/* Split band: ink enquiry panel + mist link field — not dark mega-grid or cream accent-top */}
      <div className="grid lg:grid-cols-12">
        <div className="bg-primary px-6 py-10 text-white sm:px-8 lg:col-span-4 lg:px-10 lg:py-12">
          <p className="font-heading text-xl leading-snug sm:text-2xl">{SITE_NAME}</p>
          <p className="font-label mt-2 text-white/50">United Kingdom instruction service</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Valuation expert witnesses for solicitors instructing in England and Wales, Scotland,
            Northern Ireland, and UK-seated arbitration.
          </p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-6 inline-block break-all text-sm font-semibold text-accent transition-colors hover:text-white"
          >
            {SITE_EMAIL}
          </a>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[44px] items-center border border-accent bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            Send an enquiry
          </Link>
        </div>

        <div className="page-container py-10 lg:col-span-8 lg:max-w-none lg:px-10 lg:py-12">
          <p className="font-label text-muted mb-4">Browse</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {compactLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-body transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
            {UK_SERVICE_SCOPE} We are not a law firm and do not provide legal advice.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-sm text-muted">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy policy
            </Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">
              Cookie policy
            </Link>
            <CookieSettingsLink />
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of use
            </Link>
            <Link
              href="/what-is-a-valuation-expert-witness"
              className="hover:text-primary transition-colors"
            >
              What is a valuation expert witness?
            </Link>
          </div>

          <p className="mt-4 text-xs text-muted">
            &copy; 2026 {SITE_NAME}. England and Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
