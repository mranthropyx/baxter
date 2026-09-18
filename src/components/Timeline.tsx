import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import Reveal from "./Reveal";

interface Era {
  year: string;
  tab: string;
  name: string;
  desc: string;
  approach: string;
  img: string;
  alt: string;
  caption: string;
  specs: Array<[string, string]>;
}

const ERAS: Era[] = [
  {
    year: "1968",
    tab: "1968",
    name: "The Founding Era",
    desc: "R. Baxter opens a two-desk studio in Austin. The first commissions are glass-and-steel villas — thin flat roofs and dramatic cantilevers floating over the Texas hill country.",
    approach: "Form follows optimism",
    img: "https://images.pexels.com/photos/11829072/pexels-photo-11829072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Mid-century glass and steel villa with cantilevered geometric volumes",
    caption: "Founding Era — Glass & steel villas",
    specs: [
      ["Material", "Glass + steel"],
      ["Signature", "Cantilevered villas"],
      ["Status", "Landmarked"],
    ],
  },
  {
    year: "1994",
    tab: "1994",
    name: "The Expansion Era",
    desc: "The practice grows to forty. Civic atriums and brutalist structural centers — long-span roofs and complex geometric framing, with structure as the only ornament.",
    approach: "Form follows structure",
    img: "https://images.pexels.com/photos/7316908/pexels-photo-7316908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Civic atrium with complex geometric roof framing in steel and glass",
    caption: "Expansion Era — Civic & structural centers",
    specs: [
      ["Material", "Structural steel"],
      ["Signature", "Geometric roof framing"],
      ["Status", "In service"],
    ],
  },
  {
    year: "Now",
    tab: "Present Day",
    name: "Present Day Practice",
    desc: "A third generation builds tall — sleek glass-and-concrete towers detailed with the same restraint, drawn to outlast their architects.",
    approach: "Form follows duration",
    img: "https://images.pexels.com/photos/19980868/pexels-photo-19980868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Sleek multi-story glass skyscraper in dynamic low-angle perspective under clear skies",
    caption: "Present Day — High-rise towers",
    specs: [
      ["Material", "Glass + concrete"],
      ["Signature", "High-rise towers"],
      ["Status", "In practice"],
    ],
  },
];

export default function Timeline() {
  const [index, setIndex] = useState(2);
  const [pos, setPos] = useState(2);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const era = ERAS[index];

  const posFromClientX = (clientX: number) => {
    const rect = trackRef.current!.getBoundingClientRect();
    return Math.min(2, Math.max(0, ((clientX - rect.left) / rect.width) * 2));
  };

  const snap = (p: number) => {
    const snapped = Math.round(Math.min(2, Math.max(0, p)));
    setIndex(snapped);
    setPos(snapped);
  };

  const selectEra = (i: number) => {
    setIndex(i);
    setPos(i);
  };

  const onThumbKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      selectEra(Math.min(2, index + 1));
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      selectEra(Math.max(0, index - 1));
    }
  };

  return (
    <section id="timeline" className="scroll-mt-16 border-t-2 border-ink bg-paper bg-grid-ink">
      <div className="mx-auto max-w-[1700px] px-4 py-20 md:px-8 md:py-28">
        {/* header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70">
              05 — The Timeline
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold uppercase leading-[1.2] tracking-tight text-ink">
              Three eras of{" "}
              <span className="box-decoration-clone bg-yellow px-2">practice</span>
            </h2>
          </div>
          <p className="max-w-xs text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-ink/60 md:text-xs">
            Drag the control or tap a tab. Six decades of the practice, one continuous standard.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-10">
          {/* era readout */}
          <Reveal delay={80}>
            <div key={index} className="era-in">
              <div className="flex flex-wrap items-end gap-4">
                <span className="font-display text-[clamp(4.5rem,12vw,10rem)] font-bold leading-[1.2] tracking-tight text-ink">
                  {era.year}
                </span>
                <span className="mb-3 border-2 border-ink bg-yellow px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                  Chapter 0{index + 1}/03
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold uppercase leading-[1.2] tracking-tight text-ink md:text-3xl">
                {era.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75 md:text-lg">{era.desc}</p>
              <p className="mt-5 inline-block border-2 border-ink bg-ink px-2 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-yellow">
                Approach — {era.approach}
              </p>
              <ul className="mt-6 border-t-2 border-ink/20">
                {era.specs.map(([k, v]) => (
                  <li
                    key={k}
                    className="flex items-center justify-between gap-3 border-b-2 border-ink/20 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] md:text-xs"
                  >
                    <span className="text-ink/55">{k}</span>
                    <span className="text-right">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* era image */}
          <Reveal delay={140}>
            <div key={`img-${index}`} className="era-in relative border-2 border-ink bg-ink p-2">
              <div className="bw relative aspect-[4/3]">
                <img src={era.img} alt={era.alt} loading="lazy" />
                {/* corner registration marks */}
                <span className="absolute left-2 top-2 h-3 w-3 border-l-2 border-t-2 border-paper" aria-hidden="true" />
                <span className="absolute right-2 top-2 h-3 w-3 border-r-2 border-t-2 border-paper" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-paper" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-paper" aria-hidden="true" />
              </div>
              <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/60 md:text-[11px]">
                <span>{era.caption}</span>
                <span className="shrink-0 font-bold text-ink">{era.year}</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* slider control */}
        <Reveal delay={100} className="mt-14 md:mt-20">
          {/* era tabs — generous touch targets */}
          <div className="grid grid-cols-3 border-2 border-ink">
            {ERAS.map((e, i) => (
              <button
                key={e.tab}
                type="button"
                onClick={() => selectEra(i)}
                aria-pressed={index === i}
                className={`flex min-h-12 items-center justify-center whitespace-nowrap px-2 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 md:text-sm ${
                  i !== 0 ? "border-l-2 border-ink" : ""
                } ${
                  index === i
                    ? "border-ink bg-yellow text-ink"
                    : "border-ink bg-transparent text-ink/60 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {e.tab}
              </button>
            ))}
          </div>

          {/* track */}
          <div
            ref={trackRef}
            className="timeline-track relative mt-8 h-16 select-none"
            onPointerDown={(e) => {
              setDragging(true);
              setPos(posFromClientX(e.clientX));
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              if (dragging) setPos(posFromClientX(e.clientX));
            }}
            onPointerUp={() => {
              if (dragging) {
                setDragging(false);
                snap(pos);
              }
            }}
            onPointerCancel={() => {
              setDragging(false);
              setPos(index);
            }}
          >
            {/* rail */}
            <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 border-2 border-ink bg-paper" />
            {/* fill */}
            <div
              className={`timeline-fill absolute left-0 top-1/2 h-2 -translate-y-1/2 bg-yellow ${dragging ? "dragging" : ""}`}
              style={{ width: `${(pos / 2) * 100}%` }}
            />
            {/* stop ticks */}
            {[0, 1, 2].map((t) => (
              <span
                key={t}
                aria-hidden="true"
                className="absolute top-1/2 h-6 w-0.5 -translate-y-1/2 bg-ink/70"
                style={{ left: `${(t / 2) * 100}%` }}
              />
            ))}
            {/* thumb */}
            <div
              role="slider"
              tabIndex={0}
              aria-label="Timeline era selector — use arrow keys to change era"
              aria-valuemin={0}
              aria-valuemax={2}
              aria-valuenow={index}
              aria-valuetext={era.name}
              onKeyDown={onThumbKeyDown}
              className={`timeline-thumb absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-grab items-center justify-center border-2 border-ink bg-yellow text-ink shadow-[4px_4px_0_#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow active:cursor-grabbing ${
                dragging ? "dragging" : ""
              }`}
              style={{ left: `${(pos / 2) * 100}%` }}
            >
              <MoveHorizontal size={22} strokeWidth={2.5} aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
