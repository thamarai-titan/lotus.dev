"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";

export const GithubGraph = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full flex flex-col px-2 md:px-20 pb-10">
      <h1 className="text-sm md:text-xl font-mono py-4">GitHub Contributions</h1>

      {/* Scrollable wrapper on mobile */}
      <div className="border border-(--color-border-weak) rounded p-4 overflow-x-auto">
        <div className="min-w-150">
          <GitHubCalendar
            username="thamarai-titan"
            colorScheme="dark"
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
};