"use client";

import { Phone, Calendar, MapPin } from "lucide-react";
import { useInView } from "@/lib/hooks";
import { CLINIC } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const CONTACT_IMAGE =
  "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80";

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="contact" className="py-20 px-4 bg-surface">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div
            className={`hidden md:block w-2/5 transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-brand to-brand-light rounded-3xl opacity-10 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover h-[26rem] group">
                <ImageWithFallback
                  src={CONTACT_IMAGE}
                  alt="Dr. Goel in clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div
            className={`w-full md:w-3/5 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
              Get in touch
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              <span className="text-ink">Contact</span>{" "}
              <span className="text-brand">Us</span>
            </h2>
            <div className="w-12 h-1 bg-brand mb-6 rounded" />
            <p className="text-ink-muted text-sm leading-relaxed mb-8 max-w-md">
              If you have any dental concerns, please contact us here at Dr
              Goel&apos;s Dental Care Centre as soon as possible.
            </p>

            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center gap-3 mb-8 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand transition-colors">
                <Phone className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-xs text-ink-muted">Call us now</div>
                <div className="text-brand font-bold text-xl group-hover:text-brand-dark transition-colors">
                  {CLINIC.phoneFormatted}
                </div>
              </div>
            </a>

            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="primary" size="lg" href={`tel:${CLINIC.phone}`}>
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </Button>
              <Button variant="outline" size="lg" href={CLINIC.mapUrl}>
                <MapPin className="w-4 h-4" />
                Get Directions
              </Button>
            </div>

            <div className="pt-6 border-t border-surface-card text-sm text-ink-muted flex items-start gap-2">
              <MapPin className="w-4 h-4 text-brand mt-0.5 flex-shrink-0" />
              <span>{CLINIC.address}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
