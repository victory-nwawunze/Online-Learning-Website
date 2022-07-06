/** @format */

import React from "react";
import TimesIcon from "../../images/Times.png";
import RoundedUserIcon from "../../images/RoundedUserIcon.png";
import SmallUserIcon from "../../images/SmallUserIcon.png";
import SmallArrowDownIcon from "../../images/SmallArrowDownIcon.png";
import SmallBookIcon from "../../images/SmallBookIcon.png";
import SmallGenderIcon from "../../images/SmallGenderIcon.png";
import SmallCalendarIcon from "../../images/SmallCalendarIcon.png";
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
              <div className="container">
                <div className="grid">
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="button"
                        value="Child 01"
                        className="p-2 text-font ChildButtonRadiusAndColor"
                      />
                      <p className="mt-3 text-font RememberPasswordLinkText">
                        First Name
                      </p>
                      <div className="TargetUserIconAndText">
                        <img src={SmallUserIcon} />
                        <div className="InputTextFieldPosition">
                          <input
                            type="text"
                            placeholder="Enter first name"
                            className="StylingTextField text-font"
                          />
                        </div>
                      </div>
                      <p className="mt-3 text-font RememberPasswordLinkText">
                        Gender
                      </p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <img src={SmallGenderIcon} />
                        </div>
                        <div>
                          <img src={SmallArrowDownIcon} />
                        </div>
                      </div>
                      <input className="TextInputForGender" />
                      <p className="mt-3 text-font RememberPasswordLinkText">
                        Level of education
                      </p>
                      <div className="d-flex justify-content-between">
                        <div>
                          <img src={SmallBookIcon} />
                        </div>
                        <div>
                          <img
                            src={SmallArrowDownIcon}
                            className="MarginIcon"
                          />
                        </div>
                      </div>
                      <input
                        className="InputFieldEdutionStyle text-font"
                        placeholder="Select level of education"
                      />
                    </div>
                    <div className="col-md-8">
                      <p className="mt-3 text-font RememberPasswordLinkText mt-5">
                        Last Name
                      </p>
                      <div className="TargetUserIconAndTextLastName">
                        <img src={SmallUserIcon} />
                        <div className="InputTextFieldPositionLastName">
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="InputTextFieldPositionLastNamePosition text-font"
                          />
                        </div>
                      </div>
                      <p className="mt-3 text-font RememberPasswordLinkText">
                        Date of Birth
                      </p>
                      <div className="d-flex ">
                        <div>
                          <img src={SmallCalendarIcon} />
                        </div>
                        <div className="MarginFlexDiv">
                          <img src={SmallArrowDownIcon} />
                        </div>
                      </div>
                      <input
                        className="DateOfBirthInputField text-font"
                        placeholder="DD/MM/YY"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnrollYourKidsSummerBootCamp;
