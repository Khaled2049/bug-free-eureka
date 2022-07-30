import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Product, HeroBanner, FooterBanner } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Buy art from local artists</p>
      </div>

      <div className="products-container">
        {['art', 'art2'].map((product) => product)}
      </div>
      <FooterBanner></FooterBanner>
    </>
  );
};

export default Home;
