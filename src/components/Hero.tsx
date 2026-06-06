"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const fade = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

/**
 * Hero: calm, editorial, content-first.
 * Subtle dotted backdrop replaces the old WebGL fluid cursor.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Subtle backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />

      <div className="container-page relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.p
            {...fade}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
            Alexandria, Egypt · Available for work
          </motion.p>

          <motion.h1
            {...fade}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="font-semibold">Mohamed Diwany</span>
            <br />
            <span className="font-display italic text-[var(--fg-muted)]">
              AI &amp; software engineer
            </span>
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            I build AI products and actually ship them. I run{" "}
            <a
              href="https://veyras.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="link font-medium text-[var(--fg)]"
            >
              Veyra
            </a>
            , a small AI automation agency, including a WhatsApp assistant that
            now handles{" "}
            <span className="text-[var(--fg)]">50,000+ messages a day</span> for
            live clients.
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#work" className="btn btn-ghost">
              View work
              <FiArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 flex items-center gap-5"
          >
            {[
              { icon: FaGithub, href: "https://github.com/diwany", label: "GitHub" },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/diwany/",
                label: "LinkedIn",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg)]"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--fg-subtle)]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <FiArrowDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
