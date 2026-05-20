"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { useInView } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const SUPPORT_IMAGE =
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=85";

export function FinalCTA() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="final-booking"
      className="relative bg-surface px-4 md:px-8 py-24 md:py-36 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`mb-12 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Ready when you are
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold text-ink leading-[1.04] tracking-[-0.02em] max-w-3xl mx-auto">
            Book online with your{" "}
            <span className="italic font-medium text-accent-ink">
              Hauz Khas dentist
            </span>{" "}
            now
          </h2>
        </div>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href={`tel:${CLINIC.phone}`}
            className="group inline-flex items-center gap-2 bg-brand text-white text-base font-semibold pl-7 pr-2 py-2.5 rounded-full hover:bg-brand-light transition-all hover:scale-[1.03] active:scale-[0.98] shadow-card-hover"
          >
            Book online
            <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-brand transition-colors">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <a
            href={`tel:${CLINIC.phone}`}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-deep text-ink text-base font-semibold px-6 py-3 rounded-full transition-all hover:scale-[1.03]"
          >
            <Phone className="w-4 h-4" />
            Call {CLINIC.phone}
          </a>
        </div>
      </div>

      <div
        className={`relative max-w-6xl mx-auto mt-20 aspect-[16/7] rounded-[36px] overflow-hidden shadow-card-hover transition-all duration-1000 delay-300 ${
          inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-[0.97]"
        }`}
      >
        <ImageWithFallback
          src={SUPPORT_IMAGE}
          alt="Dr Goel's friendly dental team"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" />
      </div>
    </section>
  );
}
