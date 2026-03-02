import { Nav }         from "./Nav";
import { Footer }      from "./Footer";
import { PageWrapper } from "./PageWrapper";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <Nav />
      <main className="flex-1 pt-14">
        <PageWrapper>
          {children}
        </PageWrapper>
      </main>
      <Footer />
    </div>
  );
}