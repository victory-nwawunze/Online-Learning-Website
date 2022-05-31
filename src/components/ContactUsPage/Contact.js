/** @format */

import React from "react";
import IconSvg from "../../images/Group 8111.svg";
import UserIcon from "../../images/userIcon.png";
import IconImage from "../../images/Group 8113.svg";
import UsersImage from "../../images/Group 8116.svg";
import LocationIcon from "../../images/Group 8117.png";
import MediaIcon from "../../images/media.svg";
const Contact = () => {
  return (
    <React.Fragment>
      <div className="contactPage p-5">
        <div className="container">
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
            <div class="input-container">
              <img src={IconSvg} />
              <input
                class="input-field"
                type="text"
                placeholder="What did you need help with ?"
                name="email"
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
            <div>
              <button className="btn-health text-font">
                Send Message
                <span>
                  <img src={IconImage} className="p-1" />
                </span>
              </button>
            </div>
          </div>
          <div className="containerDesc p-5">
            <div className="d-flex py-5 justify-content-between align-items-center">
              <div>
                <img src={UsersImage} className="img-fluid" />
                <h5 className="pt-3 text-font fw-bold">Customer Support</h5>
                <small className="text-font">
                  Expect a swift response from our friendly customer
                  <br /> support team. Monday-Friday.
                </small>
              </div>
              <div>
                <img src={LocationIcon} className="img-fluid" />
                <h5 className="pt-3 text-font fw-bold">Visit us at</h5>
                <small className="text-font">
                  7, Ibiyinka Olorunbe, Off Amodu Ojikutu St,
                  <br /> Victoria Island, Lagos
                </small>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <button className="btn btn-white text-danger fw-bold">
                    Go to map
                  </button>
                  <span>
                    <img src={IconImage} />
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="textDesc p-5 text-center">
              <h4 className="fw-bold text-font">Follow us on socials</h4>
              <p className="text-font">
                Check us out on our socials, get regular updates
                <br /> from us or send us an email using
                <br />
                <span className="text-danger">hello@moneyafrica.co</span>
              </p>
            </div>
            <div className="mediaIcons text-center">
              <img src={MediaIcon} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
