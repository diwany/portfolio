"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

/**
 * Section wrapper with a restrained scroll-triggered fade.
 */
export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    threshold: 0.12,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`section ${className}`}
    >
      {children}
    </motion.section>
  );
}
