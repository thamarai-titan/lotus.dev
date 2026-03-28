"use client";

import { motion } from "motion/react";

type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "Interfaces that feel as good as they look",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    category: "Backend",
    description: "Systems built to hold up under real conditions",
    skills: ["Node.js", "Express.js", "WebSockets", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Frameworks",
    description: "The craft behind the craft",
    skills: ["Git", "GitHub", "Figma", "Postman", "Vercel", "VS Code", "Docker"],
  },
  {
    category: "AI / LLM",
    description: "Building with the next layer of the stack",
    skills: ["API Integration", "LLM Integration", "AI-powered features"],
  },
];

export const Skills = () => {
  return (
    <section className="w-full py-16 font-mono px-2 md:px-20" id="skills">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)" }}>
          What I work with
        </p>
        <h2 className="text-2xl sm:text-3xl" style={{ color: "var(--color-text)" }}>
          Skills
        </h2>
      </motion.div>

      {/* Category cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px"
      style={{ background: "var(--color-border-weak)" }}
      >
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIndex * 0.08, ease: "easeOut" }}
            className="relative flex flex-col p-6 overflow-hidden"
            style={{
              background: "var(--color-surface)",
              border: "0px solid var(--color-border-weak)",
            }}
          >
            {/* Index */}
            <span
              className="text-xs tabular-nums mb-4"
              style={{ color: "var(--color-border-strong)" }}
            >
              {String(groupIndex + 1).padStart(2, "0")}
            </span>

            {/* Category + description */}
            <h3
              className="text-base mb-1"
              style={{ color: "var(--color-text)" }}
            >
              {group.category}
            </h3>
            <p
              className="text-xs mb-5 leading-relaxed"
              style={{ color: "var(--color-accent)" }}
            >
              {group.description}
            </p>

            {/* Divider */}
            <div
              className="w-full h-px mb-5"
              style={{ background: "var(--color-border-weak)" }}
            />

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.2,
                    delay: groupIndex * 0.06 + skillIndex * 0.05,
                  }}
                  whileHover={{ y: -1 }}
                  className="text-xs px-2.5 py-1 rounded-sm cursor-default"
                  style={{
                    background: "var(--color-elevated)",
                    color: "var(--color-text)",
                    border: "1px solid var(--color-border-weak)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};