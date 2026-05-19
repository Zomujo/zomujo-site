import Image from "next/image";
import DisabledLink from "./DisabledLink";
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
  const getBentoClasses = (index: number) => {
    switch (index) {
      case 0:
        return "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[440px]"; // Large hero card
      case 1:
        return "md:col-span-2 min-h-[200px]"; // Wide card
      case 2:
      case 3:
        return "md:col-span-1 min-h-[200px]"; // Standard small cards
      case 4:
      case 5:
        return "md:col-span-2 min-h-[220px]"; // Wide bottom cards
      default:
        return "md:col-span-1 min-h-[200px]";
    }
  };

  return (
    <section className="mt-24 lg:mt-32 grid gap-10" aria-labelledby="partners-title">
      <SectionHeader
        kicker="Partners and Supporters"
        title="Collaborating to scale impact"
        titleId="partners-title"
        description="We work alongside governments, communities, researchers, and private sector partners to design and sustain systems that improve wellbeing."
        className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end"
        action={
          <DisabledLink
            href="/partner"
            className="justify-self-start rounded-xl bg-[var(--teal)] px-6 py-3 text-[0.95rem] font-semibold !text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl md:justify-self-end"
          >
            Become a Partner
          </DisabledLink>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
        {partners.map((partner, index) => (
          <article
            key={partner.name}
            className={`group relative overflow-hidden rounded-[24px] shadow-sm transition-all duration-500 hover:shadow-xl ${getBentoClasses(
              index
            )}`}
          >
            <Image
              src={partner.image}
              alt={`${partner.name}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Dynamic gradient overlay that gets slightly darker on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428]/90 via-[#0a1428]/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            
            <div className="absolute right-0 bottom-0 left-0 flex flex-col justify-end p-6 md:p-8 h-full">
              <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl leading-tight text-white">
                  {partner.name}
                </h3>
                <p className="text-sm text-white/80 mt-1 tracking-wide">
                  {partner.type}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
