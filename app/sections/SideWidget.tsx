"use client";

import { MapPin, Clock, FileText } from "lucide-react";
import { CLINIC } from "@/lib/constants";

const items = [
  { label: "LOCATION", Icon: MapPin, href: CLINIC.mapUrl, external: true },
  { label: "WORKING TIME", Icon: Clock, href: "#hours", external: false },
  { label: "REQUEST FORM", Icon: FileText, href: "#contact", external: false },
];

export function SideWidget() {
  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col shadow-card-hover">
      {items.map(({ label, Icon, href, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="bg-brand hover:bg-brand-dark text-white px-3 py-4 flex flex-col items-center gap-2 transition-colors border-b border-white/10 last:border-b-0"
        >
          <Icon className="w-4 h-4" />
          <span
            className="text-[10px] font-bold tracking-wider"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
