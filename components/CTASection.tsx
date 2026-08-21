import Link from "next/link";

export default function CTASection({
  title = "Instruct a valuation expert witness",
  description = "Send a brief enquiry and we will match you with a suitable UK valuation expert witness for your asset type. We aim to respond within one working day.",
  buttonText = "Send an enquiry",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="border-y border-border bg-primary py-12 md:py-14">
      <div className="page-container grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <p className="font-label text-accent mb-3">Next step</p>
          <h2 className="font-heading text-xl font-bold text-white break-words sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
        </div>
        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <Link href="/contact" className="btn-primary w-full sm:w-auto">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
