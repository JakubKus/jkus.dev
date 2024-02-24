import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import { HEADLINE } from '../constants';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{HEADLINE}</title>
        </Head>
        <Container>siema</Container>
      </Layout>
    </>
  );
}

// export const getStaticProps = async () => {
//   return { pages?
//   };
// };
