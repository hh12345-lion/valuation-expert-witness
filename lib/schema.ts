import { SITE_EMAIL, SITE_URL, LINKEDIN_URL } from "./site";
import { services } from "./data/services";

export type FAQ = { question: string; answer: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export type DefinedTerm = {
  id: string;
  name: string;
  description: string;
};

export function definedTermSetSchema(terms: DefinedTerm[]) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Valuation Expert Witness Glossary",
    url: `${SITE_URL}/glossary`,
    inLanguage: "en-GB",
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE_URL}/glossary#${term.id}`,
      name: term.name,
      description: term.description,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2025-06-01",
  dateModified = "2026-06-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: "en-GB",
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "ValuationExpertWitness",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ValuationExpertWitness",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/icon-512.png` },
    },
  };
}

export function personSchema({
  name,
  jobTitle,
  description,
  id,
}: {
  name: string;
  jobTitle: string;
  description: string;
  id: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/experts#${id}`,
    name,
    jobTitle,
    description,
    worksFor: {
      "@type": "Organization",
      name: "ValuationExpertWitness",
      url: SITE_URL,
    },
  };
}

export const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ValuationExpertWitness",
      description:
        "UK valuation expert witness referral service covering all asset types for litigation and arbitration.",
      inLanguage: "en-GB",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "ValuationExpertWitness",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/icon-512.png`,
      image: `${SITE_URL}/brand/og.png`,
      email: SITE_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#professional-service`,
      name: "Valuation Expert Witness Services",
      url: `${SITE_URL}/services`,
      serviceType: "Valuation Expert Witness",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Valuation Expert Witness Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            "@id": `${SITE_URL}/services#${s.id}`,
          },
        })),
      },
    },
  ],
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/services#${s.id}`,
    name: s.title,
    description: s.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "GB",
  })),
};
