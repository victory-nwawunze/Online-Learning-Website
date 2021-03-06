/** @format */

/** @format */

import React from "react";
import SectionVid from "../images/Group 8096.png";
import IconImage from "../images/Group 8113.svg";
const SectionVideo = () => {
  return (
    <React.Fragment>
      <div className="sectionVideo p-5 text-left bg-color">
        <div className="container">
          <div className="d-flex py-5 justify-content-between align-items-center">
            <div>
              <h3 className="tex-font display-6 fw-normal">
                Welcome to <br /> MoneyAfrica
              </h3>
              <p className="text-font pt-4">
                Here’s an introductory message from Tosin Olaseinde, CEO
                <br />
                MoneyAfrica on why you should hop on this ride with us.
              </p>
              <button className="btn-health text-font">
                Watch video
                <span>
                  <img src={IconImage} className="p-1" />
                </span>
              </button>
              <button className="btn-healthOne m-3 text-font">
                Read article
                <span>
                  <img src={IconImage} className="p-1" />
                </span>
              </button>
            </div>
            <div>
              <img src={SectionVid} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionVideo;
