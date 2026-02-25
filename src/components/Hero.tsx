"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FluidCursor from "./FluidCursor";


/**
 * Hero section with animated text, particle background,
 * social links, and a CTA button.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fluid Background */}
      <FluidCursor />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Mohamed Diwany</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--text-secondary)] mb-6 h-10"
        >
          <TypeAnimation
            sequence={[
              "AI Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "Computer Engineering Student",
              2000,
              "Freelance Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto text-[var(--text-secondary)] text-base sm:text-lg mb-10 leading-relaxed"
        >
          I build intelligent applications, modern web experiences, and
          AI-powered solutions. Passionate about transforming ideas into
          impactful digital products.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center mb-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gradient-bg text-white font-semibold shadow-lg hover:shadow-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Talk
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { icon: FaGithub, href: "https://github.com/diwany", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/diwany/", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
