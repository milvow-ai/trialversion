"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { CLINIC } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

const NAV_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Finance", href: "#finance" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#final-booking" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-xl border-b border-surface-card"
          : "bg-surface"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={CLINIC.fullName}
          className="flex items-center flex-shrink-0"
        >
          <Logo variant="light" height={40} />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-ink text-sm font-medium hover:text-accent-ink transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${CLINIC.phone}`}
            className="hidden lg:inline-flex items-center gap-2 text-ink text-sm font-medium hover:text-brand transition-colors"
          >
            <Phone className="w-4 h-4" />
            {CLINIC.phoneFormatted}
          </a>

          <Link
            href="#final-booking"
            className="group inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold pl-5 pr-1.5 py-1.5 rounded-full hover:bg-brand-light transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            Book online
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-brand transition-colors">
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-surface-card ${
          menuOpen ? "max-h-[28rem]" : "max-h-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block px-5 py-4 text-sm text-ink hover:bg-accent/40 hover:text-brand border-b border-surface-card"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`tel:${CLINIC.phone}`}
          className="flex items-center gap-2 px-5 py-4 text-sm text-brand font-semibold border-b border-surface-card"
        >
          <Phone className="w-4 h-4" />
          {CLINIC.phoneFormatted}
        </a>
        <Link
          href="#final-booking"
          className="flex items-center justify-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-4"
          onClick={() => setMenuOpen(false)}
        >
          Book online
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </nav>
  );
}
