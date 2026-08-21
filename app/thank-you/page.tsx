import Link from "next/link";
import PageHero from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | ValuationExpertWitness.co.uk",
  description: "Your valuation expert witness enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const nextSteps = [
  {
    step: "01",
    title: "Review",
    description:
      "We review your enquiry and the expert discipline required, usually within one working day.",
  },
  {
    step: "02",
    title: "Match",
    description:
      "We identify a suitable UK valuation expert witness with relevant credentials and tribunal experience.",
  },
  {
    step: "03",
    title: "Introduction",
    description:
      "You receive an introduction to discuss scope, timetable, and CPR Part 35 report requirements.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Enquiry received"
        subtitle="Thank you. We have received your valuation expert witness enquiry and will reply within one working day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Thank you" }]}
      />
      <section className="py-14 md:py-16">
        <div className="page-container min-w-0">
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-body">
            A member of our team will match you with an appropriate UK valuation expert witness for
            your asset type and forum. Please mention urgent hearing dates in your enquiry if you have
            not already done so.
          </p>

          <h2 className="font-heading mb-6 text-xl font-bold text-heading">What happens next</h2>
          <ol className="mb-12 divide-y divide-border border-y border-border">
            {nextSteps.map((item) => (
              <li key={item.step} className="flex flex-col gap-2 py-5 sm:flex-row sm:gap-6">
                <span className="font-label shrink-0 text-accent">{item.step}</span>
                <div>
                  <h3 className="font-heading font-bold text-heading">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Return home
            </Link>
            <Link href="/valuation-types" className="btn-ghost">
              Valuation types guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
