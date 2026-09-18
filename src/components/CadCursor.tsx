import { useEffect, useRef } from "react";

/**
 * CAD crosshair cursor — full-viewport X/Y axis lines and a live
 * grid-coordinate readout that follow the pointer inside `.cad-zone`
 * sections. Desktop pointers only; fully bypassed on touch devices.
 */
export default function CadCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const vRef = useRef<HTMLDivElement>(null);
  const hRef = useRef<HTMLDivElement>(null);
  const chipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;

    const paint = (x: number, y: number) => {
      if (vRef.current) vRef.current.style.transform = `translateX(${x}px)`;
      if (hRef.current) hRef.current.style.transform = `translateY(${y}px)`;
      if (chipRef.current) {
        const flipX = x > window.innerWidth - 170;
        const flipY = y > window.innerHeight - 64;
        chipRef.current.style.transform = `translate(${x + (flipX ? -16 : 16)}px, ${y + (flipY ? -16 : 16)}px) translate(${flipX ? "-100%" : "0"}, ${flipY ? "-100%" : "0"})`;
        chipRef.current.textContent = `X ${String(Math.round(x)).padStart(4, "0")} / Y ${String(Math.round(y)).padStart(4, "0")}`;
      }
    };

    const onMove = (e: MouseEvent) => {
      const root = rootRef.current;
      if (!root) return;
      const target = e.target as Element | null;
      const inZone = !!(target && typeof target.closest === "function" && target.closest(".cad-zone"));
      root.classList.toggle("is-active", inZone);
      if (!inZone) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => paint(e.clientX, e.clientY));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="cad-overlay" aria-hidden="true">
      <div ref={vRef} className="cad-line cad-v" />
      <div ref={hRef} className="cad-line cad-h" />
      <div ref={chipRef} className="cad-chip" />
    </div>
  );
}
