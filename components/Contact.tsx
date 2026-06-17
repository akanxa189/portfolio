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
          className="card-surface grid gap-8 rounded-2xl p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <h2 className="text-3xl font-semibold text-[#f8f8f8] sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-3 text-[rgba(248,248,248,0.55)]">
              Available for freelance projects and full-time roles
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-white/[0.06] bg-[#080808]/60 px-4 py-3 text-sm text-[#f8f8f8] outline-none transition focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-white/[0.06] bg-[#080808]/60 px-4 py-3 text-sm text-[#f8f8f8] outline-none transition focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full resize-none rounded-lg border border-white/[0.06] bg-[#080808]/60 px-4 py-3 text-sm text-[#f8f8f8] outline-none transition focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              />
              <button
                type="button"
                className="btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-[#f8f8f8] hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-[#080808]/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[rgba(248,248,248,0.35)]">
              Contact
            </p>
            <a
              href={`mailto:${profileLinks.email}`}
              className="mt-4 block text-[#f8f8f8] transition hover:text-[#a78bfa]"
            >
              {profileLinks.email}
            </a>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.06] bg-[#0f0f0f] p-3 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/[0.06] bg-[#0f0f0f] p-3 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
                aria-label="GitHub profile"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={`mailto:${profileLinks.email}`}
                className="rounded-full border border-white/[0.06] bg-[#0f0f0f] p-3 transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
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
