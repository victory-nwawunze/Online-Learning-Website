/** @format */

import React from "react";
import SignUpImage from "../../images/Group 8157.png";
import UserImage from "../../images/FrameUserIcon.png";
import MailIcon from "../../images/mail.png";
import PhoneIcon from "../../images/PhoneIcon.png";
import ArrowDown from "../../images/arrowDown.png";
import CountryFlag from "../../images/Group 8160.png";
import LockImage from "../../images/Lock.png";
import EyLockImage from "../../images/Eye.png";
import GiftBag from "../../images/GiftBag.png";
import SignUpButton from "../../images/Group 8161.png";
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
                <div className="MoneyAfricaSignUpForm bg-white m-4 SignUpForm">
                  <p className="text-font text-center h1 fw-bold py-3">
                    Get started
                  </p>
                  <p className="text-font text-center py-2 ">
                    Start building your financial knowledge bank with our
                    <br /> over 45+ ready-made courses.
                  </p>
                  <div className="AllInputFields p-2 mt-5">
                    <div className="container">
                      <div className="grid">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="py-3">
                              <p className="text-font FormFontColor">
                                Last Name
                              </p>
                              <div className="AllSignUpInputContainers">
                                <input className="SignUpFormInput" />
                                <div className="UserImageIcon">
                                  <img src={UserImage} />
                                </div>
                              </div>
                            </div>
                            <div className="py-3">
                              <p className="text-font FormFontColor">
                                Email address
                              </p>
                              <div className="AllSignUpInputContainers">
                                <input className="SignUpFormInputForEmail" />
                                <div className="UserImageIcon">
                                  <img src={MailIcon} />
                                </div>
                              </div>
                            </div>
                            <div>
                              <p className="text-font FormFontColor">
                                Phone number
                              </p>

                              <div className="d-flex justify-content-between PhoneBorder">
                                <div className="m-1">
                                  <img src={PhoneIcon} />
                                </div>
                                <div className="m-1">
                                  <img src={CountryFlag} />
                                </div>
                                <div className="m-1">
                                  <img src={ArrowDown} />
                                </div>
                                <input
                                  placeholder="+234"
                                  className="PhoneInput"
                                />
                              </div>
                              <div className="mt-3">
                                <p className="text-font FormFontColor">
                                  Enter Password
                                </p>
                                <div className="PasswordTextInput">
                                  <input className="PassWordForInput" />
                                  <p className="text-font warningText text-danger">
                                    Password must contain at least 8 characters
                                    long words, upper & lowercase letters & a
                                    special character
                                  </p>
                                  <div className="InputLockImage">
                                    <img src={LockImage} />
                                  </div>
                                  <div className="InputEyeLockImage">
                                    <img src={EyLockImage} />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3">
                                <p className="text-font FormFontColor">
                                  Re-enter Password
                                </p>
                                <div className="PasswordTextInput">
                                  <input className="PassWordForInput" />

                                  <div className="InputLockImage">
                                    <img src={LockImage} />
                                  </div>
                                  <div className="InputEyeLockImage">
                                    <img src={EyLockImage} />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-3">
                                <p className="text-font FormFontColor">
                                  Referral code
                                </p>
                                <div className="PasswordTextInput">
                                  <input className="PassWordForInput" />

                                  <div className="InputLockImage">
                                    <img src={GiftBag} />
                                  </div>
                                  <p className="text-font warningText pt-3">
                                    By signing up, you agree to our
                                    <span className="fw-bold">
                                      Terms of Use
                                    </span>
                                    and
                                    <span className="fw-bold">
                                      Privacy Policy.
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between">
                              <div>
                                <p className="text-font warningText">
                                  Already have an account?
                                  <span className="fw-bold"> Sign In</span>
                                </p>
                              </div>
                              <div>
                                <img
                                  src={SignUpButton}
                                  className="img-fluid SignUpButton"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="py-3">
                              <p className="text-font FormFontColor">
                                Last Name
                              </p>
                              <div className="AllSignUpInputContainers">
                                <input className="SignUpFormInput" />
                                <div className="UserImageIcon">
                                  <img src={UserImage} />
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSignUpPage;
