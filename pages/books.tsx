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
          <li><b><i>“Extreme Ownership”</i></b> - Jocko Willink,  Leif Babin</li>
          <li><b><i>“Will It Fly?”</i></b> - Pat Flynn</li>
        </ul>
        <h2>To read:</h2>
        <ul>
          <li><b><i>“Nonviolent Communication”</i></b> - Marshall B. Rosenberg</li>
          <li><b><i>“The Dip”</i></b> - Seth Godin</li>
          <li><b><i>“Why We Sleep”</i></b> - Matthew Walker</li>
          <li><b><i>“Głaskologia”</i></b> - Miłosz Brzeziński</li>
          <li><b><i>“Secrets of Power Negotiating”</i></b> - Roger Dawson</li>
          <li><b><i>“Domain Storytelling”</i></b> - Stefan Hofer, Henning Schwentner</li>
          <li><b><i>“Domain-Driven Design”</i></b> - Eric Evans</li>
          <li><b><i>“Steve Jobs”</i></b> - Walter Isaacson</li>
          <li><b><i>“Total Recall”</i></b> - Arnold Schwarzenegger</li>
          <li><b><i>“E-Myth Revisited”</i></b> - Gerber Michael E.</li>
        </ul>
        <h2>Completed:</h2>
        <h3>2025:</h3>
        <ul>
          <li><b><i>“The 48 Laws of Power”</i></b> - Robert Greene: 8/10</li>
          <li><b><i>“The One Thing”</i></b> - Gary W. Keller, Jay Papasan: 9/10</li>
          <li><b><i>“Nexus”</i></b> - Yuval Noah Harari: 7/10</li>
        </ul>
        <h3>2024:</h3>
        <ul>
          <li><b><i>“The compassionate mind approach to building self-confidence”</i></b> - Mary Welford: 8/10</li>
          <li><b><i>“Deep Work”</i></b> - Cal Newport: 9/10</li>
          <li><b><i>“How To Get Rich”</i></b> - Felix Dennis: 9/10</li>
          <li><b><i>“Clean Architecture”</i></b> - Robert C. Martin: 9/10</li>
          <li><b><i>“Atlas Shrugged”</i></b> - Ayn Rand: 9/10</li>
          <li><b><i>“4-Hour Workweek”</i></b> - Timothy Ferris: 9/10</li>
        </ul>
        <h3>Earlier:</h3>
        <ul>
          <li><b><i>“Async Remote”</i></b> - Robert Pankowecki, Andrzej Krzywda: 8/10</li>
          <li><b><i>“Node.js Design Patterns”</i></b> - Mario Casciaro, Luciano Mammino: 10/10</li>
          <li><b><i>“Elon Musk”</i></b> - Ashlee Vance: 9/10</li>
          <li><b><i>“Getting Past No”</i></b> - William Ury: 9/10</li>
          <li><b><i>“How to Stop Worrying and Start Living”</i></b> - Dale Carnegie: 7/10</li>
          <li><b><i>“Zawód: Programista”</i></b> - Maciej Aniserowicz: 9/10</li>
        </ul>
      </Container>
    </Layout>
  );
}
