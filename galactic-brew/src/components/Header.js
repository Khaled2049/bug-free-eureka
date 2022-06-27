import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Projects
      </Link>
      <div className="right menu">
        <Link className="item" to="/">
          All Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
