/** @format */

import React from "react";
import ProjectAfricaLogo from "../../images/LogoIcon.png";
import EmailIconLogo from "../../images/EmailIcon.png";
const ResetsPasswordEmails = () => {
  return (
    <React.Fragment>
      <div className="ResetsPasswordEmails p-5 text-center">
        <img src={ProjectAfricaLogo} />
        <h3 className="text-font h3 fw-bold display-5 pt-4">Forget Password</h3>
        <p className="text-font h6 TextColorsResetsPasswordEmails pt-2">
          Please provide the email address you used when you
          <br /> signed up for your MoneyAfrica account.
        </p>
      </div>
      <div className="MoneyAfricaRestsPasswordEmailsForm p-3">
        <h4 className="text-font TextColorsResetsPasswordEmails text-right h6 TextColorsResetsPasswordEmailsPaddingRight">
          Email Address
        </h4>
        <div className="MailIconWIthTextInput">
          <img
            src={EmailIconLogo}
            className="TextColorsResetsPasswordEmailsPaddingRight"
          />
          <div className="inputWithText">
            <input className="TextColorsResetsPasswordEmailsMarginRight" />
          </div>
        </div>
      </div>
      <div className="MoneyAfricaButton p-4">
        <div className="d-flex justify-content-between  align-items-center">
          <div className="RememberPasswordText text-font ">
            Remember Password
            <span className="fw-bold LoginTextColor">Log-in</span>
          </div>
          <div className="RememberPasswordTextButton">2</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetsPasswordEmails;
