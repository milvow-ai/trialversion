"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`tel:${CLINIC.phone}`}
      className={`md:hidden fixed bottom-5 right-5 z-50 bg-brand hover:bg-brand-light text-white px-5 py-3 rounded-full text-sm font-semibold shadow-card-hover transition-all duration-300 flex items-center gap-2 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Phone className="w-4 h-4" />
      Book now
    </a>
  );
}
