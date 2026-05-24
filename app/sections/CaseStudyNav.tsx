"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";

export function CaseStudyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-paper/75 backdrop-blur-xl border-b border-ink-line/60"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-5">
        <Link
          href="/"
          className="font-sans font-medium text-ink text-[15px] tracking-tight"
        >
          Milvow<span className="text-ink-muted">®</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[13px] text-ink-muted font-medium">
          <Link
            href="#work"
            className="hover:text-ink transition-colors duration-200"
          >
            Work
          </Link>
          <Link
            href="#studio"
            className="hover:text-ink transition-colors duration-200"
          >
            Studio
          </Link>
          <Link
            href="#journal"
            className="hover:text-ink transition-colors duration-200"
          >
            Journal
          </Link>
        </div>

        <Link
          href="#start"
          className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-ink hover:opacity-70 transition-opacity"
        >
          Start a project
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </Container>
    </nav>
  );
}
