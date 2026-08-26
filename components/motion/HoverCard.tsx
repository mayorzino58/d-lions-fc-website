"use client";

import { motion } from "framer-motion";

export default function HoverCard({
  children,
  className,
  lift = 6,
}: {
  children: React.ReactNode;
  className?: string;
  lift?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -lift, transition: { duration: 0.25, ease: "easeOut" } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}
