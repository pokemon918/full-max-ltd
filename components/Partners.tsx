const benefits = [
  {
    title: "Founder-priced engagement",
    body:
      "A materially discounted fixed fee on your first project, in exchange for permission to reference the outcome (not the details).",
  },
  {
    title: "Direct principal access",
    body:
      "You work directly with the founder throughout — no account managers, no hand-offs, no junior engineers.",
  },
  {
    title: "First on the calendar, forever",
    body:
      "Priority slotting on future engagements and support, ahead of the standard queue.",
  },
];

export function Partners() {
  return (
    <section className="border-t border-line bg-ink py-24 text-white md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Founding partners programme
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightest text-white md:text-5xl lg:text-6xl">
              We&rsquo;re new — and that is the offer.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-white/70">
              FullMax Apex was incorporated in 2026. Our first three engagements
              go to <em>founding partners</em> at preferential terms — an
              honest trade of price for the reference we&rsquo;ll build our next
              decade on.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Apply as a founding partner
                <span aria-hidden>→</span>
              </a>
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                3 slots · Q4 2026
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-white/10">
              {benefits.map((b, i) => (
                <li key={b.title} className="bg-ink p-6 md:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-tight tracking-tightest text-white">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                        {b.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
