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
          <li>WSL + Fish shell + Bob the fish theme</li>
          <li>Notion</li>
          <li>aText</li>
          <li>PowerToys</li>
          <li>Bitwarden</li>
          <li>Dark Reader</li>
          <li>Tampermonkey</li>
          <li>(I want to add Make and Airtable to this list in the future)</li>
        </ul>
      </Container>
    </Layout>
  );
}
