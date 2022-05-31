/** @format */

import React from "react";
import ShowcaseImage from "../images/Group 6936.png";
import ArrowDown from "../images/Group 8115.svg";
import IconImage from "../images/Group 8113.svg";
const Showcase = () => {
  return (
    <React.Fragment>
      <div className="showcase-section p-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-5">
            <div>
              <h4 className="h4 fw-bold display-5 text-font">
                Improve your <br />
                financial health.
              </h4>
              <p className="text-font">
                MoneyAfrica is a subscription-based Ed-tech platform providing
                <br />
                access to free and paid financial knowledge for learners.
              </p>
              <button className="btn-health text-font">
                Our Services
                <span>
                  <img src={ArrowDown} className="p-1" />
                </span>
              </button>
              <button className="btn-healthOne text-font ">
                Start Investing
                <span>
                  <img src={IconImage} className="p-1" />
                </span>
              </button>
            </div>
            <div>
              <img src={ShowcaseImage} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Showcase;
