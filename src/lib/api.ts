import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { PostLinkType } from '@/interfaces/post-link';
import PostType from '@/interfaces/post';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as PostType;
}

export function getAdjacentPosts(targetSlug: string, compareBy: keyof PostType, fields: Array<keyof PostType> = []) {
  const slugs = getPostSlugs();
  const sortedPosts = slugs
    .map(slug => getPostBySlug(slug, fields.concat(compareBy)))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1[compareBy] > post2[compareBy] ? -1 : 1));

  const targetIdx = sortedPosts.findIndex(post => post.slug === targetSlug);

  const prevPost: PostLinkType = targetIdx > 0
    ? { slug: sortedPosts[targetIdx - 1].slug, title: sortedPosts[targetIdx - 1].title }
    : null;

  const nextPost: PostLinkType = targetIdx < sortedPosts.length - 1
    ? { slug: sortedPosts[targetIdx + 1].slug, title: sortedPosts[targetIdx + 1].title }
    : null;

  return { prevPost, nextPost };
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
