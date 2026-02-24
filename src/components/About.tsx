"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaCode, FaRobot, FaGraduationCap, FaLightbulb } from "react-icons/fa";

const highlights = [
  {
    icon: FaRobot,
    title: "AI Engineering",
    description: "Building intelligent systems with NLP, computer vision, and modern AI frameworks.",
  },
  {
    icon: FaCode,
    title: "Full Stack Development",
    description: "Creating end-to-end web applications with modern frontend and backend technologies.",
  },
  {
    icon: FaGraduationCap,
    title: "Computer Engineering",
    description: "Pursuing a degree in Computer Engineering, combining theory with hands-on practice.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description: "Translating complex problems into elegant, scalable software solutions.",
  },
];

/**
 * About section with personal introduction and highlight cards.
 */
export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            Get to Know Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 gradient-bg mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I&apos;m <strong className="text-[var(--text-primary)]">Mohamed Diwany</strong>,
              a Computer Engineering student and freelance developer with a deep passion
              for artificial intelligence and full-stack web development.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              I specialize in building AI-powered tools, modern web applications, and
              robust APIs. My work spans from designing intuitive user interfaces to
              engineering intelligent backend systems that solve real-world problems.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              As the founder of{" "}
              <a
                href="https://veyras.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Veyras.dev
              </a>
              , I lead an AI agency that delivers cutting-edge solutions for businesses —
              from custom chatbots and automation workflows to full-scale web platforms.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring the latest research in machine learning,
              contributing to open-source projects, or mentoring aspiring developers.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "10+", label: "Projects" },
                { value: "2+", label: "Years Exp." },
                { value: "5+", label: "Satisfied Clients" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
