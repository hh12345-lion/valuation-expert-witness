import Link from "next/link";
import CookieSettingsLink from "@/components/cookies/CookieSettingsLink";
import { LogoStacked, Mark } from "@/components/brand/Brand";
import { assetTypeNavLinks, caseTypeNavLinks, resourcesNavLinks } from "@/lib/data/nav";
import { SITE_EMAIL, SITE_NAME, UK_SERVICE_SCOPE } from "@/lib/site";

const columns = [
  { title: "Asset types", href: "/asset-types", links: assetTypeNavLinks },
  { title: "Case types", href: "/case-types", links: caseTypeNavLinks.slice(0, 8) },
  { title: "Resources", href: "/guides", links: resourcesNavLinks },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="relative overflow-hidden bg-lavender">
        <Mark className="pointer-events-none absolute -bottom-16 -right-10 hidden w-[26rem] opacity-[0.07] lg:block" />
        <div className="page-container relative grid gap-12 py-14 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Valuation Expert Witness, home" className="inline-block">
              <LogoStacked className="h-auto w-48 sm:w-56" />
            </Link>
            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-body">
              Valuation expert witnesses for solicitors instructing in England and Wales, Scotland,
              Northern Ireland, and UK-seated arbitration.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-ui mt-6 inline-block break-all text-sm font-bold text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              {SITE_EMAIL}
            </a>
            <div>
              <Link href="/contact" className="btn-primary v-notch-sm mt-6 pr-9">
                Send an enquiry
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <Link
                  href={col.href}
                  className="font-ui flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-primary hover:text-accent"
                >
                  <span aria-hidden="true" className="h-2 w-3 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                  {col.title}
                </Link>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[0.95rem] text-body transition-colors hover:text-accent">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary text-lavender">
        <div className="page-container py-8">
          <p className="max-w-3xl text-xs leading-relaxed text-lavender/75">
            {UK_SERVICE_SCOPE} We are not a law firm and do not provide legal advice.
          </p>
          <div className="font-ui mt-6 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lavender/70">&copy; 2026 {SITE_NAME}. England and Wales.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy" className="hover:text-white">Privacy</Link>
              <Link href="/cookies" className="hover:text-white">Cookies</Link>
              <CookieSettingsLink className="text-left text-sm text-lavender hover:text-white" />
              <Link href="/terms" className="hover:text-white">Terms</Link>
              <Link href="/image-credits" className="hover:text-white">Image credits</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
