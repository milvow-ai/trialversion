"use client";

import { Sparkles, Smile, Stethoscope, MapPin } from "lucide-react";
import { useInView, useCounter } from "@/lib/hooks";
import { STATS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const ICONS = [Sparkles, Smile, Stethoscope, MapPin];

function StatCard({
  stat,
  active,
  index,
}: {
  stat: (typeof STATS)[number];
  active: boolean;
  index: number;
}) {
  const count = useCounter(stat.value, active);
  const Icon = ICONS[index % ICONS.length];

  return (
    <div
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`relative bg-surface rounded-2xl shadow-card p-6 text-center group overflow-hidden border border-transparent hover:border-brand-100 hover:-translate-y-2 hover:shadow-card-hover transition-all duration-500 ${
        active ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-brand-50 opacity-40 group-hover:scale-150 transition-transform duration-700" />

      <div className="relative w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand transition-colors duration-500">
        <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-500 group-hover:rotate-12" />
      </div>

      <div className="relative text-4xl md:text-5xl font-extrabold text-brand mb-1 transition-transform duration-300 group-hover:scale-110">
        {count}
        {stat.suffix}
      </div>
      <div className="relative text-ink-muted text-sm">{stat.label}</div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand group-hover:w-16 transition-all duration-500 rounded-full" />
    </div>
  );
}

export function Stats() {
  const { ref, inView } = useInView(0.3);

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-16 px-4 bg-surface-soft overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1a3f7a 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container className="relative">
        <SectionHeading eyebrow="Clinic Figures" title="What Have We Achieved" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
