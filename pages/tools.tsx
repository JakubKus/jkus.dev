import Layout from '../components/layout';
import Container from '../components/container';
import { SHORT_HEADLINE } from '../constants';
import Head from 'next/head';

export default function Tools() {
  const title = `${SHORT_HEADLINE} | Tools`;

  return (
    <Layout>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>Tools</h1>
        <ul>
          <li>Github Copilot ❤️</li>
          <li>Webstorm</li>
          <li>Database Tools for Webstorm</li>
          <li>WSL2</li>
          <li>WinSCP</li>
          <li>Postman</li>
          <li>DeepL</li>
          <li>aText</li>
          <li>Notion</li>
          <li>PowerToys</li>
          <li>Dark Reader</li>
          <li>Tampermonkey</li>
          <li>Make</li>
        </ul>
      </Container>
    </Layout>
  );
}
