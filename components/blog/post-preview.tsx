import DateFormatter from '../date-formatter';
import Link from 'next/link';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  isLast: boolean;
};

const PostPreview = ({ title, date, excerpt, slug, isLast }: Props) => {
  const postBorder = !isLast && { borderBottomWidth: '1px' };

  return (
    <div
      className="py-5 border-gray-200 dark:border-gray-800 flex flex-col gap-1.5 cursor-pointer group"
      style={{ ...postBorder }}
    >
      <DateFormatter dateString={date} />
      <h2 className="text-xl/8 font-semibold">
        <Link as={`/blog/${slug}`} href="/blog/[slug]">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-accent-2 leading-relaxed">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
