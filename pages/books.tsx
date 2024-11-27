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
          <li><i>“The compassionate mind approach to building self-confidence”</i> - Mary Welford</li>
        </ul>
        <h2>To read:</h2>
        <ul>
          <li><i>“The One Thing”</i> - Gary W. Keller, Jay Papasan</li>
          <li><i>“The 48 Laws of Power”</i> - Robert Greene</li>
          <li><i>“Will It Fly?”</i> - Pat Flynn</li>
          <li><i>“Nonviolent Communication”</i> - Marshall B. Rosenberg</li>
          <li><i>“Extreme Ownership”</i> - Jocko Willink,  Leif Babin</li>
          <li><i>“Digital Minimalism”</i> - Cal Newport</li>
          <li><i>“The Dip”</i> - Seth Godin</li>
          <li><i>“Secrets of Power Negotiating”</i> - Roger Dawson</li>
          <li><i>“Domain Storytelling”</i> - Stefan Hofer, Henning Schwentner</li>
          <li><i>“Domain-Driven Design”</i> - Eric Evans</li>
          <li><i>“Steve Jobs”</i> - Walter Isaacson</li>
          <li><i>“Total Recall”</i> - Arnold Schwarzenegger</li>
          <li><i>“E-Myth Revisited”</i> - Gerber Michael E.</li>
        </ul>
        <h2>Read:</h2>
        <ul>
          <li><i>“Deep Work”</i> - Cal Newport: /10</li>
          <li><i>“How To Get Rich”</i> - Felix Dennis: 9/10</li>
          <li><i>“Clean Architecture”</i> - Robert C. Martin: 9/10</li>
          <li><i>“Atlas Shrugged”</i> - Ayn Rand: 9/10</li>
          <li><i>“4-Hour Workweek”</i> - Timothy Ferris: 9/10</li>
          <li><i>“Async Remote”</i> - Robert Pankowecki, Andrzej Krzywda: 8/10</li>
          <li><i>“Node.js Design Patterns”</i> - Mario Casciaro, Luciano Mammino: 10/10</li>
          <li><i>“Elon Musk”</i> - Ashlee Vance: 9/10</li>
          <li><i>“Getting Past No”</i> - William Ury: 9/10</li>
          <li><i>“How to Stop Worrying and Start Living”</i> - Dale Carnegie: 7/10</li>
          <li><i>“Zawód: Programista”</i> - Maciej Aniserowicz: 9/10</li>
        </ul>
      </Container>
    </Layout>
  );
}
