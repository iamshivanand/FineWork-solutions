import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//imports of all the components

import Navbar from "./Components/NavBar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import DataEntry from "./Components/DataEntryServices/DataEntry";
import Registration from "./Components/RegistrationServices/Registration";
// import GemPortal from "./Components/GemPortalServices/GemPortal";
import DSCServices from "./Components/DSCServices/DSCServices";
import SupplyManagement from "./Components/SupplyManagement/SupplyManagement";
import Contact from "./Components/ContactUs/Contact";
import GSTRegistration from "./Components/RegistrationServices/GSTRegistration";
import GSTReturn from "./Components/RegistrationServices/GSTReturn";
import ITRServices from "./Components/RegistrationServices/ITRServices";
import MSMERegistration from "./Components/RegistrationServices/MSMERegistration";
import GemCatalogueManagement from "./Components/GemPortalServices/GemCatalogueManagement";
import Gemregistration from "./Components/GemPortalServices/Gemregistration";
import GemSeller from "./Components/GemPortalServices/GemSeller";

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
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
  return (
    <Router>
      <Navbar screenSize={screenSize} />
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage screenSize={screenSize} />}
          />
          <Route exact path="/data-entry" element={<DataEntry />} />
          <Route
            exact
            path="/registration-services"
            element={<Registration />}
          />
          {/* <Route exact path="/gem-portal-services" element={<GemPortal />} /> */}
          <Route exact path="/dsc-services" element={<DSCServices />} />
          <Route
            exact
            path="/supply-management"
            element={<SupplyManagement />}
          />
          <Route
            exact
            path="/contact-us"
            element={<Contact screenSize={screenSize?.width} />}
          />
          <Route
            exact
            path="/registeration-services/gst-registration"
            element={<GSTRegistration />}
          />
          <Route
            exact
            path="/registeration-services/gst-return"
            element={<GSTReturn />}
          />
          <Route
            exact
            path="/registeration-services/itr-services"
            element={<ITRServices />}
          />
          <Route
            exact
            path="/registeration-services/msme-registration"
            element={<MSMERegistration />}
          />
          <Route
            exact
            path="/gem-portal-services/registration"
            element={<Gemregistration />}
          />
          <Route
            exact
            path="/gem-portal-services/catalogue-management"
            element={<GemCatalogueManagement />}
          />
          <Route
            exact
            path="/gem-portal-services/seller"
            element={<GemSeller />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
