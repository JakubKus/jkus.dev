import Container from './container';

const Footer = () => {
  return (
    <footer className="border-t border-accent-1-light py-2.5 text-xs">
      <Container>
        Design inspired by
        {' '}
        <a href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog">
          Gatsby blog starter
        </a>
        &nbsp;:)
      </Container>
    </footer>
  );
};

export default Footer;
