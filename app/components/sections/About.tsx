"use client";

import { useRef }        from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timeline = [
  { year: "2023–Now",  company: "Acme Corp",    role: "Senior Frontend Engineer" },
  { year: "2021–2023", company: "StartupXYZ",   role: "Software Engineer"        },
  { year: "2019–2021", company: "Agency Co",    role: "Frontend Developer"       },
];

const stack = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Redis", "Docker", "AWS",
];

export function About() {
  const sectionRef  = useRef<HTMLElement>(null);
  const stickyRef   = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-6 md:px-12 max-w-[var(--max-site)] mx-auto py-[var(--space-xxl)]"
      aria-label="About"
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-16"
      >
        03 — About
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-start">

        {/* ── Left: bio ── */}
        <div>
          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(1.5rem,3vw,2.25rem)] italic text-[var(--color-text)] leading-snug mb-12 border-l-2 border-[var(--color-accent)] pl-6"
          >
            "I care more about what doesn't ship than what does."
          </blockquote>

          {/* Bio paragraphs */}
          {[
            "I'm a senior software engineer with 5+ years building products that millions of people use. My work spans frontend architecture, design systems, and the occasional deep dive into distributed systems when the problem demands it.",
            "I believe in boring technology where possible — proven tools, clear boundaries, and code that the next engineer can understand without a guided tour. Cleverness is a liability; clarity is the goal.",
            "When I'm not shipping, I'm writing about the intersection of engineering and craft, contributing to open source, or mentoring engineers earlier in their careers.",
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-mono text-[15px] text-[var(--color-text)] leading-[1.8] mb-6 max-w-[620px]"
            >
              {para}
            </motion.p>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            
              href="/about"
              className="group inline-flex items-center gap-3 font-mono text-[13px] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
            >
              More about me
              <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">→</span>
            </a>
          </motion.div>
        </div>

        {/* ── Right: sticky facts ── */}
        <motion.div
          ref={stickyRef}
          style={{ opacity }}
          className="lg:sticky lg:top-24 space-y-10"
        >
          {/* Currently */}
          <div>
            <p className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-4">
              Currently
            </p>
            <p className="font-mono text-[13px] text-[var(--color-text)]">Acme Corp</p>
            <p className="font-mono text-[12px] text-[var(--color-muted)]">Senior Frontend Engineer</p>
            <p className="font-mono text-[11px] text-[var(--color-faint)]">2023 –</p>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--color-rule)]" />

          {/* Timeline */}
          <div>
            <p className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-5">
              Previously
            </p>
            <div className="relative pl-4">
              <div className="absolute left-[3px] top-2 bottom-2 w-[1px] bg-[var(--color-rule)]" />
              <div className="space-y-6">
                {timeline.slice(1).map((item) => (
                  <div key={item.company} className="relative">
                    <span className="absolute -left-[17px] top-[5px] w-[7px] h-[7px] rounded-full border border-[var(--color-rule)] bg-[var(--color-bg)]" />
                    <p className="font-mono text-[13px] text-[var(--color-text)]">{item.company}</p>
                    <p className="font-mono text-[12px] text-[var(--color-muted)]">{item.role}</p>
                    <p className="font-mono text-[11px] text-[var(--color-faint)]">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--color-rule)]" />

          {/* Stack */}
          <div>
            <p className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-4">
              Stack
            </p>
            <p className="font-mono text-[12px] text-[var(--color-text)] leading-relaxed">
              {stack.join(", ")}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-[var(--color-rule)]" />

          {/* Education */}
          <div>
            <p className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-4">
              Education
            </p>
            <p className="font-mono text-[13px] text-[var(--color-text)]">B.S. Computer Science</p>
            <p className="font-mono text-[12px] text-[var(--color-muted)]">University Name, 2019</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}