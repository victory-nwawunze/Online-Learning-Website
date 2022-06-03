/** @format */

import React from "react";
import CareerBannerImage from "../CareerBannerImage/CareerBannerImage";
import CareerTextBanner from "../CareerTextBanner/CareerTextBanner";

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
    </React.Fragment>
  );
};

export default MoneyAfricaCareerForJobs;
