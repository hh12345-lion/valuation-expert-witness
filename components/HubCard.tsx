import Image from "next/image";
import Link from "next/link";
import { assignedPhoto } from "@/lib/page-photos";
import type { Photo } from "@/lib/photos";

export default function HubCard({
  title,
  description,
  href,
  photo,
}: {
  title: string;
  description: string;
  href: string;
  photo?: Photo;
}) {
  const image = photo ?? assignedPhoto(href);
  return (
    <Link
      href={href}
      className="group flex min-h-[44px] flex-col border border-border bg-white transition-shadow hover:shadow-[var(--shadow-lift)]"
    >
      {image && (
        <div className="v-notch-sm relative aspect-[16/10] overflow-hidden bg-lavender">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col border-t-4 border-accent px-5 py-5">
        <h2 className="font-heading text-lg font-bold leading-snug text-heading break-words transition-colors group-hover:text-accent">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-body break-words">{description}</p>
        <span className="font-ui mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
          View details
          <span aria-hidden="true" className="h-2 w-3 -rotate-90 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]" />
        </span>
      </div>
    </Link>
  );
}
