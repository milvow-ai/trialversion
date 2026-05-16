"use client";

import { useState } from "react";
import { Quote } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <div className="bg-surface-soft rounded-2xl p-8 relative hover:shadow-card-hover transition-shadow">
      <Quote className="w-10 h-10 text-brand opacity-20 mb-4" />
      <p className="text-ink-muted text-sm leading-relaxed italic mb-6">
        {text}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white font-bold text-sm">
          {author[0]}
        </div>
        <span className="font-semibold text-ink text-sm">{author}</span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} id="testimonial" className="py-16 px-4 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="What People Says"
          title="Patient"
          titleAccent="Testimonials"
        />

        <div
          className={`hidden md:grid grid-cols-2 gap-8 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} text={t.text} author={t.author} />
          ))}
        </div>

        <div className="md:hidden">
          <TestimonialCard
            text={TESTIMONIALS[active].text}
            author={TESTIMONIALS[active].author}
          />
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-3 rounded-full transition-all ${
                  i === active ? "bg-brand w-6" : "bg-surface-card w-3"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`h-3 rounded-full ${
                i === 0 ? "bg-brand w-6" : "bg-surface-card w-3"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
