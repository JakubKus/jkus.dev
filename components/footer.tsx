import Container from './container';

const Footer = () => {
  return (
    <footer className="h-footer text-xs flex items-center border-t border-accent-1-light">
      <div className="w-full">
        <Container>
          Design inspired by{' '}
          <a href="https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog">Gatsby blog starter</a>
          &nbsp;:)
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
