import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

interface BlogHeaderProps {
  title?: string;
  description?: string;
}

export default function BlogHeader({
  title = "Blogs",
  description = "The things i really learned and excecuted so i write it as blogs here",
}: BlogHeaderProps) {
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
              {title}
            </h1>
            <p className="text-base text-muted-foreground font-medium">
              Thamarai Manalan
            </p>
          </div>
        </div>
        <ThemeToggle />
      </div>
      <Separator />
      <p className="text-base text-foreground/85 leading-relaxed font-normal">
        {description}
      </p>
    </header>
  );
}

