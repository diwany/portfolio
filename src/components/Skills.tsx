"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiMongodb,
  SiPostgresql,
  SiVercel,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    description: "Designing scalable server-side architectures",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
  {
    title: "AI / ML",
    description: "Engineering intelligent, data-driven solutions",
    skills: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
      { name: "NLP", icon: SiOpenai, color: "#06B6D4" },
      { name: "Prompt Eng.", icon: SiOpenai, color: "#818CF8" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Streamlining development and deployment workflows",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "VS Code", icon: VscCode, color: "#007ACC" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

/**
 * Skills section displayed as categorized grids with hover animations.
 */
export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold text-sm tracking-widest uppercase"
          >
            What I Work With
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 gradient-bg mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.15 }}
              className="p-6 md:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-1 text-[var(--text-primary)]">
                {category.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-6">
                {category.description}
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={`${category.title}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="flex flex-col items-center justify-center text-center gap-2 p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-primary/10 border border-transparent hover:border-primary/20 transition-all duration-300 group cursor-default"
                  >
                    <skill.icon
                      className="text-2xl transition-colors duration-300"
                      style={{ color: skill.color }}
                    />
                    <span className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-primary transition-colors text-center leading-tight w-full">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
