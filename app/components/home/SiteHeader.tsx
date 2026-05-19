"use client";

import Image from "next/image";
import { useState } from "react";
import DisabledLink from "./DisabledLink";

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
];

const focusAreaItems = [
  { href: "/health", label: "Health" },
  { href: "/education", label: "Education" },
  { href: "/innovation", label: "Digital Innovation" },
  { href: "/community", label: "Community Systems" },
  { href: "/livelihoods", label: "Livelihoods" },
  { href: "/climate", label: "Climate" },
];

const mobileNavItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  ...focusAreaItems,
  { href: "/research", label: "Research" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header w-full">
      <div className="container" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <div className="flex w-full items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center">
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
            className="hidden flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-[var(--line)] py-4 text-[0.85rem] text-[var(--slate)] xl:gap-x-5 xl:text-[0.9rem] lg:flex"
            aria-label="Primary"
          >
            {mainNavItems.map((item) => (
              <DisabledLink
                href={item.href}
                key={item.href}
                className="whitespace-nowrap border-b border-transparent pb-1 transition hover:border-[var(--teal)] hover:text-[var(--teal)]"
              >
                {item.label}
              </DisabledLink>
            ))}

            <div className="group relative flex items-center">
              <button className="flex items-center gap-1 whitespace-nowrap border-b border-transparent pb-1 transition hover:border-[var(--teal)] hover:text-[var(--teal)] focus:outline-none">
                Focus Areas
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 transition-transform group-hover:rotate-180">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              <div className="absolute left-1/2 top-full z-50 mt-1 hidden w-56 -translate-x-1/2 flex-col gap-1 rounded-xl border border-[var(--line)] bg-white p-2 shadow-lg group-hover:flex">
                {focusAreaItems.map((item) => (
                  <DisabledLink
                    href={item.href}
                    key={item.href}
                    className="rounded-lg px-3 py-2 text-left text-sm transition hover:bg-[var(--sand)] hover:text-[var(--teal)]"
                  >
                    {item.label}
                  </DisabledLink>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <DisabledLink className="cta cta--ghost" href="/contact">
                Contact
              </DisabledLink>
              <DisabledLink className="cta" href="/partner">
                Partner With Us
              </DisabledLink>
            </div>
            <button
              className="p-2 text-[var(--slate)] transition hover:text-[var(--teal)] lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </>
                ) : (
                  <>
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
        <nav className={`${isMobileMenuOpen ? "grid" : "hidden"} grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 border-t border-[var(--line)] mt-4 pt-4 text-[0.95rem] text-[var(--slate)] lg:hidden`}>
          {mobileNavItems.map((item) => (
            <DisabledLink href={item.href} key={item.href} className="py-2">
              {item.label}
            </DisabledLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
