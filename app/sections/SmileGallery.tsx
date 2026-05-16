"use client";

import { useInView } from "@/lib/hooks";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const SMILES = [
  "https://images.unsplash.com/photo-1581585099522-f6ac2efe1925?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=500&q=80",
];

export function SmileGallery() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref}
      id="smile-gallery"
      className="relative py-20 px-4 bg-surface-soft overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-50 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-brand-100 opacity-30 blur-3xl" />

      <Container className="relative">
        <SectionHeading eyebrow="Our Clients Stories" title="Smile Gallery" />
        <p className="text-center text-ink-muted text-sm max-w-xl mx-auto -mt-6 mb-10">
          Creating a beautiful smile can enhance a person&apos;s confidence and
          overall appearance. Below are some of the examples that you can be
          viewed.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {SMILES.map((src, i) => (
            <div
              key={src}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`group relative aspect-square rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer ${
                inView
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-90 translate-y-8"
              }`}
            >
              <ImageWithFallback
                src={src}
                alt={`Patient smile ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Patient #{String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-10 transition-all duration-700 delay-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button variant="outline" size="lg" href="#contact">
            View more smiles →
          </Button>
        </div>
      </Container>
    </section>
  );
}
