"use client";

import Link from "next/link";
import {
  Smile,
  Anchor,
  AlignCenter,
  Sparkles,
  Shield,
  ArrowUpRight,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

// ─── Data ─────────────────────────────────────────────────────────────────────
interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}

const SERVICES: Service[] = [
  {
    id: "orthodontic",
    icon: Smile,
    title: "Orthodontic",
    desc: "Latest orthodontic technology to align your teeth and correct your bite — from traditional braces to clear aligners.",
    href: "#orthodontic",
  },
  {
    id: "dental-implant",
    icon: Anchor,
    title: "Dental Implant",
    desc: "A permanent, natural-looking solution to replace missing teeth and restore your smile with complete confidence.",
    href: "#dental-implant",
  },
  {
    id: "invisalign",
    icon: AlignCenter,
    title: "Invisalign",
    desc: "Straighten teeth discreetly with custom-fit clear aligners. No brackets, no wires — just a beautifully aligned smile.",
    href: "#invisalign",
  },
  {
    id: "cosmetic",
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    desc: "From veneers to full smile makeovers, our cosmetic treatments enhance your smile's natural beauty and symmetry.",
    href: "#cosmetic",
  },
  {
    id: "general",
    icon: Shield,
    title: "General Dentistry",
    desc: "Regular checkups, cleanings, fillings, and preventive care to keep your teeth and gums healthy for life.",
    href: "#general",
  },
];

const DOCTOR_PORTRAIT =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80";

// ─── Sub-components ───────────────────────────────────────────────────────────
function IntroBlock({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`flex flex-col justify-center h-full transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="text-brand-light text-xs font-semibold uppercase tracking-[0.2em] mb-3">
        What We Offer
      </div>
      <h2 className="text-4xl font-extrabold text-ink leading-[1.1] mb-4">
        Our Dental
        <br />
        Services
      </h2>
      <div className="w-12 h-1 bg-brand rounded mb-5" />
      <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
        From routine checkups to advanced orthodontic treatments, we deliver
        precision dental care tailored to your smile.
      </p>
    </div>
  );
}

function ServiceCard({
  service,
  inView,
  delay,
  slideFrom = "bottom",
}: {
  service: Service;
  inView: boolean;
  delay: number;
  slideFrom?: "left" | "bottom";
}) {
  const Icon = service.icon;
  const offClass =
    slideFrom === "left"
      ? "opacity-0 -translate-x-6"
      : "opacity-0 translate-y-10";
  return (
    <Link
      href={service.href}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative bg-surface border border-surface-card rounded-2xl p-7 shadow-card cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : offClass
      } hover:shadow-card-hover hover:-translate-y-2 hover:border-brand/30`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand/0 via-brand/0 to-brand/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative w-13 h-13 rounded-xl bg-brand/10 flex items-center justify-center mb-5 transition-all duration-500 ease-out group-hover:bg-brand group-hover:scale-110 group-hover:-rotate-6">
        <Icon className="w-7 h-7 text-brand stroke-[1.5] transition-colors duration-500 group-hover:text-white" />
      </div>

      <h3 className="text-lg font-bold text-ink mb-2 transition-colors duration-300 group-hover:text-brand">
        {service.title}
      </h3>

      <p className="text-sm text-ink-muted leading-relaxed mb-5 line-clamp-3">
        {service.desc}
      </p>

      <div className="flex items-center gap-1 text-sm font-semibold text-brand transition-all duration-300 group-hover:gap-2">
        Read More
        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </Link>
  );
}

function CTACard({ inView, delay }: { inView: boolean; delay: number }) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative md:col-span-2 bg-brand-dark rounded-2xl p-8 md:p-12 pr-8 md:pr-72 flex flex-col items-start justify-center gap-2 min-h-[260px] overflow-visible transition-all duration-700 ease-out ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.96]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="pointer-events-none absolute top-4 right-44 md:right-52 w-48 h-48 opacity-[0.08]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="white" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="white" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-sm">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
          We Provide the Best Dental Treatment.
        </h3>
        <p className="text-sm text-white/70 leading-relaxed mb-7 max-w-xs">
          Comprehensive care delivered by an expert team committed to your
          comfort and lasting oral health.
        </p>
        <Link href="#contact" className="flex items-center gap-3 w-fit group/btn">
          <span className="font-semibold text-white text-sm transition-all duration-300 group-hover/btn:tracking-wider">
            Book Appointment
          </span>
          <span className="w-10 h-10 rounded-full bg-brand flex items-center justify-center transition-all duration-500 ease-out group-hover/btn:bg-brand-light group-hover/btn:scale-110 group-hover/btn:rotate-45">
            <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-500 group-hover/btn:-rotate-45" />
          </span>
        </Link>
      </div>

      <div className="relative md:absolute md:bottom-0 md:right-8 mt-6 md:mt-0 w-44 h-52 md:w-56 md:h-64 transition-transform duration-700 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04]">
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-brand/40">
          <ImageWithFallback
            src={DOCTOR_PORTRAIT}
            alt="Dr. Rupender Goel"
            fill
            sizes="(max-width: 768px) 176px, 224px"
            className="object-cover object-top"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/40 animate-pulse-ring" />
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} id="services" className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <IntroBlock inView={inView} delay={0} />
          <ServiceCard service={SERVICES[0]} inView={inView} delay={100} slideFrom="bottom" />
          <ServiceCard service={SERVICES[1]} inView={inView} delay={200} slideFrom="bottom" />
          <ServiceCard service={SERVICES[2]} inView={inView} delay={300} slideFrom="bottom" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <ServiceCard service={SERVICES[3]} inView={inView} delay={400} slideFrom="left" />
          <ServiceCard service={SERVICES[4]} inView={inView} delay={500} slideFrom="left" />
          <CTACard inView={inView} delay={600} />
        </div>
      </div>
    </section>
  );
}
