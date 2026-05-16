"use client";

import { Sparkles } from "lucide-react";
import { useInView, useCounter } from "@/lib/hooks";
import { STATS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

function StatCard({
  stat,
  active,
}: {
  stat: (typeof STATS)[number];
  active: boolean;
}) {
  const count = useCounter(stat.value, active);
  return (
    <div className="bg-surface rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-6 text-center group">
      <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-3">
        <Sparkles className="w-5 h-5 text-brand" />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-brand mb-1 group-hover:scale-110 transition-transform">
        {count}
        {stat.suffix}
      </div>
      <div className="text-ink-muted text-sm">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView(0.3);

  return (
    <section ref={ref} id="stats" className="py-14 px-4 bg-surface-soft">
      <Container>
        <SectionHeading eyebrow="Clinic Figures" title="What Have We Achieved" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={inView} />
          ))}
        </div>
      </Container>
    </section>
  );
}
