/** @format */

import React from "react";
import SignUpImage from "../../images/Group 8157.png";
import UserImage from "../../images/FrameUserIcon.png";
const MoneyAfricaSignUpPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSignUpPage">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <p className="text-font fw-bold h4 text-center pt-5">
                  MoneyAfrica
                </p>
                <p className="text-font  text-center">
                  Money Africa is a subscription-based Education
                  <br /> Technology (EdTech) platform providing access to
                  <br /> free and paid financial education for learners.
                </p>
                <div className="SignUpImageMoneyAfrica">
                  <img src={SignUpImage} className="img-fluid " />
                </div>
              </div>
              <div className="col-md-6">
                <div className="MoneyAfricaSignUpForm bg-white m-4">
                  <p className="text-font text-center h1 fw-bold">
                    Get started
                  </p>
                  <p className="text-font text-center">
                    Start building your financial knowledge bank with our
                    <br /> over 45+ ready-made courses.
                  </p>
                  <div className="AllInputFields p-2">
                    <div className="container">
                      <div className="grid">
                        <div className="row">
                          <div className="col-md-6">
                            <p className="text-font">Last Name</p>
                            <div className="AllSignUpInputContainers">
                              <input className="SignUpFormInput" />
                              <div className="UserImageIcon">
                                <img src={UserImage} />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">2</div>
                        </div>
                      </div>
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

export default MoneyAfricaSignUpPage;
