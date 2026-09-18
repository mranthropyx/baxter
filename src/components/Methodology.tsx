import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import SkyscraperElevation from "./SkyscraperElevation";

const steps: Array<[string, string, string]> = [
  ["01", "Structural Analysis", "Load paths, wind drift, and foundation strategy resolved in-house."],
  ["02", "Fabrication Drawings", "Every steel connection and glazing unit detailed to the millimeter."],
  ["03", "Site Supervision", "A BAXTER architect on site from excavation to certificate of occupancy."],
  ["04", "Handover & Maintenance", "A two-hundred-page care manual and a standing maintenance contract."],
];

/** Draggable compare slider — building photograph vs. CAD elevation. */
function CompareSlider({ img, alt }: { img: string; alt: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [split, setSplit] = useState(58);
  const [dragging, setDragging] = useState(false);

  const fromX = (clientX: number) => {
    const r = wrapRef.current!.getBoundingClientRect();
    return Math.min(94, Math.max(6, ((clientX - r.left) / r.width) * 100));
  };

  return (
    <div
      ref={wrapRef}
      className="relative h-[440px] touch-none select-none overflow-hidden border-2 border-ink bg-ink md:h-[540px]"
      onPointerDown={(e) => {
        setDragging(true);
        setSplit(fromX(e.clientX));
        e.currentTarget.setPointerCapture(e.pointerId);
      }}
      onPointerMove={(e) => {
        if (dragging) setSplit(fromX(e.clientX));
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
    >
      {/* photograph — base layer */}
      <img
        src={img}
        alt={alt}
        loading="lazy"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover grayscale contrast-110"
      />

      {/* CAD elevation — revealed right of the divider */}
      <div
        className="bg-grid-dark-fine absolute inset-0 flex items-center justify-center bg-[#0c0c0c] p-6"
        style={{ clipPath: `inset(0 0 0 ${split}%)` }}
        aria-hidden="true"
      >
        <SkyscraperElevation className="h-full w-auto" />
      </div>

      {/* divider */}
      <div className="absolute inset-y-0 z-10 w-[3px] bg-yellow" style={{ left: `${split}%` }} aria-hidden="true" />

      {/* handle */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Compare photograph and CAD drawing — use arrow keys to move the divider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(split)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            setSplit((s) => Math.max(6, s - 4));
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            setSplit((s) => Math.min(94, s + 4));
          }
        }}
        className="absolute top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center border-2 border-ink bg-yellow text-ink shadow-[0_0_0_2px_rgba(244,244,240,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
        style={{ left: `${split}%` }}
      >
        <MoveHorizontal size={20} strokeWidth={2.5} aria-hidden="true" />
      </div>

      {/* labels */}
      <span className="absolute bottom-3 left-3 border-2 border-ink bg-paper px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
        Photograph — Site 04
      </span>
      <span className="absolute bottom-3 right-3 border-2 border-ink bg-yellow px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
        CAD Elevation — A-07
      </span>
    </div>
  );
}

export default function Methodology() {
  return (
    <section id="methodology" className="cad-zone relative scroll-mt-16 overflow-hidden bg-ink text-paper">
      {/* parallax grid layer */}
      <div className="absolute inset-[-12%_0]" aria-hidden="true">
        <Parallax speed={0.04} className="h-full w-full">
          <div className="bg-grid-dark h-full w-full" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-[1700px] px-4 py-20 md:px-8 md:py-28">
        {/* header */}
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-paper/30 pb-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
              04 — Methodology
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold uppercase leading-[1.2] tracking-tight">
              The drawing is the <span className="text-yellow">building.</span>
            </h2>
          </div>
          <p className="max-w-xs text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-paper/50 md:text-xs">
            Drawing set B-07 — one authority, one line weight, no ambiguity.
          </p>
        </Reveal>

        {/* strict two-column grid: text | blueprint canvas */}
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:gap-10">
          {/* text column */}
          <Reveal delay={80}>
            <p className="max-w-lg text-lg leading-relaxed text-paper/80">
              Every BAXTER building begins as a drawing set. Structural scheme, core placement, curtain
              wall grid — resolved on paper before a single yard of concrete is poured.
            </p>
            <ul className="mt-8 border-t-2 border-paper/25">
              {steps.map(([n, title, desc]) => (
                <li key={n} className="flex gap-5 border-b-2 border-paper/25 py-4">
                  <span className="font-display text-xl font-bold leading-[1.2] text-yellow">{n}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase leading-[1.2] tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-paper/65">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/55">
              The same set travels from our office to the fabricator to the site. What is drawn is what
              is built — and what is built is what is maintained.
            </p>
          </Reveal>

          {/* blueprint canvas — strictly separate column */}
          <Reveal delay={140}>
            <figure className="relative border-2 border-paper/40 bg-[#0c0c0c] p-4 md:p-6">
              {/* corner registration marks */}
              <span className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-yellow" aria-hidden="true" />
              <span className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-yellow" aria-hidden="true" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-yellow" aria-hidden="true" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-yellow" aria-hidden="true" />
              <SkyscraperElevation className="h-auto w-full" />
              <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t-2 border-paper/25 pt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-paper/60 md:text-[11px]">
                <span>Elevation A — Tower Study, Union Civic Center</span>
                <span className="text-yellow">Scale 1:200</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* photo ↔ drawing compare slider */}
        <Reveal delay={100} className="mt-16 md:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/60">
                Field ↔ Drawing
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold uppercase leading-[1.2] tracking-tight md:text-4xl">
                Drag to compare
              </h3>
            </div>
            <p className="max-w-xs text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-paper/50 md:text-xs">
              Site 04 — Union Civic Center, photographed against drawing set A-07.
            </p>
          </div>
          <div className="mt-6">
            <CompareSlider
              img="https://images.pexels.com/photos/19980868/pexels-photo-19980868.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
              alt="Low-angle view of a sleek glass and concrete skyscraper under a clear sky"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
