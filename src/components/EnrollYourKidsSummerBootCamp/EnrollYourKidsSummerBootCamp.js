/** @format */

import React from "react";
import TimesIcon from "../../images/Times.png";
import RoundedUserIcon from "../../images/RoundedUserIcon.png";
const EnrollYourKidsSummerBootCamp = () => {
  return (
    <React.Fragment>
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
      <div className="container-fluid EnrollKidBackgroundSectionColor p-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={RoundedUserIcon} />
                    </div>
                    <div>
                      <p className="ChildInformationTextSize text-font mx-3 my-3">
                        Child information
                        <p className="text-font">
                          This information will be utilized to help us better
                          understand your child(ren) and
                          <br /> what works best for him/her.
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="CollapseTextColorAndTextSize text-font">
                    Collapse
                  </p>
                </div>
              </div>
              <hr className="HorizontalLineForColor" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnrollYourKidsSummerBootCamp;
