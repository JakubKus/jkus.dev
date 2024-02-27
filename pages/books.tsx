import Layout from '../components/layout';
import Container from '../components/container';
import { SHORT_HEADLINE } from '../constants';
import Head from 'next/head';

export default function Books() {
  const title = `${SHORT_HEADLINE} | Books`;
  return (
    <Layout>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>Books:</h1>
        <h2>In progress:</h2>
        <ul>
          <li>&quot;Atlas Shrugged&quot; - Ayn Rand</li>
        </ul>
        <h2>To read:</h2>
        <ul>
          <li>&quot;How To Get Rich&quot; - Felix Dennis</li>
          <li>&quot;Will It Fly?&quot; - Pat Flynn</li>
          <li>&quot;Digital Minimalism&quot; - Cal Newport</li>
          <li>&quot;Deep Work&quot; - Cal Newport</li>
          <li>&quot;The One Thing&quot; - Gary W. Keller, Jay Papasan</li>
          <li>&quot;The Dip&quot; - Seth Godin</li>
          <li>&quot;Secrets of Power Negotiating&quot; - Roger Dawson</li>
          <li>&quot;Extreme Ownership&quot; - Jocko Willink, Leif Babin</li>
          <li>&quot;Domain Storytelling&quot; - Stefan Hofer, Henning Schwentner</li>
          <li>&quot;Domain-Driven Design&quot; - Eric Evans</li>
          <li>&quot;Steve Jobs&quot; - Walter Isaacson</li>
          <li>&quot;Total Recall&quot; - Arnold Schwarzenegger</li>
          <li>&quot;E-Myth Revisited&quot; - Gerber Michael E.</li>
        </ul>
        <h2>Read:</h2>
        <ul>
          <li>&quot;4-Hour Workweek&quot; - Timothy Ferris: 9/10</li>
          <li>&quot;Async Remote&quot; - Robert Pankowecki, Andrzej Krzywda: 8/10</li>
          <li>&quot;Node.js Design Patterns&quot; - Mario Casciaro, Luciano Mammino: 10/10</li>
          <li>&quot;Elon Musk&quot; - Ashlee Vance: 9/10</li>
          <li>&quot;Getting Past No&quot; - William Ury: 9/10</li>
          <li>&quot;How to Stop Worrying and Start Living&quot; - Dale Carnegie: 7/10</li>
          <li>&quot;Zawód: Programista&quot; - Maciej Aniserowicz: 9/10</li>
        </ul>
      </Container>
    </Layout>
  );
}
