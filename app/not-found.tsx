import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const quickLinks = [
  {
    title: "Asset types",
    description: "Business, property, IP, plant, art, and specialist asset guides.",
    href: "/asset-types",
  },
  {
    title: "Case types",
    description: "Shareholder disputes, divorce, CPO, IP, and related case guides.",
    href: "/case-types",
  },
  {
    title: "Valuation types",
    description: "The complete guide to valuation in UK litigation.",
    href: "/valuation-types",
  },
  {
    title: "Instruct an expert",
    description: "Send a brief enquiry. We aim to reply within one working day.",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        subtitle="That address does not exist or may have moved. Use the links below for valuation expert witness guidance."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "404" }]}
      />
      <section className="py-14 md:py-16">
        <div className="page-container min-w-0">
          <p className="font-heading mb-10 text-6xl font-bold text-accent md:text-7xl">404</p>
          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group min-h-[44px] border-l-3 border-accent bg-white px-5 py-5 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-lift)]"
                style={{ borderLeftWidth: 3 }}
              >
                <h2 className="font-heading font-bold text-heading group-hover:text-accent">
                  {link.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-body">{link.description}</p>
              </Link>
            ))}
          </div>
          <Link href="/" className="btn-primary">
            Return home
          </Link>
        </div>
      </section>
      <CTASection />
    </>
  );
}
