import Link from "next/link";

export default function HubCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex min-h-[44px] flex-col border-l-3 border-accent bg-white px-5 py-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
      style={{ borderLeftWidth: 3 }}
    >
      <h2 className="font-heading text-base font-bold text-heading break-words transition-colors group-hover:text-accent sm:text-lg">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body break-words">
        {description}
      </p>
      <span className="mt-4 text-sm font-semibold text-accent">
        View details →
      </span>
    </Link>
  );
}
