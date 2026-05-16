"use client";

import { Sparkles, Stethoscope } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const SERVICE_IMAGES: Record<string, string> = {
  Orthodontic:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80",
  "Dental Implant":
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80",
};

const ICON_MAP = {
  tooth: Sparkles,
  stethoscope: Stethoscope,
};

export function Services() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="services" className="py-16 px-4">
      <Container>
        <SectionHeading eyebrow="What we offer" title="Our Services" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon ? ICON_MAP[svc.icon as keyof typeof ICON_MAP] : null;
            const imageSrc = SERVICE_IMAGES[svc.title];
            return (
              <div
                key={svc.title}
                className={`group relative rounded-2xl border border-surface-card overflow-hidden bg-surface shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer flex flex-col ${
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {imageSrc && (
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={imageSrc}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  {!imageSrc && Icon && (
                    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand transition-all">
                      <Icon className="w-7 h-7 text-brand group-hover:text-white transition-colors" />
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-ink mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">
                    {svc.desc}
                  </p>
                  {svc.hasKnowMore && (
                    <div className="mt-4">
                      <Button variant="outline" size="sm" href="#contact">
                        Know More →
                      </Button>
                    </div>
                  )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
