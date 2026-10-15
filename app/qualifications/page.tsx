import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Valuation Expert Witness Qualifications by Discipline",
  description:
    "Valuation expert witness qualifications: ACA/FCA for business valuation, MRICS/FRICS for property, CFA for financial instruments, and sector-specific credentials.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Qualifications", path: "/qualifications" },
        ])}
      />
      <PageHero
        photo={photoFor("/qualifications")}
        title="Valuation Expert Witness Qualifications by Discipline"
        subtitle="The UK professional credentials, body memberships, and court experience required for valuation expert witnesses across all three disciplines."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Qualifications" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <p>
            All qualifications listed on this page are United Kingdom professional designations recognised in English and Welsh, Scottish, and Northern Irish courts. ValuationExpertWitness.co.uk does not refer experts for proceedings outside the UK.
          </p>

          <h2>Business Valuation</h2>
          <p>
            Business and share valuation expert witnesses are typically chartered accountants with forensic and valuation specialisms. The core UK credential is ACA or FCA (Associate or Fellow of the Institute of Chartered Accountants in England and Wales). CVA (Certified Valuation Analyst) or CFA (Chartered Financial Analyst) adds specialist valuation qualification. ICAEW Forensic Accreditation confirms expert witness experience and competency. Prior court or arbitration acceptance as a valuation expert is a critical credibility indicator.
          </p>

          <h2>Property Valuation</h2>
          <p>
            Property and land valuation expert witnesses must hold MRICS or FRICS (Member or Fellow of the Royal Institution of Chartered Surveyors) with RICS Registered Valuer status. For court proceedings, RICS Expert Witness qualification or accreditation through the Academy of Experts adds further credibility. All property expert evidence must comply with the RICS Red Book (Valuation Global Standards) and CPR Part 35.
          </p>

          <h2>Plant and Machinery</h2>
          <p>
            Plant and machinery valuation expert witnesses typically hold MRICS or FRICS with a Plant and Machinery specialism, or membership of the Machinery, Equipment and Business Assets Appraisers Association (MEBAA). RICS publishes specific guidance notes for plant and machinery valuation. CPR Part 35 expert report experience and prior court acceptance are essential.
          </p>

          <h2>Art and Specialist Assets</h2>
          <p>
            Art, antiques, and specialist asset valuation expert witnesses hold sector-specific credentials rather than a single professional body qualification. Relevant backgrounds include auction house expertise, Fellow of the Royal Institution of Chartered Surveyors (Fine Art), professional body membership in the relevant sector, and demonstrated prior litigation experience. Credentials vary by asset type: fine art, jewellery, wine, agricultural assets, and classic vehicles each have their own specialist communities.
          </p>

          <h2>Financial Instruments</h2>
          <p>
            Financial instruments valuation expert witnesses typically hold CFA (Chartered Financial Analyst) with specific experience in the instrument type at issue. FCA-regulated background or specialist derivatives and structured finance experience is important for credibility with courts and opposing experts. Complex instrument valuation requires both quantitative modelling skills and litigation experience.
          </p>

          <h2>CPR Part 35: All Disciplines</h2>
          <p>
            Regardless of discipline, all valuation expert witnesses in UK civil proceedings must comply with CPR Part 35 and Practice Direction 35. Key requirements include:
          </p>
          <ul>
            <li>The expert&apos;s duty is to the court, overriding any obligation to the instructing party</li>
            <li>Expert reports must include a statement of truth and declaration of compliance</li>
            <li>Experts must state when a question falls outside their expertise</li>
            <li>Experts must provide independent opinion evidence, not advocate for the instructing party</li>
            <li>Joint expert meetings should be held to narrow areas of disagreement</li>
          </ul>
          <p>
            In Inspired Education Online Ltd v Crombie [2025] EWHC 1236 (Ch), the court found that valuation expert evidence was fatally undermined by instructions not consistent with commonly used definitions of market value, a lack of rigour, and a somewhat partial approach. Solicitors must ensure instructions use standard valuation definitions and that experts demonstrate independence and rigour in their analysis.
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
