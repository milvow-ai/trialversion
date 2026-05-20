"use client";

import { useState, useEffect, CSSProperties } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const HERO_IMAGES = {
  main: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85",
  smile: "https://images.unsplash.com/photo-1581585099522-f6ac2efe1925?auto=format&fit=crop&w=800&q=85",
  child: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=85",
};

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeUp = (delay: number, distance = 24): CSSProperties => ({
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: EASE,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : `translateY(${distance}px)`,
  });

  return (
    <section className="bg-surface pt-12 md:pt-20 pb-20 md:pb-28 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 max-w-2xl">
          <span
            style={fadeUp(80)}
            className="inline-block text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] mb-6 transition-all duration-700"
          >
            Dentist Hauz Khas
          </span>

          <h1
            style={fadeUp(140)}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-ink leading-[1.04] tracking-[-0.02em] mb-6 transition-all duration-1000"
          >
            Proudly serving locals for over{" "}
            <span className="italic font-medium text-accent-ink">24 years</span>
          </h1>

          <p
            style={fadeUp(280)}
            className="text-ink-muted text-base md:text-lg leading-relaxed mb-10 max-w-md transition-all duration-1000"
          >
            There&apos;s always a great smile here for you at {CLINIC.name}.
            Friendly care, modern dentistry, and a family that treats yours like
            their own.
          </p>

          <div
            style={fadeUp(380)}
            className="flex flex-wrap items-center gap-4 transition-all duration-1000"
          >
            <Link
              href="#final-booking"
              className="group inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold pl-6 pr-2 py-2 rounded-full hover:bg-brand-light transition-all hover:scale-[1.03] active:scale-[0.98] shadow-card"
            >
              Book online
              <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-brand transition-colors">
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>

            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-2 text-ink text-sm font-medium hover:text-brand transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CLINIC.phoneFormatted}
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[440px] sm:h-[520px] lg:h-[560px]">
          <div
            style={fadeUp(220, 40)}
            className="absolute top-0 right-0 w-[70%] h-[72%] rounded-[32px] overflow-hidden shadow-card-hover transition-all duration-[1100ms] animate-float-slow"
          >
            <ImageWithFallback
              src={HERO_IMAGES.main}
              alt="Friendly dental care"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div
            style={fadeUp(360, 40)}
            className="absolute bottom-0 left-0 w-[55%] h-[55%] rounded-[28px] overflow-hidden shadow-card-hover transition-all duration-[1100ms] animate-float"
          >
            <ImageWithFallback
              src={HERO_IMAGES.smile}
              alt="A great smile"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
          </div>

          <div
            style={fadeUp(500, 40)}
            className="absolute top-[18%] left-[6%] w-32 h-32 rounded-[22px] overflow-hidden shadow-card transition-all duration-[1100ms] animate-float-delayed"
          >
            <ImageWithFallback
              src={HERO_IMAGES.child}
              alt="Family dental care"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          <div
            style={fadeUp(620, 40)}
            className="absolute bottom-[6%] right-[2%] bg-accent rounded-2xl px-4 py-3 shadow-card-hover backdrop-blur-sm transition-all duration-1000"
          >
            <div className="text-2xl font-display font-extrabold text-accent-ink leading-none">
              24<span className="text-base font-semibold">+</span>
            </div>
            <div className="text-[10px] uppercase tracking-wider text-accent-ink/80 font-semibold mt-0.5">
              Years caring
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
