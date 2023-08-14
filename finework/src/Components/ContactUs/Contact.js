import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { classGenerator } from "../../genericUtils";
import Form from "../Form/Form";
const Contact = ({ screenSize }) => {
  const AddressObject = {
    logo: <BusinessIcon fontSize="large" />,
    title: "Address",
    details: [
      "41, 42 L2D BLOCK, Block M, Mohan Garden, Uttam Nagar, New Delhi, Delhi 110059, India",
    ],
  };
  const EmailObject = {
    logo: <EmailIcon fontSize="large" />,
    title: "Email",
    details: ["emailsumitgangwar@gmail.com", "gangwar.shiv@gmail.com"],
  };
  const PhoneObject = {
    logo: <PhoneInTalkIcon fontSize="large" />,
    title: "Phone",
    details: ["9876543210", "9876543210", "9876543210", "9876543210"],
  };
  return (
    <div className="contact-us-main">
      <div className="contact-details-container">
        <div className="contact-header-container">
          <h2>Contact Us</h2>
        </div>
        <div
          className={`${classGenerator(
            screenSize,
            "Contact-card-container"
          )} Contact-card-container`}
        >
          <ContactCard object={AddressObject} />
          <ContactCard object={EmailObject} />
          <ContactCard object={PhoneObject} />
        </div>
      </div>
      <div className="Contact-form-container">
        <Form screenSize={screenSize} />
      </div>
    </div>
  );
};

export default Contact;
