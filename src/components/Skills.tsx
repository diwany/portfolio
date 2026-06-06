"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const categories: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "OpenAI & LLMs",
      "Prompt Engineering",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express", "Django", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="container-page">
        <SectionHeading
          index="02"
          label="Toolkit"
          title="What I"
          titleAccent="work with"
        />

        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <h3 className="eyebrow mb-4 border-b border-[var(--border)] pb-3 normal-case tracking-normal text-[var(--fg)]">
                {cat.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="mono rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--fg-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--fg)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
