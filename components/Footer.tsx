export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface py-16">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-white text-[13px] font-semibold">
                F
              </span>
              <span className="text-[15px] font-semibold tracking-tight text-ink">
                FullMax Apex
                <span className="text-mute"> Solutions Ltd</span>
              </span>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-graphite">
              A UK-registered software engineering studio building AI
              applications, full-stack products, and automation systems for
              teams that need reliable, scalable technology.
            </p>

            <a
              href="mailto:tiborfaz@gmail.com"
              className="link-arrow mt-6 inline-flex"
            >
              tiborfaz@gmail.com <span aria-hidden>→</span>
            </a>
          </div>

          {/* Nav columns */}
          <div className="md:col-span-3">
            <Col
              title="Studio"
              items={[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Approach", href: "#approach" },
                { label: "Contact", href: "#contact" },
              ]}
            />
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
              Registered office
            </p>
            <address className="text-sm not-italic leading-relaxed text-graphite">
              FullMax Apex Solutions Ltd
              <br />
              Office 20888, 182–184 High Street North
              <br />
              East Ham, London E6 2JA
              <br />
              United Kingdom
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-xs text-mute md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {year} FullMax Apex Solutions Ltd</span>
            <span className="hidden md:inline text-line">·</span>
            <span>Registered in England &amp; Wales</span>
            <span className="hidden md:inline text-line">·</span>
            <span>Main activity: IT consultancy</span>
          </div>
          <div>
            <span>Est. 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Col({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-mute">
        {title}
      </p>
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              className="text-sm text-graphite transition-colors hover:text-ink"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
