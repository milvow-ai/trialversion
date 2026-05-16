"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85";

const NUMBERED_LIST = [
  { num: "01", label: "Cosmetic Dentistry" },
  { num: "02", label: "Restorative Dentistry" },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="about" className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        <div
          className={`relative w-full md:w-[45%] flex-shrink-0 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={DOCTOR_IMAGE}
              alt="Dr. Goel performing treatment"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover object-top"
            />
          </div>

          <div
            style={{ transitionDelay: "300ms" }}
            className={`absolute bottom-4 right-0 translate-x-0 md:translate-x-4 bg-brand rounded-2xl p-5 max-w-[180px] shadow-xl transition-all duration-700 ease-out ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.8]"
            }`}
          >
            <p className="text-white font-bold text-sm leading-snug">
              Impeccable quality, great service
            </p>
          </div>
        </div>

        <div
          style={{ transitionDelay: "150ms" }}
          className={`flex flex-col justify-center transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <span className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-3">
            Welcome to Dr. Goel&apos;s
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-4">
            The Pinnacle of
            <br />
            Dental Care
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
            With 24 years of experience in orthodontics and restorative
            dentistry, Dr. Rupender Goel delivers precision care in an
            atmosphere that&apos;s warm, friendly, and completely focused on
            you.
          </p>

          <div className="mb-8">
            {NUMBERED_LIST.map((item, i) => (
              <div
                key={item.num}
                className={`flex items-center gap-4 py-4 group cursor-pointer hover:pl-2 transition-all ${
                  i < NUMBERED_LIST.length - 1
                    ? "border-b border-gray-200"
                    : "border-b border-gray-200"
                }`}
              >
                <span className="text-sm font-bold text-brand">{item.num}.</span>
                <span className="text-sm font-bold text-ink group-hover:text-brand transition-colors">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="#services"
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-6 py-2.5 rounded-full w-fit hover:bg-brand-dark transition-all hover:scale-105 shadow-card"
          >
            Our Services
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
