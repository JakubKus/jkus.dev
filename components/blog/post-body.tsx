import markdownStyles from './markdown-styles.module.css';
import AvatarWithBio from './avatar-with-bio';
import type { PostLinkType } from '../../interfaces/post-link';
import Link from 'next/link';

type Props = {
  content: string;
  prevPost: PostLinkType;
  nextPost: PostLinkType;
};

const PostBody = ({ content, prevPost, nextPost }: Props) => {
  return (
    <div className="max-w-content mx-auto">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
      <hr className="border-accent-1-light mb-6" />
      <AvatarWithBio />
      <ul className="flex justify-between gap-x-3 mt-12">
        <PostLink post={prevPost} prefix="←" />
        <PostLink post={nextPost} suffix="→" alignRight />
      </ul>
    </div>
  );
};

export default PostBody;
