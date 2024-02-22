import PostPreview from './post-preview';
import type Post from '../../interfaces/post';

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid gap-y-8">
        {posts.map(post => (
          <PostPreview key={post.slug} title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
