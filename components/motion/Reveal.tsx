"use client";

import { motion, type Variants } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  as?: "div" | "span";
};

const distance = 28;

function getVariants(direction: RevealProps["direction"]): Variants {
  const offset =
    direction === "up"
      ? { y: distance }
      : direction === "left"
        ? { x: -distance }
        : direction === "right"
          ? { x: distance }
          : {};

  return {
    hidden: { opacity: 0, ...offset },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay },
    }),
  };
}

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  as = "div",
}: RevealProps) {
  const Component = as === "span" ? motion.span : motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      custom={delay}
      variants={getVariants(direction)}
    >
      {children}
    </Component>
  );
}
