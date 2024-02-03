import Container from "../components/container";
import Posts from "../components/posts";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../interfaces/post";
import Avatar from '../components/avatar';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Software things I&apos;ve learned by J. Kuś</title>
        </Head>
        <Container>
          <Avatar />
          <Posts posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
