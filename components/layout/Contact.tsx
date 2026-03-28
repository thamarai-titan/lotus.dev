"use client";

import { motion } from "motion/react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    handle: "@thamarai-titan",
    href: "https://github.com/thamarai-titan",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "Thamarai Manalan",
    href: "https://linkedin.com/in/thamarai-manalan-919384279",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    handle: "@Thamarai_Titan",
    href: "https://x.com/Thamarai_Titan",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const contactItems = [
  {
    label: "Email",
    value: "tmanalan710@gmail.com",
    href: "mailto:tmanalan710@gmail.com",
    icon: <Mail size={15} />,
  },
  {
    label: "Phone",
    value: "+91 63858 98129",
    href: "tel:+916385898129",
    icon: <Phone size={15} />,
  },
];

export const Contact = () => {
  return (
    <section className="w-full py-16 font-mono px-2 md:px-20" id="contact">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--color-muted)" }}>
          Get in touch
        </p>
        <h2 className="text-2xl sm:text-3xl" style={{ color: "var(--color-text)" }}>
          Contact
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Left — message + direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-6 p-6 sm:p-7 rounded-sm"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border-weak)",
          }}
        >
          <div>
            <p
              className="text-base sm:text-lg leading-relaxed mb-2"
              style={{ color: "var(--color-text)" }}
            >
              Let's build something worth building.
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Open to internships, freelance projects, and conversations about
              production-grade engineering. If you have something real to work
              on — reach out.
            </p>
          </div>

          {/* Direct contact items */}
          <div className="flex flex-col gap-3">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="group flex items-center justify-between gap-4 px-4 py-3 rounded-sm transition-colors"
                style={{
                  background: "var(--color-elevated)",
                  border: "1px solid var(--color-border-weak)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--color-muted)" }}>{item.icon}</span>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--color-muted)" }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-4 p-6 sm:p-7 rounded-sm"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border-weak)",
          }}
        >
          <div className="mb-2">
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--color-muted)" }}>
              Find me on
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="group flex items-center justify-between gap-4 px-4 py-3 rounded-sm transition-colors"
                style={{
                  background: "var(--color-elevated)",
                  border: "1px solid var(--color-border-weak)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--color-muted)" }}>{social.icon}</span>
                  <div>
                    <p className="text-xs mb-0.5" style={{ color: "var(--color-muted)" }}>
                      {social.label}
                    </p>
                    <p className="text-sm" style={{ color: "var(--color-text)" }}>
                      {social.handle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--color-muted)" }}
                />
              </motion.a>
            ))}
          </div>

          {/* Availability status */}
          <div
            className="flex items-center gap-2.5 mt-auto pt-4"
            style={{ borderTop: "1px solid var(--color-border-weak)" }}
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: "var(--color-success)" }}
            />
            <p className="text-xs" style={{ color: "var(--color-muted)" }}>
              Available for internships & freelance work
            </p>
          </div>
        </motion.div>

      </div>

      {/* Footer line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-xs text-center mt-10"
        style={{ color: "var(--color-border-strong)" }}
      >
        Thamarai Manalan · Coimbatore, Tamil Nadu · {new Date().getFullYear()}
      </motion.p>

    </section>
  );
};