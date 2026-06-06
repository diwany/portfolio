"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  titleAccent?: string;
}

/**
 * Consistent section heading: mono index + label, serif-accented title.
 */
export default function SectionHeading({
  index,
  label,
  title,
  titleAccent,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow flex items-center gap-3"
      >
        <span>{index}</span>
        <span className="h-px w-8 bg-[var(--border-strong)]" />
        <span>{label}</span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
      >
        {title}
        {titleAccent && (
          <span className="font-display italic font-normal text-[var(--fg-muted)]">
            {" "}
            {titleAccent}
          </span>
        )}
      </motion.h2>
    </div>
  );
}
