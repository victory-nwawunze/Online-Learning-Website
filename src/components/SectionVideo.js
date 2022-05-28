/** @format */

/** @format */

import React from "react";
import SectionVid from "../images/Group 8096.png";

const SectionVideo = () => {
  return (
    <React.Fragment>
      <div className="sectionVideo p-5 text-left bg-color">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-6 py-5">
                <div className="fw-bold display-3">Welcome to MoneyAfrica</div>
                <p className="text-font mt-4">
                  Here’s an introductory message from Tosin Olaseinde, CEO
                  MoneyAfrica on why you should hop on this ride with us.
                </p>
                <div>
                  <button className=" btn-watch text-white p-2 m-2">
                    Watch Video
                  </button>
                  <button className="btn btn-light p2 m-2">Read article</button>
                </div>
              </div>
              <div className="col-md-6">
                <img src={SectionVid} alt="SectionVid" className="img-fluid " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionVideo;
