/** @format */

import React from "react";
import IconSvg from "../../images/Group 8111.svg";
import UserIcon from "../../images/userIcon.png";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="contactPage p-5">
        <div className="text-center text-font display-4">
          We’re here to help you figure out <br />
          <span className="display-5">all your questions about money.</span>
        </div>
        <div className="text-center text-font">
          <small>
            Would you like a collaboration, expert advice or more helpful
            information
            <br /> about our services?. Please kindly drop us a message.
          </small>
        </div>
        <div class="Contact-form text-center ">
          <div class="input-container">
            <img src={UserIcon} />
            <input
              class="input-field"
              type="text"
              placeholder="Your name"
              name="name"
            />
          </div>
          <div class="input-container">
            <img src={IconSvg} />
            <input
              class="input-field"
              type="text"
              placeholder="Your Email"
              name="email"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
