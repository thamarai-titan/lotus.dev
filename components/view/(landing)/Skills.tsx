import { Separator } from "@/components/ui/separator";

const SKILLS = [
  "Next.js",
  "NestJS",
  "Node.js",
  "TanStack Query",
  "Zod",
  "Zustand",
  "PostgreSQL",
  "Express",
];

export function Skills() {
  return (
    <section className="flex w-full max-w-[640px] flex-col gap-2 font-sans antialiased">
      <h1 className="text-base text-muted-foreground font-medium">Skills</h1>
      <Separator />
      <div className="flex flex-wrap gap-2 pt-1">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-lg border border-border/60 bg-muted/25 px-3 py-1.5 text-sm font-medium text-foreground/85 transition-all duration-150 hover:border-border hover:bg-muted/50 hover:text-foreground cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
