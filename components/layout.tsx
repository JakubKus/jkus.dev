import Meta from './meta';
import React, { PropsWithChildren } from 'react';
import Footer from './footer';
import Navbar from './navigation/navbar';
import ReadingProgress from './reading-progress';

const Layout = ({ children }: PropsWithChildren) => {
  const containerRef = React.createRef<HTMLDivElement>();

  return (
    <div ref={containerRef} className="flow-root h-full">
      <Meta />
      <Navbar />
      <ReadingProgress containerRef={containerRef} />
      <main className="mt-navbar wideDesktop:mt-desktopNavbar py-8 min-h-content wideDesktop:min-h-desktopContent text-justify hyphens-auto break-words">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
