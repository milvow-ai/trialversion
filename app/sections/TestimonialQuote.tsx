"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function TestimonialQuote() {
  return (
    <section className="py-32 md:py-48">
      <Container size="narrow" className="text-center">
        <FadeIn>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-10">
            What the client said
          </div>
        </FadeIn>

        <FadeIn delay={0.06} y={24}>
          <blockquote className="font-sans font-medium text-ink tracking-tighter leading-[1.1] text-[26px] sm:text-3xl md:text-4xl lg:text-[44px] mb-12 text-balance">
            <span className="text-ink-faint">&ldquo;</span>
            The redesign completely changed how patients perceived us before
            they even contacted our clinic. People walk in already trusting the
            team — that almost never used to happen.
            <span className="text-ink-faint">&rdquo;</span>
          </blockquote>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="flex flex-col items-center gap-1">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle">
              Client
            </span>
            <span className="text-ink text-[15px] font-medium mt-2">
              Dr. Rupender Goel
            </span>
            <span className="text-ink-muted text-[13px]">
              Founder, Goel Dental & Orthodontic Centre
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
