import React, { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";

const Dropdown = ({ tabs, screenSize }) => {
  const [isHovering, setIsHovering] = useState(false);
  //   const [isClicked, setIsclicked] = useState(true);
  //   console.log("hello there", tabs);

  const handleMouseOver = () => {
    console.log("mouse is over");
    screenSize.width > 1300 && setIsHovering(true);
  };
  const handleMouseOut = () => {
    console.log("onMouseLeave");
    screenSize.width > 1300 && setIsHovering(false);
  };
  const handleclick = () => {
    console.log("this div is being clicked");
    setIsHovering(!isHovering);
  };
  return (
    <div
      className="dropdown"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      onClick={handleclick}
    >
      <div className="navigationDropdown">
        <span className="naviagtionDropdownTitle">{tabs?.maintitle}</span>
        <span className="navigationDropdownIcon">
          {screenSize.width > 1300 ? <ArrowDropDownIcon /> : <AddIcon />}
        </span>
      </div>
      {isHovering && (
        <div
          className={
            screenSize.width > 1300
              ? "navigation-dropdown-tab"
              : "navigationExpandClass"
          }
          style={screenSize?.width < 1300 ? { marginBottom: "15px" } : {}}
        >
          {tabs?.subtitles?.map((item) => (
            <Link
              to={item?.url}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div
                className="dropdownSubtabs"
                onClick={() => {
                  setIsHovering(false);
                }}
              >
                <p>{item?.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
