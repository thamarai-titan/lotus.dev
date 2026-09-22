import { Header } from "@/components/view/(landing)/Header";
import { Projects } from "@/components/view/(landing)/Projects";
import { Skills } from "@/components/view/(landing)/Skills";
import { Links } from "@/components/view/(landing)/Links";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ilotus.dev/#person",
      name: "Thamarai Manalan",
      jobTitle: "Software Engineer",
      url: "https://www.ilotus.dev",
      image: "https://www.ilotus.dev/image.png",
      sameAs: [
        "https://github.com/thamarai-titan",
        "https://www.linkedin.com/in/thamarai-manalan-919384279/",
        "https://x.com/Thamarai_Titan",
      ],
      description:
        "Software Engineer passionate about building modern web applications and sharing engineering insights.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ilotus.dev/#website",
      url: "https://www.ilotus.dev",
      name: "Thamarai Manalan | lotus.dev",
      publisher: {
        "@id": "https://www.ilotus.dev/#person",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen justify-center p-6 md:p-16">
        <div className="w-full max-w-[640px] space-y-8">
          <Header />

          <div className="flex flex-col gap-6">
            <Projects />
            <Skills />
          </div>
          <Links />
        </div>
      </main>
    </>
  );
}

