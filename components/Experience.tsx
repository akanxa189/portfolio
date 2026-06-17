"use client";

import { motion } from "framer-motion";

const experienceItems = [
  {
    role: "Software Engineer",
    company: "Surevorx Software India PVT LTD. · Surat, India (Remote)",
    duration: "Jul 2024 - Present",
    isCurrent: true,
    summary:
      "Architected and scaled frontend and backend systems for a SaaS construction platform, focusing on performance, reliability, and real-time collaboration.",
    highlights: [
      "Architected 12+ frontend modules in TypeScript + React.js on AWS Amplify and built a reusable component library with custom hooks, reducing page load from 3.8s to 1.6s (58% improvement) through code splitting, lazy loading, and strategic caching; verified via Core Web Vitals.",
      "Implemented real-time collaboration using Supabase Realtime channels with live task board updates under 100ms latency; authored Jest + React Testing Library suites with 80%+ coverage on critical UI flows, improving UX by 25% based on user feedback.",
      "Owned 4 backend service modules in Express.js + Supabase, designed TypeScript-first REST APIs documented in Swagger, and reduced API response time from 420ms to 270ms (35% improvement) via query optimization and caching.",
      "Architected a Kafka-based event-driven system decoupling 6 microservices for async processing of 10K+ daily events with near-zero message loss, reducing cascading failures by 60%.",
    ],
    stack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Express.js",
      "Supabase",
      "Kafka",
      "Docker",
      "AWS Amplify",
    ],
  },
  {
    role: "Web Developer -> Tech Lead",
    company: "Green Apex Technolabs · Ahmedabad, India",
    duration: "Aug 2021 - Jul 2024 · 3 years",
    isCurrent: false,
    summary:
      "Led product delivery and engineering quality across high-traffic MERN applications, scaling from individual contributor to team leadership.",
    highlights: [
      "Led frontend architecture across 9 MERN applications (5K to 80K+ MAU), improving average Lighthouse scores from 52 to 84 through memoization, code splitting, and image optimization; built a shared TypeScript component library with Tailwind CSS.",
      "Led a cross-functional team of 11 developers and established TypeScript standards, Git branching strategy, and sprint rituals that reduced production incidents by 50% in 12 months; mentored 3 developers into mid-level roles.",
      "Introduced WCAG 2.1 accessibility standards and Jest + RTL testing practices, achieving 75%+ coverage on core UI components and eliminating all critical accessibility violations before launch on 4 client projects.",
      "Integrated geolocation using Google Maps API and payment gateways (Stripe, Razorpay) across 4 logistics projects; handled real-time data at scale using MongoDB indexing for ~100ms query performance.",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "OpenAI API",
      "Google Maps",
      "Stripe",
      "Razorpay",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-semibold text-[#f8f8f8] sm:text-4xl">Experience</h2>
          <div className="accent-underline mt-3 h-1 w-28 rounded" />
          <p className="mt-4 max-w-2xl text-[rgba(248,248,248,0.55)]">
            Professional experience delivering production-grade products, leading
            teams, and scaling engineering quality across modern web stacks.
          </p>
        </motion.div>

        <div className="relative mt-10 pl-8 sm:pl-12">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-[#7c3aed] to-[#6366f1] sm:left-4" />

          {experienceItems.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.duration}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="card-surface relative mb-6 rounded-2xl p-6 transition duration-300 last:mb-0 hover:-translate-y-1 hover:bg-[#141414]"
            >
              <span className="absolute -left-[2.2rem] top-8 h-4 w-4 rounded-full bg-violet-600 ring-4 ring-violet-500/30 sm:-left-[2.65rem]" />
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs uppercase tracking-[0.18em] text-[#a78bfa]">
                  {item.duration}
                </p>
                {item.isCurrent && (
                  <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-300">
                    Current
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-[#f8f8f8]">{item.role}</h3>
              <p className="mt-1 bg-gradient-to-r from-[#a78bfa] to-[#818cf8] bg-clip-text text-sm text-transparent">
                {item.company}
              </p>
              <p className="mt-4 leading-7 text-[rgba(248,248,248,0.55)]">{item.summary}</p>

              <ul className="mt-4 space-y-2">
                {item.highlights.map((point) => (
                  <li key={point} className="text-sm text-[rgba(248,248,248,0.55)]">
                    • {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.06] bg-[#0f0f0f] px-3 py-1 text-xs text-[rgba(248,248,248,0.55)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
