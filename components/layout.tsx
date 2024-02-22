import Meta from './meta';
import React, { PropsWithChildren } from 'react';
import Footer from './footer';
import Navbar from './navigation/navbar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="mt-navbar wideDesktop:mt-desktopNavbar py-8 min-h-content wideDesktop:min-h-desktopContent">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
