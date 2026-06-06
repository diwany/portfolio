"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";

interface Project {
  title: string;
  meta: string;
  description: string;
  tech: string[];
  href?: string;
  hrefLabel?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "WhatsApp AI Assistant",
    meta: "Veyra · Flagship product",
    description:
      "A WhatsApp assistant on OpenAI's models that reads a customer's plain-language message and turns it into a clean, validated booking with no one in the loop. Now handling 50,000+ messages and 5,000+ bookings a day across live client accounts, with an admin dashboard for managing conversations and a messaging engine tuned to stay reliable and read as natural at high volume.",
    tech: ["TypeScript", "Node.js", "OpenAI GPT-4o", "Express", "SQLite"],
    featured: true,
  },
  {
    title: "Veyras.dev",
    meta: "AI automation agency",
    description:
      "Designed, built, and deployed the full Veyra agency site and brand: the front door for the AI chatbots, automation, and custom integrations I ship for clients.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    href: "https://veyras.dev",
    hrefLabel: "Visit site",
  },
  {
    title: "AI-Assisted VR Museum",
    meta: "IEEE 2026 · Research",
    description:
      "Co-wrote a research paper presented at the 2026 IEEE 3rd International Conference on Machine Intelligence and Smart Innovation, pairing VR and AI to make cultural-heritage learning more immersive.",
    tech: ["AI / ML", "Computer Vision", "Virtual Reality"],
  },
  {
    title: "Blind Aid Smart Glasses",
    meta: "Assistive technology",
    description:
      "A wearable that uses a machine-learning model to detect objects and judge distance in real time, helping visually impaired people navigate on their own.",
    tech: ["Python", "Computer Vision", "ML"],
  },
  {
    title: "ML Image Classifier",
    meta: "Computer vision",
    description:
      "Trained a convolutional neural network for image classification and wrapped it in a web app for real-time predictions, plus a small dashboard to track training.",
    tech: ["Python", "TensorFlow / PyTorch", "React", "TypeScript"],
  },
];

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`card group flex flex-col p-7 md:p-8 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="mono text-xs text-[var(--fg-subtle)]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
            {project.title}
          </h3>
          <p className="eyebrow mt-1 normal-case tracking-normal">
            {project.meta}
          </p>
        </div>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.hrefLabel ?? "Open"}
            className="mt-1 inline-flex items-center gap-1 text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
          >
            {project.hrefLabel}
            <FiArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        )}
      </div>

      <p
        className={`mt-5 leading-relaxed text-[var(--fg-muted)] ${
          project.featured ? "max-w-2xl text-lg" : "text-base"
        }`}
      >
        {project.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="mono rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--fg-subtle)]"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="work">
      <div className="container-page">
        <SectionHeading
          index="03"
          label="Selected work"
          title="Things I've"
          titleAccent="built & shipped"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Card key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <a
            href="https://github.com/diwany"
            target="_blank"
            rel="noopener noreferrer"
            className="link mono text-sm text-[var(--fg-muted)]"
          >
            More on GitHub →
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
