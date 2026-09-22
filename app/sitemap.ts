import type { MetadataRoute } from "next";
import { getSortedPostsData } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.ilotus.dev";

  const blogs = getSortedPostsData("blogs");
  const logs = getSortedPostsData("logs");

  const blogUrls = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${encodeURIComponent(post.slug)}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const logUrls = logs.map((post) => ({
    url: `${baseUrl}/logs/${encodeURIComponent(post.slug)}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
    ...logUrls,
  ];
}
