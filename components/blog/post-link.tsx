import Link from 'next/link';
import type { PostLinkType } from '../../interfaces/post-link';

type PostLinkProps = {
  post: PostLinkType;
  prefix?: string;
  suffix?: string;
  alignRight?: boolean;
};

const PostLink = ({ post, prefix, suffix, alignRight }: PostLinkProps) => {
  if (!post) return null;
  const alignClass = alignRight ? 'ml-auto text-right' : '';

  return (
    <Link href="/blog/[slug]" as={`/blog/${post.slug}`} className={`flex items-center gap-x-2 ${alignClass}`}>
      {prefix && <span>{prefix}</span>}
      <span>{post.title}</span>
      {suffix && <span>{suffix}</span>}
    </Link>
  );
};

export default PostLink;
