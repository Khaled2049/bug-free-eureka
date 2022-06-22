import React from 'react';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="px-4 text-center">
      <div className="overflow-hidden">
        <div className="container">
          <img width="300px" src={require('../../assets/redLogo.png')}></img>
        </div>
      </div>
      <h1 className="display-4 fw-bold">CRYPTO STATS</h1>

      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Know what's happening and never miss your moonshot
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Button variant="danger">SET ALERTS NOW</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
