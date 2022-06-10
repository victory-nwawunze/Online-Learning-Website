/** @format */

import React from "react";
import UserImage from "../../images/FrameUserIcon.png";
import MailIcon from "../../images/mail.png";
import PhoneIcon from "../../images/PhoneIcon.png";
import QuestionMark from "../../images/questionMark.png";
import ArrowDown from "../../images/arrowDown.png";
import MessageIcon from "../../images/messageIcon.png";
import SubmitButton from "../../images/submitButton.png";
const MoneyAfricaTalkToAnExpert = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaTalkToAnExpertBanner p-3 bg-color py-5 mb-5">
        <p className="text-font display-5 text-center pt-5">
          Talk to an expert
        </p>
        <p className="text-font text-center">
          Fill out the form below and one of our experts will get in touch with
          you.
        </p>
      </div>

      <div className="MoneyAfricaTalkToAnExpertForm p-5">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <p className="text-font FormFontColor">First Name</p>
                  <div className="InputWithUserIcon">
                    <input className="UserText" name="name" />
                    <div className="UserIcon">
                      <img src={UserImage} className="p-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-font  pt-3 FormFontColor">Email Address</p>
                  <div className="InputWithUserIcon">
                    <input className="UserMail" />
                    <div className="UserIcon">
                      <img src={MailIcon} className="p-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-font  pt-3 FormFontColor">Phone number</p>
                  <div className="InputWithUserIcon">
                    <input className="UserMail" />
                    <div className="UserIcon">
                      <img src={PhoneIcon} className="p-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-font  pt-3 FormFontColor">
                    Reason for reaching out?
                  </p>
                  <div className="InputWithUserIcon">
                    <input className="UserMail" />
                    <div className="UserIcon">
                      <img src={QuestionMark} className="p-2" />
                    </div>
                    <div className="UserIconArrow">
                      <img src={ArrowDown} className="p-2" />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-font  pt-3 FormFontColor">Your Message</p>
                  <div className="InputWithUserIcon">
                    <input className="UserMail FormInputPaddingTop" />
                    <div className="UserIcon">
                      <img src={MessageIcon} className="p-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <p className="text-font FormFontColor">Last Name</p>
                  <div className="InputWithUserIcon">
                    <input className="UserText" name="name" />
                    <div className="UserIcon">
                      <img src={UserImage} className="p-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submitBotton">
          <img src={SubmitButton} className="pt-5 SubmitButton hover" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaTalkToAnExpert;
