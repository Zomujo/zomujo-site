import DisabledLink from "./DisabledLink";
import SectionHeader from "./SectionHeader";

const focusAreas = [
  {
    href: "/health",
    number: "01",
    tag: "Health and Wellbeing",
    title: "Health and Wellbeing Systems",
    body: "Digital tools and frontline support that bring care closer.",
    featured: true,
    positionClass: "lg:col-start-2 lg:row-start-2",
  },
  {
    href: "/education",
    number: "02",
    tag: "Education",
    title: "Education, Skills and Youth Development",
    body: "Learning pathways that prepare young people for opportunity.",
    positionClass: "lg:col-start-1 lg:row-start-1 lg:translate-x-[108px]",
  },
  {
    href: "/innovation",
    number: "03",
    tag: "Innovation",
    title: "Digital Innovation and Access",
    body: "Inclusive technology ecosystems that bridge the access gap.",
    positionClass: "lg:col-start-3 lg:row-start-1 lg:-translate-x-[108px]",
  },
  {
    href: "/community",
    number: "04",
    tag: "Community",
    title: "Community Systems and Social Protection",
    body: "Data-backed safety nets that reach people where they live.",
    positionClass: "lg:col-start-1 lg:row-start-2",
  },
  {
    href: "/livelihoods",
    number: "05",
    tag: "Livelihoods",
    title: "Economic Empowerment and Livelihoods",
    body: "Market access and financial tools that unlock stability.",
    positionClass: "lg:col-start-3 lg:row-start-2",
  },
  {
    href: "/climate",
    number: "06",
    tag: "Climate",
    title: "Climate, Environment and Resilience",
    body: "Resilience systems that protect communities and ecosystems.",
    positionClass: "lg:col-start-1 lg:row-start-3 lg:translate-x-[108px]",
  },
  {
    href: "/research",
    number: "07",
    tag: "Research",
    title: "Research, Data and Policy Influence",
    body: "Evidence that shapes policy and drives sustainable change.",
    positionClass: "lg:col-start-3 lg:row-start-3 lg:-translate-x-[108px]",
  },
];

export default function FocusAreas() {
  return (
    <section className="mt-[72px] grid gap-8" aria-labelledby="focus-title">
      <SectionHeader
        kicker="Our Focus Areas"
        title="Where we concentrate our work"
        titleId="focus-title"
        description="Seven interconnected systems shape well-being. We build the digital and community infrastructure that makes each one stronger and more resilient."
        className="section-heading"
      />
      <div className="grid gap-6 min-[961px]:grid-cols-3 min-[961px]:[column-gap:12px] min-[961px]:[row-gap:32px] max-[960px]:grid-cols-2 max-[680px]:grid-cols-1">
        {focusAreas.map((area) => (
          <DisabledLink
            className={`relative flex h-[220px] flex-col gap-3.5 rounded-[var(--radius-md)] border border-[var(--line)] bg-[linear-gradient(145deg,#ffffff,#f1f6ff)] px-[18px] pt-4 pb-[18px] text-[var(--ink)] shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--teal)_24%,var(--line))] hover:shadow-[0_24px_60px_rgba(7,34,80,0.16)] ${area.positionClass} ${
              area.featured
                ? "border-[color:color-mix(in_srgb,var(--teal)_26%,var(--line))] bg-[linear-gradient(145deg,#ffffff,#e8f0ff)]"
                : ""
            }`}
            href={area.href}
            key={area.href}
          >
            {area.featured ? (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-[18px] rounded-[var(--radius-md)] border border-dashed border-[rgba(31,78,168,0.25)]"
              />
            ) : null}
            <div className="flex justify-between text-[0.95rem] font-semibold text-[var(--slate)]">
              <span>{area.number}</span>
              <span className="border-b border-[rgba(31,78,168,0.3)] pb-0.5 text-[0.8rem] tracking-[0.02em] text-[var(--teal)]">
                {area.tag}
              </span>
            </div>
            <h3 className="m-0 font-[family-name:var(--font-display)] text-[1.05rem] leading-snug">
              {area.title}
            </h3>
            <p className="m-0 text-[0.95rem] text-[var(--slate)]">{area.body}</p>
          </DisabledLink>
        ))}
      </div>
    </section>
  );
}
