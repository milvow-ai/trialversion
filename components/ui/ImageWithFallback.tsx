"use client";
import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className = "",
  priority,
  sizes,
}: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`bg-gradient-to-br from-brand-50 to-brand-100 flex items-center justify-center ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <span className="text-brand-light text-xs font-medium uppercase tracking-wider text-center px-2">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
