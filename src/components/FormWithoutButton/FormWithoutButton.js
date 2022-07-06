/** @format */

import React from "react";
import SmallUserIcon from "../../images/SmallUserIcon.png";
import SmallCalendarIcon from "../../images/SmallCalendarIcon.png";
import SmallArrowDownIcon from "../../images/SmallArrowDownIcon.png";
import SmallGenderIcon from "../../images/SmallGenderIcon.png";
import SmallBookIcon from "../../images/SmallBookIcon.png";
const FormWithoutButton = () => {
  return (
    <React.Fragment>
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
              <p className="mt-3 text-font RememberPasswordLinkText mt-5">
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
              <p className="mt-3 text-font RememberPasswordLinkText mt-5">
                Level of education
              </p>
              <div className="d-flex justify-content-between">
                <div>
                  <img src={SmallBookIcon} />
                </div>
                <div>
                  <img src={SmallArrowDownIcon} className="MarginIcon" />
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
              <p className="mt-3 text-font RememberPasswordLinkText mt-5">
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
    </React.Fragment>
  );
};

export default FormWithoutButton;
