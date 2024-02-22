import Container from '../../components/container';
import Posts from '../../components/blog/posts';
import Layout from '../../components/layout';
import { getAllPosts } from '../../lib/api';
import Head from 'next/head';
import Post from '../../interfaces/post';
import { SHORT_HEADLINE } from '../../constants';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const title = `${SHORT_HEADLINE} | Blog`;

  return (
    <>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
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
