import Link from "next/link";

const focusAreas = [
  {
    href: "/health",
    number: "01",
    tag: "Health and Wellbeing",
    title: "Health and Wellbeing Systems",
    body: "Digital tools and frontline support that bring care closer.",
    className: "focus-card--featured focus-pos--center",
  },
  {
    href: "/education",
    number: "02",
    tag: "Education",
    title: "Education, Skills and Youth Development",
    body: "Learning pathways that prepare young people for opportunity.",
    className: "focus-pos--top-left",
  },
  {
    href: "/innovation",
    number: "03",
    tag: "Innovation",
    title: "Digital Innovation and Access",
    body: "Inclusive technology ecosystems that bridge the access gap.",
    className: "focus-pos--top-right",
  },
  {
    href: "/community",
    number: "04",
    tag: "Community",
    title: "Community Systems and Social Protection",
    body: "Data-backed safety nets that reach people where they live.",
    className: "focus-pos--middle-left",
  },
  {
    href: "/livelihoods",
    number: "05",
    tag: "Livelihoods",
    title: "Economic Empowerment and Livelihoods",
    body: "Market access and financial tools that unlock stability.",
    className: "focus-pos--middle-right",
  },
  {
    href: "/climate",
    number: "06",
    tag: "Climate",
    title: "Climate, Environment and Resilience",
    body: "Resilience systems that protect communities and ecosystems.",
    className: "focus-pos--bottom-left",
  },
  {
    href: "/research",
    number: "07",
    tag: "Research",
    title: "Research, Data and Policy Influence",
    body: "Evidence that shapes policy and drives sustainable change.",
    className: "focus-pos--bottom-right",
  },
];

export default function FocusAreas() {
  return (
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
        {focusAreas.map((area) => (
          <Link
            className={`focus-card ${area.className}`}
            href={area.href}
            key={area.href}
          >
            <div className="focus-card__top">
              <span>{area.number}</span>
              <span className="focus-card__tag">{area.tag}</span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
