import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAdjacentPosts(targetSlug: string, compareBy: string, fields: string[] = []) {
  const slugs = getPostSlugs();
  const sortedPosts = slugs
    .map((slug) => getPostBySlug(slug, fields.concat(compareBy)))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1[compareBy] > post2[compareBy] ? -1 : 1));

  const targetIdx = sortedPosts.findIndex(post => post.slug === targetSlug);

  const prevPost = targetIdx > 0 ? sortedPosts[targetIdx - 1] : null;
  const nextPost = targetIdx < sortedPosts.length - 1 ? sortedPosts[targetIdx + 1] : null;

  return { prevPost, nextPost };
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
