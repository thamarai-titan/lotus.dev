import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Header() {
  return (
    <header className="flex w-full max-w-[640px] flex-col gap-4 text-base font-sans antialiased">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Avatar className="size-12">
            <AvatarImage src="/image.png" alt="Thamarai Manalan" />
            <AvatarBadge className="bg-green-400 dark:bg-green-600 border-background" />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold tracking-tight text-foreground leading-snug">
              Thamarai Manalan
            </h1>
            <p className="text-base text-muted-foreground font-medium">
              Software Engineer - Intern
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>
      <Separator />
      <p className="text-base text-foreground/85 leading-relaxed font-normal">
        Tryin to build a better me in the world of software engineering.
      </p>
    </header>
  );
}
