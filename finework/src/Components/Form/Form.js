import React from "react";
import "./Form.css";
import formimage from "../../assets/images/form.png";
import { classGenerator } from "../../genericUtils";
const Form = ({ screenSize }) => {
  console.log("screensize form", screenSize);
  return (
    <div className="form-container">
      <div
        className={`${classGenerator(
          screenSize,
          "form-image-container"
        )} form-image-container`}
      >
        <img src={formimage} alt="form desc" />
      </div>
      <div
        className={`${classGenerator(
          screenSize,
          "actual-form-container"
        )} actual-form-container`}
      >
        <h2>Leave a Message</h2>
        <div className="form-input">
          {/* 1.Name  */}
          <div className="name-input combine-input">
            <input placeholder="Name*" />
          </div>
          {/* 2.Email */}
          <div className="email-input combine-input">
            <input placeholder="Email*" />
          </div>
          {/* 3.Phone */}
          <div className="phone-input combine-input">
            <input placeholder="Phone*" />
          </div>
          {/* 4.message */}
          <div className="message-input combine-input">
            <input placeholder="Message*" />
          </div>
          <div className="submit-button">
            <span>Send a Message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
