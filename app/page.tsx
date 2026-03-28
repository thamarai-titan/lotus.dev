import { Nav } from "@/components/layout/Nav";
import { GithubGraph } from "@/components/sections/GithubGraph";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col items-center justify-start gap-12 px-8">
        

      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center px-0">
        <div className="absolute left-0 top-0 h-full w-0 md:w-12 border-r-2 border-l-2 border-(--color-border-strong)/10 bg-pattern"></div>
         <div className="absolute right-0 top-0 h-full w-0 md:w-12 border-l-2 border-r-2 border-(--color-border-strong)/10 bg-pattern"></div>
        <Nav/>
        <div
        className="w-screen h-px"
        style={{ background: "var(--color-border-strong)", opacity: 0.2 }}
      />
        <Hero/>
        <div
        className="w-screen h-px"
        style={{ background: "var(--color-border-strong)", opacity: 0.2 }}
      />
      <GithubGraph/>
      </div>
    </main>
  );
}
