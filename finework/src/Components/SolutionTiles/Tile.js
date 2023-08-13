import React from "react";
import "./Tile.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/FineWork.png";
const Tile = () => {
  return (
    <div className="MainTileContainer">
      <div className="TileimageContainer">
        <img src={logo} alt="this is logo" />
      </div>
      <div className="TileTittleDescription">
        <h3>title of solution</h3>
        <p>
          This is the Description of solution we This is the Description of
          solution 1. we This is the Description of solution 1. we This is the
          Description of solution 1
        </p>
      </div>
      <div className="tileButton">
        <Link
          to="/data-entry"
          style={{ textDecoration: "none", color: "black" }}
        >
          <span>Read More +</span>
        </Link>
      </div>
    </div>
  );
};

export default Tile;
