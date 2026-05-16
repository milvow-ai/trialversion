"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { FAQS } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const FAQ_IMAGE =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80";

export function FAQ() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="py-16 px-4 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div
            className={`hidden md:block w-2/5 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-[28rem]">
              <ImageWithFallback
                src={FAQ_IMAGE}
                alt="Dentist working with patient"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`w-full md:w-3/5 transition-all duration-700 delay-150 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
              Questions &amp; Answers
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-2">
              Frequently <span className="text-brand">Asked Question</span>
            </h2>
            <div className="w-12 h-1 bg-brand mb-6 rounded" />

            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    className="border border-surface-card rounded-xl overflow-hidden bg-surface"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-brand-50 transition-colors"
                    >
                      <span className="w-7 h-7 rounded-full bg-brand text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold text-ink flex-1 pr-4">
                        {faq.q}
                      </span>
                      <Plus
                        className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 pl-16 text-sm text-ink-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6">
              <Button variant="outline" href="#contact">
                Read More →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
