"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { CENTRE } from "@/lib/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const CLINIC_IMAGES = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
];

export function DentalCentre() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((i) => (i === 0 ? CLINIC_IMAGES.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i === CLINIC_IMAGES.length - 1 ? 0 : i + 1));

  return (
    <section ref={ref} id="dental-care" className="py-14 px-4 bg-surface-soft">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        <div
          className={`w-full md:w-1/2 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
            Clinic
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand mb-4">
            {CENTRE.title}
          </h2>
          <div className="w-12 h-1 bg-brand mb-5 rounded" />
          {CENTRE.paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-ink-muted text-sm leading-relaxed mb-3 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>

        <div
          className={`w-full md:w-1/2 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card h-72 md:h-80 mb-3 group">
            <ImageWithFallback
              src={CLINIC_IMAGES[active]}
              alt={`Clinic view ${active + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500"
            />
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand flex items-center justify-center shadow-card transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-brand flex items-center justify-center shadow-card transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {CLINIC_IMAGES.slice(1).map((src, i) => {
              const idx = i + 1;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(idx)}
                  aria-label={`View clinic image ${idx + 1}`}
                  className={`relative h-16 md:h-20 rounded-lg overflow-hidden transition-all ${
                    active === idx
                      ? "ring-2 ring-brand ring-offset-2"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <ImageWithFallback
                    src={src}
                    alt={`Clinic thumbnail ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
