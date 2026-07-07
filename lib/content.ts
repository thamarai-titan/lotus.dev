import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  tags?: string[];
  contentHtml: string;
  readingTime?: string;
}

export function getSortedPostsData(contentType: "blogs" | "logs"): PostData[] {
  const dirPath = path.join(contentDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const fileNames = fs.readdirSync(dirPath);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "").trim();
      const fullPath = path.join(dirPath, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      // Calculate reading time
      const wordsCount = content.split(/\s+/g).length;
      const readingTime = `${Math.max(1, Math.ceil(wordsCount / 200))} min read`;

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        description: data.description || "",
        category: data.category || "",
        tags: data.tags || [],
        contentHtml: "",
        readingTime,
      };
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(
  contentType: "blogs" | "logs",
  slug: string,
): Promise<PostData | null> {
  const decodedSlug = decodeURIComponent(slug).trim();
  const dirPath = path.join(contentDirectory, contentType);
  if (!fs.existsSync(dirPath)) {
    return null;
  }

  const fileNames = fs.readdirSync(dirPath);
  const matchedFile = fileNames.find((fileName) => {
    const fileSlug = fileName.replace(/\.mdx?$/, "").trim();
    return fileSlug.toLowerCase() === decodedSlug.toLowerCase();
  });

  if (!matchedFile) {
    return null;
  }

  const fullPath = path.join(dirPath, matchedFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const contentHtml = await marked.parse(content);
  const wordsCount = content.split(/\s+/g).length;
  const readingTime = `${Math.max(1, Math.ceil(wordsCount / 200))} min read`;

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    description: data.description || "",
    category: data.category || "",
    tags: data.tags || [],
    contentHtml,
    readingTime,
  };
}
