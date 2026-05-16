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
    <section
      ref={ref}
      id="faq"
      className="relative py-20 px-4 bg-surface overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-brand-50 opacity-40 blur-3xl" />

      <Container className="relative">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div
            className={`hidden md:block w-2/5 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand to-brand-light rounded-3xl opacity-10 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-[28rem] group">
                <ImageWithFallback
                  src={FAQ_IMAGE}
                  alt="Dentist working with patient"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[10px] uppercase tracking-widest text-brand-100 mb-1">
                    Trusted by 1,000+ patients
                  </div>
                  <div className="font-bold text-lg leading-tight">
                    24 years of orthodontic expertise
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <div
              className={`transition-all duration-700 delay-150 ${
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
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={i}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                    className={`border rounded-xl overflow-hidden bg-surface transition-all duration-500 ${
                      isOpen
                        ? "border-brand shadow-card-hover"
                        : "border-surface-card hover:border-brand-100"
                    } ${
                      inView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-10"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-50"
                    >
                      <span
                        className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "bg-brand text-white scale-110 shadow-card"
                            : "bg-brand-50 text-brand"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <span
                        className={`text-sm font-semibold flex-1 pr-4 transition-colors ${
                          isOpen ? "text-brand" : "text-ink"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <Plus
                        className={`w-5 h-5 text-brand flex-shrink-0 transition-transform duration-500 ${
                          isOpen ? "rotate-[225deg]" : "rotate-0"
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
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

            <div
              className={`mt-6 transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
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
