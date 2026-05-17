import ImpactCount from "./components/ImpactCount";

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
      <main className="container" style={{ padding: "96px 0 48px" }}>
        <section className="hero">
          <div className="hero__content">
            <span className="hero__eyebrow">Zomujo Foundation</span>
            <h1>Technology. Community. Impact.</h1>
            <p>
              Zomujo Foundation builds the systems that connect people to better
              health, education, livelihoods, and resilience. Powered by
              technology. Rooted in community.
            </p>
            <div className="hero__actions">
              <a className="cta" href="/work">
                Explore Our Work
              </a>
              <a className="cta cta--ghost" href="/partner">
                Partner With Us
              </a>
            </div>
          </div>
          <div className="hero__media">
            <img
              src="/hero-zomujo.jpg"
              alt="Community health screening and local engagement"
            />
            <div className="hero__badge">
              Building technology enabled, community driven systems.
            </div>
          </div>
        </section>

        <section className="mission">
          <p>
            We design and deploy technology enabled, community driven systems
            that strengthen how people live, learn, earn, and adapt across
            Africa and beyond.
          </p>
        </section>

        <section className="focus" aria-labelledby="focus-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Our Focus Areas</span>
              <h2 id="focus-title">Where we concentrate our work</h2>
            </div>
            <p>
              Seven interconnected systems shape well-being. We build the digital
              and community infrastructure that makes each one stronger and more
              resilient.
            </p>
          </div>
          <div className="focus-grid">
            <a className="focus-card focus-card--featured focus-pos--center" href="/health">
              <div className="focus-card__top">
                <span>01</span>
                <span className="focus-card__tag">Health and Wellbeing</span>
              </div>
              <h3>Health and Wellbeing Systems</h3>
              <p>Digital tools and frontline support that bring care closer.</p>
            </a>
            <a className="focus-card focus-pos--top-left" href="/education">
              <div className="focus-card__top">
                <span>02</span>
                <span className="focus-card__tag">Education</span>
              </div>
              <h3>Education, Skills and Youth Development</h3>
              <p>Learning pathways that prepare young people for opportunity.</p>
            </a>
            <a className="focus-card focus-pos--top-right" href="/innovation">
              <div className="focus-card__top">
                <span>03</span>
                <span className="focus-card__tag">Innovation</span>
              </div>
              <h3>Digital Innovation and Access</h3>
              <p>Inclusive technology ecosystems that bridge the access gap.</p>
            </a>
            <a className="focus-card focus-pos--middle-left" href="/community">
              <div className="focus-card__top">
                <span>04</span>
                <span className="focus-card__tag">Community</span>
              </div>
              <h3>Community Systems and Social Protection</h3>
              <p>Data-backed safety nets that reach people where they live.</p>
            </a>
            <a className="focus-card focus-pos--middle-right" href="/livelihoods">
              <div className="focus-card__top">
                <span>05</span>
                <span className="focus-card__tag">Livelihoods</span>
              </div>
              <h3>Economic Empowerment and Livelihoods</h3>
              <p>Market access and financial tools that unlock stability.</p>
            </a>
            <a className="focus-card focus-pos--bottom-left" href="/climate">
              <div className="focus-card__top">
                <span>06</span>
                <span className="focus-card__tag">Climate</span>
              </div>
              <h3>Climate, Environment and Resilience</h3>
              <p>Resilience systems that protect communities and ecosystems.</p>
            </a>
            <a className="focus-card focus-pos--bottom-right" href="/research">
              <div className="focus-card__top">
                <span>07</span>
                <span className="focus-card__tag">Research</span>
              </div>
              <h3>Research, Data and Policy Influence</h3>
              <p>Evidence that shapes policy and drives sustainable change.</p>
            </a>
          </div>
        </section>

        <section className="impact" aria-labelledby="impact-title">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Impact Snapshot</span>
              <h2 id="impact-title">Momentum you can measure</h2>
            </div>
            <p>
              We track outcomes across the systems we strengthen. These figures
              will grow as programmes expand and partnerships deepen.
            </p>
          </div>
          <div className="impact-grid">
            <div className="impact-card">
              <span className="impact-card__label">Communities Reached</span>
              <ImpactCount value={120} suffix="+" />
            </div>
            <div className="impact-card">
              <span className="impact-card__label">Programmes Delivered</span>
              <ImpactCount value={45} suffix="+" />
            </div>
            <div className="impact-card">
              <span className="impact-card__label">Partners and Collaborators</span>
              <ImpactCount value={30} suffix="+" />
            </div>
            <div className="impact-card">
              <span className="impact-card__label">Countries of Operation</span>
              <ImpactCount value={4} />
            </div>
          </div>
        </section>

        <section className="why" aria-labelledby="why-title">
          <div className="why__content">
            <span className="section-kicker">Why Zomujo?</span>
            <h2 id="why-title">A systems organization, built for wellbeing</h2>
            <p>
              Zomujo is a word from the Ga language of Ghana, meaning good health
              or wellbeing. The name reflects our founding commitment to the
              total wellbeing of individuals and communities. That commitment
              has grown from health into education, livelihoods, digital access,
              climate resilience, and evidence based policy.
            </p>
            <p>
              We are not a single issue organisation. We are a systems
              organisation. We build the connective tissue between technology
              and community that makes development outcomes durable,
              measurable, and sustainable.
            </p>
          </div>
          <div className="why__panel">
            <div className="why__panel-card">
              <strong>Meaning of Zomujo</strong>
              <p>Good health or wellbeing, rooted in Ga language.</p>
            </div>
            <div className="why__panel-card">
              <strong>Systems first</strong>
              <p>We build the infrastructure that makes programmes durable.</p>
            </div>
            <div className="why__panel-card">
              <strong>Community centered</strong>
              <p>Technology that starts with the realities of local life.</p>
            </div>
          </div>
        </section>
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
