"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profileLinks } from "./siteData";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 rounded-2xl border border-white/10 bg-[#111111] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-3 text-white/70">
              Available for freelance projects and full-time roles
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7c3aed]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7c3aed]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-lg border border-white/15 bg-black/35 px-4 py-3 text-sm text-white outline-none transition focus:border-[#7c3aed]"
              />
              <button
                type="button"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/25 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Contact</p>
            <a
              href={`mailto:${profileLinks.email}`}
              className="mt-4 block text-white transition hover:text-[#d8b4fe]"
            >
              {profileLinks.email}
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#111] border border-white/10 hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#111] border border-white/10 hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
                aria-label="GitHub profile"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={`mailto:${profileLinks.email}`}
                className="p-3 rounded-full bg-[#111] border border-white/10 hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
                aria-label="Email contact"
              >
                <MdEmail size={22} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
