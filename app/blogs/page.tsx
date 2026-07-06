import Link from "next/link";
import BlogHeader from "@/components/view/(blogs)/BlogHeader";
import { getSortedPostsData } from "@/lib/content";
import { Separator } from "@/components/ui/separator";

export default function BlogsPage() {
  const posts = getSortedPostsData("blogs");

  return (
    <main className="flex min-h-screen justify-center p-6 md:p-16 pb-24">
      <div className="w-full max-w-[640px] space-y-8">
        <BlogHeader
          title="Blogs"
          description="Deep dives, technical concepts, and detailed posts about my engineering journey."
        />

        <section className="flex flex-col gap-2 font-sans antialiased">
          <h2 className="text-base text-muted-foreground font-medium">All Posts</h2>
          <Separator />

          <div className="flex flex-col gap-1 pt-1">
            {posts.length === 0 ? (
              <p className="text-muted-foreground text-sm py-4">No blogs posted yet.</p>
            ) : (
              posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group flex items-start justify-between gap-4 p-3 -mx-3 rounded-lg border border-transparent hover:border-border/30 hover:bg-muted/30 transition-all duration-200 cursor-pointer text-left"
                >
                  <div className="flex flex-col gap-1 text-left w-full">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold text-foreground underline decoration-muted-foreground/35 underline-offset-4 group-hover:text-foreground group-hover:decoration-foreground transition-all text-base">
                        {post.title}
                      </span>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {post.date}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

