"use client";

import { useState } from "react";

export function Contact() {
  const [state, setState] = useState<
    { name: string; email: string; company: string; message: string }
  >({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[FullMax Apex] Enquiry from ${state.name}${state.company ? ` (${state.company})` : ""}`,
    );
    const body = encodeURIComponent(
      `Name: ${state.name}\nCompany: ${state.company}\nEmail: ${state.email}\n\n${state.message}`,
    );
    window.location.href = `mailto:tiborfaz@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="border-t border-line bg-canvas py-24 md:py-32"
    >
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Left — intro + details */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-4">Contact</p>
            <h2 className="h-section">
              Let&rsquo;s work{" "}
              <span className="font-display italic text-accent">together.</span>
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-graphite">
              Tell us where the business is now, the number you want to move,
              and what you&rsquo;ve already tried. Tibor replies personally
              within two working days — yes, no, or a sharper question.
            </p>

            <ul className="mt-10 space-y-4">
              <ContactRow
                label="Email"
                value="tiborfaz@gmail.com"
                href="mailto:tiborfaz@gmail.com"
              />
              <ContactRow
                label="Response time"
                value="Within 48 hours (working days)"
              />
              <ContactRow
                label="Availability"
                value="Q4 2026 · 2 slots open"
              />
            </ul>

            <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
                Registered office
              </p>
              <p className="mt-3 text-sm leading-relaxed text-graphite">
                FullMax Apex Solutions Ltd
                <br />
                Office 20888, 182–184 High Street North
                <br />
                East Ham, London E6 2JA
                <br />
                United Kingdom
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-surface p-6 md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Your name" required>
                  <input
                    className="field"
                    required
                    value={state.name}
                    onChange={(e) =>
                      setState((s) => ({ ...s, name: e.target.value }))
                    }
                    placeholder="Jane Founder"
                    autoComplete="name"
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    type="email"
                    className="field"
                    required
                    value={state.email}
                    onChange={(e) =>
                      setState((s) => ({ ...s, email: e.target.value }))
                    }
                    placeholder="jane@company.com"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Company" className="md:col-span-2">
                  <input
                    className="field"
                    value={state.company}
                    onChange={(e) =>
                      setState((s) => ({ ...s, company: e.target.value }))
                    }
                    placeholder="Company Ltd"
                    autoComplete="organization"
                  />
                </Field>

                <Field
                  label="Your brief"
                  hint="Where the business is now · the number you want to move · what you've tried"
                  required
                  className="md:col-span-2"
                >
                  <textarea
                    className="field min-h-[160px] resize-y"
                    required
                    value={state.message}
                    onChange={(e) =>
                      setState((s) => ({ ...s, message: e.target.value }))
                    }
                    placeholder="We're a Series-A SaaS. Our onboarding takes 14 days and our conversion drops by 40% after day 3. We've tried..."
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className="text-xs text-mute">
                  Opens your mail client — no data leaves your machine.
                </p>
                <button type="submit" className="btn-primary">
                  Send enquiry <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </>
  );

  return (
    <li>
      {href ? (
        <a
          href={href}
          className="block rounded-lg border border-transparent p-3 transition-colors hover:border-line hover:bg-surface"
        >
          {inner}
        </a>
      ) : (
        <div className="p-3">{inner}</div>
      )}
    </li>
  );
}

function Field({
  label,
  hint,
  required,
  className = "",
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      {children}
      {hint && <span className="text-xs text-mute">{hint}</span>}
    </label>
  );
}
