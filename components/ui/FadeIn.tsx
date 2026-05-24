"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "header" | "article" | "li" | "span";
  once?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.9,
  className,
  as = "div",
  once = true,
}: FadeInProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
