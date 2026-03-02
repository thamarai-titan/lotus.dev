import Link from "next/link";

const links = [
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "Twitter", href: "https://twitter.com/yourhandle" },
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--color-rule)] mt-[var(--space-xxl)]">
            <div className="max-w-[var(--max-site)] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                {/* Left — copyright */}
                <p className="font-mono text-[11px] text-[var(--color-faint)] tracking-wide">
                    © {year} Your Name. All rights reserved.
                </p>

                {/* Center — tagline */}
                <p className="font-mono text-[11px] text-[var(--color-faint)] tracking-wide hidden md:block">
                    Built with Next.js + Framer Motion
                </p>

                {/* Right — social links */}
                <nav aria-label="Social links">
                    <ul className="flex items-center gap-6" role="list">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative font-mono text-[11px] text-[var(--color-faint)] hover:text-[var(--color-text)] transition-colors duration-150 tracking-wide uppercase"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </footer>
    );
}