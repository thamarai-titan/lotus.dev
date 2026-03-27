import { Nav } from "@/components/layout/Nav";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start gap-12 p-8">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6">
        <Nav/>
      </div>
    </main>
  );
}
