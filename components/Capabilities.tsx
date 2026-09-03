const services = [
  {
    n: "01",
    title: "AI & ML Solutions",
    body:
      "Intelligent applications, LLM-powered agents, and machine-learning pipelines — from prototype to production, with evaluations and guardrails baked in.",
    bullets: [
      "LLM apps · agents · RAG",
      "Model evaluation & safety",
      "Domain-tuned retrieval",
    ],
  },
  {
    n: "02",
    title: "Full-Stack Product Engineering",
    body:
      "End-to-end web and mobile products built on TypeScript, Next.js, React Native, and a hardened Postgres backbone. Design system in, revenue-ready product out.",
    bullets: [
      "Next.js · React · React Native",
      "Postgres · Redis · pgvector",
      "Stripe · Auth · observability",
    ],
  },
  {
    n: "03",
    title: "Automation & Integrations",
    body:
      "The boring 80% — document-heavy, rules-heavy, coordination-heavy work — reverse-engineered into small, testable, AI-augmented steps you can trust.",
    bullets: [
      "Workflow automation (n8n, custom)",
      "Queues, retries & observability",
      "Cost & latency ceilings built-in",
    ],
  },
  {
    n: "04",
    title: "Cloud & DevOps",
    body:
      "Production infrastructure that stays quiet: AWS/GCP, containerization, CI/CD, and deployment strategies designed for real load and small teams.",
    bullets: [
      "AWS · GCP · Vercel · Modal",
      "Docker · GitHub Actions",
      "Monitoring · alerting · SLOs",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="services" className="border-t border-line bg-canvas py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4">Services</p>
            <h2 className="h-section max-w-[18ch]">
              What we do.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-graphite">
            Every engagement starts with a one-page charter: the numbers it will
            move, the failure modes we accept, and the date it ships.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.n} className="card group flex flex-col">
              <div className="mb-6 flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-accentSoft font-mono text-[12px] font-semibold text-accent">
                  {s.n}
                </span>
                <span
                  aria-hidden
                  className="text-mute transition-transform group-hover:translate-x-1 group-hover:text-ink"
                >
                  →
                </span>
              </div>

              <h3 className="font-display text-3xl leading-tight tracking-tightest text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite">
                {s.body}
              </p>

              <ul className="mt-6 border-t border-line pt-4">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 py-1 text-sm text-graphite"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
