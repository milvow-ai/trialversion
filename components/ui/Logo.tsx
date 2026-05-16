"use client";

import Image from "next/image";
import { useState } from "react";
import { CLINIC } from "@/lib/constants";

interface LogoProps {
  /** "light" = for navbar/light surfaces. "dark" = for footer/dark surfaces. */
  variant?: "light" | "dark";
  /** Rendered pixel height. Width scales with the image's natural aspect. */
  height?: number;
  className?: string;
}

const SRC = {
  light: "/images/logo/dr-goels-logo.png",
  dark: "/images/logo/dr-goels-logo-white.png",
} as const;

export function Logo({
  variant = "light",
  height = 44,
  className = "",
}: LogoProps) {
  const [errored, setErrored] = useState(false);
  const src = SRC[variant];

  if (errored) {
    return (
      <span
        className={`inline-flex items-center gap-2 ${className}`}
        style={{ height }}
      >
        <span
          aria-hidden
          className={`flex items-center justify-center rounded-full font-bold text-[11px] ${
            variant === "dark"
              ? "bg-white/15 text-white"
              : "bg-brand text-white"
          }`}
          style={{ width: height * 0.9, height: height * 0.9 }}
        >
          Dr
        </span>
        <span className="flex flex-col leading-tight">
          <span
            className={`font-bold text-sm ${
              variant === "dark" ? "text-white" : "text-brand"
            }`}
          >
            {CLINIC.name}
          </span>
          <span
            className={`text-[10px] ${
              variant === "dark" ? "text-brand-100" : "text-ink-muted"
            }`}
          >
            Dental & Orthodontic Centre
          </span>
        </span>
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={CLINIC.fullName}
      height={height}
      width={Math.round(height * 3.5)}
      priority
      onError={() => setErrored(true)}
      style={{ height, width: "auto" }}
      className={className}
    />
  );
}
