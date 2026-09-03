const steps = [
  {
    n: "01",
    title: "Discovery",
    body:
      "You send a short brief. We reply within 48 hours — a yes, a no, or a sharper question — and, if it's a fit, book a 45-minute discovery call.",
  },
  {
    n: "02",
    title: "Charter",
    body:
      "A one-page contract for the work: the numbers that will move, what we'll measure, what we won't build, and the date it ships. Fixed scope, fixed fee.",
  },
  {
    n: "03",
    title: "Build",
    body:
      "Small, visible, instrumented increments with weekly demos. You use it in production before we call it done. Evaluations before features.",
  },
  {
    n: "04",
    title: "Hand-off & Operate",
    body:
      "Full code, infrastructure, and evaluation ownership transfers to you. Optional monthly retainer to keep costs, latency, and quality in check as you grow.",
  },
];

export function Process() {
  return (
    <section id="approach" className="border-t border-line bg-canvas py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Approach</p>
            <h2 className="h-section max-w-[18ch]">
              How we work.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-graphite">
            A fixed operating protocol — so the interesting unknowns are the
            product, not the engagement.
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative">
              <div className="card h-full">
                <div className="mb-6 flex items-baseline justify-between">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
                    Step {s.n}
                  </span>
                  {i < steps.length - 1 && (
                    <span aria-hidden className="text-mute">
                      →
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl leading-tight tracking-tightest text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
