"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

interface Service {
  title: string;
  description: string;
  image: string;
  href: string;
}

const SERVICES: Service[] = [
  {
    title: "Dental Check-up and Clean",
    description: "Keep your teeth in tip-top shape with regular preventive care.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=85",
    href: "#check-up",
  },
  {
    title: "Tooth Fillings",
    description: "Get on top of cavities quickly and painlessly.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=85",
    href: "#fillings",
  },
  {
    title: "Cosmetic Dental",
    description: "Fill in any gaps and perfect your smile with confidence.",
    image:
      "https://images.unsplash.com/photo-1581585099522-f6ac2efe1925?auto=format&fit=crop&w=600&q=85",
    href: "#cosmetic",
  },
  {
    title: "Children's Dental",
    description: "Proper care for your growing family members.",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=85",
    href: "#children",
  },
  {
    title: "Emergency Dental",
    description: "Don't suffer — get help straight away.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=85",
    href: "#emergency",
  },
  {
    title: "Dental Implants",
    description: "Missing teeth? Let us help restore your smile.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=85",
    href: "#implants",
  },
];

export function Services() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="treatments"
      className="bg-surface px-4 md:px-8 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`max-w-3xl mb-14 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            Our treatments
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.08] tracking-tight">
            Everything your family&apos;s smile{" "}
            <span className="italic font-medium text-accent-ink">needs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <Link
              key={s.title}
              href={s.href}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group relative bg-surface-soft hover:bg-accent/40 rounded-[28px] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <ImageWithFallback
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display font-bold text-ink text-lg leading-snug">
                    {s.title}
                  </h3>
                  <span className="w-9 h-9 rounded-full bg-surface flex items-center justify-center shadow-soft flex-shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
