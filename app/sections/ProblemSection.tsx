"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const PROBLEM_IMAGE =
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=85";

export function ProblemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="py-24 md:py-40 border-t border-ink-line/70">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
        >
          <div className="lg:col-span-7 lg:pr-8">
            <FadeIn>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-6">
                The Problem
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h2 className="font-sans font-medium text-ink tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] mb-12 max-w-[22ch] text-balance">
                A 24-year-old practice felt fifteen years older than it was.
              </h2>
            </FadeIn>

            <div className="space-y-8 max-w-prose">
              <FadeIn delay={0.1}>
                <p className="text-ink-muted text-[17px] leading-relaxed">
                  The old site was a directory listing pretending to be a
                  homepage — generic stock photography, a cluttered template,
                  and copy written for nobody in particular. Patients arrived
                  with intent and left without trust.
                </p>
              </FadeIn>
              <FadeIn delay={0.18}>
                <p className="text-ink-muted text-[17px] leading-relaxed">
                  Mobile was an afterthought. Buttons were too small. The phone
                  number sat below three folds of unread copy. And the brand —
                  warm, careful, generational — was nowhere on the screen.
                </p>
              </FadeIn>

              <FadeIn delay={0.26}>
                <ul className="space-y-3 pt-2 text-[15px] text-ink">
                  {[
                    "Outdated visual language",
                    "No clear hierarchy of trust signals",
                    "Mobile experience failing 70% of traffic",
                    "Branding inconsistent across every touchpoint",
                  ].map((item, i) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 py-2 border-t border-ink-line/60 first:border-t-0"
                    >
                      <span className="font-mono text-[11px] text-ink-subtle pt-1 tabular-nums">
                        0{i + 1}
                      </span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <FadeIn duration={1.1} y={32}>
              <div className="relative aspect-[3/4] rounded-media overflow-hidden bg-paper-cream">
                <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
                  <Image
                    src={PROBLEM_IMAGE}
                    alt="Before — the legacy site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover scale-[1.08]"
                  />
                </motion.div>
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                <span>Before — 2025</span>
                <span>02 / 06</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
