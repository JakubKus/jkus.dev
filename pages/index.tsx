import Container from '../components/container';
import Layout from '../components/layout';
import Head from 'next/head';
import { HEADLINE } from '../constants';

export default function Index() {
  return (
    <Layout>
      <Container>
        <Head>
          <title>{HEADLINE}</title>
        </Head>
        <h1>About me</h1>
        <p>
          I&apos;m a JavaScript <b>Fullstack Developer</b>, using React and Node. I&apos;m passionate about programming
          and I contantly try to improve my skills. I do this by:
        </p>
        <ul>
          <li>
            Being a <b>frontend mentor</b> in{' '}
            <a href="https://zerotojunior.dev" rel="noopener noreferrer">
              Zero To Junior
            </a>{' '}
            where I help frontend students get their first job as a junior developer
          </li>
          <li>
            Listening{' '}
            <a href="https://bettersoftwaredesign.pl" rel="noopener noreferrer">
              Better Software Design
            </a>{' '}
            podcast
          </li>
          <li>
            Taking part in a course called{' '}
            <a href="https://architekturanafroncie.pl" rel="noopener noreferrer">
              Architektura Na Froncie
            </a>
          </li>
        </ul>
        <br />
        <p>
          I started my career as a <b>frontend developer</b>, but after 3 years I decided to switch my path to a{' '}
          <b>fullstack developer</b>. I&apos;m aware it would be easier to just specialize in a single thing and become
          solid expert in it, but it&apos;s just not the way for me. I like to build things and I try to not limit
          myself by being specialized in only one thing. <b>Fullstack approach</b> allows me to do everything I want and
          gives me more fun.
        </p>
        <br />
        <p>
          I&apos;m also interested in business related stuff - I&apos;d like to launch own online product one day.
          Besides that, I observe crypto and traditional stock world.
        </p>
        <br />
        <h2>
          My top 5{' '}
          <a href="https://www.gallup.com/cliftonstrengths" rel="noopener noreferrer">
            Gallup talents
          </a>
          :
        </h2>
        <ul>
          <li>
            <b>#1 Individualization</b> - each person is unique for me. After some time I know how to speak and work
            with each type of personality
          </li>
          <li>
            <b>#2 Focus</b> - I can take direction, then make plan and prioritize all things that need to be done to get
            there
          </li>
          <li>
            <b>#3 Analytical</b> - I like to understand the situation in 100%, what and why caused it
          </li>
          <li>
            <b>#4 Harmony</b> - I always try to look for consensus and don&apos;t waste time on arguing
          </li>
          <li>
            <b>#5 Restorative</b> - Good at seeking of root of the problem and solving it
          </li>
        </ul>
        <br />
        <p>
          If you want to contact with me, use: <span className="whitespace-nowrap">jakub🐒jkus.dev</span>
        </p>
      </Container>
    </Layout>
  );
}
