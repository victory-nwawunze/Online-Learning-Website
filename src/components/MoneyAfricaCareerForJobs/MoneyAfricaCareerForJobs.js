/** @format */

import React from "react";
import CareerBannerImage from "../CareerBannerImage/CareerBannerImage";
import CareerTextBanner from "../CareerTextBanner/CareerTextBanner";
import BagImage from "../../images/Group 8152.png";

const MoneyAfricaCareerForJobs = () => {
  return (
    <React.Fragment>
      <div className="CareersForTextBanner p-5">
        <h2 className="text-center text-font fw-bold h1">
          Help us simplify financial <br />
          education
        </h2>
        <p className="text-center text-font MoneyAfricaDiscountTextColor">
          Money Africa is a subscription-based Ed-Tech platform providing access
          to free
          <br /> and paid financial education for learners. Our mission is to
          make people less
          <br /> stressed and better off financially.
        </p>
      </div>
      <CareerBannerImage />
      <CareerTextBanner />
      <div className="HeadingTextDescription p-3">
        <p className="text-font h3 py-5 fw-bold text-center">
          Available positions
        </p>
      </div>
      <div className="JobSpacecontainer p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-12 cardBorderRadius text-center py-5">
                <img src={BagImage} />
                <p className="text-font fw-bold pt-2">No available jobs now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaCareerForJobs;
