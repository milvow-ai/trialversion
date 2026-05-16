"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

function TestimonialCard({
  text,
  author,
  delay = 0,
  visible,
}: {
  text: string;
  author: string;
  delay?: number;
  visible: boolean;
}) {
  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`relative bg-surface-soft rounded-2xl p-8 overflow-hidden border border-transparent hover:border-brand-100 hover:-translate-y-2 hover:shadow-card-hover transition-all duration-500 group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-brand-50 opacity-60 group-hover:scale-125 transition-transform duration-700" />
      <Quote className="relative w-10 h-10 text-brand opacity-20 mb-4 group-hover:opacity-40 group-hover:rotate-[-8deg] transition-all duration-500" />
      <p className="relative text-ink-muted text-sm leading-relaxed italic mb-6">
        {text}
      </p>
      <div className="relative flex items-center gap-3">
        <div className="relative w-11 h-11 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm shadow-card">
          <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-0 group-hover:opacity-30" />
          {author[0]}
        </div>
        <div>
          <div className="font-semibold text-ink text-sm">{author}</div>
          <div className="text-brand-light text-[11px] font-medium tracking-wide">
            Verified patient
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section
      ref={ref}
      id="testimonial"
      className="relative py-20 px-4 bg-surface overflow-hidden"
    >
      <div className="pointer-events-none absolute top-0 left-1/4 w-80 h-80 rounded-full bg-brand-50 opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-100 opacity-30 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          eyebrow="What People Says"
          title="Patient"
          titleAccent="Testimonials"
        />

        <div className="hidden md:grid grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard
              key={t.author}
              text={t.text}
              author={t.author}
              visible={inView}
              delay={i * 150}
            />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialCard
            text={TESTIMONIALS[active].text}
            author={TESTIMONIALS[active].author}
            visible={inView}
          />
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  i === active ? "bg-brand w-6" : "bg-surface-card w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
