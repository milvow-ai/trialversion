"use client";

import { useState, useEffect, CSSProperties } from "react";
import { Heart, CalendarDays, ClipboardList, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=1400&q=85";

const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";
const EASE_OUT_BACK = "cubic-bezier(0.34, 1.56, 0.64, 1)";

const JULY_2024: (number | null)[][] = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, null, null, null],
];

const SIDEBAR_TABS = [
  { Icon: Heart, label: "Wishlist" },
  { Icon: CalendarDays, label: "Appointments" },
  { Icon: ClipboardList, label: "Records" },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeUp = (delay: number, distance = 20): CSSProperties => ({
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: EASE_OUT,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : `translateY(${distance}px)`,
  });

  const popIn = (delay: number): CSSProperties => ({
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: EASE_OUT_BACK,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "scale(1)" : "scale(0.9)",
  });

  const slideFromRight = (delay: number, distance = 40): CSSProperties => ({
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: EASE_OUT,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateX(0)" : `translateX(${distance}px)`,
  });

  return (
    <section className="relative bg-surface-warm min-h-[480px] md:min-h-[560px] overflow-hidden">
      <div className="hidden md:block absolute right-0 top-0 w-[62%] h-full">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Smiling patient"
          fill
          priority
          sizes="62vw"
          className="object-cover object-top"
        />
      </div>

      <div className="hidden md:block absolute top-0 left-[30%] w-[20%] h-full bg-gradient-to-r from-surface-warm to-transparent z-10" />

      <div className="relative md:absolute md:left-0 md:top-0 md:h-full flex flex-col justify-center pl-6 pr-6 md:pl-16 lg:pl-24 py-16 md:py-0 z-20 max-w-[480px]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
          <span
            className="inline-block transition-all duration-700"
            style={fadeUp(0)}
          >
            The
          </span>{" "}
          <span className="inline-flex items-center gap-2 align-baseline">
            <span
              className="inline-block text-3xl md:text-4xl transition-all duration-700"
              style={fadeUp(100)}
              aria-hidden
            >
              🦷
            </span>
            <span
              className="inline-block text-brand transition-all duration-700"
              style={fadeUp(150)}
            >
              leading
            </span>
          </span>
          <br />
          <span
            className="inline-block transition-all duration-700"
            style={fadeUp(200)}
          >
            dentistry
          </span>
        </h1>

        <p
          className="text-gray-500 text-sm leading-relaxed mb-6 max-w-[280px] transition-all duration-700"
          style={fadeUp(280)}
        >
          Caring is our calling. Changing dental care for good. We are here for
          life. Feel better.
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-6 py-2.5 rounded-full w-fit hover:bg-brand-dark transition-all hover:scale-105 shadow-card"
          style={fadeUp(300)}
        >
          About Us
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div
        className="hidden md:block absolute top-6 right-[calc(38%+24px)] z-20 transition-all duration-700"
        style={popIn(400)}
      >
        <div className="bg-white rounded-2xl p-4 w-[220px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-semibold text-ink text-sm">July 2024</span>
            <button
              type="button"
              aria-label="Next month"
              className="text-gray-400 hover:text-ink text-base leading-none"
            >
              ›
            </button>
          </div>

          <div className="grid grid-cols-7 mb-1">
            {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((d) => (
              <span
                key={d}
                className="text-center text-[9px] text-gray-400 font-medium py-1"
              >
                {d}
              </span>
            ))}
          </div>

          {JULY_2024.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7">
              {week.map((day, di) => (
                <span
                  key={di}
                  className={`text-center text-[11px] py-1 rounded-full w-6 h-6 flex items-center justify-center mx-auto transition-colors ${
                    day === 16
                      ? "bg-brand text-white font-bold"
                      : day === null
                        ? "text-gray-300"
                        : "text-gray-600 hover:bg-brand/10 hover:text-brand cursor-pointer"
                  }`}
                >
                  {day ?? ""}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-1 z-30 transition-all duration-700"
        style={slideFromRight(500)}
      >
        {SIDEBAR_TABS.map(({ Icon, label }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="w-8 h-9 bg-brand hover:bg-brand-dark transition-colors flex items-center justify-center rounded-l-lg"
          >
            <Icon className="w-4 h-4 text-white" />
          </button>
        ))}
      </div>
    </section>
  );
}
