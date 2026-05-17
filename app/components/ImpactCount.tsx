"use client";

import { useEffect, useRef, useState } from "react";

type ImpactCountProps = {
  value: number;
  suffix?: string;
  duration?: number;
};

export default function ImpactCount({
  value,
  suffix = "",
  duration = 1200,
}: ImpactCountProps) {
  const [count, setCount] = useState(0);
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const animationRef = useRef(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const animate = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const next = Math.round(value * progress);
        setCount(next);
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
        }
      };

      setCount(0);
      animationRef.current = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [value, duration]);

  return (
    <strong className="impact-card__value" ref={wrapperRef}>
      {count.toLocaleString()}
      {suffix}
    </strong>
  );
}
