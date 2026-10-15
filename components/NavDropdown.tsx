import Link from "next/link";
import type { ReactNode } from "react";
import type { NavLink } from "@/lib/data/nav";

type Props = {
  label: string;
  href?: string;
  links: NavLink[];
  viewAll?: NavLink;
  mobile?: boolean;
  align?: "left" | "right";
  active: boolean;
  pathname: string;
  className?: string;
  marker?: ReactNode;
};

/** Desktop panels open on hover or focus through CSS; mobile groups fold with details. */
export default function NavDropdown({
  label,
  href,
  links,
  viewAll,
  mobile = false,
  align = "left",
  active,
  pathname,
  className = "",
  marker,
}: Props) {
  const isCurrent = (h: string) => h === pathname;

  if (mobile) {
    return (
      <details className="fold border-b border-border" open={active}>
        <summary
          className={`flex min-h-[52px] items-center justify-between text-lg font-bold ${active ? "text-accent" : "text-primary"}`}
        >
          {label}
          <span aria-hidden="true" className="fold-sign text-xl font-normal text-accent transition-transform">
            +
          </span>
        </summary>
        <ul className="pb-3">
          {viewAll && (
            <li>
              <Link
                href={viewAll.href}
                aria-current={isCurrent(viewAll.href) ? "page" : undefined}
                className={`flex min-h-[42px] items-center px-1 font-semibold ${isCurrent(viewAll.href) ? "text-accent" : "text-primary"}`}
              >
                {viewAll.label}
              </Link>
            </li>
          )}
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`flex min-h-[42px] items-center gap-3 px-1 ${isCurrent(link.href) ? "font-semibold text-accent" : "text-body"}`}
              >
                <span aria-hidden="true" className="h-1.5 w-2 shrink-0 bg-accent/60 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    );
  }

  const trigger = (
    <>
      {label}
      <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      {marker}
    </>
  );

  return (
    <div className="nav-item relative">
      {href ? (
        <Link href={href} aria-haspopup="true" aria-current={active ? "page" : undefined} className={className}>
          {trigger}
        </Link>
      ) : (
        <button type="button" aria-haspopup="true" className={className}>
          {trigger}
        </button>
      )}
      <div className={`nav-panel absolute top-full z-50 w-[min(92vw,21rem)] ${align === "right" ? "right-0" : "left-0"}`}>
        <div className="border border-border border-t-4 border-t-primary bg-white shadow-[var(--shadow-lift)]">
          {viewAll && (
            <Link
              href={viewAll.href}
              className="flex items-center justify-between bg-lavender px-5 py-3 text-sm font-bold text-primary hover:text-accent"
            >
              {viewAll.label}
              <span aria-hidden="true" className="h-2 w-3 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)] -rotate-90" />
            </Link>
          )}
          <ul className="max-h-[min(62vh,26rem)] overflow-y-auto py-2">
            {links.map((link) => {
              const current = isCurrent(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`block border-l-4 px-5 py-2.5 text-[0.95rem] ${
                      current
                        ? "border-accent bg-surface font-semibold text-primary"
                        : "border-transparent text-body hover:border-lavender hover:bg-surface hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
