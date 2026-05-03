import Head from 'next/head';
import { HEADLINE } from '../constants';

const Meta = () => {
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="400x400" href="/favicon.svg" />
      <link rel="icon" type="image/svg+xml" sizes="32x32" href="/favicon.svg" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={HEADLINE} />
    </Head>
  );
};

export default Meta;
