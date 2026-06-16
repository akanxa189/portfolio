"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1.5 });
  const rounded = useTransform(spring, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Happy Clients" },
  { value: 2, suffix: "+", label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">About Me</h2>
            <p className="mt-6 text-base leading-8 text-white/75">
              I&apos;m a passionate full-stack developer with a keen eye for design.
              I specialize in building modern web applications using React, Next.js,
              and Node.js. I love turning complex problems into simple, beautiful
              solutions - whether that&apos;s for a startup, an agency, or a direct
              client.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="rounded-xl border border-white/10 bg-[#111111] p-4"
                >
                  <p className="text-2xl font-semibold text-white">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-white/65">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl border border-white/10 bg-[#111111] p-8"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7c3aed]/15 via-transparent to-[#06b6d4]/15" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Development Philosophy
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                Clean code, sharp design, measurable results
              </h3>
              <p className="mt-4 leading-7 text-white/70">
                I approach every build with a product mindset: optimize performance,
                preserve usability, and create experiences that users remember.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
