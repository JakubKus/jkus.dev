import Meta from './meta';
import React from 'react';
import Footer from './footer';
import Navbar from './navigation/navbar';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen mt-8">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
