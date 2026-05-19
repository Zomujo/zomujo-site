import Image from "next/image";
import DisabledLink from "./DisabledLink";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[560px] lg:min-h-[640px] flex items-center mt-0">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-zomujo.jpg"
          alt="Community health screening and local engagement"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark gradient overlay so the white text is perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10"></div>
      </div>

      {/* Content Layer */}
      <div className="container relative z-10 w-full py-16 lg:py-24 text-white">
        <span className="text-[var(--gold)] text-sm sm:text-base font-bold tracking-[0.08em] uppercase mb-4 block">
          Zomujo Foundation
        </span>
        
        <h1 
          className="text-4xl sm:text-5xl lg:text-[4.6rem] font-bold leading-[1.05] mb-6 max-w-2xl text-white"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Technology. Community. Impact.
        </h1>
        
        <p className="text-[1.05rem] lg:text-[1.1rem] text-white/90 max-w-[520px] mb-8 leading-relaxed">
          Zomujo Foundation builds the systems that connect people to better
          health, education, livelihoods, and resilience. Powered by technology.
          Rooted in community.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <DisabledLink 
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[var(--teal)] text-white font-semibold shadow-lg transition-transform hover:-translate-y-1" 
            href="/work"
          >
            Explore Our Work
          </DisabledLink>
          <DisabledLink 
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold transition-colors hover:bg-white/20" 
            href="/partner"
          >
            Partner With Us
          </DisabledLink>
        </div>
      </div>

      {/* Badge in the bottom right */}
      <div className="absolute right-6 bottom-6 z-10 bg-[#0d1117]/60 backdrop-blur-md border border-white/10 text-white p-4 rounded-[14px] text-sm max-w-[240px] hidden md:block">
        Building technology enabled, community driven systems.
      </div>
    </section>
  );
}
