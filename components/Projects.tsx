"use client";

import { motion } from "framer-motion";
import { FiCode, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack shopping app with cart, auth, and secure payments.",
    tech: ["React", "Next.js", "Stripe", "MongoDB"],
    githubUrl: "https://github.com/akanxa189/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    title: "Task Management App",
    description: "Drag-and-drop productivity tool with real-time team sync.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/akanxa189/task-management-app",
    liveUrl: "https://task-management-demo.vercel.app",
  },
  {
    title: "Portfolio Generator",
    description: "No-code portfolio builder tailored for modern developers.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/akanxa189/portfolio-generator",
    liveUrl: "https://portfolio-generator-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projects</h2>
          <div className="mt-3 h-1 w-28 rounded bg-gradient-to-r from-[#7c3aed] to-[#06b6d4]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="group rounded-2xl border border-white/10 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7c3aed]/65 hover:shadow-[0_18px_40px_rgba(124,58,237,0.18)]"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-white/70">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-full border border-[#7c3aed]/45 bg-[#7c3aed]/15 px-3 py-1 text-xs text-[#d8b4fe]"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-violet-400"
                >
                  <FiCode size={16} />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-violet-400"
                >
                  <FiExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
