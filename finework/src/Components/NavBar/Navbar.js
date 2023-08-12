import React from "react";
import "./Navbar.css";
import { Link, useHistory, useLocation } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="NavbarComponent">
      <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
        <div className="logoContainer">
          <h3>FINEWORK SOLUTIONS</h3>
        </div>
      </Link>

      <div className="NavigationMenu">
        <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
          <div className="navigationTab">
            <span>Home</span>
          </div>
        </Link>
        <Link
          to="/data-entry"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <div className="navigationTab">
            <span>Data Entry Services</span>
          </div>
        </Link>
        <Link
          to="/registration-services"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <div className="navigationTab">
            <span>Registration Services</span>
            {/* 1.Gst Registration  2.GST Returns  3.ITR services */}
          </div>
        </Link>
        <Link
          to="/gem-portal-services"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <div className="navigationTab">
            <span>
              Gem Portal services
              {/* 1.Gem Registration
          2.Gem catalogue management
          3.Gem seller  */}
            </span>
          </div>
        </Link>
        <Link
          to="/dsc-services"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <div className="navigationTab">
            <span>DSC Services</span>
          </div>
        </Link>
        <Link
          to="/supply-management"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <div className="navigationTab">
            <span>Supply Management</span>
          </div>
        </Link>

        {/* <div className="navigationTab">Tenders</div> */}
      </div>
      <Link
        to="/contact-us"
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        <div className="contactUs">
          <h3>Contact Us</h3>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
