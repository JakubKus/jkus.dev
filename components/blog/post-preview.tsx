import DateFormatter from '../date-formatter';
import Link from 'next/link';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <div>
      <h3 className="text-2xl mb-1 leading-snug font-extrabold">
        <Link as={`/${slug}`} href="/[slug]">
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-base leading-normal">{excerpt}</p>
    </div>
  );
};

export default PostPreview;
