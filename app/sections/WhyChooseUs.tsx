"use client";

import { Award, Users, Wrench } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { WHY_CHOOSE } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";

const ICONS = {
  award: Award,
  users: Users,
  tool: Wrench,
};

export function WhyChooseUs() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="why-choose" className="py-16 px-4 bg-brand">
      <Container>
        <SectionHeading
          eyebrow="See the difference"
          title="Why Choose Us?"
          invert
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <div
                key={item.title}
                className={`text-center group transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-brand-100 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
