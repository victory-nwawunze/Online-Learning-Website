/** @format */

import React from "react";
import BannerImage from "../../images/Group 8127.png";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="BannerImage  text-center">
        <h4 className="text-font fw-bold display-4 py-5">
          We make finacial
          <br /> <span className="display-5">education easy</span>
        </h4>
        <p className="text-font">
          Being a partner gives you access to financial advisers and
          <br /> powerful resources to support your financial goals.
        </p>
      </div>
      <div className="bannerImageWithVideo p-5">
        <div className="container-fluid">
          <img src={BannerImage} className="img-fluid" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
