import Image from "next/image";
import Link from "next/link";

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
      <div className="container site-header__inner">
        <Link className="logo" href="/">
          <Image
            src="/zomujo-logo.png"
            alt="Zomujo Foundation"
            width={40}
            height={40}
          />
          <span>Zomujo Foundation</span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="cta" href="/partner">
          Partner With Us
        </Link>
      </div>
    </header>
  );
}
