import { Header } from "@/components/view/(landing)/Header";
import { Projects } from "@/components/view/(landing)/Projects";
import { Links } from "@/components/view/(landing)/Links";

export default function Page() {
  return (
    <main className="flex min-h-screen justify-center p-6 md:p-16">
      <div className="w-full max-w-[640px] space-y-8">
        <Header />

        <div className="flex flex-col gap-6">
          <Projects />
        </div>
        <Links />
      </div>
    </main>
  );
}
