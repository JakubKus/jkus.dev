import { notFound } from "next/navigation";
import { getAdjacentPosts, getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import { HEADLINE } from '@/lib/constants';
import Layout from '@/app/_components/layout';
import Container from '@/app/_components/container';
import Header from '@/app/_components/header';
import Head from 'next/head';
import PostHeader from '@/app/_components/post-header';
import PostBody from '@/app/_components/post-body';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${HEADLINE}`;
  const content = await markdownToHtml(post.content || "");
  const { prevPost, nextPost } = getAdjacentPosts(params.slug, 'date', ['slug', 'title']);

  return (
    <Layout>
      <Container>
        <Header />
        <article className="mb-16">
          <Head>
            <title>{title}</title>
          </Head>
          <PostHeader title={post.title} date={post.date} />
          <PostBody content={content} prevPost={prevPost} nextPost={nextPost} />
        </article>
      </Container>
    </Layout>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}