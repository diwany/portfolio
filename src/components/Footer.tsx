"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import Image from "next/image";

/**
 * Footer with branding, social links, and navigation.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="relative inline-block">
              <Image src="/logo.png" alt="Diwany" width={120} height={40} className="h-10 w-auto" />
              <div className="absolute inset-0 bg-[#D62424] mix-blend-multiply pointer-events-none" />
            </a>
            <p className="text-sm text-[var(--text-muted)] mt-2 max-w-xs">
              AI Engineer & Full Stack Developer building the future one line of code at a time.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[var(--text-secondary)] hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-end gap-3"
          >
            {[
              { icon: FaGithub, href: "https://github.com/diwany" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/diwany/" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-primary hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-color)] mt-8 pt-8 text-center">
          <p className="text-sm text-[var(--text-muted)] flex items-center justify-center gap-1">
            &copy; {currentYear} Diwany. Built with{" "}
            <FaHeart className="text-red-500 text-xs" /> using Next.js &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
