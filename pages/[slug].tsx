import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../components/container';
import PostBody from '../components/post-body';
import Header from '../components/header';
import PostHeader from '../components/post-header';
import Layout from '../components/layout';
import { getAdjacentPosts, getAllPosts, getPostBySlug } from '../lib/api';
import PostTitle from '../components/post-title';
import Head from 'next/head';
import markdownToHtml from '../lib/markdownToHtml';
import type PostType from '../interfaces/post';
import type { PostLinkType } from '../interfaces/post-link';
import { HEADLINE } from '../lib/constants';

type Props = {
  post: PostType;
  prevPost: PostLinkType;
  nextPost: PostLinkType;
};

export default function Post({ post, prevPost, nextPost }: Props) {
  const router = useRouter();
  const title = `${post.title} | ${HEADLINE}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-16">
              <Head>
                <title>{title}</title>
              </Head>
              <PostHeader title={post.title} date={post.date} />
              <PostBody content={post.content} prevPost={prevPost} nextPost={nextPost} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  const { prevPost, nextPost } = getAdjacentPosts(params.slug, 'date', ['slug', 'title']);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      prevPost,
      nextPost,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
