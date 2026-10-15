import Image from "next/image";
import type { Photo } from "@/lib/photos";

/** Horizontal lockup for light backgrounds (mark beside the two word lines). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.svg"
      alt="Valuation Expert Witness"
      width={672}
      height={122}
      className={className}
    />
  );
}

/** Stacked logo supplied for light backgrounds. */
export function LogoStacked({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo-stacked.svg"
      alt="Valuation Expert Witness"
      width={508}
      height={361}
      className={className}
    />
  );
}

/** The V and E monogram, drawn inline so it can sit on any surface. */
export function Mark({
  className = "",
  tone = "brand",
}: {
  className?: string;
  tone?: "brand" | "light";
}) {
  const v = tone === "light" ? "#E7E2EF" : "#2C2334";
  const e = tone === "light" ? "#665172" : "#665172";
  return (
    <svg viewBox="0 0 321 288" className={className} aria-hidden="true" focusable="false">
      <path d="M46.8623 0H187.149L117.006 164.426L46.8623 0Z" fill={v} />
      <path d="M231.086 0L204.7 70.1434H320.37V0H231.086Z" fill={e} />
      <path
        d="M187.157 109.277H319.669V179.265H187.157V216.294H319.669V287.845H0V0L117.013 216.203L187.157 109.277Z"
        fill={e}
      />
    </svg>
  );
}

/**
 * A photograph framed by the brand: the V of the monogram is cut from its top edge and a
 * plum E bar block steps in from one side.
 */
export function NotchPhoto({
  photo,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  ratio = "aspect-[4/3]",
  side = "left",
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  priority?: boolean;
  ratio?: string;
  side?: "left" | "right";
}) {
  return (
    <figure className={`relative ${className}`}>
      <div className={`v-notch relative overflow-hidden bg-lavender ${ratio}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
      <span
        aria-hidden="true"
        className={`e-bars absolute -bottom-5 h-20 w-14 sm:h-24 sm:w-16 ${
          side === "left" ? "-left-3 sm:-left-5" : "-right-3 sm:-right-5 scale-x-[-1]"
        }`}
      />
    </figure>
  );
}
