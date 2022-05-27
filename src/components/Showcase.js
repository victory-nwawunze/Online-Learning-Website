/** @format */

import React from "react";
import ShowcaseImage from "../images/Group 6936.png";

const Showcase = () => {
  return (
    <React.Fragment>
      <div className="container ">
        <div className="row d-flex align-items-center py-4">
          <div className="col-6">
            <h3 className="display-3 fw-bold text-monospace">Improve your</h3>
            <h3 className="display-3 fw-bold text-monospace">
              Financial health.
            </h3>
            <p className="h5 text-font">
              MoneyAfrica is a subscription-based Ed-tech platform providing
              access to free and paid financial knowledge for learners.
            </p>
            <button className="btn btn-success m-3">Our Services</button>
            <button className="btn btn-white">Start investing</button>
          </div>
          <div className="col-6">
            <img
              src={ShowcaseImage}
              alt="showcase image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
