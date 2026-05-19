import Image from "next/image";
import DisabledLink from "./DisabledLink";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/health", label: "Health" },
  { href: "/education", label: "Education" },
  { href: "/innovation", label: "Digital Innovation" },
  { href: "/community", label: "Community Systems" },
  { href: "/livelihoods", label: "Livelihoods" },
  { href: "/climate", label: "Climate" },
  { href: "/research", label: "Research" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container py-4">
        <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <DisabledLink className="logo" href="/">
            <Image
              src="/zomujo-logo.png"
              alt="Zomujo Foundation"
              width={42}
              height={42}
            />
            <span>Zomujo Foundation</span>
          </DisabledLink>

          <nav
            className="hidden items-center justify-center gap-5 border-y border-[var(--line)] py-2 text-[0.9rem] text-[var(--slate)] lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <DisabledLink
                href={item.href}
                key={item.href}
                className="border-b border-transparent pb-1 transition hover:border-[var(--teal)] hover:text-[var(--teal)]"
              >
                {item.label}
              </DisabledLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <DisabledLink className="cta cta--ghost" href="/contact">
              Contact
            </DisabledLink>
            <DisabledLink className="cta" href="/partner">
              Partner With Us
            </DisabledLink>
          </div>
        </div>
        <nav className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--line)] pt-3 text-sm text-[var(--slate)] lg:hidden">
          {navItems.map((item) => (
            <DisabledLink href={item.href} key={item.href}>
              {item.label}
            </DisabledLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
