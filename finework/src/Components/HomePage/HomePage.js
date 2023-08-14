import React from "react";
import "./HomePage.css";
import introImage from "../../assets/images/intro.png";
import Tile from "../SolutionTiles/Tile";
import { classGenerator } from "../../genericUtils";
const HomePage = ({ screenSize }) => {
  return (
    <div className="homePage">
      <div
        className={`${classGenerator(
          screenSize?.width,
          "introductionDiv"
        )} introductionDiv`}
      >
        <div
          className={`${classGenerator(
            screenSize?.width,
            "introContentContainer"
          )} introContentContainer`}
        >
          <h1>FineWork - Your Trusted Partner For Startup Legalities.</h1>
          <p>
            We handle your messy legalities and documentation, so that you worry
            less and focus more on your dream business.
          </p>
        </div>
        <div
          className={`${classGenerator(
            screenSize?.width,
            "introimageContainer"
          )} introimageContainer`}
        >
          <img src={introImage} alt="introImage" />
        </div>
      </div>
      <div className="BusinessSolutionsTilesContainer">
        <div
          className={`${classGenerator(
            screenSize?.width,
            "headingContainer"
          )} headingContainer`}
        >
          <h1>We Are Offering Great Number Of Business Solutions</h1>
        </div>
        <div className="SolutionTilesContainer">
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
