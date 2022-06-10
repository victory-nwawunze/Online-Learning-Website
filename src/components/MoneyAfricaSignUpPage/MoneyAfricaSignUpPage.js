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
const MoneyAfricaSignUpPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSignUpPage ">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <p className="fw-bold h1 text-font text-center py-3">
                MoneyAfrica
              </p>
              <p className="text-center text-font ">
                Money Africa is a subscription-based Education
                <br /> Technology (EdTech) platform providing access to
                <br /> free and paid financial education for learners.{" "}
              </p>
              <img src={SignUpImage} />
            </div>
            <div>
              <div className="SignUpForm m-2">
                <div className="card">
                  <div className="card-body p-3">
                    <p className="text-font py-2 text-center fw-bold h2 ">
                      Get started
                    </p>
                    <p className="text-font text-center SignUpFormInputFontColor">
                      Start building your financial knowledge bank with our
                      <br /> over 45+ ready-made courses.
                    </p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <div>
                          <p className="text-font SignUpFormInputFontColor  mt-3">
                            Last name
                          </p>
                          <div className="AllSignUpInputContainers">
                            <input className="SignUpFormInput" />
                            <div className="UserImageIcon">
                              <img src={UserImage} />
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-font SignUpFormInputFontColor  mt-3">
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
                          <p className="text-font SignUpFormInputFontColor mt-3">
                            Phone number
                          </p>
                          <div className="d-flex">
                            <div>
                              <img src={PhoneIcon} className="p-2" />
                              <img src={CountryFlag} className="p-2" />
                              <img src={ArrowDown} className="p-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>2</div>
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
