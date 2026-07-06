import { getPostData } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostData("blogs", slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen justify-center p-6 md:p-16 pb-24">
      <div className="w-full max-w-[640px] space-y-6">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          ← Back to blogs
        </Link>

        <header className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <Separator />

        <article
          className="markdown-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </main>
  );
}
