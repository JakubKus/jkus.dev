import Head from 'next/head';
import Container from '@/app/_components/container';
import Posts from '@/app/_components/posts';
import Layout from '@/app/_components/layout';
import { getAllPosts } from '@/lib/api';
import AvatarWithBio from '@/app/_components/avatarWithBio';
import { HEADLINE } from '@/lib/constants';

export default function Index() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return (
    <Layout>
      <Head>
        <title>{HEADLINE}</title>
      </Head>
      <Container>
        <AvatarWithBio />
        <Posts posts={allPosts} />
      </Container>
    </Layout>
  );
}
