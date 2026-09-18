import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Mail, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function FooterCTA() {
  const [sent, setSent] = useState(false);
  const ref = useRef(`BX-${Math.floor(114 + Math.random() * 880)}`);

  return (
    <>
      {/* ---------- yellow CTA ---------- */}
      <section id="inquiry" className="relative scroll-mt-16 border-t-2 border-ink bg-yellow text-ink">
        <div className="mx-auto max-w-[1700px] px-4 py-20 md:px-8 md:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
            {/* left — headline + dead contact rows */}
            <div>
              <Reveal className="flex items-center justify-between gap-4 border-b-2 border-ink pb-3 text-[11px] font-semibold uppercase tracking-[0.22em]">
                <span>06 — Start a Project</span>
                <span>Estimate Request</span>
              </Reveal>

              <Reveal delay={60}>
                <h2 className="mt-10 text-balance font-display text-[clamp(2.9rem,8vw,7.5rem)] font-bold uppercase leading-[1.2] tracking-tight">
                  Build your <span className="text-outline-ink">landmark</span>
                  <span className="text-ink">.</span>
                </h2>
              </Reveal>

              <Reveal delay={140} className="mt-8 max-w-md">
                <p className="text-[15px] font-medium leading-relaxed text-ink/80 md:text-base">
                  Tell us about your site, your program, and your timeline. The office replies within two
                  business days — with an opinion, a budget range, and a sketch.
                </p>
                <p className="mt-5 font-display text-xl font-bold leading-snug md:text-2xl">
                  “Every landmark starts as a line on a napkin.”
                </p>
              </Reveal>

              {/* contact — masked details, intentionally non-interactive */}
              <Reveal delay={180} className="mt-10 border-t-2 border-ink">
                <div className="dead flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b-2 border-ink py-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Email</span>
                  <span
                    className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em]"
                    aria-label="Email address withheld — inquire via the form"
                  >
                    Contact@
                    <span className="inline-block h-[0.8em] w-[4.5rem] bg-ink" aria-hidden="true" />
                    .com
                  </span>
                </div>
                <div className="dead flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b-2 border-ink py-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Phone</span>
                  <span
                    className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.12em]"
                    aria-label="Phone number withheld — inquire via the form"
                  >
                    +1 (512)
                    <span className="inline-block h-[0.8em] w-[3.5rem] bg-ink" aria-hidden="true" />
                    -XX68
                  </span>
                </div>
                <div className="dead flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5 border-b-2 border-ink py-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Studio</span>
                  <span className="text-right text-[11px] font-semibold uppercase tracking-[0.16em]">
                    1200 Spine of Texas Blvd, Austin, TX
                  </span>
                </div>

                {/* minimalist line icons — directly on the background, no tiles */}
                <div className="mt-6 flex items-center gap-4 text-ink">
                  <Mail size={24} strokeWidth={1.5} aria-hidden="true" />
                  <Phone size={24} strokeWidth={1.5} aria-hidden="true" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                    Direct lines — full details shared on request
                  </span>
                </div>
              </Reveal>
            </div>

            {/* right — inquiry form */}
            <Reveal delay={120}>
              <div className="border-2 border-ink bg-paper shadow-[10px_10px_0_#111111]">
                <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-paper md:text-[11px]">
                  <span>Project Inquiry</span>
                  <span className="text-yellow">Response within 48 hours</span>
                </div>

                {sent ? (
                  <div className="era-in flex min-h-[480px] flex-col items-center justify-center gap-6 p-6 text-center">
                    <span className="-rotate-6 border-4 border-ink px-6 py-2 font-display text-4xl font-bold uppercase tracking-wide text-ink md:text-5xl">
                      Received
                    </span>
                    <p className="text-[13px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-ink/75">
                      Estimate request received — Ref {ref.current}
                      <br />
                      The office replies within two business days.
                    </p>
                    <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>
                      Start another request
                    </button>
                  </div>
                ) : (
                  <form
                    className="p-5 md:p-7"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div className="grid gap-5">
                      <div>
                        <label htmlFor="bx-name" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                          Name *
                        </label>
                        <input id="bx-name" name="name" type="text" required placeholder="E. Baxter" className="field" autoComplete="name" />
                      </div>
                      <div>
                        <label htmlFor="bx-email" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                          Email *
                        </label>
                        <input id="bx-email" name="email" type="email" required placeholder="you@example.com" className="field" autoComplete="email" />
                      </div>
                      <div>
                        <label htmlFor="bx-type" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                          Project type
                        </label>
                        <div className="relative">
                          <select id="bx-type" name="type" className="field pr-10" defaultValue="New residence">
                            <option>New residence</option>
                            <option>Commercial building</option>
                            <option>Civic project</option>
                            <option>Restoration</option>
                            <option>Other</option>
                          </select>
                          <ChevronDown size={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="bx-msg" className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink">
                          Tell us about the project *
                        </label>
                        <textarea
                          id="bx-msg"
                          name="message"
                          required
                          rows={4}
                          placeholder="Site, program, timeline —"
                          className="field resize-none py-3"
                        />
                      </div>
                      <button type="submit" className="btn btn-ink w-full text-sm">
                        Request an Estimate
                        <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-[1700px] px-4 pb-8 pt-14 md:px-8">
          <Reveal>
            <p className="font-display text-[clamp(4rem,16.5vw,15rem)] font-bold uppercase leading-[1.2] tracking-tight text-paper/[0.12]" aria-hidden="true">
              Baxter
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6 border-t-2 border-paper/25 pt-6 md:flex-row md:items-center md:justify-between">
            {/* internal navigation */}
            <nav aria-label="Site" className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                ["Practice", "#practice"],
                ["Projects", "#projects"],
                ["Methodology", "#methodology"],
                ["Timeline", "#timeline"],
                ["Contact", "#inquiry"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-paper/70 transition-colors hover:text-yellow"
                >
                  {label}
                </a>
              ))}
            </nav>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-paper/60">
              © 2026 Baxter Architecture &amp; Construction — Austin, TX
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
