"use client";

import { useInView } from "@/lib/hooks";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const STRIP_IMAGE =
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=2000&q=85";

export function PhotoStrip() {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative w-full h-[300px] md:h-[400px] overflow-hidden transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <ImageWithFallback
        src={STRIP_IMAGE}
        alt="Dental procedure in progress"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}
