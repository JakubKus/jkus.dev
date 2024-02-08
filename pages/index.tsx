import Container from '../components/container';
import Posts from '../components/posts';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../interfaces/post';
import AvatarWithBio from '../components/avatarWithBio';
import { HEADLINE } from '../lib/constants';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{HEADLINE}</title>
        </Head>
        <Container>
          <AvatarWithBio />
          <Posts posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
};
