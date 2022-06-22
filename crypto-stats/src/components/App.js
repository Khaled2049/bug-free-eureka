import './App.css';
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';
import Alerts from './Alerts';

import Footer from './Footer';
function App() {
  return (
    <React.Fragment className="container">
      <Header />
      <div className="row">
        <div className="col">
          <Hero />
        </div>
        <div className="col">
          <Alerts />
        </div>
        <NewsCard />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
