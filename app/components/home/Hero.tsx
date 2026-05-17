import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <span className="hero__eyebrow">Zomujo Foundation</span>
        <h1>Technology. Community. Impact.</h1>
        <p>
          Zomujo Foundation builds the systems that connect people to better
          health, education, livelihoods, and resilience. Powered by technology.
          Rooted in community.
        </p>
        <div className="hero__actions">
          <Link className="cta" href="/work">
            Explore Our Work
          </Link>
          <Link className="cta cta--ghost" href="/partner">
            Partner With Us
          </Link>
        </div>
      </div>
      <div className="hero__media">
        <Image
          src="/hero-zomujo.jpg"
          alt="Community health screening and local engagement"
          width={900}
          height={640}
          priority
        />
        <div className="hero__badge">
          Building technology enabled, community driven systems.
        </div>
      </div>
    </section>
  );
}
