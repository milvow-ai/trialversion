"use client";

import { useState, useEffect, CSSProperties } from "react";
import {
  Star,
  Linkedin,
  Instagram,
  Twitter,
  Download,
  Calendar,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { HERO } from "@/lib/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1800&q=85";

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
];

const DOCTOR_AVATARS = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=120&q=80",
];

const SPECIALIST_AVATARS = [
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=120&q=80",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=120&q=80",
];

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const REVEAL_CLASS = "transition-all duration-1000 will-change-transform";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const revealStyle = (
    delay: number,
    axis: "y" | "x" = "y",
    from = 24
  ): CSSProperties => {
    const offset =
      axis === "y" ? `translateY(${from}px)` : `translateX(${from}px)`;
    return {
      transitionDelay: `${delay}ms`,
      transitionTimingFunction: EASE,
      transform: mounted ? "translate(0,0)" : offset,
      opacity: mounted ? 1 : 0,
    };
  };

  return (
    <section className="bg-surface-soft px-3 md:px-6 py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div
          style={{
            transitionTimingFunction: EASE,
            transform: mounted
              ? "translateY(0) scale(1)"
              : "translateY(24px) scale(0.985)",
            opacity: mounted ? 1 : 0,
          }}
          className="relative rounded-[28px] md:rounded-[36px] overflow-hidden shadow-card-hover bg-brand-dark transition-all duration-[1100ms] will-change-transform"
        >
          <div className="relative aspect-[16/11] md:aspect-[16/8] min-h-[420px] md:min-h-[560px]">
            <div className="absolute inset-0 animate-kenburns will-change-transform">
              <ImageWithFallback
                src={HERO_IMAGE}
                alt="Patient receiving dental care"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/55 via-brand-dark/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />

            <div
              style={revealStyle(200)}
              className={`absolute top-4 md:top-6 left-4 md:left-8 ${REVEAL_CLASS}`}
            >
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-brand-dark flex items-center gap-1.5 shadow-card">
                <Star className="w-3 h-3 fill-brand text-brand" />
                {HERO.servicePill}
              </div>
            </div>

            <div
              style={revealStyle(280)}
              className={`absolute top-4 md:top-6 right-4 md:right-8 ${REVEAL_CLASS}`}
            >
              <div className="flex items-center gap-1 bg-brand-dark/55 backdrop-blur-md rounded-full p-1 border border-white/10">
                {SOCIALS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-7 h-7 rounded-full hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute left-4 md:left-10 lg:left-14 top-[28%] md:top-[32%] max-w-xl pr-4">
              <h1
                style={revealStyle(360)}
                className={`text-white font-extrabold text-[28px] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight mb-6 md:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] ${REVEAL_CLASS}`}
              >
                {HERO.title.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </h1>

              <div
                style={revealStyle(540)}
                className={`flex flex-wrap gap-3 ${REVEAL_CLASS}`}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand text-white pl-3 pr-5 py-2.5 rounded-full text-sm font-semibold shadow-card-hover transition-all hover:scale-[1.03] active:scale-[0.98] border border-white/10"
                >
                  <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                    <Download className="w-3.5 h-3.5" />
                  </span>
                  Download App
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white/95 hover:bg-white text-brand-dark pl-3 pr-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98] shadow-card"
                >
                  <span className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5 text-brand" />
                  </span>
                  Schedule an appointment
                </a>
              </div>
            </div>

            <div
              style={revealStyle(700, "x")}
              className={`hidden md:block absolute top-[22%] right-4 lg:right-10 w-56 animate-float ${REVEAL_CLASS}`}
            >
              <div className="bg-white/85 backdrop-blur-xl rounded-2xl p-4 shadow-card-hover border border-white/60">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-ink">
                    {HERO.insights.label}
                  </span>
                  <span className="text-[10px] font-bold text-brand bg-brand-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" />
                    {HERO.insights.delta}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand text-xs font-bold">
                    {HERO.insights.patient.initial}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-ink leading-tight">
                      {HERO.insights.patient.name}
                    </div>
                    <div className="text-[10px] text-ink-muted">
                      {HERO.insights.patient.meta}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-ink-muted mb-1.5 pt-2 border-t border-ink/5">
                  <span>{HERO.insights.report.title}</span>
                  <span>{HERO.insights.report.period}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-brand leading-none">
                    {HERO.insights.metric}
                  </span>
                  <span className="text-[11px] font-medium text-ink-muted">
                    {HERO.insights.unit}
                  </span>
                </div>
                <div className="mt-2 h-1 bg-surface-card rounded-full overflow-hidden">
                  <div
                    style={{
                      transitionDelay: "1200ms",
                      transitionTimingFunction: EASE,
                      width: mounted ? "75%" : "0%",
                    }}
                    className="h-full bg-gradient-to-r from-brand to-brand-light rounded-full transition-all duration-[1500ms]"
                  />
                </div>
              </div>
            </div>

            <div
              style={revealStyle(820)}
              className={`absolute bottom-4 md:bottom-6 left-4 md:left-8 ${REVEAL_CLASS}`}
            >
              <div className="bg-white/85 backdrop-blur-xl rounded-2xl pl-2 pr-3 py-2 flex items-center gap-3 shadow-card border border-white/60 hover:bg-white transition-colors cursor-pointer group">
                <div className="flex -space-x-2">
                  {DOCTOR_AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white"
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`Doctor ${i + 1}`}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-ink leading-tight whitespace-pre-line">
                  {HERO.doctorsBadge}
                </span>
                <span className="w-7 h-7 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand group-hover:text-white transition-colors" />
                </span>
              </div>
            </div>

            <div
              style={revealStyle(940)}
              className={`absolute bottom-4 md:bottom-6 right-4 md:right-8 ${REVEAL_CLASS}`}
            >
              <div className="bg-white/95 backdrop-blur-md rounded-full pl-1 pr-4 py-1 flex items-center gap-2 shadow-card">
                <div className="flex -space-x-1.5">
                  {SPECIALIST_AVATARS.map((src, i) => (
                    <div
                      key={i}
                      className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-white"
                    >
                      <ImageWithFallback
                        src={src}
                        alt={`Specialist ${i + 1}`}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-brand-dark flex items-center gap-1">
                  <Star className="w-3 h-3 fill-brand text-brand" />
                  {HERO.specialistsBadge}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p
          style={revealStyle(1080)}
          className={`mt-5 md:mt-6 text-sm text-ink-muted max-w-[18rem] leading-relaxed ${REVEAL_CLASS}`}
        >
          {HERO.subtitle.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
