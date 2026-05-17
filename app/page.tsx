export default function Home() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <div className="logo">
            <img src="/zomujo-logo.png" alt="Zomujo Foundation" width={40} height={40} />
            <span>Zomujo Foundation</span>
          </div>
          <nav className="nav" aria-label="Primary">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/health">Health</a>
            <a href="/education">Education</a>
            <a href="/innovation">Digital Innovation</a>
            <a href="/community">Community Systems</a>
            <a href="/livelihoods">Livelihoods</a>
            <a href="/climate">Climate</a>
            <a href="/research">Research</a>
            <a href="/partner">Partner</a>
            <a href="/contact">Contact</a>
          </nav>
          <a className="cta" href="/partner">
            Partner With Us
          </a>
        </div>
      </header>
      <main className="container" style={{ padding: "80px 0" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
            lineHeight: 1.05,
            marginBottom: "16px",
            color: "var(--ink)",
          }}
        >
          Technology. Community. Impact.
        </h1>
        <p style={{ maxWidth: 640, color: "var(--slate)" }}>
          Zomujo Foundation builds the systems that connect people to better
          health, education, livelihoods, and resilience. Powered by technology.
          Rooted in community.
        </p>
      </main>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <strong>Join Us</strong>
          <p>
            Whether you are a funder, a government agency, a technology company,
            a researcher, or a community leader, there is a role for you in the
            work we do.
          </p>
        </div>
      </footer>
    </div>
  );
}
