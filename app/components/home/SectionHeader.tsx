import { ReactNode } from "react";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  titleId: string;
  description?: string;
  className?: string;
  action?: ReactNode;
};

export default function SectionHeader({
  kicker,
  title,
  titleId,
  description,
  className = "grid max-w-3xl gap-3",
  action,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div>
        <span className="section-kicker">{kicker}</span>
        <h2
          className="mt-3 font-[family-name:var(--font-display)] text-[2rem] leading-tight text-[var(--ink)] md:text-[2.75rem]"
          id={titleId}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-[1.03rem] leading-7 text-[var(--slate)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="md:justify-self-end">{action}</div> : null}
    </div>
  );
}
