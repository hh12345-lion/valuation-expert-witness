import Link from "next/link";
import { NotchPhoto } from "@/components/brand/Brand";
import type { Photo } from "@/lib/photos";

type Breadcrumb = { label: string; href?: string };

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  photo,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  photo?: Photo;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 hidden h-full w-72 bg-lavender [clip-path:polygon(0_0,100%_0,50%_100%)] lg:block"
      />
      <div
        className={`page-container relative grid gap-10 py-12 sm:py-14 md:py-16 ${
          photo ? "lg:grid-cols-12 lg:items-center lg:gap-14" : ""
        }`}
      >
        <div className={photo ? "lg:col-span-7" : "max-w-4xl"}>
          <h1 className="font-heading text-3xl font-extrabold leading-[1.08] text-heading break-words sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-body break-words md:text-lg">
              {subtitle}
            </p>
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-8 border-t border-border pt-4">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-muted sm:text-sm">
                {breadcrumbs.map((crumb, i) => (
                  <li key={i} className="flex max-w-full items-center gap-2">
                    {i > 0 && (
                      <span aria-hidden="true" className="inline-block h-2 w-2 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                    )}
                    {crumb.href ? (
                      <Link href={crumb.href} className="break-words transition-colors hover:text-accent">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="break-words text-heading" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
        {photo && (
          <NotchPhoto
            photo={photo}
            priority
            side="right"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="lg:col-span-5"
          />
        )}
      </div>
    </section>
  );
}
