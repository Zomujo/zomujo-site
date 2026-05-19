import Image from "next/image";
import SectionHeader from "./SectionHeader";

const stories = [
  {
    number: "01",
    title: "Built around people",
    body: "We design from the realities of local life so programmes are trusted, usable, and relevant.",
    image: "/why-zomujo-1.jpg",
    alt: "Community-centered development environment with housing and green space",
  },
  {
    number: "02",
    title: "Systems that last",
    body: "Our work connects technology, delivery, and evidence into infrastructure communities can keep building on.",
    image: "/why-zomujo-2.jpg",
    alt: "Neighborhood context representing place-based systems planning",
  },
];

export default function WhyZomujo() {
  return (
    <section className="mt-22 grid gap-8" aria-labelledby="why-title">
      <SectionHeader
        kicker="Why Zomujo?"
        title="A systems organization, built for wellbeing"
        titleId="why-title"
        description="Zomujo is a word from the Ga language of Ghana, meaning good health or wellbeing. We build the connective tissue between technology and community so outcomes are durable, measurable, and sustainable."
      />

      <div className="grid gap-8">
        {stories.map((story, index) => (
          <article
            className="grid overflow-hidden rounded-lg border border-[var(--line)] bg-white shadow-[var(--shadow-soft)] md:grid-cols-2"
            key={story.number}
          >
            <div
              className={`relative min-h-[260px] md:min-h-[340px] ${
                index === 1 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={story.image}
                alt={story.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid content-center gap-4 p-6 md:p-9">
              <span className="text-sm font-bold tracking-[0.08em] text-[var(--teal)] uppercase">
                {story.number}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl leading-tight text-[var(--ink)] md:text-3xl">
                {story.title}
              </h3>
              <p className="text-base leading-7 text-[var(--slate)]">
                {story.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
