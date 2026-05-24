"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function StrategicShift() {
  return (
    <section className="py-32 md:py-48 bg-paper-warm border-y border-ink-line/70">
      <Container size="narrow" className="text-center">
        <FadeIn>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-10">
            The Strategic Shift
          </div>
        </FadeIn>

        <FadeIn delay={0.08} y={28}>
          <h2 className="font-sans font-medium text-ink tracking-tightest leading-[1.02] text-3xl sm:text-4xl md:text-[52px] lg:text-[60px] mb-12 text-balance">
            People don&apos;t trust clinics that look outdated.
          </h2>
        </FadeIn>

        <FadeIn delay={0.18}>
          <p className="text-ink-muted text-[17px] md:text-lg leading-relaxed max-w-[54ch] mx-auto text-pretty">
            Before a patient ever speaks to the receptionist, they&apos;ve
            already decided how careful, how modern, how serious you are. The
            redesign wasn&apos;t about decoration. It was about closing the
            confidence gap between who Dr. Goel is and how the internet was
            introducing him.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
