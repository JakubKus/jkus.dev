import React from 'react';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen mt-8 max-w-2xl mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
