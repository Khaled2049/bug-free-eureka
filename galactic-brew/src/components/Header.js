import React from "react";
import GoogleAuth from "./GoogleAuth";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="ui secondary pointing menu"
      style={{ marginBottom: "2rem", padding: "1rem" }}
    >
      <Link to="/" className="item">
        Projects
      </Link>
      <div className="right menu">
        <Link className="item" to="/projects">
          All Projects
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
