/** @format */

import React from "react";
import Logo from "../images/image 6.png";
import IconImage from "../images/Group 8113.svg";
import "../index.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="nav-bar p-3 bg-white">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Link to="/">
                <img src={Logo} className="img-fluid Logo-img" />
              </Link>
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
                <button className="btn btn-danger text-font">
                  Get started
                  <span>
                    <img src={IconImage} className="p-1" />
                  </span>
                </button>
              </div>
            </div>
            <div>
              <button className="btn-health text-font">
                Financial health checks
                <span>
                  <img src={IconImage} className="p-1" />
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
