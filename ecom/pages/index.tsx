import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Product, HeroBanner, FooterBanner } from '../components';
import { client } from '../lib/client';

interface IHomeProps {
  products: any[];
  bannerData: any[];
}

const Home = ({ products, bannerData }: IHomeProps) => {
  // console.log('Products', products);
  console.log('BannerData', bannerData);
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}></HeroBanner>
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Buy art from local artists</p>
      </div>

      <div className="products-container">
        {products.map((product) => product)}
      </div>
      <FooterBanner></FooterBanner>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return { props: { products, bannerData } };
};

export default Home;
