import { Separator } from "@/components/ui/separator";
import { IconArrowUpRight } from "@tabler/icons-react";

const LINK_DATA = [
  {
    name: "X",
    url: "https://x.com/Thamarai_Titan",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thamarai-manalan-919384279/",
  },
  {
    name: "GitHub",
    url: "https://github.com/thamarai-titan",
  },
  {
    name: "Mail",
    url: "mailto:tmanalan710@gmail.com",
  },
];

export function Links() {
  return (
    <section className="flex w-full flex-col gap-2 font-sans antialiased">
      <h1 className="text-base text-muted-foreground font-medium">Links</h1>
      <Separator />
      <div className="flex flex-col gap-2.5 pt-1">
        {LINK_DATA.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-base text-foreground font-normal hover:text-muted-foreground transition-colors w-fit cursor-pointer"
          >
            <span className="underline decoration-muted-foreground/35 underline-offset-4 group-hover:text-foreground group-hover:decoration-foreground transition-all">
              {link.name}
            </span>
            <IconArrowUpRight className="size-4 shrink-0 text-chart-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </a>
        ))}
      </div>
    </section>
  );
}
