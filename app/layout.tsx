import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentProvider from "@/components/cookies/CookieConsentProvider";
import ConsentModeInit from "@/components/cookies/ConsentModeInit";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// Self-hosted latin subsets of the brand typefaces: Schibsted Grotesk for headings, Prociono for body text.
const schibsted = localFont({
  src: [
    { path: "./fonts/schibsted.woff2", weight: "400 900", style: "normal" },
    { path: "./fonts/schibsted-italic.woff2", weight: "400 900", style: "italic" },
  ],
  variable: "--font-schibsted",
  display: "swap",
});

const prociono = localFont({
  src: [{ path: "./fonts/prociono.woff2", weight: "400", style: "normal" }],
  variable: "--font-prociono",
  display: "swap",
});

// Every page is rendered on the server for each request.
export const dynamic = "force-dynamic";

export const viewport = {
  themeColor: "#2C2334",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: { "x-default": SITE_URL },
  },
  title: {
    default:
      "Valuation Expert Witness UK | Business, Property, IP & All Asset Types",
    template: "%s | ValuationExpertWitness.co.uk",
  },
  description:
    "United Kingdom valuation expert witness referral service. Find qualified experts for business, property, IP, plant and machinery, art, and all asset types in UK litigation and arbitration. England, Wales, Scotland, and Northern Ireland only. CPR Part 35 compliant.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Valuation Expert Witness",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: "Valuation Expert Witness" }],
  },
  twitter: { card: "summary_large_image", images: ["/brand/og.png"] },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${schibsted.variable} ${prociono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ConsentModeInit />
        <CookieConsentProvider>
          <Header />
          <main className="flex-1 min-w-0 w-full">{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
