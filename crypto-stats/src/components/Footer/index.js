import React from 'react';
import heroBg from '../../assets/hero-bg.png';

const Footer = () => (
  <footer
    style={{ backgroundImage: `url(${heroBg})` }}
    className="page-footer font-small blue pt-4"
  >
    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://khaled.codexn.com"> KHALED HOSSAIN</a>
    </div>
  </footer>
);

export default Footer;
