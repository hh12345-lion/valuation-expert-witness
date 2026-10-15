import Link from "next/link";

type LinkItem = { label: string; href: string };

export default function HubRelatedLinks({
  title = "In this section",
  links,
}: {
  title?: string;
  links: LinkItem[];
}) {
  if (links.length === 0) return null;

  return (
    <div className="mt-12 max-w-3xl">
      <h2 className="text-xl font-bold text-heading mb-4">{title}</h2>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-accent font-semibold hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
