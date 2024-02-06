import markdownStyles from './markdown-styles.module.css';
import Avatar from './avatar';
import type { PostLinkType } from '../interfaces/post-link';
import Link from 'next/link';

type Props = {
  content: string;
  prevPost: PostLinkType;
  nextPost: PostLinkType;
};

const PostBody = ({ content, prevPost, nextPost }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <hr className="border-black mb-6" />
      <div className="block mb-6">
        <Avatar />
      </div>
      <ul className="flex justify-between gap-x-3">
        <PostLink post={prevPost} prefix="←" />
        <PostLink post={nextPost} suffix="→" alignRight />
      </ul>
    </div>
  );
};

type PostLinkProps = {
  post: PostLinkType;
  prefix?: string;
  suffix?: string;
  alignRight?: boolean;
};

const PostLink = ({ post, prefix, suffix, alignRight }: PostLinkProps) => {
  if (!post) return null;
  const alignClass = alignRight ? "ml-auto text-right" : "";

  return (
    <Link href="/blog/[slug]" as={`/blog/${post.slug}`} className={`flex items-center gap-x-2 ${alignClass}`}>
      {prefix && <span>{prefix}</span>}
      <span>{post.title}</span>
      {suffix && <span>{suffix}</span>}
    </Link>
  );
}

export default PostBody;
