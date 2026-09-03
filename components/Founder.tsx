const stack = [
  "TypeScript",
  "Next.js",
  "React Native",
  "Python",
  "FastAPI",
  "Postgres",
  "pgvector",
  "OpenAI",
  "Anthropic",
  "LangGraph",
  "AWS",
  "Vercel",
  "Docker",
  "n8n",
];

export function Founder() {
  return (
    <section className="border-t border-line bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Founder card */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-line bg-canvas p-8">
              <div className="mb-8 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
                  Founder
                </p>
                <span className="rounded-full bg-accentSoft px-2.5 py-1 text-[11px] font-medium text-accent">
                  Active
                </span>
              </div>

              {/* Monogram — no photo */}
              <div className="mb-8 flex aspect-square w-full items-center justify-center rounded-xl bg-ink text-white">
                <span className="font-display text-8xl leading-none tracking-tightest">
                  T<span className="text-accent">·</span>F
                </span>
              </div>

              <h3 className="font-display text-3xl leading-tight tracking-tightest text-ink">
                Tibor Fazekas
              </h3>
              <p className="mt-1 text-sm text-graphite">
                Founder &amp; Principal Engineer
              </p>

              <dl className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
                <Row k="Nationality" v="Hungarian" />
                <Row k="Working across" v="UK &amp; EU" />
                <Row k="Practice" v="AI · full-stack · automation" />
              </dl>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="h-section">
              One studio.{" "}
              <span className="font-display italic text-accent">
                One signature
              </span>{" "}
              on every engagement.
            </h2>

            <blockquote className="mt-10 rounded-2xl border-l-2 border-accent bg-canvas p-6 md:p-8">
              <p className="font-display text-2xl leading-snug tracking-tightest text-ink md:text-3xl">
                &ldquo;Most businesses don&rsquo;t need more software. They need
                fewer surfaces, better answers, and a system that takes the
                thinking out of the parts that shouldn&rsquo;t need
                thinking.&rdquo;
              </p>
              <cite className="mt-6 block text-sm not-italic text-graphite">
                — Tibor Fazekas, Founder
              </cite>
            </blockquote>

            <div className="mt-10">
              <p className="eyebrow mb-4">Current stack</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[12px] text-graphite"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
        {k}
      </dt>
      <dd
        className="text-right text-sm text-ink"
        dangerouslySetInnerHTML={{ __html: v }}
      />
    </div>
  );
}
