import type { Metadata } from "next";
import { Literata, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsentProvider from "@/components/cookies/CookieConsentProvider";
import ConsentModeInit from "@/components/cookies/ConsentModeInit";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport = {
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
    <html lang="en-GB" className={`${literata.variable} ${outfit.variable} h-full`}>
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
