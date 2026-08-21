import Link from "next/link";

type Breadcrumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}) {
  return (
    <section className="surface-grid border-b border-border">
      <div className="page-container py-10 sm:py-14 md:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-muted">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1 max-w-full">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="transition-colors hover:text-accent break-words"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-body break-words">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="rule-accent max-w-4xl pl-5 animate-fade-rise">
          <h1 className="font-heading text-2xl font-bold leading-tight text-heading break-words sm:text-3xl md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-body break-words sm:text-base md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
