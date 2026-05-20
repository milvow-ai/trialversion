"use client";

import { useInView } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const DOCTOR_IMAGE =
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1100&q=85";

export function TrustSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      ref={ref}
      id="about"
      className="bg-surface px-4 md:px-8 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
        <div
          className={`md:col-span-5 transition-all duration-1000 ease-out ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-card-hover">
            <ImageWithFallback
              src={DOCTOR_IMAGE}
              alt="Dr. Rupender Goel"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-4 py-3 shadow-card max-w-[180px]">
              <div className="text-[10px] uppercase tracking-widest text-accent-ink font-semibold mb-1">
                Your local dentist
              </div>
              <div className="text-ink font-display font-bold text-sm leading-tight">
                Dr. Rupender Goel
              </div>
              <div className="text-ink-muted text-[11px] leading-tight mt-0.5">
                Orthodontist (MDS)
              </div>
            </div>
          </div>
        </div>

        <div
          className={`md:col-span-7 transition-all duration-1000 ease-out delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent-ink text-xs font-semibold uppercase tracking-[0.2em] block mb-6">
            Catch up with an old friend
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-ink leading-[1.08] tracking-tight mb-8 max-w-2xl">
            What if going to the dentist was like catching up with an{" "}
            <span className="italic font-medium text-accent-ink">old friend</span>
            ?
          </h2>

          <div className="space-y-5 text-ink-muted text-base leading-relaxed max-w-prose">
            <p>
              Dr. Rupender Goel has called Hauz Khas home for over two decades.
              He&apos;s the kind of dentist who remembers your kids&apos; names,
              asks how your week went, and explains exactly what&apos;s going
              on — no jargon, no judgement.
            </p>
            <p>
              It&apos;s a second-generation practice with 50 years of combined
              dental wisdom, and a team that genuinely believes the chair
              shouldn&apos;t feel scary. Modern technique, gentle hands, warm
              welcome.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-md">
            {[
              { value: "24+", label: "Years caring" },
              { value: "1k+", label: "Happy smiles" },
              { value: "5★", label: "Patient rated" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-extrabold text-ink">
                  {stat.value}
                </div>
                <div className="text-xs text-ink-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
