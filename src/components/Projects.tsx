"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { SiNextdotjs, SiTailwindcss, SiReact, SiPython, SiOpenai, SiTypescript, SiNodedotjs } from "react-icons/si";
import { IconType } from "react-icons";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: { name: string; icon: IconType }[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: "Veyras.dev",
    description: "AI Agency Website & Brand",
    longDescription:
      "Designed, developed, and deployed the full Veyras.dev agency website including AI services, brand identity, and client-facing pages. The platform showcases AI solutions, automation workflows, and custom development services.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    liveUrl: "https://veyras.dev",
    githubUrl: "https://github.com/mohameddiwany/veyras",
    image: "/projects/veyras.png",
    featured: true,
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent Conversational Bot",
    longDescription:
      "A full-stack AI chatbot application powered by large language models, featuring real-time streaming responses, conversation history, and context-aware interactions.",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "Python", icon: SiPython },
      { name: "OpenAI", icon: SiOpenai },
      { name: "Node.js", icon: SiNodedotjs },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/mohameddiwany",
    image: "/projects/chatbot.png",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Personal Developer Portfolio",
    longDescription:
      "This very portfolio — a modern, animated, and responsive website built to showcase my work, skills, and services. Features smooth scroll animations and dark/light mode.",
    techStack: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "TypeScript", icon: SiTypescript },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/mohameddiwany/portfolio",
    image: "/projects/portfolio.png",
    featured: false,
  },
  {
    title: "ML Image Classifier",
    description: "Deep Learning Vision Model",
    longDescription:
      "A computer vision project using convolutional neural networks to classify images with high accuracy. Includes a web interface for real-time predictions and model training dashboard.",
    techStack: [
      { name: "Python", icon: SiPython },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/mohameddiwany",
    image: "/projects/ml-classifier.png",
    featured: false,
  },
];

/**
 * Projects section with featured project cards and hover interactions.
 */
export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            What I&apos;ve Built
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 gradient-bg mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-primary/40 transition-all duration-500 ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold gradient-text opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full gradient-bg text-white text-xs font-semibold">
                    Featured
                  </div>
                )}
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-primary hover:scale-110 transition-transform"
                    whileTap={{ scale: 0.9 }}
                    aria-label="Live demo"
                  >
                    <FiExternalLink size={22} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-primary hover:scale-110 transition-transform"
                    whileTap={{ scale: 0.9 }}
                    aria-label="Source code"
                  >
                    <FiGithub size={22} />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)] group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {project.description}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      <tech.icon size={12} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/mohameddiwany"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={18} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
