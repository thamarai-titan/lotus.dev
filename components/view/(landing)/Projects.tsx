import { Separator } from "@/components/ui/separator";
import { IconArrowUpRight } from "@tabler/icons-react";

const PROJECT_DATA = [
  {
    id: 1,
    name: "chatapp",
    description:
      "A real-time messaging suite with instant chat rooms, live status, and responsive communication.",
    url: "https://chat.ilotus.dev",
  },
  {
    id: 2,
    name: "devbin",
    description:
      "A curated discovery site for the most trending and essential developer tools in the ecosystem.",
    url: "https://devbin.ilotus.dev",
  },
  {
    id: 3,
    name: "daivv.hr",
    description:
      "Modern HR management and workflow automation platform designed for scaling organizations.",
    url: "https://daivv.com",
  },
  {
    id: 4,
    name: "Hue",
    description: "Premium palettes, zero configuration.",
    url: "https://hue.ilotus.dev",
  },
  {
    id: 5,
    name: "with-out-google",
    description:
      "Take back control of your data without sacrificing productivity. Discover the best independent alternatives.",
    url: "https://nogoogle.ilotus.dev",
  },
  {
    id: 6,
    name: "ReadmeForge",
    description:
      "AI-driven repository intelligence that inspects your GitHub file tree and generates structured, badge-rich READMEs in seconds.",
    url: "https://readme.ilotus.dev",
  },
];

export function Projects() {
  return (
    <section className="flex w-full max-w-[640px] flex-col gap-2 font-sans antialiased">
      <h1 className="text-base text-muted-foreground font-medium">Projects</h1>
      <Separator />
      <div className="flex flex-col gap-1 pt-1">
        {PROJECT_DATA.map((project, i) => (
          <a
            key={i}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 p-3 -mx-3 rounded-lg border border-transparent hover:border-border/30 hover:bg-muted/30 transition-all duration-200 cursor-pointer"
          >
            <p className="text-base text-foreground/80 leading-relaxed font-normal text-justify">
              <span className="font-medium text-foreground underline decoration-muted-foreground/35 underline-offset-4 group-hover:text-foreground group-hover:decoration-foreground transition-all">
                {project.name}
              </span>
              {" - "}
              {project.description}
            </p>
            <IconArrowUpRight className="size-4 shrink-0 text-chart-3 opacity-0 group-hover:opacity-100 transition-all duration-200 mt-1" />
          </a>
        ))}
      </div>
    </section>
  );
}
