import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
//here all the compoenents will be imported
import Dropdown from "../DropDown/Dropdown";
import GSTRegistration from "../RegistrationServices/GSTRegistration";
import GSTReturn from "../RegistrationServices/GSTReturn";
import ITRServices from "../RegistrationServices/ITRServices";
import MSMERegistration from "../RegistrationServices/MSMERegistration";

const Navbar = () => {
  const RegistrationServices = {
    maintitle: "RegistrationServices",
    subtitles: [
      {
        name: "Gst Registration",
        component: <GSTRegistration />,
        url: "/registeration-services/gst-registration",
      },
      {
        name: "MSME registratiion",
        component: <GSTReturn />,
        url: "/registeration-services/msme-registration",
      },
      {
        name: "GST Returns",
        component: <ITRServices />,
        url: "/registeration-services/gst-return",
      },
      {
        name: "ITR services",
        component: <MSMERegistration />,
        url: "/registeration-services/itr-services",
      },
    ],
  };
  const gemportal = {
    maintitle: "Gem Portal services",
    subtitles: [
      {
        name: "Gem Registration",
        url: "/gem-portal-services/registration",
      },
      {
        name: "Gem catalogue ",
        url: "/gem-portal-services/catalogue-management",
      },
    ],
  };
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [showSideNavigation, setShowSideNavigation] = useState(false);
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  console.log("hello side", showSideNavigation);
  const menuRendered = () => {
    return (
      <div className={screenSize.width < 1300 ? "sideMenuContainer" : ""}>
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
        <div className="navigationTab">
          <Dropdown tabs={RegistrationServices} screenSize={screenSize} />
        </div>
        <div className="navigationTab">
          <Dropdown tabs={gemportal} screenSize={screenSize} />
        </div>
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
      </div>
    );
  };
  const handleClose = () => {
    console.log("hello close is pressed");
    setShowSideNavigation(false);
  };

  //lets change the navigation type from 1024 px
  //keep it to right 0px
  const SideNavigation = () => {
    console.log("yeah its coming");
    return (
      <div className="SideNavigationContainer">
        <span
          style={{ margin: "20px", cursor: "pointer" }}
          onClick={handleClose}
        >
          Close x
        </span>
        {menuRendered()}
      </div>
    );
  };
  return (
    <div className="NavbarComponent">
      <Link to="/" style={{ textDecoration: "none", color: "whitesmoke" }}>
        <div className="logoContainer">
          <h3>FINEWORK SOLUTIONS</h3>
        </div>
      </Link>
      {screenSize?.width > 1300 ? (
        <div className="NavigationMenu">{menuRendered()}</div>
      ) : showSideNavigation ? (
        <SideNavigation />
      ) : (
        <div
          style={{ alignSelf: "center" }}
          onClick={() => setShowSideNavigation(true)}
        >
          <MenuIcon />
        </div>
      )}
      {screenSize?.width > 1300 && (
        <Link
          to="/contact-us"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <div className="contactUs">
            <h3>Contact Us</h3>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
