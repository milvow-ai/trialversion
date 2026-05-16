import { Phone, MapPin, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { CLINIC } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-brand text-white text-xs py-2 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-6">
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex items-center gap-1.5 hover:text-brand-100 transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          {CLINIC.phone}
        </a>
        <span className="hidden md:flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
          {CLINIC.address}
        </span>
        <a
          href={`mailto:${CLINIC.email}`}
          className="hidden lg:flex items-center gap-1.5 hover:text-brand-100 transition-colors"
        >
          <Mail className="w-3.5 h-3.5" />
          {CLINIC.email}
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={CLINIC.social.facebook}
          aria-label="Facebook"
          className="text-brand-100 hover:text-white transition-colors"
        >
          <Facebook className="w-3.5 h-3.5" />
        </a>
        <a
          href={CLINIC.social.instagram}
          aria-label="Instagram"
          className="text-brand-100 hover:text-white transition-colors"
        >
          <Instagram className="w-3.5 h-3.5" />
        </a>
        <a
          href="#"
          aria-label="YouTube"
          className="text-brand-100 hover:text-white transition-colors"
        >
          <Youtube className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
