"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SkillItem = {
  name: string;
  color: string;
  Icon: IconType;
};

type SkillGroup = {
  title: string;
  skills: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#A259FF" },
      { name: "HTML/CSS", Icon: SiHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Figma", Icon: SiFigma, color: "#F24E9A" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "AWS Amplify", Icon: FaAws, color: "#FF9900" },
      { name: "Apache Kafka", Icon: SiApachekafka, color: "#FFFFFF" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <div className="mt-3 h-1 w-48 rounded bg-linear-to-r from-[#7c3aed] to-[#06b6d4]" />
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#111111] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                }}
                className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                    }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}22`,
                    }}
                    className="flex cursor-default flex-col items-center gap-2 rounded-xl border border-white/5 bg-[#111] p-4 transition-all hover:border-violet-500/50"
                  >
                    <skill.Icon size={28} color={skill.color} />
                    <span className="text-center text-xs font-medium text-white/70">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
