/** @format */

import React from "react";
import Logo from "../images/image 6.png";
import "../index.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="nav-bar p-3 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src={Logo} className="img-fluid Logo-img" />
            </div>
            <div>
              <div className="d-flex ">
                <p className="text-font">Services</p>
                <span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <p className="text-font">Tools</p>
                <span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div>
              {" "}
              <div className="d-flex">
                <p className="text-font">Company</p>
                <span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <p className="text-font">Explore</p>
                <span>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <p className="text-font">Login</p>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <button className="btn btn-danger">
                  Get started
                  <span>
                    <i class="fa fa-arrow-right pl-2" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
            <div>
              <button className="btn-health">
                Financial health checks
                <span>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
