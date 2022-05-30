/** @format */

import React from "react";
import BbcLogo from "../images/Group 8103.png";
import TechPoint from "../images/Group 8104.png";
import Cnn from "../images/Group 8105.png";
import Linkdin from "../images/Group 8106.png";
const Features = () => {
  return (
    <React.Fragment>
      <div className="container text-center">
        <hr />
        <p className="text-center text-font">As Feature On</p>
        <div className="row py-3">
          <div className="col-md-3">
            <img
              src={BbcLogo}
              alt="Bbc News"
              className="img-fluid Feature_img"
            />
          </div>
          <div className="col-md-3">
            <img src={TechPoint} alt="TechPoint" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={Cnn} alt="CNN" className="img-fluid" />
          </div>
          <div className="col-md-3">
            <img src={Linkdin} alt="Linkdin" className="img-fluid" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
