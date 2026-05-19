import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const partners = [
  {
    name: "Ministry of Health",
    type: "Government Partner",
    image: "/partner-ai-1.png",
  },
  {
    name: "District Assemblies",
    type: "Local Governance",
    image: "/partner-ai-2.png",
  },
  {
    name: "Community Networks",
    type: "Grassroots Delivery",
    image: "/partner-ai-3.png",
  },
  {
    name: "Research Institutions",
    type: "Evidence and Learning",
    image: "/partner-ai-4.png",
  },
  {
    name: "Technology Partners",
    type: "Digital Systems",
    image: "/partner-ai-5.png",
  },
  {
    name: "Development Agencies",
    type: "Funding and Strategy",
    image: "/partner-ai-6.png",
  },
];

export default function PartnersBand() {
  return (
    <section className="mt-22 grid gap-7" aria-labelledby="partners-title">
      <SectionHeader
        kicker="Partners and Supporters"
        title="Collaborating to scale impact"
        titleId="partners-title"
        description="We work alongside governments, communities, researchers, and private sector partners to design and sustain systems that improve wellbeing."
        className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end"
        action={
          <Link
            href="/partner"
            className="justify-self-start border border-[color:var(--line)] px-5 py-2 text-sm font-semibold text-[var(--teal)] transition hover:border-[color:var(--teal)] hover:bg-white md:justify-self-end"
          >
            Become a Partner
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner) => (
          <article
            key={partner.name}
            className="group relative min-h-[210px] overflow-hidden rounded-md border border-[color:var(--line)] shadow-[var(--shadow-soft)]"
          >
            <Image
              src={partner.image}
              alt={`${partner.name} placeholder`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,20,40,0.78)] via-[rgba(10,20,40,0.22)] to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 grid gap-1 p-4 text-white">
              <h3 className="font-[family-name:var(--font-display)] text-xl leading-tight">
                {partner.name}
              </h3>
              <p className="text-sm text-white/85">{partner.type}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
