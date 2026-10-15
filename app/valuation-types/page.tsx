import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import HubRelatedLinks from "@/components/HubRelatedLinks";
import JsonLd from "@/components/JsonLd";
import { valuationTypesFaqs } from "@/lib/data/valuation-types-faqs";
import { getValuationTypesRelatedLinks } from "@/lib/seo/internalLinks";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/metadata";
import { photoFor } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Types of Valuation in UK Litigation | Business, Property, IP & Specialist Assets",
  description:
    "The complete guide to types of valuation required in UK litigation: business valuation, property valuation, IP valuation, plant and machinery, art, financial instruments, and when each is needed.",
  path: "/valuation-types",
});

export default function ValuationTypesPage() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: "Types of Valuation in UK Litigation: The Complete Guide",
            description:
              "The complete guide to types of valuation required in UK litigation across all asset types and expert disciplines.",
            path: "/valuation-types",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Valuation Types", path: "/valuation-types" },
          ]),
          faqSchema(valuationTypesFaqs),
        ]}
      />
      <PageHero
        photo={photoFor("/valuation-types")}
        title="Types of Valuation in UK Litigation: The Complete Guide"
        subtitle="The definitive reference for UK solicitors on valuation expert evidence across all asset types, expert disciplines, valuation standards, and legal contexts."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Valuation Types" },
        ]}
      />
      <section className="py-12 md:py-16">
        <div className="page-container prose-content max-w-3xl min-w-0">
          <p>
            A valuation expert witness provides independent opinion evidence on the value of assets for UK courts and tribunals. Unlike transactional valuers who prepare valuations for deal purposes, valuation expert witnesses prepare CPR Part 35 compliant reports for litigation, give evidence under oath, and assist the court in understanding valuation methodology and conclusions. This guide covers every type of valuation required in UK litigation.
          </p>

          <h2>Why Valuation Expert Evidence Is Needed in Litigation</h2>
          <p>
            Most legal disputes that involve money ultimately involve valuation: what an asset was worth at a specific date, what it should be worth under different assumptions, or how its value has changed as a result of an event. Shareholder disputes require business valuation. Matrimonial proceedings require property and business valuations. Compulsory purchase requires land valuation. IP infringement requires damages quantification through valuation. Insurance claims require asset valuation under the applicable policy basis.
          </p>
          <p>
            The court cannot determine these questions without expert evidence from a qualified professional in the relevant discipline. The expert&apos;s duty is to the court, not to the instructing party, and the expert must provide independent opinion evidence that assists the court in reaching its decision.
          </p>

          <h2>The Three Expert Disciplines</h2>
          <p>
            Valuation expert witnesses in UK litigation fall into three distinct professional disciplines, each covering different asset types:
          </p>
          <div className="prose-table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Discipline</th>
                  <th>Asset Types</th>
                  <th>Primary Credential</th>
                  <th>Court Framework</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Forensic Accountant</td>
                  <td>Business, shares, goodwill, IP (financial)</td>
                  <td>ACA/FCA, CVA, CFA</td>
                  <td>CPR Part 35</td>
                </tr>
                <tr>
                  <td>Chartered Surveyor</td>
                  <td>Property, land, plant and machinery</td>
                  <td>MRICS/FRICS, RICS Registered Valuer</td>
                  <td>CPR Part 35</td>
                </tr>
                <tr>
                  <td>Specialist Valuer</td>
                  <td>Art, antiques, financial instruments, specialist assets</td>
                  <td>Sector-specific</td>
                  <td>CPR Part 35</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Business Valuation</h2>
          <p>
            Business valuation is the process of determining the economic value of a trading company, investment holding, or shareholding. In UK litigation, business valuation expert witnesses are typically forensic accountants or chartered accountants with specialist valuation experience.
          </p>
          <p>
            The three primary methodologies are maintainable earnings (applying an EBITDA multiple to normalised profits for stable trading businesses), discounted cash flow (for growth companies with predictable cash flow projections), and net asset value (for property or investment companies). The expert must justify the chosen methodology and address the specific legal context.
          </p>
          <p>
            Key legal contexts include S994 unfair prejudice proceedings (fair value, typically without minority discount), matrimonial financial remedy (fair value as at the relevant date), HMRC Shares and Assets Valuation challenges (market value for IHT, CGT, and ERS), and international arbitration (fair market value or DCF depending on the claim).
          </p>
          <p>
            <Link href="/asset-types/business-share-valuation">Business and share valuation expert witnesses</Link>
          </p>

          <h2>Property Valuation</h2>
          <p>
            Property valuation expert witnesses are RICS chartered surveyors who provide independent opinions on the value of residential, commercial, industrial, agricultural, and development land. All property expert evidence must comply with the RICS Red Book (Valuation Global Standards), with VPS 4 applying specifically to valuations for litigation.
          </p>
          <p>
            Residential valuations use comparable sales with adjustments for location, size, condition, and tenure. Commercial valuations may use the investment method (capitalisation of rental income), comparable sales, or residual method for development land. The expert must justify the approach for the specific property type.
          </p>
          <p>
            Key legal contexts include compulsory purchase (open market value absent the scheme), lease renewal under the Landlord and Tenant Act 1954 (open market rent), matrimonial proceedings (open market value), professional negligence claims against surveyors, and SDLT disputes.
          </p>
          <p>
            <Link href="/asset-types/property-land-valuation">Property and land valuation expert witnesses</Link>
          </p>

          <h2>Intellectual Property Valuation</h2>
          <p>
            Intellectual property valuation determines the economic value of patents, trade marks, copyright, know-how, and brand assets. The relief from royalty method is most commonly used in UK IP litigation: estimating the royalty payments the owner avoids by owning rather than licensing the IP, discounted to present value.
          </p>
          <p>
            Lost profits analysis applies where infringement caused identifiable sales losses. Brand valuation uses income, market, or cost approaches depending on available data. The claimant in IP infringement proceedings must elect between compensatory damages and account of profits, and the valuation expert calculates both.
          </p>
          <p>
            <Link href="/asset-types/intellectual-property-valuation">Intellectual property valuation expert witnesses</Link>
          </p>

          <h2>Plant and Machinery Valuation</h2>
          <p>
            Plant and machinery valuation covers manufacturing equipment, industrial machinery, agricultural plant, and medical equipment. The choice between market value and depreciated replacement cost (DRC) significantly affects the outcome. Market value applies where an active second-hand market exists. DRC is used where no active market exists for the specific type of plant.
          </p>
          <p>
            Key legal contexts include insurance claims (reinstatement vs market value basis), compulsory purchase (compensation for plant and equipment), matrimonial disputes, and professional negligence claims against valuers.
          </p>
          <p>
            <Link href="/asset-types/plant-machinery-valuation">Plant and machinery valuation expert witnesses</Link>
          </p>

          <h2>Art, Antiques and Chattels</h2>
          <p>
            Art, antiques, and chattels valuation uses market comparables as the primary methodology: identifying comparable items sold at auction or through dealers in the period around the relevant date. The expert must address condition, provenance, attribution, and the specific market sector for the item type.
          </p>
          <p>
            Key legal contexts include probate disputes (contested estate valuations), matrimonial proceedings (art and jewellery as matrimonial assets), insurance claims (damaged or stolen artwork), and professional negligence claims against valuers or auction houses.
          </p>
          <p>
            <Link href="/asset-types/art-antiques-chattels">Art, antiques and chattels valuation expert witnesses</Link>
          </p>

          <h2>Financial Instruments</h2>
          <p>
            Financial instruments valuation covers derivatives, bonds, structured products, and options. Complex instruments are valued using market-standard pricing models: Black-Scholes for options, DCF for bonds and structured products, and mark-to-market for exchange-traded instruments.
          </p>
          <p>
            Key legal contexts include ISDA close-out valuation disputes (commercially reasonable standard), investment management disputes, fair value accounting disputes under IFRS 13, and fraud proceedings involving complex financial products.
          </p>
          <p>
            <Link href="/asset-types/financial-instruments-securities">Financial instruments valuation expert witnesses</Link>
          </p>

          <h2>When Multiple Valuation Experts Are Needed</h2>
          <p>
            Complex disputes involving multiple asset classes require multiple valuation experts across different disciplines:
          </p>
          <div className="prose-table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Dispute Type</th>
                  <th>Valuation Experts Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complex divorce with business and property</td>
                  <td>Business valuation expert + RICS surveyor</td>
                </tr>
                <tr>
                  <td>M&A dispute with IP and equipment</td>
                  <td>Business valuation + IP valuer + plant valuer</td>
                </tr>
                <tr>
                  <td>Estate dispute</td>
                  <td>RICS surveyor + art valuer + business valuer</td>
                </tr>
                <tr>
                  <td>Insurance claim</td>
                  <td>Plant valuer + specialist asset valuer</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Valuation Standards in UK Litigation</h2>
          <div className="prose-table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Asset Type</th>
                  <th>Applicable Standard</th>
                  <th>Regulator</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Businesses</td>
                  <td>No single standard: professional practice</td>
                  <td>ICAEW, ACCA</td>
                </tr>
                <tr>
                  <td>Property</td>
                  <td>RICS Red Book (VPS 4)</td>
                  <td>RICS</td>
                </tr>
                <tr>
                  <td>Plant and Machinery</td>
                  <td>RICS Guidance Note</td>
                  <td>RICS</td>
                </tr>
                <tr>
                  <td>Financial instruments</td>
                  <td>IFRS 13 (fair value)</td>
                  <td>IASB/FRC</td>
                </tr>
                <tr>
                  <td>All expert evidence</td>
                  <td>CPR Part 35</td>
                  <td>Civil Procedure Rules</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Key Valuation Concepts</h2>
          <p>
            <strong>Fair Market Value:</strong> The price a willing buyer would pay a willing seller, both acting rationally, in an open market. The standard in international arbitration and many commercial contexts.
          </p>
          <p>
            <strong>Fair Value (S994):</strong> The legal concept in unfair prejudice proceedings. Typically means the petitioner's shares are valued as a proportionate share of the whole company without applying a minority discount.
          </p>
          <p>
            <strong>Market Value (RICS):</strong> The estimated amount for which an asset should exchange on the date of valuation between a willing buyer and a willing seller in an arm's length transaction, after proper marketing. The RICS Red Book standard definition.
          </p>
          <p>
            <strong>Forced Sale Value:</strong> The price achievable under compulsion or within a restricted marketing period, typically below market value. Relevant in insolvency and certain insurance contexts.
          </p>
          <p>
            <strong>Depreciated Replacement Cost:</strong> The cost of a modern equivalent asset less accumulated depreciation. Used for specialist assets with no active market.
          </p>

          <h2>CPR Part 35: Applies to All Valuation Disciplines</h2>
          <p>
            CPR Part 35 governs expert evidence in civil proceedings in England and Wales and applies to all valuation expert disciplines equally. Key requirements include:
          </p>
          <ul>
            <li>The expert&apos;s duty is to the court, overriding any obligation to the instructing party</li>
            <li>The expert must provide independent opinion evidence to assist the court</li>
            <li>Expert reports must include a statement of truth and declaration of compliance with CPR Part 35</li>
            <li>Experts must state when a question or issue falls outside their expertise</li>
            <li>Joint expert meetings should be held to narrow areas of disagreement before trial</li>
            <li>The court may direct a single joint expert where appropriate</li>
          </ul>
          <p>
            In matrimonial proceedings, FPR Part 25 applies equivalent requirements. The Ikarian Reefer principles establish that expert evidence must be independent, and the expert must not adopt a partial approach. The Inspired Education v Crombie [2025] case reinforces that instructions must be consistent with standard valuation definitions.
          </p>
          <p>
            <Link href="/how-to-instruct">How to instruct a valuation expert witness</Link> |{" "}
            <Link href="/qualifications">Valuation expert qualifications</Link> |{" "}
            <Link href="/glossary">Valuation glossary</Link>
          </p>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion faqs={valuationTypesFaqs} />

          <HubRelatedLinks
            title="Related valuation resources"
            links={getValuationTypesRelatedLinks()}
          />
        </div>
      </section>
      <CTASection />
    </>
  );
}
