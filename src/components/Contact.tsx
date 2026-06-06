"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { FiSend, FiCheck, FiAlertCircle, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "diwany10@icloud.com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--fg)] placeholder-[var(--fg-subtle)] outline-none transition-colors focus:border-[var(--fg)] focus:ring-2 focus:ring-[var(--ring)]";

  return (
    <SectionWrapper id="contact">
      <div className="container-page">
        <SectionHeading
          index="04"
          label="Contact"
          title="Let's build"
          titleAccent="something"
        />

        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: invitation + direct links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="max-w-md text-lg leading-relaxed text-[var(--fg-muted)]">
              Have a problem worth solving, a project in mind, or just want to
              say hello? The fastest way to reach me is email. I read everything
              and reply quickly.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="link mt-8 inline-flex w-fit items-center gap-2 text-xl font-medium text-[var(--fg)] sm:text-2xl"
            >
              {EMAIL}
              <FiArrowUpRight size={20} />
            </a>

            <div className="mt-8 flex items-center gap-4">
              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/diwany",
                  label: "GitHub",
                },
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
                  <Icon size={22} />
                </a>
              ))}
            </div>

            <p className="eyebrow mt-auto pt-10 normal-case tracking-normal">
              Based in Alexandria, Egypt · Working remotely worldwide
            </p>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="eyebrow mb-2 block normal-case tracking-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="eyebrow mb-2 block normal-case tracking-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="eyebrow mb-2 block normal-case tracking-normal"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className={`${inputClass} resize-none`}
                placeholder="Tell me a little about what you're working on…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary w-full justify-center disabled:opacity-60"
            >
              {status === "sending" && (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--accent-contrast)]/30 border-t-[var(--accent-contrast)]" />
                  Sending…
                </>
              )}
              {status === "idle" && (
                <>
                  <FiSend size={16} />
                  Send message
                </>
              )}
              {status === "success" && (
                <>
                  <FiCheck size={16} />
                  Sent, talk soon
                </>
              )}
              {status === "error" && (
                <>
                  <FiAlertCircle size={16} />
                  Something went wrong
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
