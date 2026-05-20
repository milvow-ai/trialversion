"use client";

import { useInView } from "@/lib/hooks";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sidharth Bansal",
    location: "New Delhi",
    quote:
      "The doctor is so polite and humorous, with a completely professional team. Every covid protocol was followed — felt safe the whole time.",
  },
  {
    name: "Sia Mehta",
    location: "Gurgaon",
    quote:
      "Dr Goel is absolutely amazing. Friendly, attentive, informative — he knows what he's doing. I'm super impressed with my progress.",
  },
  {
    name: "Rohan Kapoor",
    location: "New Delhi",
    quote:
      "Best dental experience I've had. Honest pricing, gentle hands, and they actually listen. Wouldn't go anywhere else.",
  },
  {
    name: "Ananya Sharma",
    location: "Noida",
    quote:
      "Took my whole family — Dr Goel and team are wonderful with kids and adults alike. Always a smooth, friendly visit.",
  },
];

export function Testimonials() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="testimonial"
      className="bg-surface-soft px-4 md:px-8 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`max-w-3xl mb-14 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] block mb-5">
            Patient stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.08] tracking-tight">
            What our friendly patients have to say{" "}
            <span className="italic font-medium text-accent-ink">about us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`group bg-surface rounded-[28px] p-7 shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="text-accent-ink text-3xl font-display leading-none mb-4">
                &ldquo;
              </div>
              <p className="text-ink text-sm leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="pt-5 border-t border-surface-card">
                <div className="font-display font-bold text-ink text-sm">
                  {t.name}
                </div>
                <div className="text-ink-muted text-xs mt-0.5">
                  {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
