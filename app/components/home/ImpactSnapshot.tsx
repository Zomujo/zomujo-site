import ImpactCount from "../ImpactCount";

const metrics = [
  { label: "Communities Reached", value: 120, suffix: "+" },
  { label: "Programmes Delivered", value: 45, suffix: "+" },
  { label: "Partners and Collaborators", value: 30, suffix: "+" },
  { label: "Countries of Operation", value: 4 },
];

export default function ImpactSnapshot() {
  return (
    <section className="impact" aria-labelledby="impact-title">
      <div className="section-heading">
        <div>
          <span className="section-kicker">Impact Snapshot</span>
          <h2 id="impact-title">Momentum you can measure</h2>
        </div>
        <p>
          We track outcomes across the systems we strengthen. These figures will
          grow as programmes expand and partnerships deepen.
        </p>
      </div>
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
