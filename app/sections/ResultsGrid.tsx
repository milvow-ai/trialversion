"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface Metric {
  value: string;
  label: string;
  delta: string;
  note: string;
}

const METRICS: Metric[] = [
  {
    value: "3.4×",
    label: "Increase in inquiries",
    delta: "+240%",
    note: "From the homepage alone, within 60 days of launch.",
  },
  {
    value: "61%",
    label: "Lower bounce rate",
    delta: "−61%",
    note: "Visitors stayed because the page answered them, not the other way around.",
  },
  {
    value: "2.8×",
    label: "Longer session duration",
    delta: "+180%",
    note: "Patients explored treatments, financing, and the team before booking.",
  },
];

export function ResultsGrid() {
  return (
    <section className="py-24 md:py-36">
      <Container>
        <FadeIn>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-8">
            The Results
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="font-sans font-medium text-ink tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-[52px] lg:text-[60px] mb-16 md:mb-20 max-w-[20ch] text-balance">
            A redesign that paid back in measurable trust.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-line/70 border border-ink-line/70 rounded-media overflow-hidden">
          {METRICS.map((metric, i) => (
            <FadeIn key={metric.label} delay={0.1 + i * 0.08} y={20}>
              <div className="group bg-paper hover:bg-paper-warm transition-colors duration-500 p-10 md:p-12 h-full flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                    0{i + 1} / 03
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted tabular-nums">
                    {metric.delta}
                  </span>
                </div>

                <div>
                  <div className="font-sans font-medium text-ink tracking-tightest leading-[0.95] text-[64px] md:text-[88px] lg:text-[104px] mb-3 transition-transform duration-700 ease-editorial group-hover:-translate-y-0.5">
                    {metric.value}
                  </div>
                  <div className="text-ink text-[15px] font-medium mb-3">
                    {metric.label}
                  </div>
                  <p className="text-ink-muted text-[13px] leading-relaxed max-w-[28ch]">
                    {metric.note}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-16 md:mt-20 text-ink-muted text-[17px] leading-relaxed max-w-[58ch] text-pretty">
            None of these numbers came from clever growth hacks. They came from
            removing friction, telling the truth clearly, and giving the brand a
            voice that matched the standard of care behind it.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
