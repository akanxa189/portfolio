"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Freelance Developer",
  "React Specialist",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7c3aed]/35 to-[#06b6d4]/25 blur-3xl" />

      <motion.div
        className="section-shell relative"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
        }}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="mb-4 text-sm uppercase tracking-[0.22em] text-white/60"
        >
          Crafting Digital Experiences
        </motion.p>
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m Akanxa Acharya
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
          }}
          className="mt-5 h-10"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="inline-block bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-xl font-medium text-transparent sm:text-2xl"
            >
              {roles[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
        >
          I build beautiful, fast, and scalable web experiences that help
          businesses grow.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
          }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            View My Work
            <ArrowRight size={16} />
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#7c3aed] hover:text-[#d8b4fe]"
          >
            Download Resume
            <Download size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
