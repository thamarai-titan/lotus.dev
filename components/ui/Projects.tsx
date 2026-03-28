"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  status: "live" | "wip" | "archived";
  github?: string;
  live?: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "EasyRide",
    tagline: "AI-powered travel route recommendation.",
    description:
      "An AI-integrated car booking system that analyzes routes to recommend the most scenic and efficient travel experiences.",
    stack: ["Next.js", "TypeScript", "Node.js", "AI APIs"],
    status: "live",
    github: "https://github.com/thamarai-titan/EasyRide",
    live: "#",
  },
  {
    id: 2,
    title: "DevBin",
    tagline: "Curated developer tools discovery platform.",
    description:
      "Engineered a platform featuring 320+ developer tools across 12 categories with advanced search, filtering, and real-time trending insights.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "live",
    github: "https://github.com/thamarai-titan/DevBin",
    live: "#",
  },
  {
    id: 3,
    title: "Open Chat",
    tagline: "Chat Application with AI Support.",
    description:
      "Developed a scalable chat application with AI integration for Catch up with updates in the Groups",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT"],
    status: "live",
    github: "https://github.com/thamarai-titan/openchat",
    live: "#",
  },
  {
    id: 4,
    title: "ReadmeForge",
    tagline: "Modern README generator with AI assistance.",
    description:
      "Designed and built a README generator that uses AI to create professional documentation based on user input and project details.",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    status: "wip",
    github: "https://github.com/thamarai-titan/ReadmeForge",
  },
];

const statusConfig = {
  live:     { label: "Live",     color: "var(--color-success)", bg: "rgba(34,197,94,0.08)"  },
  wip:      { label: "WIP",      color: "var(--color-accent)",  bg: "rgba(49,98,99,0.08)"   },
  archived: { label: "Archived", color: "var(--color-muted)",   bg: "var(--color-elevated)" },
};

export const Projects = () => {
  return (
    <section className="w-full py-10 font-mono px-2 md:px-20" id="projects">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)" }}>
            Selected work
          </p>
          <h2 className="text-2xl sm:text-3xl" style={{ color: "var(--color-text)" }}>
            Projects
          </h2>
        </div>
        <span className="text-xs" style={{ color: "var(--color-muted)" }}>
          {projects.length} projects
        </span>
      </motion.div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-px"
        style={{ background: "var(--color-border-weak)" }}
      >
        {projects.map((project, i) => {
          const status = statusConfig[project.status];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden"
              style={{ background: "var(--color-surface)" }}
            >
              <div className="flex flex-col flex-1 p-6 sm:p-7">

                {/* Top row: index + status */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="text-xs tabular-nums"
                    style={{ color: "var(--color-border-strong)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ color: status.color, background: status.bg }}
                  >
                    {status.label}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-mono mb-1"
                  style={{ color: "var(--color-text)" }}
                >
                  {project.title}
                </h3>

                {/* Tagline */}
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--color-accent)" }}
                >
                  {project.tagline}
                </p>
                <div
              className="w-full h-px mb-5"
              style={{ background: "var(--color-border-weak)" }}
            />
                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "var(--color-muted)" }}
                >
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "var(--color-elevated)",
                        color: "var(--color-text)",
                        border: "1px solid var(--color-border-weak)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-colors hover:opacity-80"
                      style={{
                        border: "1px solid var(--color-border-strong)",
                        color: "var(--color-text)",
                      }}
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded transition-opacity hover:opacity-80"
                      style={{
                        background: "var(--color-accent)",
                        color: "var(--color-surface)",
                      }}
                    >
                      <ArrowUpRight size={12} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[1.5px]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                style={{ background: "var(--color-accent)" }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};