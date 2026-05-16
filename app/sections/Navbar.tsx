"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { CLINIC } from "@/lib/constants";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-surface transition-shadow duration-300 ${
        scrolled ? "shadow-card-hover" : "shadow-card"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" aria-label={CLINIC.fullName} className="flex items-center">
          <Logo variant="light" height={44} />
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-ink text-sm font-medium hover:text-brand transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 text-ink"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-surface border-t border-surface-card ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block px-4 py-3 text-sm text-ink hover:bg-brand-50 hover:text-brand border-b border-surface-card"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
