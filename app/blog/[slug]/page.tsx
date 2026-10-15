import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getBlogBySlug } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

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
      <header className="relative overflow-hidden border-b border-border bg-surface">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 hidden h-full w-72 bg-lavender [clip-path:polygon(0_0,100%_0,50%_100%)] lg:block"
        />
        <div className="page-container relative py-12 md:py-16">
          <div className="max-w-4xl">
          <h1 className="font-heading text-3xl font-extrabold leading-[1.1] text-heading sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-body">{post.description}</p>
          <p className="font-label mt-6 text-muted">
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
          <nav aria-label="Breadcrumb" className="mt-6 border-t border-border pt-4">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-muted">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="h-2 w-2 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]" />
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="h-2 w-2 bg-accent [clip-path:polygon(0_0,100%_0,50%_100%)]" />
              <li className="text-heading" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
          </div>
        </div>
      </header>

      <div className="page-container py-12 md:py-16">
      <article className="prose-content mx-auto max-w-3xl">
        {post.image ? (
          <div className="not-prose v-notch relative mb-10 aspect-[16/9] w-full overflow-hidden bg-lavender">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              priority
              sizes="(min-width: 768px) 48rem, 100vw"
              className="object-cover"
            />
          </div>
        ) : null}

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <p className="not-prose mt-12 border-t border-border pt-8 text-sm">
          <Link href="/blog" className="font-semibold text-accent hover:text-highlight">
            Back to the blog
          </Link>
          <span className="mx-3 text-muted/50">·</span>
          <Link href="/contact" className="font-semibold text-accent hover:text-highlight">
            Instruct expert
          </Link>
        </p>
      </article>
      </div>
      <CTASection />
    </>
  );
}
