import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import { SHORT_HEADLINE } from '../constants';

export default function AboutMe() {
  const title = `${SHORT_HEADLINE} | About me`;

  return (
    <Layout>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>About me</h1>
        <p>
          I&apos;m a programming passionate. Focusing now on fullstack approach, using react and node. Developing useful
          projects was always a thing that kept me motivated in programming. I&apos;m also interested in web3 a bit.
        </p>
        <p>
          In my spare time I help frontend students in project called <a href="https://zerotojunior.dev">Zero To Junior
        </a> as a mentor.
        </p>
        <p>I also read some self-development books.</p>
        <br />
        <h2>My top 5 Gallup talents:</h2>
        <ul>
          <li>
            <b>#1 Individualization</b> - each person is unique for me. After some time I know how to speak and work
            with each type of personality
          </li>
          <li>
            <b>#2 Focus</b> - I can take direction, then make plan and prioritize all things that need to be done to get
            there
          </li>
          <li><b>#3 Analytical</b> - I like to understand the situation in 100%, what and why caused it</li>
          <li><b>#4 Harmony</b> - I always try to look for consensus and don&apos;t waste time on arguing</li>
          <li><b>#5 Restorative</b> - Good at seeking of root of the problem and solving it</li>
        </ul>
      </Container>
    </Layout>
  );
}
