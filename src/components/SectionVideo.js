/** @format */

/** @format */

import React from "react";
import SectionVid from "../images/Group 8096.png";

const SectionVideo = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <p className="fw-bold h2 display-4">Welcome to</p>
              <p className=" h4 display-4">MoneyAfrica</p>
              <p>
                Here’s an introductory message from Tosin Olaseinde, CEO
                MoneyAfrica on why you should hop on this ride with us.
              </p>
              <input
                type="submit"
                value="Watch video"
                className="btn btn-success m-3"
              />
              <input
                type="submit"
                value="Watch video"
                className="btn btn-white m-3"
              />
            </div>
            <div className="col-md-6">
              <img src={SectionVid} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionVideo;
