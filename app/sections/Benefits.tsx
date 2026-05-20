"use client";

import {
  Stethoscope,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/lib/hooks";

interface Benefit {
  Icon: LucideIcon;
  title: string;
  body: string;
}

const BENEFITS: Benefit[] = [
  {
    Icon: Stethoscope,
    title: "Experienced dental care",
    body: "Over 24 years of orthodontic and restorative expertise — modern technique, gentle hands, and honest advice every visit.",
  },
  {
    Icon: Users,
    title: "Family appointment convenience",
    body: "Schedule the whole household in a single trip. We're great with kids, careful with seniors, and easy with everyone in between.",
  },
  {
    Icon: Wallet,
    title: "Transparent pricing & EMI plans",
    body: "Clear estimates upfront, no surprises at the desk. Easy EMI options for implants, braces, and bigger treatments.",
  },
];

export function Benefits() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      id="benefits"
      className="bg-surface px-4 md:px-8 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`max-w-3xl mb-16 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            Why locals choose us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.08] tracking-tight">
            Experience matters,{" "}
            <span className="italic font-medium text-accent-ink">
              and so do you
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const { Icon } = b;
            return (
              <div
                key={b.title}
                style={{ transitionDelay: `${i * 120}ms` }}
                className={`group bg-accent/40 hover:bg-accent rounded-[28px] p-8 transition-all duration-500 ease-out hover:-translate-y-1 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center mb-7 shadow-soft group-hover:scale-110 transition-transform">
                  <Icon
                    className="w-7 h-7 text-brand"
                    strokeWidth={1.5}
                    fill="none"
                  />
                </div>
                <h3 className="font-display font-bold text-ink text-xl leading-snug mb-3">
                  {b.title}
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {b.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
