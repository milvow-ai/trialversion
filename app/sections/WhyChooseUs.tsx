"use client";

import { useInView, useCounter } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const TEAM_PHOTO =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80";

// ─── Stat counter helper ──────────────────────────────────────────────────────
function CountUp({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const count = useCounter(value, active, 1600);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

// ─── Bento Cells ──────────────────────────────────────────────────────────────
function CellSatisfaction({
  inView,
  delay,
}: {
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`group col-span-2 relative overflow-hidden rounded-2xl bg-brand p-6 md:p-8 flex flex-col justify-between min-h-[180px] transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-brand/30 ${
        inView
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-[0.96] translate-y-6"
      }`}
    >
      <div className="pointer-events-none absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-white/[0.06] animate-float-y" />
      <div className="pointer-events-none absolute -top-6 right-20 w-24 h-24 rounded-full bg-white/[0.04]" />
      <svg
        className="pointer-events-none absolute -bottom-14 -right-14 w-60 h-60 opacity-[0.08]"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="0.6" />
      </svg>
      <span className="relative z-10 text-5xl md:text-6xl font-extrabold text-white leading-none">
        <CountUp value={98} suffix="%" active={inView} />
      </span>
      <span className="relative z-10 text-xs font-medium text-white/80 mt-auto">
        Patient Satisfaction
      </span>
    </div>
  );
}

function CellYears({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`col-span-1 rounded-2xl bg-surface-tint p-6 md:p-7 flex flex-col justify-between min-h-[180px] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <span className="text-5xl font-extrabold text-brand leading-none">
        <CountUp value={24} suffix="+" active={inView} />
      </span>
      <span className="text-xs font-medium text-ink-muted mt-auto">
        Years of Excellence
      </span>
    </div>
  );
}

function CellEmergency({
  inView,
  delay,
}: {
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`col-span-1 rounded-2xl bg-surface-tint p-6 md:p-7 flex flex-col justify-between min-h-[160px] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="flex items-start gap-2">
        <span className="text-5xl font-extrabold text-brand-dark leading-none">
          24/7
        </span>
        <span className="relative flex h-2.5 w-2.5 mt-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70 animate-ping" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
      </div>
      <span className="text-xs font-medium text-ink-muted mt-auto">
        Emergency Support
      </span>
    </div>
  );
}

function CellTestimonial({
  inView,
  delay,
}: {
  inView: boolean;
  delay: number;
}) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`col-span-1 rounded-2xl bg-surface border border-surface-card p-5 flex flex-col justify-between min-h-[160px] transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-md hover:border-brand/30 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div>
        <p className="text-xs font-bold text-ink mb-2">A Smile Worth Showing</p>
        <p className="text-xs text-ink-muted leading-relaxed italic line-clamp-4">
          &ldquo;The covid protocols, the staff warmth, and Dr Goel&apos;s care
          — every visit felt safe and personal.&rdquo;
        </p>
      </div>
      <span className="text-xs font-medium text-ink-subtle mt-3">
        — Sidharth B.
      </span>
    </div>
  );
}

function CellImplants({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`group col-span-1 relative overflow-hidden rounded-2xl bg-brand-dark p-6 md:p-7 flex flex-col justify-between min-h-[160px] transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-brand-dark/40 ${
        inView
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-[0.96] translate-y-6"
      }`}
    >
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/[0.05] animate-float-y"
        style={{ animationDuration: "6s" }}
      />
      <svg
        className="pointer-events-none absolute top-3 right-3 w-20 h-20 opacity-[0.10]"
        viewBox="0 0 80 80"
      >
        <circle cx="40" cy="40" r="30" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="40" cy="40" r="20" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="40" cy="40" r="10" fill="none" stroke="white" strokeWidth="0.6" />
      </svg>
      <span className="relative z-10 text-5xl font-extrabold text-white leading-none">
        <CountUp value={200} suffix="+" active={inView} />
      </span>
      <span className="relative z-10 text-xs font-medium text-white/80 mt-auto">
        Implants Placed
      </span>
    </div>
  );
}

// ─── Photo column ─────────────────────────────────────────────────────────────
function PhotoColumn({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`group w-full lg:w-[40%] relative rounded-2xl overflow-hidden min-h-[360px] lg:min-h-0 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      <ImageWithFallback
        src={TEAM_PHOTO}
        alt="Dr. Goel's dental team"
        fill
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent transition-opacity duration-700 group-hover:opacity-50" />
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function WhyChooseUs() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} id="why-choose" className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div
          className={`mb-10 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-ink mb-3 tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm text-ink-muted max-w-md leading-relaxed">
            24 years of dental expertise, a committed team, and advanced
            technology — all focused on your smile.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-4">
            <CellSatisfaction inView={inView} delay={100} />
            <CellYears inView={inView} delay={180} />
            <CellEmergency inView={inView} delay={120} />
            <CellTestimonial inView={inView} delay={200} />
            <CellImplants inView={inView} delay={280} />
          </div>
          <PhotoColumn inView={inView} delay={150} />
        </div>
      </div>
    </section>
  );
}
