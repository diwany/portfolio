"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "50,000+", label: "Messages handled / day" },
  { value: "5,000+", label: "Bookings processed / day" },
  { value: "12+", label: "Businesses shipped for" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="container-page">
        <SectionHeading
          index="01"
          label="About"
          title="A bit"
          titleAccent="about me"
        />

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-lg leading-relaxed text-[var(--fg-muted)]"
          >
            <p>
              I&apos;m a 2026 Computer Engineering graduate who builds AI
              products and gets them in front of real users. Most of my time
              goes into{" "}
              <a
                href="https://veyras.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="link font-medium text-[var(--fg)]"
              >
                Veyra
              </a>
              , the AI automation agency I co-founded, where I own the
              technical side end to end, from the first client conversation
              through to a deployed product.
            </p>
            <p>
              The flagship is a WhatsApp assistant built on Node.js and OpenAI&apos;s
              models. It reads a customer&apos;s plain-language message, turns it
              into a clean, validated booking with no one in the loop, and now
              handles{" "}
              <span className="text-[var(--fg)]">
                50,000+ messages and 5,000+ bookings a day
              </span>{" "}
              across live client accounts.
            </p>
            <p>
              I work mostly in Python and TypeScript across the web and AI stack.
              And before any of this, a few years in a client-facing role taught
              me to keep things clear and calm when a project gets messy. Which,
              honestly, is half the job.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center divide-y divide-[var(--border)]"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="py-5 first:pt-0 last:pb-0">
                <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                  {stat.value}
                </div>
                <div className="eyebrow mt-2 normal-case tracking-normal">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
