import './App.css';
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import NewsCard from './NewsCard';
import Alerts from './Alerts';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <div className="row">
        <div className="col">
          <NewsCard />
        </div>
        <div className="col">
          <Alerts />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
