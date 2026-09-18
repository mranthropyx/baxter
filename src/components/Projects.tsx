import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

interface Project {
  id: string;
  index: string;
  title: string;
  location: string;
  year: string;
  status: string;
  img: string;
  alt: string;
  span: string;
  variant: number;
  specs: Array<[string, string]>;
}

const projects: Project[] = [
  {
    id: "01",
    index: "01",
    title: "Meridian Glass Pavilion",
    location: "Malibu, California",
    year: "1972",
    status: "Built",
    img: "https://images.pexels.com/photos/7598377/pexels-photo-7598377.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Low-profile glass and concrete pavilion residence surrounded by gardens",
    span: "lg:col-span-7",
    variant: 0,
    specs: [
      ["Structure", "Glass + concrete"],
      ["Area", "4,800 sq ft"],
      ["System", "Flat plate roof"],
    ],
  },
  {
    id: "02",
    index: "02",
    title: "Canyon Edge Residence",
    location: "Palm Springs, California",
    year: "1968",
    status: "Built",
    img: "https://images.pexels.com/photos/33951577/pexels-photo-33951577.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Cantilevered hillside residence above a wooded stream",
    span: "lg:col-span-5",
    variant: 1,
    specs: [
      ["Structure", "Reinforced concrete"],
      ["Area", "6,200 sq ft"],
      ["System", "Two-story cantilever"],
    ],
  },
  {
    id: "03",
    index: "03",
    title: "Commerce Court Atrium",
    location: "Dallas, Texas",
    year: "2015",
    status: "Completed",
    img: "https://images.pexels.com/photos/32356135/pexels-photo-32356135.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Modernist commercial atrium with steel and glass structure",
    span: "lg:col-span-5",
    variant: 2,
    specs: [
      ["Structure", "Steel + curtain wall"],
      ["Area", "42,000 sq ft"],
      ["System", "Long-span glazing"],
    ],
  },
  {
    id: "04",
    index: "04",
    title: "Union Civic Center",
    location: "Austin, Texas",
    year: "2021",
    status: "Completed",
    img: "https://images.pexels.com/photos/6036401/pexels-photo-6036401.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "High-rise civic center tower with glass walls seen from below",
    span: "lg:col-span-7",
    variant: 3,
    specs: [
      ["Structure", "Concrete core + glass"],
      ["Area", "310,000 sq ft"],
      ["System", "Curtain wall grid"],
    ],
  },
];

/** Blueprint wireframe overlay — draws itself in on card hover. */
function Wireframe({ variant }: { variant: number }) {
  const shapes = [
    // 01 — low pavilion
    <>
      <line x1="34" y1="104" x2="366" y2="104" pathLength={100} />
      <rect x="56" y="104" width="288" height="106" pathLength={100} />
      <line x1="152" y1="104" x2="152" y2="210" pathLength={100} />
      <line x1="248" y1="104" x2="248" y2="210" pathLength={100} />
      <rect x="152" y="156" width="96" height="54" pathLength={100} />
    </>,
    // 02 — cantilever residence
    <>
      <rect x="70" y="84" width="164" height="84" pathLength={100} />
      <rect x="152" y="126" width="178" height="94" pathLength={100} />
      <line x1="70" y1="84" x2="330" y2="220" pathLength={100} />
      <line x1="152" y1="126" x2="152" y2="220" pathLength={100} />
    </>,
    // 03 — atrium
    <>
      <rect x="62" y="66" width="276" height="144" pathLength={100} />
      <path d="M 112 210 A 88 88 0 0 1 288 210" pathLength={100} />
      <line x1="140" y1="66" x2="140" y2="210" pathLength={100} />
      <line x1="260" y1="66" x2="260" y2="210" pathLength={100} />
    </>,
    // 04 — high-rise
    <>
      <rect x="158" y="28" width="92" height="194" pathLength={100} />
      <line x1="158" y1="68" x2="250" y2="68" pathLength={100} />
      <line x1="158" y1="108" x2="250" y2="108" pathLength={100} />
      <line x1="158" y1="148" x2="250" y2="148" pathLength={100} />
      <line x1="158" y1="188" x2="250" y2="188" pathLength={100} />
      <rect x="250" y="88" width="88" height="134" pathLength={100} />
    </>,
  ];

  return (
    <svg
      viewBox="0 0 400 250"
      preserveAspectRatio="none"
      className="wire pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <g fill="none" stroke="#FFD600" strokeWidth={1.5}>
        {shapes[variant]}
        {/* shared survey marks */}
        <line x1="40" y1="232" x2="360" y2="232" pathLength={100} />
        <line x1="40" y1="225" x2="40" y2="239" pathLength={100} />
        <line x1="360" y1="225" x2="360" y2="239" pathLength={100} />
        <line x1="188" y1="125" x2="212" y2="125" pathLength={100} />
        <line x1="200" y1="113" x2="200" y2="137" pathLength={100} />
      </g>
    </svg>
  );
}

function ProjectCard({
  project,
  open,
  onToggle,
  delay,
}: {
  project: Project;
  open: boolean;
  onToggle: () => void;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className={project.span}>
      <article
        role="button"
        tabIndex={0}
        aria-pressed={open}
        aria-label={`Project ${project.index}: ${project.title}, ${project.location}. ${project.status} ${project.year}. Activate to ${open ? "close" : "open"} dossier.`}
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className="group relative mt-5 cursor-pointer select-none border-2 border-ink bg-paper text-ink shadow-[6px_6px_0_#111111] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[10px_10px_0_#111111] focus-visible:outline-none focus-visible:shadow-[10px_10px_0_#111111] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
      >
        {/* folder tab — yellow only, complete 4-side border contour */}
        <div className="dead absolute -top-[22px] left-4 z-10 flex items-center border-2 border-ink bg-yellow px-3 py-1 text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-ink">
          File {project.id}
        </div>

        {/* image + wireframe reveal */}
        <div className="bw relative aspect-[16/10] border-b-2 border-ink bg-ink">
          <img
            src={project.img}
            alt={project.alt}
            loading="lazy"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <Wireframe variant={project.variant} />
          {/* corner action — high-contrast on any photography */}
          <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center border-2 border-ink bg-yellow text-ink transition-colors duration-300 group-hover:bg-ink group-hover:text-yellow">
            <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </div>
          {/* status chip — yellow only */}
          <div className="absolute bottom-3 left-3 border-2 border-ink bg-yellow px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">
            {project.status} — {project.year}
          </div>
          {/* stamp overlay on tap */}
          {open && (
            <div className="era-in absolute inset-0 flex items-center justify-center bg-ink/25">
              <span className="-rotate-6 border-4 border-paper bg-ink/85 px-5 py-2 font-display text-2xl font-bold uppercase tracking-wide text-paper shadow-[6px_6px_0_rgba(17,17,17,0.45)] md:text-3xl">
                Dossier open
              </span>
            </div>
          )}
        </div>

        {/* body */}
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl font-bold uppercase leading-[1.2] tracking-tight md:text-3xl">
              <span className="mr-2 text-xs font-bold align-top text-ink/50 md:text-sm">P.{project.index}</span>
              {project.title}
            </h3>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/50 md:text-[11px]">
              {project.location}
            </span>
          </div>

          <ul className="mt-4 border-t-2 border-ink/15">
            {project.specs.map(([k, v]) => (
              <li
                key={k}
                className="flex items-center justify-between gap-3 border-b-2 border-ink/15 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] md:text-xs"
              >
                <span className="text-ink/55">{k}</span>
                <span className="text-right">{v}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink md:text-xs">
              {open ? "Tap to close dossier" : "Tap to open dossier"}
            </span>
            <ArrowRight
              size={18}
              strokeWidth={2.5}
              aria-hidden="true"
              className={`transition-transform duration-300 ${open ? "translate-x-1" : "group-hover:translate-x-1.5"}`}
            />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      {/* divider marquee — project names */}
      <Marquee
        className="border-b-2 border-ink bg-yellow py-3 text-[12px] font-bold uppercase tracking-[0.24em] text-ink"
        items={[
          "Selected Works — 1963 to Present",
          "Meridian Glass Pavilion",
          "Canyon Edge Residence",
          "Commerce Court Atrium",
          "Union Civic Center",
        ]}
        speed={26}
      />

      <section id="projects" className="scroll-mt-16 bg-paper bg-grid-ink">
        <div className="mx-auto max-w-[1700px] px-4 py-20 md:px-8 md:py-28">
          {/* header */}
          <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/70">
                03 — Selected Works
              </p>
              <h2 className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-bold uppercase leading-[1.2] tracking-tight text-ink">
                Selected <span className="text-outline-ink">Projects</span>
                <sup className="ml-3 text-lg font-bold tracking-widest text-ink md:text-2xl">(04)</sup>
              </h2>
            </div>
            <p className="max-w-xs text-[11px] font-semibold uppercase leading-relaxed tracking-[0.12em] text-ink/60 md:text-xs">
              Four landmarks from the archive, filed as dossiers — the drawings, the photography, and the
              story of each.
            </p>
          </Reveal>

          {/* asymmetric grid */}
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-12">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                delay={(i % 2) * 100}
                open={openId === p.id}
                onToggle={() => setOpenId(openId === p.id ? null : p.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
