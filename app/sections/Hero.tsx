"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const META = [
  { label: "Industry", value: "Healthcare" },
  { label: "Timeline", value: "6 weeks" },
  { label: "Services", value: "Brand · Web · Build" },
  { label: "Platform", value: "Next.js · Vercel" },
];

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1600&q=85";

export function Hero() {
  return (
    <section className="pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 mb-10 md:mb-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Case Study / 02
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.05 }}
              className="text-balance font-sans font-medium text-ink tracking-tightest leading-[0.98] text-[42px] sm:text-[58px] md:text-[72px] lg:text-[84px] mb-8 md:mb-10"
            >
              From invisible local clinic to a brand people trusted{" "}
              <span className="italic font-normal text-ink-muted">
                instantly.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease: EASE, delay: 0.2 }}
              className="text-ink-muted text-[17px] md:text-lg leading-relaxed max-w-[44ch]"
            >
              A complete redesign focused on clarity, credibility, and premium
              perception — without losing the warmth of a neighbourhood practice.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] rounded-media overflow-hidden bg-paper-cream shadow-soft">
              <Image
                src={HERO_IMAGE}
                alt="Goel Dental redesigned"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
              <span>Goel Dental — Home, 2026</span>
              <span>01 / 06</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 border-t border-ink-line"
        >
          {META.map((item, i) => (
            <div
              key={item.label}
              className={`py-6 md:py-7 ${
                i < META.length - 1
                  ? "md:border-r border-ink-line/70"
                  : ""
              } ${
                i < 2 ? "border-b md:border-b-0 border-ink-line/70" : ""
              } ${i % 2 === 0 ? "pr-6" : "pl-6 md:pl-8"}`}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle mb-3">
                {item.label}
              </div>
              <div className="text-ink text-[15px] font-medium">
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
