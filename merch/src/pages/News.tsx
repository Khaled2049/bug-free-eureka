import React from 'react';
import NewsCard from '../components/NewsCard';
import Crypto from '../components/Crypto';
class News extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <NewsCard />
        </div>
        <div className="col">
          <Crypto />
        </div>
      </div>
    );
  }
}

export default News;
