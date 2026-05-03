import PostPreview from './post-preview';
import type Post from '../../interfaces/post';

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid">
        {posts.map((post, idx) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            isLast={idx === posts.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Posts;
