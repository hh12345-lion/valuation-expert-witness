import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "How to Instruct a Valuation Expert Witness",
  description:
    "Step-by-step guide to instructing a valuation expert witness: identify asset type, legal context, expert discipline, credentials, and letter of instruction.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to Instruct", path: "/how-to-instruct" },
        ])}
      />
      <PageHero
        photo={photoFor("/how-to-instruct")}
        title="How to Instruct a Valuation Expert Witness"
        subtitle="A practical seven-step guide for UK solicitors and barristers on instructing valuation expert witnesses across all asset types."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How to Instruct" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <p>
            This guide applies to instructing valuation expert witnesses in the United Kingdom only. It covers England and Wales civil and family proceedings (CPR Part 35 and FPR Part 25), Scottish litigation, Northern Ireland courts, and UK-seated arbitration. If your matter is before a foreign court or tribunal, instruct a local expert qualified in that jurisdiction.
          </p>

          <h2>Step 1: Identify the Asset Type</h2>
          <p>
            Determine which asset or assets require valuation. Business interests, property, intellectual property, plant and machinery, art and chattels, financial instruments, goodwill, and specialist assets each require a different expert discipline. If multiple asset types are involved, you will need multiple experts.
          </p>

          <h2>Step 2: Identify the Legal Context</h2>
          <p>
            The legal context determines the applicable valuation standard. S994 shareholder disputes use fair value (typically without minority discount). Matrimonial proceedings use open market value as at the relevant date. Compulsory purchase uses open market value absent the scheme. IP infringement requires damages quantification. Tax disputes follow HMRC market value standards. Specify the legal context clearly in your instructions.
          </p>

          <h2>Step 3: Identify the Correct Expert Discipline</h2>
          <p>
            Match the expert discipline to the asset type: forensic accountant for business and shares; RICS chartered surveyor for property and plant; specialist valuer for art, financial instruments, and niche assets. Do not instruct a forensic accountant to value property or a surveyor to value complex derivatives.
          </p>

          <h2>Step 4: Check Credentials and Prior Court Acceptance</h2>
          <p>
            Verify the expert holds the appropriate professional qualifications (ACA/FCA, MRICS/FRICS, CFA, or sector-specific credentials). Confirm prior court or tribunal acceptance as an expert witness. ICAEW Forensic Accreditation, RICS Expert Witness qualification, and Academy of Experts membership are strong indicators of litigation experience.
          </p>

          <h2>Step 5: Do You Need Multiple Valuation Experts?</h2>
          <p>
            Complex disputes involving multiple asset classes require multiple experts. A divorce with business and property needs a forensic accountant and a RICS surveyor. An estate dispute may need property, business, and art valuers. Coordinate valuation dates and assumptions across disciplines.
          </p>

          <h2>Step 6: Letter of Instruction</h2>
          <p>
            Your letter of instruction must use standard valuation definitions consistent with the legal context. Specify the basis of value (market value, fair value, open market value per RICS Red Book), the valuation date, and the assumptions the expert should adopt. Do not instruct the expert to reach a particular value.
          </p>
          <p>
            Following Inspired Education v Crombie [2025], courts will reject expert evidence where instructions are inconsistent with standard definitions of market value. Ensure your instructions are clear, complete, and neutral in tone.
          </p>

          <h2>Step 7: Documents to Provide</h2>
          <p>Provide the expert with all relevant documents:</p>
          <ul>
            <li>Court orders and directions</li>
            <li>Pleadings and witness statements</li>
            <li>Financial statements and management accounts (for business valuations)</li>
            <li>Property information and title documents (for property valuations)</li>
            <li>Comparable transaction data</li>
            <li>Prior valuations and expert reports from the opposing party</li>
            <li>Any documents unfavourable to your client&apos;s position</li>
          </ul>
        </div>
      </section>
      <CTASection />
    </>
  );
}
