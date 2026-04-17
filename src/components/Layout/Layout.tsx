import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Layout;
