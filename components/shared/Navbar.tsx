"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Blogs", href: "/blogs" },
    { name: "Logs", href: "/logs" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="inline-flex items-center justify-center rounded-lg bg-muted/80 p-[3px] shadow-lg backdrop-blur-md border border-border/30">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative inline-flex items-center justify-center px-4 py-1 text-sm font-medium rounded-md transition-all duration-200 cursor-pointer select-none border hover:underline",
                isActive
                  ? "bg-background text-foreground border-border/80 shadow-sm dark:bg-zinc-800/80 dark:border-zinc-700/80 dark:text-zinc-100"
                  : "text-muted-foreground hover:text-foreground border-transparent",
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
