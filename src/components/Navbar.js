/** @format */

import React from "react";
import Logo from "../images/image 6.png";
import "../index.css";
const Navbar = () => {
  return (
    <React.Fragment>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-white  d-flex justify-content-between ">
          <div class="navbar-nav  col-4 align-items-start ">
            <div class="text-dark bg_color_primary_light  rounded-circle p-2">
              <img src={Logo} className="img-fluid Logo-im" />
            </div>
          </div>

          <div class="col-6  d-flex justify-content-center mx-3 my-3">
            <a class="navbar-brand text-dark brand_name   " href="">
              Service
            </a>
            <a class="navbar-brand text-dark brand_name   " href="">
              Tools
            </a>
            <a class="navbar-brand text-dark brand_name   " href="">
              Company
            </a>
            <a class="navbar-brand text-dark brand_name   " href="">
              Explore
            </a>
            <a class="navbar-brand text-dark brand_name   " href="">
              Login
            </a>
            <a class="nav-item nav-link text-dark" href="">
              <button className="btn btn-danger text-white">Get started</button>
            </a>
          </div>

          <div class="collapse navbar-collapse  col-3 " id="navbarNavDropdown">
            <div class="navbar-nav ml-auto ">
              <a class="nav-item nav-link  text-dark" href="">
                <button className="btn btn-success">
                  Financial health checks
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
