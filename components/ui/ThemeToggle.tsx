"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="p-5" />; // Placeholder

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg border border-(--color-border-strong) hover:border-(--color-accent) transition-all"
    >
      {theme === "dark" ? <Sun/> : <Moon/>}
    </button>
  );
}