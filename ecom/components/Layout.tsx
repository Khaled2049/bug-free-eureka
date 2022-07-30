import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

interface ILayotuProps {
  children: any;
}
const Layout = ({ children }: ILayotuProps) => {
  return (
    <div className="layout">
      <Head>
        <title>Artitup</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
