import { ArrowDown, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Parallax from "./Parallax";
import SkyscraperElevation from "./SkyscraperElevation";

function scrollToInquiry() {
  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const stats: Array<{ to: number; suffix: string; label: string }> = [
  { to: 58, suffix: "", label: "Years of practice" },
  { to: 340, suffix: "+", label: "Projects built" },
  { to: 12, suffix: "", label: "International awards" },
];

export default function Hero() {
  return (
    <section id="top" className="cad-zone relative overflow-hidden bg-ink pt-16 text-paper">
      {/* parallax grid layer */}
      <div className="absolute inset-[-12%_0]" aria-hidden="true">
        <Parallax speed={0.05} className="h-full w-full">
          <div className="bg-grid-dark h-full w-full" />
        </Parallax>
      </div>

      {/* semi-transparent technical blueprint overlay */}
      <div className="absolute right-0 top-24 hidden w-[42rem] max-w-none opacity-[0.13] xl:block" aria-hidden="true">
        <Parallax speed={0.09}>
          <SkyscraperElevation className="h-auto w-full" />
        </Parallax>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-[1700px] flex-col px-4 pb-8 pt-10 md:px-8 md:pt-14">
        {/* kicker row */}
        <Reveal className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-paper/25 pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/80">
          <span>Architecture &amp; Construction</span>
          <span>Austin, TX — Est. 1968</span>
        </Reveal>

        {/* headline */}
        <div className="mt-12 max-w-4xl md:mt-16">
          <Reveal delay={80}>
            <h1 className="text-balance font-display text-[clamp(2.9rem,8vw,7.5rem)] font-bold uppercase leading-[1.2] tracking-tight">
              We build for <span className="text-yellow">duration.</span>
            </h1>
          </Reveal>

          <Reveal delay={180} className="mt-8 max-w-xl">
            <p className="text-[15px] font-medium leading-relaxed text-paper/80 md:text-base">
              A third-generation architectural practice working in steel, glass, and concrete. Since 1968,
              BAXTER has drawn structures detailed once, built right, and maintained for their second
              century.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-6 max-w-xl border-l-4 border-yellow pl-5">
            <p className="font-display text-lg font-bold uppercase leading-snug tracking-wide text-paper md:text-xl">
              Every line is a load path. Every slab is a promise kept.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-9 flex flex-wrap items-center gap-4">
            <button type="button" className="btn btn-yellow" onClick={scrollToInquiry}>
              Estimate Project
              <ArrowUpRight size={15} strokeWidth={2.5} aria-hidden="true" />
            </button>
            <a href="#projects" className="btn btn-ghost-light">
              View Selected Works
            </a>
          </Reveal>
        </div>

        {/* animated counters */}
        <Reveal delay={150} className="mt-auto pt-14">
          <div className="grid grid-cols-1 border-t-2 border-paper/25 sm:grid-cols-3">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-6 pr-6 ${
                  i !== 0 ? "sm:border-l-2 sm:border-paper/25 sm:pl-6" : ""
                } ${i !== 2 ? "border-b-2 border-paper/25 sm:border-b-0" : ""}`}
              >
                <p className="font-display text-5xl font-bold leading-[1.2] tracking-tight md:text-6xl">
                  <Counter to={s.to} />
                  {s.suffix && <span className="text-yellow">{s.suffix}</span>}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60 md:text-[11px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* scroll cue */}
        <div className="pointer-events-none relative z-10 mt-6 hidden items-center gap-2 xl:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-paper/60">
            Scroll to examine
          </span>
          <ArrowDown size={16} className="animate-bounce text-yellow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
