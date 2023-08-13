import React from "react";
import "./HomePage.css";
import introImage from "../../assets/images/intro.png";
import Tile from "../SolutionTiles/Tile";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="introductionDiv">
        <div className="introContentContainer">
          <h1>
            Finework Solutions:
            <br /> Your Trusted Partner For Startup Legalities.
          </h1>
          <p>
            We handle your messy legalities and documentation, so that you worry
            less and focus more on your dream business.
          </p>
        </div>
        <div className="introimageContainer">
          <img src={introImage} alt="introImage" />
        </div>
      </div>
      <div className="BusinessSolutionsTilesContainer">
        <div className="headingContainer">
          <h1>We Are Offering Great Number Of Business Solutions</h1>
        </div>
        <div className="SolutionTilesContainer">
          <Tile />
          <Tile />
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
