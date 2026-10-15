"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropdown from "./NavDropdown";
import { Logo } from "@/components/brand/Brand";
import {
  serviceNavLinks,
  assetTypeNavLinks,
  caseTypeNavLinks,
  resourcesNavLinks,
  type NavLink,
} from "@/lib/data/nav";

const RESOURCE_PATHS = resourcesNavLinks.map((l) => l.href).filter((h) => h !== "/valuation-types");

function within(path: string, base: string) {
  return path === base || path.startsWith(base + "/");
}

const MENUS: { label: string; href?: string; links: NavLink[]; viewAll?: NavLink; align?: "left" | "right"; match: (p: string) => boolean }[] = [
  {
    label: "Services",
    href: "/services",
    links: serviceNavLinks,
    viewAll: { label: "All services", href: "/services" },
    match: (p) => within(p, "/services"),
  },
  {
    label: "Asset types",
    href: "/asset-types",
    links: assetTypeNavLinks,
    viewAll: { label: "All asset types", href: "/asset-types" },
    match: (p) => within(p, "/asset-types"),
  },
  {
    label: "Case types",
    href: "/case-types",
    links: caseTypeNavLinks,
    viewAll: { label: "All case types", href: "/case-types" },
    match: (p) => within(p, "/case-types"),
  },
  {
    label: "Resources",
    links: resourcesNavLinks,
    align: "right",
    match: (p) => RESOURCE_PATHS.some((r) => within(p, r)),
  },
];

/** The V of the monogram marks the current section. */
function ActiveV() {
  return (
    <span
      aria-hidden="true"
      className="absolute bottom-2 left-1/2 h-2 w-3 -translate-x-1/2 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]"
    />
  );
}

/** Client only for usePathname, so the current page is marked. Menus open with CSS. */
export default function Header() {
  const pathname = usePathname() || "/";
  const linkCls = (active: boolean) =>
    `relative inline-flex h-[4.75rem] items-center gap-1.5 whitespace-nowrap px-3 text-[0.9rem] font-semibold transition-colors ${
      active ? "text-primary" : "text-body hover:text-accent"
    }`;
  const valuationActive = within(pathname, "/valuation-types");
  const contactActive = within(pathname, "/contact");

  return (
    <header className="sticky top-0 z-50 w-full bg-white pt-[env(safe-area-inset-top)] shadow-[0_1px_0_#cfcfd4]">
      {/* Keyed on the path so the mobile menu closes after each navigation. */}
      <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Toggle menu" />

      <div className="header-bar page-container flex items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="Valuation Expert Witness, home"
          aria-current={pathname === "/" ? "page" : undefined}
          className="flex min-h-[4.25rem] min-w-0 shrink items-center lg:min-h-[4.75rem]"
        >
          <Logo className="h-8 w-auto sm:h-9 lg:h-10" />
        </Link>

        <nav className="hidden items-center xl:flex" aria-label="Main navigation">
          {MENUS.map((m) => {
            const active = m.match(pathname);
            return (
              <NavDropdown
                key={m.label}
                label={m.label}
                href={m.href}
                links={m.links}
                viewAll={m.viewAll}
                align={m.align}
                active={active}
                pathname={pathname}
                className={linkCls(active)}
                marker={active ? <ActiveV /> : null}
              />
            );
          })}
          <Link
            href="/valuation-types"
            aria-current={valuationActive ? "page" : undefined}
            className={linkCls(valuationActive)}
          >
            Valuation types
            {valuationActive && <ActiveV />}
          </Link>
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className="v-notch-sm ml-4 inline-flex min-h-[48px] items-center bg-primary pl-6 pr-8 text-sm font-bold text-white transition-colors hover:bg-accent"
          >
            Instruct an expert
          </Link>
        </nav>

        <label
          htmlFor="mobile-nav-toggle"
          className="inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center bg-primary text-white xl:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg className="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="square" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
          </svg>
          <svg className="icon-close hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </label>
      </div>

      <nav
        className="hidden max-h-[calc(100dvh-4.25rem)] overflow-y-auto overscroll-contain border-t border-border bg-white peer-checked:block xl:hidden"
        aria-label="Mobile navigation"
      >
        <div className="page-container py-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <Link
            href="/"
            aria-current={pathname === "/" ? "page" : undefined}
            className={`flex min-h-[52px] items-center border-b border-border text-lg font-bold ${pathname === "/" ? "text-accent" : "text-primary"}`}
          >
            Home
          </Link>
          {MENUS.map((m) => (
            <NavDropdown
              key={m.label}
              mobile
              label={m.label}
              href={m.href}
              links={m.links}
              viewAll={m.viewAll}
              active={m.match(pathname)}
              pathname={pathname}
            />
          ))}
          <Link
            href="/valuation-types"
            aria-current={valuationActive ? "page" : undefined}
            className={`flex min-h-[52px] items-center border-b border-border text-lg font-bold ${valuationActive ? "text-accent" : "text-primary"}`}
          >
            Valuation types
          </Link>
          <Link
            href="/contact"
            aria-current={contactActive ? "page" : undefined}
            className="mt-5 flex min-h-[48px] w-full items-center justify-center bg-primary px-4 text-base font-bold text-white"
          >
            Instruct an expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
