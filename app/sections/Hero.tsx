"use client";

import { useInView } from "@/lib/hooks";
import { HERO } from "@/lib/content";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80";

export function Hero() {
  const { ref, inView } = useInView(0.1);
  const titleLines = HERO.title.split("\n");
  const subtitleLines = HERO.subtitle.split("\n");

  return (
    <section
      ref={ref}
      className="relative min-h-[420px] md:min-h-[520px] flex overflow-hidden"
    >
      <div className="w-full md:w-1/2 bg-brand flex flex-col justify-center px-8 md:px-16 py-16 z-10">
        <h1
          className={`text-white font-extrabold text-3xl md:text-5xl leading-tight mb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p
          className={`text-brand-100 text-sm md:text-base mt-2 transition-all duration-700 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {subtitleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="hidden md:block w-1/2 relative">
        <ImageWithFallback
          src={HERO_IMAGE}
          alt="Dentist treating a patient"
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
