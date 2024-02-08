import Head from 'next/head';
import { HEADLINE } from '../lib/constants';

const Meta = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="400x400" href="/favicon/jakub.jpg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={HEADLINE} />
    </Head>
  );
};

export default Meta;
