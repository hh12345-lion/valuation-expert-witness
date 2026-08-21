import Link from "next/link";

export default function AlertBanner() {
  return (
    <div className="border-b border-highlight/30 bg-highlight/10">
      <div className="page-container py-2.5">
        <p className="text-sm leading-relaxed text-body break-words">
          <span className="mr-1 font-semibold text-highlight">Case law note:</span>
          Inspired Education v Crombie [2025] confirms that valuation expert evidence must use
          instructions consistent with standard market value definitions and show rigour and
          independence.{" "}
          <Link
            href="/guides/valuation-expert-instruction-guide"
            className="font-semibold text-accent underline transition-colors hover:text-highlight"
          >
            Read the instruction guide
          </Link>
        </p>
      </div>
    </div>
  );
}
