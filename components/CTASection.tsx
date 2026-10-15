import Link from "next/link";
import Image from "next/image";
import { photos } from "@/lib/photos";

export default function CTASection({
  title = "Instruct a valuation expert witness",
  description = "Send a brief enquiry and we will match you with a suitable UK valuation expert witness for your asset type and case.",
  buttonText = "Send an enquiry",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
        <Image
          src={photos.londonFromShard.src}
          alt=""
          fill
          sizes="42vw"
          className="object-cover"
        />
        <span aria-hidden="true" className="absolute inset-y-0 -left-px w-40 bg-primary [clip-path:polygon(0_0,100%_0,0_100%)]" />
      </div>
      <div className="page-container relative py-14 md:py-16">
        <div className="max-w-xl">
          <span aria-hidden="true" className="e-bars mb-6 block h-10 w-8" />
          <h2 className="font-heading text-2xl font-extrabold text-white break-words sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-lavender/85 sm:text-lg">{description}</p>
          <Link href="/contact" className="btn-light v-notch-sm mt-8 w-full pr-9 sm:w-auto">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
