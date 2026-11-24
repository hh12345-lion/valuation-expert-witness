import type { DetailPageItem } from "./types";

export const assetTypes: DetailPageItem[] = [
  {
    slug: "business-share-valuation",
    title: "Business & Share Valuation Expert Witness UK",
    shortTitle: "Business & Shares",
    metaTitle: "Business & Share Valuation Expert Witness UK",
    metaDescription:
      "Business and share valuation expert witnesses for UK litigation. DCF, maintainable earnings, NAV, S994 fair value, matrimonial and HMRC SAV disputes.",
    paragraphs: [
      "Business and share valuation expert witnesses are typically forensic accountants or chartered accountants with specialist valuation experience. They provide independent opinions on the value of trading companies, investment holdings, and minority shareholdings for High Court Chancery proceedings, matrimonial financial remedy cases, HMRC Shares and Assets Valuation challenges, and international arbitration.",
      "The methodology applied depends on the business type and legal context. For stable trading businesses, maintainable earnings (applying an EBITDA multiple to normalised profits) is most common. For growth companies, discounted cash flow applies. For property or investment companies, net asset value is standard. The expert must justify the chosen methodology and address the specific legal context: S994 fair value, matrimonial fair value, or HMRC market value each require different treatment.",
      "Minority discount is a critical issue in shareholder disputes under Companies Act 2006 s994, where courts typically order valuation at fair value without applying a minority discount. In matrimonial proceedings, business interests are valued at fair value as at the relevant date. HMRC's SAV team routinely challenges business valuations submitted for IHT, CGT, and employment related securities purposes.",
    ],
    faqs: [
      {
        question:
          "What methodology does a business valuation expert witness use in UK litigation?",
        answer:
          "The methodology depends on the business type and legal context. For stable trading businesses, maintainable earnings (applying an EBITDA multiple to normalised profits) is most common. For growth companies, DCF applies. For property or investment companies, net asset value is standard. The expert must justify the chosen methodology and address the specific legal context. S994 fair value, matrimonial fair value, or HMRC market value each require different treatment.",
      },
      {
        question:
          "What credentials should a business valuation expert witness hold?",
        answer:
          "ACA or FCA (ICAEW) is the core UK credential. CVA or CFA adds specialist valuation qualification. ICAEW Forensic Accreditation confirms expert witness experience. Prior court or arbitration acceptance as a valuation expert is a critical credibility indicator.",
      },
    ],
    relatedCaseTypes: [
      { label: "Shareholder Disputes", href: "/case-types/shareholder-disputes-business-valuation" },
      { label: "Divorce & Matrimonial", href: "/case-types/divorce-matrimonial-valuation" },
      { label: "Tax Valuation Disputes", href: "/case-types/tax-valuation-disputes" },
    ],
    relatedServices: [
      { label: "Business & Share Valuation", href: "/services#business-share-valuation" },
      { label: "Goodwill & Intangibles", href: "/services#goodwill-intangibles" },
    ],
  },
  {
    slug: "property-land-valuation",
    title: "Property & Land Valuation Expert Witness UK",
    shortTitle: "Property & Land",
    metaTitle: "Property & Land Valuation Expert Witness UK | RICS",
    metaDescription:
      "RICS property and land valuation expert witnesses for UK litigation. Residential, commercial, compulsory purchase, lease renewal, and professional negligence.",
    paragraphs: [
      "Property and land valuation expert witnesses are RICS chartered surveyors who provide independent opinions on the value of residential, commercial, industrial, agricultural, and development land for UK courts and tribunals. All property expert evidence must comply with the RICS Red Book (Valuation Global Standards) and CPR Part 35.",
      "Property valuation disputes arise across a wide range of legal contexts: professional negligence claims against surveyors; compulsory purchase compensation before the Upper Tribunal (Lands Chamber); lease renewal rent reviews under the Landlord and Tenant Act 1954; matrimonial proceedings where property is a matrimonial asset; SDLT disputes; and planning appeal valuations.",
      "RICS chartered surveyors with MRICS or FRICS status and RICS Registered Valuer designation are the essential qualification for property valuation expert witnesses. For court proceedings, RICS Expert Witness qualification or accreditation through the Academy of Experts adds further credibility.",
    ],
    faqs: [
      {
        question:
          "What credentials should a property valuation expert witness hold?",
        answer:
          "MRICS or FRICS (Royal Institution of Chartered Surveyors) is the essential qualification, with RICS Registered Valuer status. For court proceedings, RICS Expert Witness qualification or accreditation through the Academy of Experts adds further credibility. CPR Part 35 and Red Book (RICS Valuation Global Standards) compliance is essential for all property expert evidence.",
      },
      {
        question:
          "What property disputes most commonly require valuation expert witnesses?",
        answer:
          "The most common property valuation disputes include: professional negligence claims against surveyors; compulsory purchase compensation; lease renewal rent reviews (Landlord and Tenant Act 1954); matrimonial proceedings where property is a matrimonial asset; SDLT disputes; and planning appeal valuations.",
      },
    ],
    relatedCaseTypes: [
      { label: "Compulsory Purchase", href: "/case-types/compulsory-purchase-valuation" },
      { label: "Lease Renewal & Rent Review", href: "/case-types/lease-renewal-rent-review" },
      { label: "Professional Negligence", href: "/case-types/professional-negligence-valuation" },
    ],
    relatedServices: [
      { label: "Property & Land Valuation", href: "/services#property-land-valuation" },
    ],
  },
  {
    slug: "intellectual-property-valuation",
    title: "Intellectual Property Valuation Expert Witness UK",
    shortTitle: "Intellectual Property",
    metaTitle: "Intellectual Property Valuation Expert Witness UK",
    metaDescription:
      "IP valuation expert witnesses for UK litigation. Patents, trade marks, copyright, relief from royalty, lost profits, and brand valuation.",
    paragraphs: [
      "Intellectual property valuation expert witnesses provide independent opinions on the value of patents, trade marks, copyright, know-how, and brand assets for IP infringement proceedings, licensing disputes, matrimonial cases involving business IP, and M&A disputes. IP valuation requires both financial valuation expertise and understanding of the specific IP asset type.",
      "The relief from royalty method is most commonly used in UK IP litigation: estimating the royalty payments the owner avoids by owning rather than licensing the IP, discounted to present value. Lost profits analysis applies where infringement caused identifiable sales losses. Brand valuation uses income approach, market approach, or cost approach depending on the available data.",
      "IP valuation expert witnesses are typically chartered accountants with specialist IP valuation experience, chartered financial analysts, or specialist IP valuation practitioners. For patent disputes, additional technical expertise in the patent subject matter may be needed alongside the financial valuation expert.",
    ],
    faqs: [
      {
        question: "How is intellectual property valued for litigation purposes?",
        answer:
          "The relief from royalty method is most commonly used in UK IP litigation: estimating the royalty payments the owner avoids by owning rather than licensing the IP, discounted to present value. Lost profits analysis applies where infringement caused identifiable sales losses. Brand valuation uses income approach, market approach, or cost approach depending on the available data.",
      },
      {
        question: "Who is qualified to value intellectual property for litigation?",
        answer:
          "IP valuation expert witnesses are typically chartered accountants with specialist IP valuation experience, chartered financial analysts, or specialist IP valuation practitioners. For patent disputes, additional technical expertise in the patent subject matter may be needed alongside the financial valuation expert.",
      },
    ],
    relatedCaseTypes: [
      { label: "IP Infringement", href: "/case-types/ip-infringement-valuation" },
      { label: "Shareholder Disputes", href: "/case-types/shareholder-disputes-business-valuation" },
    ],
    relatedServices: [
      { label: "Intellectual Property Valuation", href: "/services#intellectual-property-valuation" },
    ],
  },
  {
    slug: "plant-machinery-valuation",
    title: "Plant & Machinery Valuation Expert Witness UK",
    shortTitle: "Plant & Machinery",
    metaTitle: "Plant & Machinery Valuation Expert Witness UK",
    metaDescription:
      "Plant and machinery valuation expert witnesses for UK litigation. Manufacturing, industrial, agricultural equipment, market value and DRC.",
    paragraphs: [
      "Plant and machinery valuation expert witnesses provide independent opinions on the value of manufacturing equipment, industrial machinery, agricultural plant, medical equipment, and business assets for insurance claims, compulsory purchase proceedings, matrimonial disputes, and professional negligence claims against valuers.",
      "The choice between market value and depreciated replacement cost (DRC) significantly affects the valuation outcome. Market value is the price the plant would achieve in an open market transaction. DRC calculates the cost of a modern equivalent asset less accumulated depreciation, used where no active market exists for the specific type of plant.",
      "Specialist plant and machinery valuers typically hold MRICS or FRICS with a Plant and Machinery specialism, or membership of the Machinery, Equipment and Business Assets Appraisers Association (MEBAA). For litigation, CPR Part 35 expert report experience and prior court acceptance are essential markers.",
    ],
    faqs: [
      {
        question:
          "What is the difference between market value and depreciated replacement cost for plant?",
        answer:
          "Market value is the price the plant would achieve in an open market transaction. Depreciated replacement cost (DRC) calculates the cost of a modern equivalent asset less accumulated depreciation, used where no active market exists for the specific type of plant. The choice of basis significantly affects the valuation and the expert must justify which is appropriate for the specific litigation context.",
      },
      {
        question:
          "What credentials should a plant and machinery valuation expert hold?",
        answer:
          "Specialist plant and machinery valuers typically hold MRICS or FRICS with a Plant and Machinery specialism, or membership of the Machinery, Equipment and Business Assets Appraisers Association (MEBAA). For litigation, CPR Part 35 expert report experience and prior court acceptance are essential markers.",
      },
    ],
    relatedCaseTypes: [
      { label: "Insurance Valuation Disputes", href: "/case-types/insurance-valuation-disputes" },
      { label: "Compulsory Purchase", href: "/case-types/compulsory-purchase-valuation" },
    ],
    relatedServices: [
      { label: "Plant & Machinery Valuation", href: "/services#plant-machinery-valuation" },
    ],
  },
  {
    slug: "art-antiques-chattels",
    title: "Art, Antiques & Chattels Valuation Expert Witness UK",
    shortTitle: "Art & Chattels",
    metaTitle: "Art, Antiques & Chattels Valuation Expert Witness UK",
    metaDescription:
      "Art, antiques, jewellery, and chattels valuation expert witnesses for UK probate, matrimonial, and insurance litigation.",
    paragraphs: [
      "Art, antiques, and chattels valuation expert witnesses provide independent opinions on the value of fine art, antiques, jewellery, watches, wine, collectibles, and personal property for probate disputes, matrimonial proceedings, insurance claims, and professional negligence claims against valuers or auction houses.",
      "The primary methodology is market comparables: identifying comparable items sold at auction or through dealers in the period around the relevant date and applying those comparables to the subject item. The expert must address condition, provenance, attribution, and the specific market sector for the item type.",
      "Art and chattels valuation expert witnesses are most commonly needed in probate disputes where the value of personal property in an estate is contested; matrimonial proceedings where art, jewellery, or collectibles are matrimonial assets; insurance claims where the insurer disputes the value of damaged or stolen artwork; and professional negligence claims against valuers or auction houses.",
    ],
    faqs: [
      {
        question: "When is an art valuation expert witness needed in litigation?",
        answer:
          "Art and chattels valuation expert witnesses are most commonly needed in: probate disputes (where the value of personal property in an estate is contested); matrimonial proceedings (where art, jewellery, or collectibles are matrimonial assets); insurance claims (where the insurer disputes the value of a damaged or stolen artwork); and professional negligence claims against valuers or auction houses.",
      },
      {
        question: "How are art and antiques valued for litigation?",
        answer:
          "The primary methodology is market comparables: identifying comparable items sold at auction or through dealers in the period around the relevant date and applying those comparables to the subject item. The expert must address condition, provenance, attribution, and the specific market sector for the item type.",
      },
    ],
    relatedCaseTypes: [
      { label: "Probate & Estate Disputes", href: "/case-types/probate-estate-disputes" },
      { label: "Divorce & Matrimonial", href: "/case-types/divorce-matrimonial-valuation" },
    ],
    relatedServices: [
      { label: "Art, Antiques & Chattels", href: "/services#art-antiques-chattels" },
    ],
  },
  {
    slug: "financial-instruments-securities",
    title: "Financial Instruments & Securities Valuation Expert Witness UK",
    shortTitle: "Financial Instruments",
    // Previously "Financial Instruments & Securities Valuation Expert Witness UK" (too long; it was cut mid-phrase in results).
    metaTitle: "Financial Instruments & Securities Valuation Expert",
    metaDescription:
      "Financial instruments and securities valuation expert witnesses for UK litigation. Derivatives, bonds, ISDA close-out, and fair value disputes.",
    paragraphs: [
      "Financial instruments and securities valuation expert witnesses provide independent opinions on the value of derivatives, bonds, structured products, options, and complex financial instruments for investment management disputes, ISDA close-out valuation proceedings, fair value accounting disputes, and fraud proceedings.",
      "Complex financial instruments are valued using market-standard pricing models: Black-Scholes for options, DCF for bonds and structured products, and mark-to-market for exchange-traded instruments. The expert must identify the appropriate model, justify the inputs used, and address any uncertainty or range in the valuation.",
      "CFA (Chartered Financial Analyst) is the primary credential for financial instrument valuation experts, combined with specific experience in the instrument type at issue. FCA-regulated background or specialist derivatives and structured finance experience is important for credibility with courts and opposing experts.",
    ],
    faqs: [
      {
        question: "How are complex financial instruments valued for litigation?",
        answer:
          "Complex financial instruments are valued using market-standard pricing models: Black-Scholes for options, DCF for bonds and structured products, and mark-to-market for exchange-traded instruments. The expert must identify the appropriate model, justify the inputs used, and address any uncertainty or range in the valuation, particularly important in ISDA close-out disputes where the commercially reasonable standard applies.",
      },
      {
        question:
          "What qualifications should a financial instruments valuation expert hold?",
        answer:
          "CFA (Chartered Financial Analyst) is the primary credential for financial instrument valuation experts, combined with specific experience in the instrument type at issue. FCA-regulated background or specialist derivatives and structured finance experience is important for credibility with courts and opposing experts.",
      },
    ],
    relatedCaseTypes: [
      { label: "International Arbitration", href: "/case-types/international-arbitration-valuation" },
      { label: "Tax Valuation Disputes", href: "/case-types/tax-valuation-disputes" },
    ],
    relatedServices: [
      { label: "Financial Instruments & Securities", href: "/services#financial-instruments-securities" },
    ],
  },
  {
    slug: "goodwill-intangible-assets",
    title: "Goodwill & Intangible Asset Valuation Expert Witness UK",
    shortTitle: "Goodwill & Intangibles",
    metaTitle: "Goodwill & Intangible Asset Valuation Expert Witness UK",
    metaDescription:
      "Goodwill and intangible asset valuation expert witnesses for UK litigation. Personal vs business goodwill, IFRS 3, and HMRC challenges.",
    paragraphs: [
      "Goodwill and intangible asset valuation expert witnesses provide independent opinions on the value of business goodwill, customer relationships, brand value, non-compete agreements, and other intangible assets for partnership dissolution, professional practice disputes, HMRC goodwill challenges on incorporation, purchase price allocation under IFRS 3, and matrimonial proceedings.",
      "The critical issue is separating personal goodwill (not transferable, no realisable value) from business goodwill (transferable to a buyer, has market value). Where goodwill must be valued separately from the overall business, the expert applies income-based approaches (capitalisation of excess earnings) or market-based approaches (comparable transactions in the same sector).",
      "Independent goodwill valuation is needed in partnership and LLP dissolution, professional practice disputes, HMRC challenges to goodwill value on business incorporation, purchase price allocation for accounting under IFRS 3, and matrimonial proceedings where goodwill forms part of a business asset.",
    ],
    faqs: [
      {
        question: "How is goodwill valued separately from a business?",
        answer:
          "Where goodwill must be valued separately from the overall business, for example in a professional practice dispute, a matrimonial case, or an HMRC goodwill challenge on incorporation, the expert applies income-based approaches (capitalisation of excess earnings) or market-based approaches (comparable transactions in the same sector). The critical issue is separating personal goodwill (not transferable, no realisable value) from business goodwill (transferable to a buyer, has market value).",
      },
      {
        question: "When does goodwill need to be independently valued?",
        answer:
          "Independent goodwill valuation is needed in: partnership and LLP dissolution (goodwill on retirement); professional practice disputes; HMRC challenges to goodwill value on business incorporation; purchase price allocation for accounting (IFRS 3); and matrimonial proceedings where goodwill forms part of a business asset.",
      },
    ],
    relatedCaseTypes: [
      { label: "Shareholder Disputes", href: "/case-types/shareholder-disputes-business-valuation" },
      { label: "Divorce & Matrimonial", href: "/case-types/divorce-matrimonial-valuation" },
      { label: "Tax Valuation Disputes", href: "/case-types/tax-valuation-disputes" },
    ],
    relatedServices: [
      { label: "Goodwill & Intangibles", href: "/services#goodwill-intangibles" },
      { label: "Business & Share Valuation", href: "/services#business-share-valuation" },
    ],
  },
  {
    slug: "specialist-assets",
    title: "Specialist Asset Valuation Expert Witness UK",
    shortTitle: "Specialist Assets",
    metaTitle: "Specialist Asset Valuation Expert Witness UK | Livestock, Crops & More",
    metaDescription:
      "Specialist asset valuation expert witnesses for UK litigation. Agricultural assets, classic vehicles, wine collections, cryptocurrency, and more.",
    paragraphs: [
      "Specialist asset valuation expert witnesses provide independent opinions on assets that fall outside mainstream valuation categories: agricultural assets (livestock, crops, milk quotas), wine and whisky collections, classic and vintage vehicles, sports and racing assets, cryptocurrency and digital assets, and other niche asset classes requiring sector-specific expertise.",
      "Beyond the mainstream categories, specialist asset valuation expert witnesses are most commonly needed for agricultural assets in farm partnership disputes and rural land transactions; classic and vintage vehicles in insurance and estate disputes; wine and whisky collections in high-value estates and matrimonial proceedings; and cryptocurrency holdings in modern divorce and fraud proceedings.",
      "Cryptocurrency valuation requires both a digital assets specialist (to establish the holdings and their authenticity) and a financial expert (to apply appropriate valuation methodology: exchange rate at relevant date, liquidity discount for large positions, and volatility adjustment). The combination of digital forensics and valuation expertise is unique to this asset class.",
    ],
    faqs: [
      {
        question:
          "What specialist assets most commonly require valuation expert witnesses?",
        answer:
          "Beyond the mainstream categories, specialist asset valuation expert witnesses are most commonly needed for: agricultural assets (livestock, milk quota, growing crops) in farm partnership disputes and rural land transactions; classic and vintage vehicles in insurance and estate disputes; wine and whisky collections in high-value estates and matrimonial proceedings; and cryptocurrency holdings in modern divorce and fraud proceedings.",
      },
      {
        question: "Does cryptocurrency need a specialist valuation expert?",
        answer:
          "Cryptocurrency valuation requires both a digital assets specialist (to establish the holdings and their authenticity) and a financial expert (to apply appropriate valuation methodology: exchange rate at relevant date, liquidity discount for large positions, and volatility adjustment). The combination of digital forensics and valuation expertise is unique to this asset class.",
      },
    ],
    relatedCaseTypes: [
      { label: "Probate & Estate Disputes", href: "/case-types/probate-estate-disputes" },
      { label: "Divorce & Matrimonial", href: "/case-types/divorce-matrimonial-valuation" },
      { label: "Insurance Valuation Disputes", href: "/case-types/insurance-valuation-disputes" },
    ],
    relatedServices: [
      { label: "Specialist & Emerging Assets", href: "/services#specialist-emerging-assets" },
    ],
  },
];

export function getAssetType(slug: string): DetailPageItem | undefined {
  return assetTypes.find((a) => a.slug === slug);
}
