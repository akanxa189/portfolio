"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl"
    >
      <nav className="section-shell flex h-18 items-center justify-between">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-3 py-1.5 text-lg font-bold text-white shadow-[0_0_24px_rgba(124,58,237,0.45)]">
            AA
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex rounded-md border border-white/15 p-2 text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/10 bg-[#0a0a0a] md:hidden"
          >
            <ul className="section-shell flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-sm text-white/80 transition hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
