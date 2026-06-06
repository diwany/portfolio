"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/diwany", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/diwany/",
    label: "LinkedIn",
  },
  { icon: FiMail, href: "mailto:diwany10@icloud.com", label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#home"
              className="flex items-baseline gap-1 text-lg font-semibold tracking-tight"
            >
              <span>Diwany</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--fg)]" />
            </a>
            <p className="mt-2 max-w-xs text-sm text-[var(--fg-muted)]">
              AI &amp; software engineer building products that ship.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-[var(--fg-muted)] transition-colors hover:text-[var(--fg)]"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg)]"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--fg-subtle)] sm:flex-row sm:items-center sm:justify-between">
          <p className="mono">© {year} Mohamed Diwany</p>
          <p className="mono">Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
