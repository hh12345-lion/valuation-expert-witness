"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import {
  serviceNavLinks,
  assetTypeNavLinks,
  caseTypeNavLinks,
  resourcesNavLinks,
} from "@/lib/data/nav";
import { SITE_EMAIL } from "@/lib/site";

const DROPDOWN_IDS = {
  services: "services",
  assetTypes: "asset-types",
  caseTypes: "case-types",
  resources: "resources",
} as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeMenu = () => setMenuOpen(false);

  const dropdownProps = (id: string) => ({
    isOpen: openDropdown === id,
    onOpen: () => setOpenDropdown(id),
    onClose: () => setOpenDropdown((current) => (current === id ? null : current)),
  });

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 pt-[env(safe-area-inset-top)]">
      {/* Single ink band — not a cream utility strip, dual-tier brand bar, or plain white sticky */}
      <div className="bg-primary text-white">
        <div className="page-container flex h-14 items-center justify-between gap-4 lg:h-16">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            onMouseEnter={() => setOpenDropdown(null)}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-accent/60 bg-primary-soft font-heading text-xs font-bold tracking-wide text-accent"
              aria-hidden="true"
            >
              VE
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-base leading-tight sm:text-lg">
                Valuation Expert Witness
              </span>
              <span className="font-label hidden text-white/50 sm:block">
                UK courts &amp; arbitration · {SITE_EMAIL.replace("cases@", "")}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              className="hidden min-h-[40px] items-center border border-accent bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:inline-flex"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Instruct
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center border border-white/25 text-white xl:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-surface">
        <div className="page-container">
          <nav
            className="hidden h-12 items-center gap-1 xl:flex"
            aria-label="Main navigation"
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center border-b-2 border-transparent px-3 text-sm font-medium text-body transition-colors hover:border-accent hover:text-primary"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              href="/services"
              links={serviceNavLinks}
              viewAll={{ label: "All services", href: "/services" }}
              {...dropdownProps(DROPDOWN_IDS.services)}
            />
            <Link
              href="/valuation-types"
              className="inline-flex min-h-[44px] items-center border-b-2 border-transparent px-3 text-sm font-medium text-body transition-colors hover:border-accent hover:text-primary"
              onMouseEnter={() => setOpenDropdown(null)}
            >
              Valuation types
            </Link>
            <NavDropdown
              label="Asset types"
              href="/asset-types"
              links={assetTypeNavLinks}
              viewAll={{ label: "All asset types", href: "/asset-types" }}
              {...dropdownProps(DROPDOWN_IDS.assetTypes)}
            />
            <NavDropdown
              label="Case types"
              href="/case-types"
              links={caseTypeNavLinks}
              viewAll={{ label: "All case types", href: "/case-types" }}
              {...dropdownProps(DROPDOWN_IDS.caseTypes)}
            />
            <NavDropdown
              label="Resources"
              links={resourcesNavLinks}
              align="right"
              {...dropdownProps(DROPDOWN_IDS.resources)}
            />
            <span className="ml-auto font-label text-muted">England, Wales, Scotland &amp; NI</span>
          </nav>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-b border-border bg-surface xl:hidden max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain"
          aria-label="Mobile navigation"
        >
          <div className="space-y-6 px-4 py-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <Link
              href="/"
              className="flex min-h-[44px] items-center px-2 font-medium text-body transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Home
            </Link>
            <NavDropdown
              label="Services"
              links={serviceNavLinks}
              viewAll={{ label: "All services", href: "/services" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <Link
              href="/valuation-types"
              className="flex min-h-[44px] items-center px-2 font-medium text-body transition-colors hover:text-primary"
              onClick={closeMenu}
            >
              Valuation types
            </Link>
            <NavDropdown
              label="Asset types"
              links={assetTypeNavLinks}
              viewAll={{ label: "All asset types", href: "/asset-types" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="Case types"
              links={caseTypeNavLinks}
              viewAll={{ label: "All case types", href: "/case-types" }}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <NavDropdown
              label="Resources"
              links={resourcesNavLinks}
              onNavigate={closeMenu}
              mobile
              isOpen={false}
              onOpen={() => {}}
              onClose={() => {}}
            />
            <Link
              href="/contact"
              className="flex min-h-[44px] w-full items-center justify-center bg-accent px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-accent-hover"
              onClick={closeMenu}
            >
              Instruct an expert
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
