"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  return (
    <section
      id="start"
      className="py-32 md:py-48 bg-paper-warm border-t border-ink-line/70"
    >
      <Container className="max-w-4xl">
        <FadeIn>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-10">
            Next Project
          </div>
        </FadeIn>

        <FadeIn delay={0.06} y={28}>
          <h2 className="font-sans font-medium text-ink tracking-tightest leading-[1.02] text-3xl sm:text-4xl md:text-[56px] lg:text-[68px] mb-10 max-w-[20ch] text-balance">
            Your website should make trust feel immediate.
          </h2>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="text-ink-muted text-[17px] md:text-lg leading-relaxed max-w-[52ch] mb-14 text-pretty">
            We partner with ambitious brands that care about perception,
            clarity, and long-term positioning. If that&apos;s the kind of work
            you&apos;re after, we&apos;d like to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.24}>
          <Link
            href="mailto:hello@milvow.studio"
            className="group inline-flex items-center gap-3 bg-ink text-paper text-[15px] font-medium pl-6 pr-2 py-2 rounded-full hover:bg-ink-soft transition-all duration-300"
          >
            Start a project
            <span className="w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </FadeIn>

        <FadeIn delay={0.34}>
          <div className="mt-20 pt-8 border-t border-ink-line/60 flex flex-wrap items-center gap-x-10 gap-y-3 text-[13px] text-ink-muted">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
              Or write directly
            </span>
            <a
              href="mailto:hello@milvow.studio"
              className="text-ink hover:opacity-70 transition-opacity"
            >
              hello@milvow.studio
            </a>
            <span className="text-ink-faint">·</span>
            <span>Reply within one business day</span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
