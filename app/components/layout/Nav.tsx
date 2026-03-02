"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const navItems = [
  { label: "Work",    href: "/work"    },
  { label: "About",   href: "/about"   },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname   = usePathname();
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0,   opacity: 1  }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-rule)]"
            : "bg-transparent"
        )}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-[var(--max-site)] mx-auto px-6 md:px-12 h-14 flex items-center justify-between"
        >
          {/* Logo */}
          <Link href="/" className="group">
            <span className="font-mono text-sm font-medium tracking-tight text-[var(--color-text)] transition-colors duration-150 group-hover:text-[var(--color-accent)]">
              YN.
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative font-mono text-[13px] text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-150 py-1 group"
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-[1.5px] bg-[var(--color-accent)] transition-all duration-200 ease-out",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Status + mobile toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 border border-[var(--color-rule)] px-3 py-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-[pulseDot_1.8s_ease-in-out_infinite]"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] text-[var(--color-muted)] tracking-widest uppercase">
                Available
              </span>
            </div>

            <button
              className="md:hidden flex flex-col gap-[5px] p-1"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span className={cn(
                "block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center",
                mobileOpen && "rotate-45 translate-y-[6.5px]"
              )} />
              <span className={cn(
                "block w-5 h-[1.5px] bg-current transition-all duration-300",
                mobileOpen && "opacity-0"
              )} />
              <span className={cn(
                "block w-5 h-[1.5px] bg-current transition-all duration-300 origin-center",
                mobileOpen && "-rotate-45 -translate-y-[6.5px]"
              )} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{   opacity: 0, y: -8  }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-x-0 top-14 z-40 bg-[var(--color-bg)] border-b border-[var(--color-rule)] md:hidden"
          >
            <ul className="flex flex-col px-6 py-2" role="list">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0  }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between py-4 border-b border-[var(--color-rule)] font-mono text-sm transition-colors duration-150",
                      pathname === item.href
                        ? "text-[var(--color-text)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                    )}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}