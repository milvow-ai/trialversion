"use client";

import { useInView } from "@/lib/hooks";
import { ABOUT } from "@/lib/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80";

export function About() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div
          className={`w-full md:w-2/5 transition-all duration-700 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-96">
            <ImageWithFallback
              src={DOCTOR_IMAGE}
              alt="Dr. Rupender Goel portrait"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div
          className={`w-full md:w-3/5 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
            {ABOUT.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-ink mb-1">
            {ABOUT.name}
          </h2>
          <div className="text-brand-light font-semibold mb-4">
            {ABOUT.title}
          </div>
          <div className="w-12 h-1 bg-brand mb-5 rounded" />
          {ABOUT.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-ink-muted text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
