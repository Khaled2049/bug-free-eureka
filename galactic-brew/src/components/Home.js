import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="home_content">
          <h1 className="home_title ">
            Welcome <br />
            To The Ultimate Project <br />
            collection website
          </h1>

          <div className="home_description">
            <p>
              This Website contains a collection of projects and the links to a
              github repositories, if you are applying to jobs and are in need
              of project ideas you can search for them here.
            </p>
            <p>
              Anyone with a google account can create a project. You don't even
              need a google account to view them. You can use this website to
              keep track of the projects you have created. Contact other
              developers if you want to work on something together.
            </p>
            <p>
              I used React on the frontend with redux for state manaement,{" "}
              <a
                target="_blank"
                href="https://semantic-ui.com/introduction/getting-started.html"
              >
                Semantic UI
              </a>{" "}
              and some basic CSS for styling. and lastly we have a simple JSON
              server running on the backend.
            </p>
          </div>
          <Link to="/projects">
            <div className="ui animated button home_button">
              <div className="visible content">View Projects</div>
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="home_wave">
          <div className="wave"></div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
