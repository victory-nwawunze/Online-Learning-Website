/** @format */

import React from "react";
import ShowcaseImage from "../images/Group 6936.png";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className="showcase p-5 text-left">
        <div className="container ">
          <div className="grid">
            <div className="row mt-5  d-flex align-items-center">
              <div className="col-md-6">
                <div className="fw-bold display-3 text-capitalize">
                  Improve your financial health.
                </div>
                <p className="text-font">
                  MoneyAfrica is a subscription-based Ed-tech platform providing
                  access to free and paid financial knowledge for learners.
                </p>
                <div>
                  <button className="btn btn-success text-white text-font">
                    Our Services
                  </button>
                  <button className="btn btn-white text-success fw-bold text-font">
                    Start Investing
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={ShowcaseImage}
                  alt="ShowcaseImage"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
