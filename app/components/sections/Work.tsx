"use client";

import { useRef }        from "react";
import { motion }        from "framer-motion";
import { useGSAP, gsap } from "../../lib/gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link              from "next/link";
import { cn }            from "../../lib/utils";
import type { Project }  from "@/types";

interface WorkProps {
  projects: Project[];
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block font-mono text-[10px] border border-[var(--color-rule)] px-2 py-0.5 text-[var(--color-muted)] tracking-wide whitespace-nowrap transition-colors duration-150 group-hover/pill:border-[var(--color-accent)] group-hover/pill:text-[var(--color-text)]">
      {label}
    </span>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!rowRef.current) return;
    gsap.fromTo(
      rowRef.current,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 88%",
        },
      }
    );
  }, []);

  // Featured card — different layout
  if (project.featured) {
    return (
      <div ref={rowRef} className="opacity-0">
        <Link href={project.href} className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-[var(--color-rule)] transition-colors duration-200 hover:bg-[var(--color-bg-alt)]">
            {/* Left text */}
            <div className="flex flex-col justify-between p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[var(--color-rule)]">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[11px] text-[var(--color-faint)]">
                    {project.number}
                  </span>
                  <span className="font-mono text-[11px] text-[var(--color-accent)] tracking-widest uppercase">
                    Featured
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-text)] transition-colors">
                  {project.title}
                </h3>
                <p className="font-mono text-[13px] text-[var(--color-muted)] leading-relaxed max-w-[420px]">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.stack.map((s) => (
                  <span key={s} className="group/pill">
                    <TechPill label={s} />
                  </span>
                ))}
              </div>
            </div>

            {/* Right — dark code panel */}
            <div className="bg-[var(--color-bg-dark)] p-8 lg:p-10 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center gap-2 mb-6">
                {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
                  <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <pre className="font-mono text-[12px] text-[#adbac7] leading-relaxed overflow-hidden whitespace-pre-wrap">
                <code>{project.codeSnippet}</code>
              </pre>
              <div className="flex items-center justify-between mt-8">
                <span className="font-mono text-[11px] text-[#4a5568]">{project.year}</span>
                <span className="font-mono text-[11px] text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                  View project →
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Normal row
  return (
    <div ref={rowRef} className="opacity-0">
      <Link href={project.href} className="group block">
        <div className="grid grid-cols-[40px_1fr_auto] md:grid-cols-[40px_1fr_1fr_80px] items-center gap-4 md:gap-8 py-6 border-b border-[var(--color-rule)] transition-colors duration-200 hover:bg-[var(--color-bg-alt)] px-2 -mx-2">
          {/* Number */}
          <span className="font-mono text-[11px] text-[var(--color-faint)]">
            {project.number}
          </span>

          {/* Title + description */}
          <div>
            <h3 className="font-display text-lg font-medium text-[var(--color-text)] mb-1 group-hover:underline decoration-[var(--color-accent)] underline-offset-4 decoration-[1.5px] transition-all">
              {project.title}
            </h3>
            <p className="font-mono text-[12px] text-[var(--color-muted)] hidden md:block">
              {project.description}
            </p>
          </div>

          {/* Stack */}
          <div className="hidden md:flex flex-wrap gap-1.5">
            {project.stack.slice(0, 3).map((s) => (
              <span key={s} className="group/pill">
                <TechPill label={s} />
              </span>
            ))}
          </div>

          {/* Year + arrow */}
          <div className="flex items-center justify-end gap-3">
            <span className="font-mono text-[11px] text-[var(--color-faint)]">
              {project.year}
            </span>
            <span className="text-[var(--color-muted)] transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-[var(--color-accent)] inline-block">
              →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Work({ projects }: WorkProps) {
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!headingRef.current) return;
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -12 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%" },
      }
    );
  }, []);

  return (
    <section
      id="work"
      className="px-6 md:px-12 max-w-[var(--max-site)] mx-auto py-[var(--space-xxl)]"
      aria-label="Selected work"
    >
      {/* Header */}
      <div ref={headingRef} className="mb-16 opacity-0">
        <p className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-4">
          02 — Selected Work
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold text-[var(--color-text)] leading-tight">
          Projects that shipped.
        </h2>
      </div>

      {/* Project rows */}
      <div>
        {projects.map((project, i) => (
          <ProjectRow key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* View all link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-14 pt-8 border-t border-[var(--color-rule)]"
      >
        <Link
          href="/work"
          className="group inline-flex items-center gap-3 font-mono text-[13px] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
        >
          All projects
          <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
        </Link>
      </motion.div>
    </section>
  );
}