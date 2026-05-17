import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    href: "/news/health-dashboards",
    date: "May 2026",
    title: "New district health dashboards deployed in 12 communities",
    body: "Zomujo and local health teams launched live monitoring tools to improve outreach, follow-up care, and referral response times.",
    image: "/news-health.jpg",
    alt: "Community health team reviewing data in the field",
    featured: true,
  },
  {
    href: "/news/skills-innovation-labs",
    date: "April 2026",
    title: "Skills and innovation labs expand to two new regions",
    body: "Youth-focused digital learning labs now support coding, design, and entrepreneurship pathways in underserved communities.",
    image: "/news-community.jpeg",
    alt: "Young learners using digital devices during a skills workshop",
  },
  {
    href: "/news/resilience-pilots",
    date: "March 2026",
    title: "Resilience partnership announces community adaptation pilots",
    body: "A new multi-sector coalition is piloting climate adaptation planning with local leaders, data teams, and service providers.",
    image: "/news-resilience.jpg",
    alt: "Community members and partners discussing climate resilience plans",
  },
];

export default function LatestNews() {
  return (
    <section className="mt-22 grid gap-7" aria-labelledby="news-title">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Latest News and Updates</span>
          <h2 id="news-title">Stories from the field</h2>
        </div>
        <p>
          Programme launches, research milestones, and partnership moments
          shaping how we build wellbeing systems across communities.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.25fr_1fr]">
        {posts.map((post) => (
          <article
            className={`overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--teal)_24%,var(--line))] hover:shadow-[0_24px_60px_rgba(7,34,80,0.16)] ${
              post.featured ? "lg:row-span-2" : ""
            }`}
            key={post.href}
          >
            <div
              className={`relative ${
                post.featured ? "min-h-[280px]" : "min-h-[180px]"
              }`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes={post.featured ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 1024px) 100vw, 45vw"}
                className="object-cover"
              />
            </div>
            <div className="grid gap-3 p-5">
              <span className="text-xs font-bold tracking-[0.08em] text-[var(--teal)] uppercase">
                {post.date}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl leading-tight text-[var(--ink)]">
                {post.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--slate)]">
                {post.body}
              </p>
              <Link
                className="font-semibold text-[var(--teal)]"
                href={post.href}
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
