import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const posts = [
  {
    href: "/news/health-dashboards",
    date: "May 2026",
    category: "Health Systems",
    title: "New district health dashboards deployed in 12 communities",
    body: "Zomujo and local health teams launched live monitoring tools to improve outreach, follow-up care, and referral response times.",
    image: "/news-health.jpg",
    alt: "Community health team reviewing data in the field",
    featured: true,
  },
  {
    href: "/news/skills-innovation-labs",
    date: "April 2026",
    category: "Education and Innovation",
    title: "Skills and innovation labs expand to two new regions",
    body: "Youth-focused digital learning labs now support coding, design, and entrepreneurship pathways in underserved communities.",
    image: "/news-community.jpeg",
    alt: "Young learners using digital devices during a skills workshop",
  },
  {
    href: "/news/resilience-pilots",
    date: "March 2026",
    category: "Climate Resilience",
    title: "Resilience partnership announces community adaptation pilots",
    body: "A new multi-sector coalition is piloting climate adaptation planning with local leaders, data teams, and service providers.",
    image: "/news-resilience.jpg",
    alt: "Community members and partners discussing climate resilience plans",
  },
];

export default function LatestNews() {
  const featured = posts.find((post) => post.featured);
  const compactPosts = posts.filter((post) => !post.featured);

  if (!featured) return null;

  return (
    <section className="mt-22 grid gap-7" aria-labelledby="news-title">
      <SectionHeader
        kicker="Latest News and Updates"
        title="Stories from the field"
        titleId="news-title"
        description="Programme launches, research milestones, and partnership moments shaping how we build wellbeing systems across communities."
      />
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--teal)_24%,var(--line))] hover:shadow-[0_24px_60px_rgba(7,34,80,0.16)]">
          <div className="relative min-h-[320px]">
            <Image
              src={featured.image}
              alt={featured.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4 p-6 md:p-7">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-[0.08em] uppercase">
              <span className="text-[var(--teal)]">{featured.category}</span>
              <span className="text-[var(--slate)]">{featured.date}</span>
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--ink)] md:text-[2rem]">
              {featured.title}
            </h3>
            <p className="max-w-[60ch] text-[0.98rem] leading-7 text-[var(--slate)]">
              {featured.body}
            </p>
            <Link
              className="font-semibold text-[var(--teal)] underline-offset-4 hover:underline"
              href={featured.href}
            >
              Read full story
            </Link>
          </div>
        </article>

        <div className="grid gap-5">
          {compactPosts.map((post) => (
            <article
              className="grid grid-cols-[120px_1fr] overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--teal)_24%,var(--line))] hover:shadow-[0_24px_60px_rgba(7,34,80,0.16)] sm:grid-cols-[150px_1fr]"
              key={post.href}
            >
              <div className="relative min-h-[160px]">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 640px) 35vw, (max-width: 1024px) 28vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="grid content-start gap-2 p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-bold tracking-[0.08em] uppercase">
                  <span className="text-[var(--teal)]">{post.category}</span>
                  <span className="text-[var(--slate)]">{post.date}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[1.1rem] leading-tight text-[var(--ink)]">
                  {post.title}
                </h3>
                <Link
                  className="mt-1 text-sm font-semibold text-[var(--teal)] underline-offset-4 hover:underline"
                  href={post.href}
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
