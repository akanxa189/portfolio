"use client";

import { motion } from "framer-motion";
import { FiCode, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Code Reviewer",
    description:
      "Full-stack web app where users sign in, paste code in a live editor, and get AI-powered feedback on bugs, performance, security, and best practices with review history saved per user.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Groq API",
    ],
    githubUrl: "https://github.com/akanxa189/CodeEditor",
    liveUrl: "https://code-editor-rho-jet.vercel.app/",
  },
  {
    title: "Bookstagram",
    description:
      "Personal reading dashboard for tracking books, yearly reading challenges, daily reading habits, and detailed book notes ratings, thoughts, and favourite quotes.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Clerk",
    ],
    githubUrl: "https://github.com/akanxa189/bookstagram",
    liveUrl: "https://bookstagram-psi.vercel.app/",
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
          <h2 className="text-3xl font-semibold text-[#f8f8f8] sm:text-4xl">
            Projects
          </h2>
          <div className="accent-underline mt-3 h-1 w-28 rounded" />
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
              className="card-surface group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#141414]"
            >
              <h3 className="text-xl font-semibold text-[#f8f8f8]">
                {project.title}
              </h3>
              <p className="mt-3 min-h-12 text-sm leading-6 text-[rgba(248,248,248,0.55)]">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((techItem) => (
                  <span
                    key={techItem}
                    className="rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs text-[#a78bfa]"
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
                  className="flex items-center gap-2 text-sm text-[rgba(248,248,248,0.55)] transition-colors hover:text-violet-400"
                >
                  <FiCode size={16} />
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[rgba(248,248,248,0.55)] transition-colors hover:text-violet-400"
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
