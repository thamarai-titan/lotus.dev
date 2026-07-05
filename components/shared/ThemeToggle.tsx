"use client";

import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Check local storage or preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex size-9 items-center justify-center rounded-md border border-border/30 hover:border-border/60 bg-muted/40 hover:bg-muted/80 transition-all duration-300 cursor-pointer select-none group focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      aria-label="Toggle theme"
    >
      <IconSun className="h-[1.1rem] w-[1.1rem] text-foreground transition-all duration-300 ease-out rotate-0 scale-100 dark:-rotate-90 dark:scale-0 group-hover:text-amber-500" />
      <IconMoon className="absolute h-[1.1rem] w-[1.1rem] text-foreground transition-all duration-300 ease-out rotate-90 scale-0 dark:rotate-0 dark:scale-100 group-hover:text-blue-400" />
    </button>
  );
}
