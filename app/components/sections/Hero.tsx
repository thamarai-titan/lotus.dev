"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, useGSAP } from "../../lib/gsap";
import type { Variants } from "framer-motion";

// Word-by-word clip reveal
const words = ["I build", "systems", "that", "actually", "work."];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const wordReveal: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", y: 12 },
  show: {
    clipPath: "inset(0% 0% 0% 0%)",
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function Hero() {
  const arrowRef = useRef<HTMLSpanElement>(null);

  // GSAP looping arrow bounce
  useGSAP(() => {
    if (!arrowRef.current) return;
    gsap.to(arrowRef.current, {
      y: 6,
      repeat: -1,
      yoyo: true,
      duration: 0.9,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-[var(--max-site)] mx-auto"
      aria-label="Introduction"
    >
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase mb-10"
      >
        #001 — Introduction
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="overflow-hidden"
        aria-label="I build systems that actually work."
      >
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordReveal}
              className={
                "font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-tight text-[var(--color-text)]" +
                (word === "actually" || word === "work." ? " italic" : "")
              }
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-base text-[var(--color-muted)] mt-8 max-w-[520px]"
      >
        Senior software engineer. I care about what ships — and what doesn't.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex items-center gap-8 mt-14"
      >
        <a
          href="/work"
          className="group flex items-center gap-3 font-mono text-[13px] text-[var(--color-text)] border border-[var(--color-rule)] px-5 py-3 transition-all duration-200 hover:border-[var(--color-accent)]"
        >
          View work
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>

        <a
          href="/contact"
          className="group relative font-mono text-[13px] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-150"
        >
          Get in touch
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3"
      >
        <span
          ref={arrowRef}
          className="font-mono text-[11px] text-[var(--color-faint)] tracking-widest uppercase inline-block"
        >
          ↓
        </span>
        <span className="font-mono text-[11px] text-[var(--color-faint)] tracking-widest uppercase">
          Scroll to explore
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[var(--color-faint)] tracking-[0.22em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        aria-hidden="true"
      >
        Software Engineer · Systems Thinker · Open Source
      </motion.p>
    </section>
  );
}