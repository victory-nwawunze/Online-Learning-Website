/** @format */

import React from "react";
import TimesIcon from "../../images/Times.png";
const ContainerCardBanner = () => {
  return (
    <React.Fragment>
      {" "}
      <div className="EnrollYourKidsForSummerBootCamp p-3 ">
        <div className="PositionEnrolChildTimesIcon">
          <img src={TimesIcon} />
        </div>
        <div className="bg-white p-5">
          <p className="text-center text-font h3 mt-3 fw-bold">
            Enrol your kids for summer bootcamp
          </p>
          <p className="text-center text-font ChoosePreferredPlanDescriptionTextFontSizeAndColor ">
            Our summer bootcamp for kids (August – September 2022) is
            approaching.
            <br />
            Complete the form below to register your children and assist them in
            <br />
            developing financial literacy skills.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContainerCardBanner;
