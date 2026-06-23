"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { profileLinks } from "./siteData";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full rounded-lg border border-white/[0.06] bg-[#080808]/60 px-4 py-3 text-sm text-[#f8f8f8] outline-none transition focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-white/[0.06] bg-[#080808]/60 px-4 py-3 text-sm text-[#f8f8f8] outline-none transition focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              />
              <textarea
                placeholder="Message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full resize-none rounded-lg border border-white/[0.06] bg-[#080808]/60 px-4 py-3 text-sm text-[#f8f8f8] outline-none transition focus:border-violet-500/60 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.1)]"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold text-[#f8f8f8] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-400">
                  ✓ Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  ✕ Something went wrong. Please try again.
                </p>
              )}
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
