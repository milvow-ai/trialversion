"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, CreditCard, FileText } from "lucide-react";
import { useInView } from "@/lib/hooks";

const POINTS = [
  {
    Icon: ShieldCheck,
    title: "Honest estimates",
    body: "You'll know exactly what something costs before we begin. No surprises at the desk.",
  },
  {
    Icon: CreditCard,
    title: "Easy EMI options",
    body: "Spread payments for braces, implants, and bigger work across comfortable monthly instalments.",
  },
  {
    Icon: FileText,
    title: "All major insurance",
    body: "We handle the paperwork for most major insurance providers — you focus on getting better.",
  },
];

export function Finance() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      id="finance"
      className="bg-accent/50 px-4 md:px-8 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto text-center">
        <span
          className={`inline-block text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] mb-5 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Finance
        </span>

        <h2
          className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-ink leading-[1.06] tracking-tight max-w-3xl mx-auto mb-6 transition-all duration-1000 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Dentistry doesn&apos;t have to{" "}
          <span className="italic font-medium text-accent-ink">
            break the bank
          </span>
        </h2>

        <p
          className={`text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Good dental care is an investment in years of feeling good. We make it
          approachable with honest pricing, flexible payment plans, and clear
          guidance every step of the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 text-left">
          {POINTS.map((p, i) => {
            const { Icon } = p;
            return (
              <div
                key={p.title}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
                className={`bg-surface rounded-2xl p-6 shadow-soft transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                  <Icon
                    className="w-5 h-5 text-accent-ink"
                    strokeWidth={1.75}
                    fill="none"
                  />
                </div>
                <div className="font-display font-bold text-ink text-base mb-1.5">
                  {p.title}
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>

        <Link
          href="#final-booking"
          className={`group inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-brand-light transition-all hover:scale-[1.03] shadow-card ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          See payment plans
          <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-brand transition-colors">
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
