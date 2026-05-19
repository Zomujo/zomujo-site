import Image from "next/image";
import ImpactCount from "../ImpactCount";

const metrics = [
  { label: "Communities Reached", value: 120, suffix: "+" },
  { label: "Programmes Delivered", value: 45, suffix: "+" },
  { label: "Partners and Collaborators", value: 30, suffix: "+" },
  { label: "Countries of Operation", value: 4 },
];

export default function ImpactSnapshot() {
  return (
    <section className="relative w-full overflow-hidden rounded-[var(--radius-lg)] my-16 lg:my-24 shadow-2xl" aria-labelledby="impact-title">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/why-zomujo-1.jpg"
          alt="Community Impact"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0d1117]/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
        <div className="max-w-3xl mb-12">
          <span className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase block mb-3">
            Impact Snapshot
          </span>
          <h2
            id="impact-title"
            className="font-[family-name:var(--font-display)] text-[2rem] md:text-[3rem] leading-tight text-white mb-4"
          >
            Momentum you can measure
          </h2>
          <p className="text-[1.1rem] leading-relaxed text-white/80 max-w-2xl">
            We track outcomes across the systems we strengthen. These figures will grow as programmes expand and partnerships deepen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => (
            <div 
              key={metric.label}
              className="flex flex-col justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-lg transition-transform hover:-translate-y-1"
            >
              <span className="text-white/70 font-semibold mb-2 block text-sm uppercase tracking-wide">
                {metric.label}
              </span>
              <ImpactCount 
                value={metric.value} 
                suffix={metric.suffix} 
                className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl text-[var(--gold)] block" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
