import Meta from './meta';
import React, { PropsWithChildren } from 'react';
import Footer from './footer';
import Navbar from './navigation/navbar';
import ReadingProgress from './reading-progress';

const Layout = ({ children }: PropsWithChildren) => {
  const contentRef = React.createRef<HTMLDivElement>();

  return (
    <div ref={contentRef}>
      <Meta />
      <Navbar />
      <ReadingProgress contentRef={contentRef} />
      <main className="mt-navbar wideDesktop:mt-desktopNavbar py-8 min-h-content wideDesktop:min-h-desktopContent">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
