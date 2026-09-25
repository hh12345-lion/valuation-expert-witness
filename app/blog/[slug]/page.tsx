import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const base = createMetadata({
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  if (!post.image) return base;

  const imageUrl = `${SITE_URL}${post.image}`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [{ url: imageUrl, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof base.title === "string" ? base.title : post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
            inLanguage: "en-GB",
            author: { "@type": "Organization", name: SITE_NAME },
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
            },
            mainEntityOfPage: url,
            url,
          },
        ]}
      />
      {post.image ? (
        <div className="relative mx-auto h-[min(28rem,55vw)] w-full max-w-6xl border-b border-border">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <article className="prose-content page-container mx-auto max-w-3xl py-12 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 not-prose text-sm text-muted">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-accent">
            Blog
          </Link>
          {" / "}
          <span className="text-heading">{post.title}</span>
        </nav>

        <p className="not-prose font-label text-[11px] font-semibold uppercase tracking-widest text-muted">
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
        <h1 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.description}</p>

        <div className="mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        <p className="not-prose mt-12 border-t border-border pt-8 text-sm">
          <Link href="/blog" className="font-semibold text-accent hover:text-highlight">
            ← Back to the blog
          </Link>
          <span className="mx-3 text-muted/50">·</span>
          <Link href="/contact" className="font-semibold text-accent hover:text-highlight">
            Instruct expert
          </Link>
        </p>
      </article>
      <CTASection />
    </>
  );
}
