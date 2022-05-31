/** @format */

import React from "react";
import Logo from "../images/image 6.png";
import Icons from "../images/Group 8110.jpg";
import IconSvg from "../images/Group 8111.svg";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-section p-5 bg-white">
        <div className="d-flex py-5 justify-content-between align-items-baseline">
          <div>
            <img src={Logo} className="img-fluid Logo-img" />
            <p className="text-font mt-3">
              © 2021 The Money Africa. All rights reserved.
            </p>
            <img src={Icons} className="img-fluid Logo-img mt-3" />
          </div>
          <div>
            <h3 className="h4 text-font fw-bold">Services</h3>
            <p className="text-font mt-3">MA Premium</p>
            <p className="text-font mt-3">MA Learning platform </p>
            <p className="text-font mt-3">MA Kids</p>
            <p className="text-font mt-3">MA Communities</p>
            <p className="text-font mt-3">Digital Advisor</p>
          </div>
          <div>
            <h3 className="h4 text-font fw-bold">Company</h3>
            <p className="text-font mt-3">About Us</p>
            <p className="text-font mt-3">Careers </p>
            <p className="text-font mt-3">Contact Us</p>
          </div>
          <div>
            <h3 className="h4 text-font fw-bold">Tools</h3>
            <p className="text-font mt-3">Calculator</p>
          </div>
          <div>
            <h3 className="h4 text-font fw-bold">Sign up for the newsletter</h3>
            <small className="text-font mt-3">
              Sign up for our newsletter. Your email is never
              <br /> shared.
              <br />
              Email
              <br />
              Address
            </small>
            <div class="input-container">
              <img src={IconSvg} />
              <input
                class="input-field"
                type="text"
                placeholder="Email"
                name="email"
              />
            </div>
            <button className="btn btn-danger round text-font">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
//
