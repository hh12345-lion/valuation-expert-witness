import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata = createMetadata({
  title: "Blog | Valuation Expert Witness",
  description:
    "Articles for solicitors on valuing loss-making and early-stage businesses, valuation methodology, and instructing a valuation expert witness.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `${SITE_NAME} Blog`,
            url: `${SITE_URL}/blog`,
            inLanguage: "en-GB",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              dateModified: post.updated || post.date,
              url: `${SITE_URL}/blog/${post.slug}`,
              image: post.image ? `${SITE_URL}${post.image}` : undefined,
            })),
          },
        ]}
      />
      <PageHero
        title="Valuation Expert Witness Blog"
        subtitle="Practitioner-facing articles on valuation evidence, loss-making and early-stage businesses, and instructing valuation experts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container min-w-0">
          <div className="mb-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary inline-flex min-h-[44px] items-center px-6 py-3 text-sm">
              Instruct expert
            </Link>
            <Link href="/guides" className="btn-ghost inline-flex min-h-[44px] items-center px-6 py-3 text-sm">
              Browse guides
            </Link>
          </div>

          {posts.length === 0 ? (
            <p className="text-muted">Articles will appear here shortly.</p>
          ) : (
            <ul className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug} className="overflow-hidden border border-border bg-white shadow-sm">
                  {post.image ? (
                    <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                      <Image
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </Link>
                  ) : null}
                  <div className="p-6">
                    <p className="font-label text-[11px] font-semibold uppercase tracking-widest text-muted">
                      <time dateTime={post.updated || post.date}>
                        {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <span className="mx-2">·</span>
                      <span className="normal-case tracking-normal">{post.readingTime}</span>
                    </p>
                    <h2 className="mt-3 font-heading text-xl font-semibold text-heading">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{post.description}</p>
                    <p className="mt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-accent hover:text-highlight"
                      >
                        Read article →
                      </Link>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <CTASection />
    </>
  );
}
