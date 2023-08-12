import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//imports of all the components

import Navbar from "./Components/NavBar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import DataEntry from "./Components/DataEntryServices/DataEntry";
import Registration from "./Components/RegistrationServices/Registration";
import GemPortal from "./Components/GemPortalServices/GemPortal";
import DSCServices from "./Components/DSCServices/DSCServices";
import SupplyManagement from "./Components/SupplyManagement/SupplyManagement";
import Contact from "./Components/ContactUs/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/data-entry" element={<DataEntry />} />
          <Route
            exact
            path="/registration-services"
            element={<Registration />}
          />
          <Route exact path="/gem-portal-services" element={<GemPortal />} />
          <Route exact path="/dsc-services" element={<DSCServices />} />
          <Route
            exact
            path="/supply-management"
            element={<SupplyManagement />}
          />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
