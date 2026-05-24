"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface Showcase {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  alt: string;
}

const SHOWCASES: Showcase[] = [
  {
    index: "01",
    eyebrow: "Hierarchy",
    title: "Designed for instant clarity.",
    body: "Every section earns its place. The first screen answers three questions before you scroll — who, where, and what kind of dentist this is — without a single piece of decorative noise.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=85",
    alt: "Editorial mockup of the new homepage",
  },
  {
    index: "02",
    eyebrow: "Device",
    title: "Built mobile-first, not mobile-also.",
    body: "70% of traffic arrives on a phone, mid-toothache, holding it one-handed. We designed the tap-to-call before we designed the desktop layout. The result feels weightless on small screens.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Mobile experience on the new site",
  },
  {
    index: "03",
    eyebrow: "Identity",
    title: "A calmer visual language.",
    body: "We retired the saturated medical blues and the busy hero collage. In their place: warm off-whites, a single editorial accent, and typography that treats the reader like an adult.",
    image:
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=1400&q=85",
    alt: "Brand identity moodboard",
  },
  {
    index: "04",
    eyebrow: "Performance",
    title: "Faster than the loading state of the old one.",
    body: "Sub-second LCP on 4G. Static-rendered, image-optimised, zero third-party scripts. The fastest piece of the patient journey is the website itself.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1400&q=85",
    alt: "Performance — page on laptop",
  },
];

export function VisualShowcase() {
  return (
    <section className="py-24 md:py-40 bg-paper-warm border-y border-ink-line/70">
      <Container>
        <div className="mb-20 md:mb-28 max-w-3xl">
          <FadeIn>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle mb-6">
              The Work
            </div>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h2 className="font-sans font-medium text-ink tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] text-balance">
              Four decisions that changed how this brand felt online.
            </h2>
          </FadeIn>
        </div>

        <div className="space-y-32 md:space-y-48">
          {SHOWCASES.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.index}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <FadeIn
                  y={32}
                  duration={1.05}
                  className={`lg:col-span-7 ${
                    reverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-media overflow-hidden bg-paper">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </FadeIn>

                <div
                  className={`lg:col-span-5 ${
                    reverse ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-4"
                  }`}
                >
                  <FadeIn delay={0.06}>
                    <div className="flex items-center gap-3 mb-7">
                      <span className="font-mono text-[11px] tabular-nums text-ink-subtle">
                        {s.index}
                      </span>
                      <span className="w-8 h-px bg-ink-line" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                        {s.eyebrow}
                      </span>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.12}>
                    <h3 className="font-sans font-medium text-ink tracking-tighter leading-[1.1] text-2xl md:text-3xl lg:text-[36px] mb-6 text-balance">
                      {s.title}
                    </h3>
                  </FadeIn>
                  <FadeIn delay={0.18}>
                    <p className="text-ink-muted text-[16px] leading-relaxed max-w-[40ch] text-pretty">
                      {s.body}
                    </p>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
