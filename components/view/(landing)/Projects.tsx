import { Separator } from "@/components/ui/separator";
import { IconArrowUpRight } from "@tabler/icons-react";

const PROJECT_DATA = [
  {
    id: 1,
    name: "devbin",
    description:
      "A curated discovery site for the most trending and essential developer tools in the ecosystem.",
    url: "#",
  },
  {
    id: 2,
    name: "openchat",
    description:
      "A real-time messaging suite featuring AI-powered summaries to catch you up on unread group activity instantly.",
    url: "#",
  },
  {
    id: 3,
    name: "easyride",
    description:
      "A curated discovery site for the most trending and essential developer tools in the ecosystem.",
    url: "#",
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
