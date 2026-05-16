"use client";

import {
  ShieldCheck,
  Anchor,
  Activity,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { useInView } from "@/lib/hooks";

interface FamilyService {
  title: string;
  Icon: LucideIcon;
}

const FAMILY_SERVICES: FamilyService[] = [
  { title: "Prevention of Cavities", Icon: ShieldCheck },
  { title: "Dental Implant Procedures", Icon: Anchor },
  { title: "Root Canal Treatment", Icon: Activity },
  { title: "Regular Dental Check-Up", Icon: ClipboardList },
];

export function FamilyServices() {
  const { ref, inView } = useInView(0.15);

  return (
    <section ref={ref} className="py-20 px-4 bg-surface-soft">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-3 block">
              Top Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Dentistry for the
              <br />
              Whole Family
            </h2>
          </div>

          <div
            style={{ transitionDelay: "100ms" }}
            className={`flex flex-col justify-center gap-3 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-gray-500 text-sm leading-relaxed">
              From routine checkups to advanced orthodontic treatments, we
              provide complete dental care for every member of your family —
              children, adults, and seniors alike.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our clinic combines cutting-edge technology with a gentle
              approach to ensure every visit is as comfortable as it is
              effective.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {FAMILY_SERVICES.map((service, i) => {
            const { Icon } = service;
            const isLast = i === FAMILY_SERVICES.length - 1;
            return (
              <div
                key={service.title}
                style={{ transitionDelay: `${100 + i * 100}ms` }}
                className={`px-6 py-4 flex flex-col gap-4 group cursor-pointer transition-all duration-700 ease-out ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${!isLast ? "md:border-r border-gray-200" : ""}`}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <Icon
                    className="w-10 h-10 text-brand transition-colors"
                    strokeWidth={1.5}
                    fill="none"
                  />
                </div>
                <h4 className="font-bold text-ink group-hover:text-brand transition-colors text-sm leading-snug">
                  {service.title}
                </h4>
                <span className="text-brand text-base font-bold group-hover:translate-x-1 transition-transform inline-block">
                  →
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
