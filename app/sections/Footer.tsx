import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Clock,
} from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const TREATMENT_LINKS = [
  { label: "Check-up & Clean", href: "#treatments" },
  { label: "Cosmetic Dental", href: "#treatments" },
  { label: "Children's Dental", href: "#treatments" },
  { label: "Dental Implants", href: "#treatments" },
  { label: "Emergency Dental", href: "#treatments" },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Treatments", href: "#treatments" },
  { label: "Finance", href: "#finance" },
  { label: "Contact", href: "#final-booking" },
];

export function Footer() {
  return (
    <footer className="bg-brand text-white pt-24 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label={CLINIC.fullName}
              className="inline-flex items-center mb-6"
            >
              <Logo variant="dark" height={44} />
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs mb-6">
              Friendly, family-focused dental care in Hauz Khas, New Delhi.
              24 years of looking after local smiles.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: CLINIC.social.facebook, label: "Facebook" },
                { Icon: Instagram, href: CLINIC.social.instagram, label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-brand text-white flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Treatments
            </h4>
            <ul className="space-y-3">
              {TREATMENT_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Visit us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/65 leading-relaxed">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <Clock className="w-4 h-4 text-accent flex-shrink-0" />
                <span>Mon – Fri, 9:00 AM – 8:00 PM</span>
              </li>
              <li>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="flex items-center gap-3 text-white hover:text-accent transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                  {CLINIC.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="flex items-center gap-3 text-white/65 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                  {CLINIC.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <span>
            © {new Date().getFullYear()} {CLINIC.fullName}. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Medical disclaimer
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
