import React from "react";
import thumbpin from "../../assets/images/thumbpin.jpg";
const ContactCard = ({ object }) => {
  console.log("object", object);
  return (
    <div className="contact-card">
      <div className="contact-card-logo-container">
        <span> {object?.logo}</span>
        {/* <img src={thumbpin} alt="pin" /> */}
      </div>
      <div className="contact-card-heading-container">
        <span>{object?.title}</span>
      </div>
      <div className="contact-card-details-container">
        {object.details.map((item) => (
          <span> {item} &nbsp; </span>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
