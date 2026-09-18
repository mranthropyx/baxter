import Reveal from "./Reveal";

const principles = [
  {
    n: "01",
    title: "Steel & Glass",
    desc: "Honest materials, detailed once and detailed right. No disguised structure, no applied ornament.",
  },
  {
    n: "02",
    title: "Cantilever Mastery",
    desc: "Weight held in equilibrium — the discipline of the extended plane, from pavilion roofs to court towers.",
  },
  {
    n: "03",
    title: "Civic Longevity",
    desc: "Rooms drawn for their second century, not their first press release. Maintenance is part of the design.",
  },
];

export default function Manifesto() {
  return (
    <section id="practice" className="relative scroll-mt-16 border-b-2 border-ink bg-paper bg-grid-ink">
      <div className="mx-auto max-w-[1700px] px-4 py-20 md:px-8 md:py-28">
        {/* kicker */}
        <Reveal className="flex items-center justify-between gap-4 border-b-2 border-ink pb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70">
          <span>02 — The Practice</span>
          <span className="hidden sm:inline">Statement</span>
          <span>Est. 1968</span>
        </Reveal>

        {/* poster headline */}
        <Reveal delay={60}>
          <h2 className="mt-10 text-balance font-display text-[clamp(2.4rem,6.5vw,6.25rem)] font-bold uppercase leading-[1.2] tracking-tight text-ink">
            Structural honesty{" "}
            <span className="box-decoration-clone bg-yellow px-2">since 1968</span>
          </h2>
        </Reveal>

        <Reveal delay={160} className="mt-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-ink/75 md:text-xl">
            Most firms build for a quarter. We build for a century. BAXTER treats every commission as a
            civic trust — detailed once, detailed right, and maintained for the next hundred years.
          </p>
        </Reveal>

        {/* core principles */}
        <Reveal delay={100} className="mt-16 md:mt-24">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((p) => (
              <div key={p.n} className="border-t-2 border-ink pt-6">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-bold leading-[1.2] text-ink md:text-6xl">{p.n}</span>
                  <span className="h-3 w-3 shrink-0 bg-yellow" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-[1.2] tracking-tight text-ink md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/70">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
            The principles of the office — unchanged since 1968.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
