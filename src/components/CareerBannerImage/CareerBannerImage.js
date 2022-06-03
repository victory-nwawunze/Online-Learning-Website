/** @format */

import React from "react";
import CareerBannerImageBackground from "../../images/Group 8146.png";
const CareerBannerImage = () => {
  return (
    <React.Fragment>
      <div className="containerCareerBackgroundImage p-5">
        <div className="container-fluid">
          <img src={CareerBannerImageBackground} className="container-fluid" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CareerBannerImage;
