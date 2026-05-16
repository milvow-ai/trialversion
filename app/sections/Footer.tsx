import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const QUICK_MENU = [
  { label: "Invisalign", href: "#services" },
  { label: "Dental Implant", href: "#services" },
  { label: "Orthodontic", href: "#services" },
  { label: "Cosmetic Dentistry", href: "#services" },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white pt-16 pb-6 px-4 overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-brand opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-light opacity-10 blur-3xl" />

      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link
              href="/"
              aria-label={CLINIC.fullName}
              className="inline-flex items-center mb-4"
            >
              <Logo variant="dark" height={44} />
            </Link>
            <p className="text-brand-100 text-xs leading-relaxed mb-5 max-w-xs">
              Dentistry — the science behind beautiful smiles. Imagine waking up
              with a brand new smile.
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
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white hover:text-brand-dark text-white flex items-center justify-center transition-all hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-brand-100">
              Quick Menu
            </h4>
            <ul className="space-y-2.5">
              {QUICK_MENU.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-brand-100 text-sm hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-light group-hover:translate-x-1 transition-transform" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-5 text-brand-100">
              Our Contacts
            </h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-start gap-2.5 text-brand-100 text-xs leading-relaxed">
                <MapPin className="w-4 h-4 text-brand-light mt-0.5 flex-shrink-0" />
                <span>{CLINIC.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${CLINIC.phone}`}
                  className="flex items-center gap-2.5 text-brand-100 text-xs hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-light flex-shrink-0" />
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLINIC.email}`}
                  className="flex items-center gap-2.5 text-brand-100 text-xs hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-light flex-shrink-0" />
                  {CLINIC.email}
                </a>
              </li>
            </ul>
            <Button variant="outline-invert" size="sm" href={CLINIC.mapUrl}>
              <MapPin className="w-3.5 h-3.5" />
              Get directions on the map
            </Button>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-brand-100 text-xs">
          <span>
            © {new Date().getFullYear()} {CLINIC.fullName}. All rights reserved.
          </span>
          <a
            href={`tel:${CLINIC.phone}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5" />
            For Contact: {CLINIC.phone}
          </a>
        </div>
      </Container>
    </footer>
  );
}
