import ImpactCount from "../ImpactCount";
import SectionHeader from "./SectionHeader";

const metrics = [
  { label: "Communities Reached", value: 120, suffix: "+" },
  { label: "Programmes Delivered", value: 45, suffix: "+" },
  { label: "Partners and Collaborators", value: 30, suffix: "+" },
  { label: "Countries of Operation", value: 4 },
];

export default function ImpactSnapshot() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <SectionHeader
        kicker="Impact Snapshot"
        title="Momentum you can measure"
        titleId="impact-title"
        description="We track outcomes across the systems we strengthen. These figures will grow as programmes expand and partnerships deepen."
        className="section-heading"
      />
      <div className="impact-grid">
        {metrics.map((metric) => (
          <div className="impact-card" key={metric.label}>
            <span className="impact-card__label">{metric.label}</span>
            <ImpactCount value={metric.value} suffix={metric.suffix} />
          </div>
        ))}
      </div>
    </section>
  );
}
