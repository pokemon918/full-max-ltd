const values = [
  {
    n: "01",
    title: "Production-ready, not proof-of-concept",
    body:
      "The deliverable is always a working system in your environment — with runbooks, evals, and monitoring. Slides and audits exist to sharpen the build, not to replace it.",
  },
  {
    n: "02",
    title: "Small batch, by design",
    body:
      "A studio, not an agency. Two engagements per quarter. We pick problems where AI and automation deliver measurable leverage — not marginal improvement.",
  },
  {
    n: "03",
    title: "You own everything at hand-off",
    body:
      "Full code, infrastructure, evaluations, and documentation transfer to you. No rent-seeking clauses, no lock-in — an optional retainer if you want us on-hand.",
  },
];

export function Practice() {
  return (
    <section id="about" className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">About us</p>
            <h2 className="h-section">
              A UK software engineering studio
              <span className="font-display italic text-accent">
                {" "}
                with an opinion.
              </span>
            </h2>
          </div>

          <div className="md:col-span-7">
            <p className="prose-lede">
              FullMax Apex Solutions Ltd is a UK-registered software engineering
              studio. We specialise in building production-ready AI
              applications, full-stack products, and automation systems for
              businesses that need reliable, scalable technology — delivered by
              a small team that ships.
            </p>
            <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-graphite">
              We exist because most AI and automation work still lives in demos
              and dashboards. Our job is the unsexy middle layer that keeps
              shipping — code that earns its keep, measured by the numbers it
              moves.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3 md:mt-20">
          {values.map((v) => (
            <div key={v.n} className="bg-surface p-8">
              <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {v.n}
              </p>
              <h3 className="font-display text-2xl leading-tight tracking-tightest text-ink">
                {v.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
