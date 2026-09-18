import type { CSSProperties } from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number;
  separator?: string;
  style?: CSSProperties;
}

export default function Marquee({ items, className = "", speed = 30, separator = "◆", style }: MarqueeProps) {
  const row = (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center">
          <span className="mx-6 inline-block">{item}</span>
          <span aria-hidden="true" className="inline-block opacity-70">
            {separator}
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div className={`marquee ${className}`} style={style} aria-hidden="true">
      <div className="marquee-track" style={{ "--speed": `${speed}s` } as CSSProperties}>
        <div className="inline-flex items-center">{row}</div>
        <div className="inline-flex items-center">{row}</div>
      </div>
    </div>
  );
}
