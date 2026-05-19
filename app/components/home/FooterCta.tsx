import DisabledLink from "./DisabledLink";

export default function FooterCta() {
  return (
    <section
      className="mt-22 overflow-hidden rounded-xl border border-[color:var(--line)] bg-white shadow-[var(--shadow-soft)]"
      aria-labelledby="footer-cta-title"
    >
      <div className="grid gap-8 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <span className="section-kicker">Join Us</span>
          <h2
            id="footer-cta-title"
            className="mt-3 font-[family-name:var(--font-display)] text-[1.9rem] leading-tight text-[var(--ink)] md:text-[2.3rem]"
          >
            Build resilient systems with us
          </h2>
          <p className="mt-3 max-w-2xl text-[1rem] leading-7 text-[var(--slate)]">
            Whether you are a funder, government agency, technology company,
            researcher, or community leader, there is a role for you in the work
            we do.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <DisabledLink className="cta" href="/partner">
            Partner With Us
          </DisabledLink>
          <DisabledLink className="cta cta--ghost" href="/contact">
            Contact Us
          </DisabledLink>
        </div>
      </div>
    </section>
  );
}
