import { useId } from "react";

const PAPER = "#F4F4F0";
const YELLOW = "#FFD600";

const FLOORS = [192, 234, 276, 318, 360, 402, 444, 486, 528, 570];
const MULLIONS = [250, 270, 290, 310, 330];
const GRADE_HATCH = Array.from({ length: 11 }, (_, i) => `M ${120 + i * 26} 620 l -12 14`).join(" ");

/**
 * Detailed high-rise elevation — structural core (hatched), curtain wall
 * grid, floor lines, mast, grade line, elevation markers (L12–L03, ±0′),
 * overall height and width dimensions, and a title block.
 */
export default function SkyscraperElevation({ className = "" }: { className?: string }) {
  const pid = useId();

  return (
    <svg viewBox="0 0 520 780" className={className} role="img" aria-label="High-rise skyscraper elevation showing structural core, curtain wall grid and elevation markers">
      <defs>
        <pattern id={pid} width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="9" stroke={PAPER} strokeWidth="1.25" />
        </pattern>
      </defs>

      {/* tower drawing */}
      <g stroke={PAPER} fill="none" strokeWidth={2} strokeLinecap="square">
        {/* mast */}
        <line x1="250" y1="70" x2="250" y2="34" />
        {/* crown — mechanical penthouse */}
        <rect x="190" y="70" width="120" height="80" />
        {/* tower mass */}
        <rect x="150" y="150" width="200" height="470" strokeWidth={2.5} />
        {/* structural core */}
        <rect x="170" y="150" width="60" height="470" fill={`url(#${pid})`} />
        <line x1="200" y1="150" x2="200" y2="620" strokeWidth={0.75} />
        {/* curtain wall grid — mullions */}
        {MULLIONS.map((x) => (
          <line key={x} x1={x} y1="150" x2={x} y2="620" strokeWidth={0.75} />
        ))}
        {/* floor lines */}
        {FLOORS.map((y) => (
          <line key={y} x1="150" y1={y} x2="350" y2={y} strokeWidth={1} />
        ))}
        {/* lobby entry */}
        <rect x="240" y="536" width="60" height="84" strokeWidth={1.25} />
        <line x1="270" y1="536" x2="270" y2="620" strokeWidth={1.25} />
        {/* grade */}
        <line x1="110" y1="620" x2="390" y2="620" strokeWidth={2.5} />
        <path d={GRADE_HATCH} strokeWidth={1} />
      </g>

      {/* mast beacon */}
      <circle cx="250" cy="28" r="4" fill={YELLOW} />

      {/* elevation markers — right side */}
      <g stroke={YELLOW} fill="none" strokeWidth={1.25}>
        <line x1="400" y1="150" x2="400" y2="620" />
        {FLOORS.map((y) => (
          <line key={y} x1="394" y1={y} x2="406" y2={y} />
        ))}
        <line x1="394" y1="620" x2="406" y2="620" />
      </g>
      <g fill={YELLOW} fontFamily="'Space Grotesk', sans-serif" fontSize="11" fontWeight={600} letterSpacing="1">
        <text x="414" y="154">L12</text>
        <text x="414" y="280">L09</text>
        <text x="414" y="406">L06</text>
        <text x="414" y="532">L03</text>
        <text x="414" y="624">±0′</text>
      </g>

      {/* dimensions */}
      <g stroke={YELLOW} fill="none" strokeWidth={1.25}>
        <line x1="120" y1="150" x2="120" y2="620" />
        <line x1="114" y1="150" x2="126" y2="150" />
        <line x1="114" y1="620" x2="126" y2="620" />
        <line x1="128" y1="150" x2="146" y2="150" strokeWidth={1} strokeDasharray="5 6" />
        <line x1="150" y1="660" x2="350" y2="660" />
        <line x1="150" y1="654" x2="150" y2="666" />
        <line x1="350" y1="654" x2="350" y2="666" />
        <line x1="150" y1="626" x2="150" y2="652" strokeWidth={1} strokeDasharray="5 6" />
        <line x1="350" y1="626" x2="350" y2="652" strokeWidth={1} strokeDasharray="5 6" />
      </g>
      <g fill={YELLOW} fontFamily="'Space Grotesk', sans-serif" fontWeight={600} letterSpacing="2">
        <text transform="rotate(-90 106 385)" x="106" y="385" fontSize="12" textAnchor="middle">
          OVERALL 412′-0″
        </text>
        <text x="250" y="684" fontSize="12" textAnchor="middle">
          WIDTH 118′-0″
        </text>
      </g>

      {/* leader labels */}
      <g stroke={PAPER} fill={PAPER}>
        <line x1="158" y1="58" x2="180" y2="152" strokeWidth={1.25} />
        <circle cx="180" cy="152" r="3" />
        <text x="30" y="62" fontSize="12" fontWeight={700} stroke="none" fontFamily="'Space Grotesk', sans-serif" letterSpacing="1">
          STRUCTURAL CORE
        </text>

        <line x1="348" y1="58" x2="310" y2="152" strokeWidth={1.25} />
        <circle cx="310" cy="152" r="3" />
        <text x="490" y="62" fontSize="12" fontWeight={700} textAnchor="end" stroke="none" fontFamily="'Space Grotesk', sans-serif" letterSpacing="1">
          CURTAIN WALL GRID
        </text>
      </g>

      {/* frame + title block */}
      <g stroke={PAPER} fill="none">
        <rect x="20" y="20" width="480" height="740" strokeWidth={1.5} opacity={0.5} />
        <rect x="300" y="690" width="200" height="50" strokeWidth={1.5} />
        <line x1="300" y1="715" x2="500" y2="715" strokeWidth={1.5} />
      </g>
      <g fill={PAPER} fontFamily="'Space Grotesk', sans-serif">
        <text x="312" y="707" fontSize="12" fontWeight={700} letterSpacing="1">
          ELEVATION — TOWER A
        </text>
        <text x="312" y="733" fontSize="10" fontWeight={500} letterSpacing="0.5">
          SCALE 1:200 — SHEET A-07
        </text>
      </g>
    </svg>
  );
}
