import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-ink text-white text-[13px] font-semibold">
            F
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            FullMax Apex
            <span className="text-mute"> Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-graphite transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary hidden md:inline-flex">
          Get in touch
        </a>
      </div>
    </header>
  );
}
