export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32">
      {/* Subtle gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-accentSoft/60 via-canvas to-canvas"
      />

      <div className="container-page relative">
        <div className="flex items-center gap-2 pb-8">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-mute">
            UK Ltd · Est. 2026 · Now accepting engagements
          </span>
        </div>

        <h1 className="display max-w-[18ch] text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
          Software solutions{" "}
          <span className="font-display italic text-accent">
            built to ship.
          </span>
        </h1>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-graphite md:text-xl">
          AI applications, full-stack products, and automation systems —
          designed, built, and operated end-to-end by{" "}
          <strong className="font-semibold text-ink">
            FullMax Apex Solutions Ltd
          </strong>
          , a UK-registered software engineering studio.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-primary">
            Get in touch
            <span aria-hidden>→</span>
          </a>
          <a href="#services" className="btn-ghost">
            What we do
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-20 grid grid-cols-2 gap-y-6 border-t border-line pt-10 md:grid-cols-4">
          <Stat label="Focus areas" value="AI · Full-stack · Automation" />
          <Stat label="Registered in" value="England & Wales" />
          <Stat label="Response time" value="Within 48 hours" />
          <Stat label="Engagements / quarter" value="Two, by design" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-mute">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
