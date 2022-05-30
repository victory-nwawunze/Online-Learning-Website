/** @format */

import React from "react";
import Logo from "../images/image 6.png";
import Icons from "../images/Group 8110.jpg";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-section bg-white p-5">
        <div className="container-fluid">
          <div className="grid">
            <div className="row py-5">
              <div className="col-md-4">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <img src={Logo} className="img-fluid Logo-img  mt-3" />
                      <p className="text-font mt-3">
                        © 2021 The Money Africa. All rights reserved.
                      </p>
                      <img src={Icons} className="img-fluid Logo-img  mt-3" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h4 className="h4 text-font fw-bold  mt-3">Service</h4>
                      <p className="text-font  mt-3">MA Premium</p>
                      <p className="text-font  mt-3">My Learning Platform</p>
                      <p className="text-font  mt-3">My Kids</p>
                      <p className="text-font  mt-3">MA Communities</p>
                      <p className="text-font  mt-3">Digital Advisors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h4 className="h4 fw-bold  mt-3">Company</h4>
                      <p className="text-font  mt-3">About Us</p>
                      <p className="text-font  mt-3">Careers</p>
                      <p className="text-font  mt-3">Contact Us</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h4 className="h4 fw-bold  mt-3">Tools</h4>
                      <p className="text-font mt-3">Calculator</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h4 className="h6  mt-3">Sign Up For News Letter</h4>
                      <small className="font-size mt-3 ">
                        Sign-up for our newsletter.Your email is never shared.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
//
