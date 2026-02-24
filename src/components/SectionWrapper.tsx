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
 * Wrapper component that adds scroll-triggered fade-in animation to sections.
 */
export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
}
