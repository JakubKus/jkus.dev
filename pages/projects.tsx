import Layout from '../components/layout';
import Container from '../components/container';
import Head from 'next/head';
import { SHORT_HEADLINE } from '../constants';

export default function Projects() {
  const title = `${SHORT_HEADLINE} | Projects`;

  return (
    <Layout>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>My projects:</h1>
        <section className="projects">
          <ul>
            <li>
              <b>Node Design Patterns Exercises</b>
              {' - '}
              <a href="https://github.com/JakubKus/node-design-patterns-exercises" rel="noopener noreferrer">
                code
              </a>
              <br />
              Exercises from a book:{' '}
              <a href="https://www.packtpub.com/product/nodejs-design-patterns-third-edition/9781839214110">
                Node.js Design Patterns
              </a>
            </li>
            <li>
              <b>Meal seeker api</b>
              {' - '}
              <a href="https://github.com/JakubKus/meal-seeker-api" rel="noopener noreferrer">
                code
              </a>
              {' | '}
              <a href="https://meal-seeker-api.jkus.dev/graphql" rel="noopener noreferrer">
                demo
              </a>
              <br />
              My nicest piece of backend code
              <br />
              Tech stack: Node.js (Nest), CQRS, GraphQL, TypeORM, Docker
            </li>
            <li>
              <b>Dev arena</b>
              {' - '}
              <a href="https://github.com/JakubKus/dev-arena" rel="noopener noreferrer">
                code
              </a>
              {' | '}
              <a href="https://jkus.dev/dev-arena" rel="noopener noreferrer">
                demo
              </a>
              <br />
              Online fighting game. You choose your developer, then you face the enemies. It was my thesis at university
              <br />
              Disclaimer: this project needs a refactor, I will do it in future if I find time for it
              <br />
              Tech stack: React, Redux-Toolkit, TypeScript, Hooks
            </li>
            <li>
              <b>Dev arena api</b>
              {' - '}
              <a href="https://github.com/JakubKus/dev-arena-api" rel="noopener noreferrer">
                code
              </a>
              {' | '}
              <a href="https://dev-arena-api.jkus.dev/graphql" rel="noopener noreferrer">
                demo
              </a>
              <br />
              Simple api for Dev Arena
              <br />
              Tech stack: Node.js (Express), GraphQL
            </li>
          </ul>
          <br />
          <h2>A bit older projects</h2>
          <ul>
            <li>
              <b>Meal seeker</b>
              {' - '}
              <a href="https://github.com/JakubKus/meal-seeker" rel="noopener noreferrer">
                code
              </a>
              {' | '}
              <a href="https://jkus.dev/meal-seeker" rel="noopener noreferrer">
                demo
              </a>
              <br />
              Project which helps people choose what they can eat/cook for dinner (will be refactored in near future)
              <br />
              Tech stack: React, TypeScript (in future), GraphQL (in future)
            </li>
            <li>
              <b>Tower of hanoi</b>
              {' - '}
              <a href="https://github.com/JakubKus/tower-of-hanoi" rel="noopener noreferrer">
                code
              </a>
              {' | '}
              <a href="https://jkus.dev/hanoi-tower" rel="noopener noreferrer">
                demo
              </a>
              <br />
              Web game based on puzzle game Tower of Hanoi
              <br />
              Tech stack: React, Redux
            </li>
            <li>
              <b>Sets meter</b>
              {' - '}
              <a href="https://github.com/JakubKus/sets-meter" rel="noopener noreferrer">
                code
              </a>
              {' | '}
              <a href="https://jkus.dev/sets-meter" rel="noopener noreferrer">
                demo
              </a>
              <br />
              App which saves training plans and length of breaks. It notifies the user about the next exercise after
              break
              <br />
              Tech stack: React
            </li>
          </ul>
        </section>
      </Container>
    </Layout>
  );
}
