import { ArrowUpRight } from "lucide-react";

function scrollToInquiry() {
  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex h-16 max-w-[1700px] items-center justify-between gap-4 px-4 md:px-8">
        {/* brand */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-baseline gap-3"
        >
          <span className="font-display text-2xl font-bold leading-none tracking-tight text-ink">
            BAXTER
            <span className="ml-0.5 align-top text-[10px] font-bold leading-none">®</span>
          </span>
          <span className="hidden text-[11px] font-semibold uppercase leading-none tracking-[0.18em] text-ink/60 sm:inline">
            Architecture &amp; Construction
          </span>
        </a>

        {/* location */}
        <p className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/60 lg:block">
          Austin, TX — Est. 1968
        </p>

        {/* CTA */}
        <button type="button" className="btn btn-yellow" onClick={scrollToInquiry}>
          Estimate Project
          <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
