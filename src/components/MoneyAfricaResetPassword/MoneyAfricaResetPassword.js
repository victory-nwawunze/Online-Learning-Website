/** @format */

import React from "react";
import ProjectAfricaLogo from "../../images/LogoIcon.png";
import Lock from "../../images/Lock.png";
import LockEye from "../../images/LockEye.png";
const MoneyAfricaResetPassword = () => {
  return (
    <React.Fragment>
      <div className="ResetsPasswordEmails p-5 text-center">
        <img src={ProjectAfricaLogo} />
        <h3 className="text-font h3 fw-bold display-5 pt-4">Reset Password</h3>
        <p className="text-font h6 TextColorsResetsPasswordEmails pt-2">
          Enter your new password for your account.
        </p>
      </div>
      <div className="MoneyAfricaRestEmailForm p-3">
        <h5 className="text-font pt-3 h6 NewPasswordTextPadding">
          New Password
        </h5>
        <div className="d-flex justify-content-between aligns-item-center pt-3">
          <div className="RememberPasswordText">
            <img src={Lock} />
          </div>
          <div className="RememberPasswordTextButton">
            <img src={LockEye} />
          </div>
        </div>
        <input className="TextColorsResetsPasswordEmailsMarginRight" />
      </div>
      <div className="MoneyAfricaRestEmailForm p-3">
        <h5 className="text-font pt-3 h6 NewPasswordTextPadding">
          Confirm Password
        </h5>
        <div className="d-flex justify-content-between aligns-item-center pt-3">
          <div className="RememberPasswordText">
            <img src={Lock} />
          </div>
          <div className="RememberPasswordTextButton">
            <img src={LockEye} />
          </div>
        </div>
        <input className="TextColorsResetsPasswordEmailsMarginRight" />
      </div>
      <div className="ResetPasswordButton ResetPasswordButtonMargin pt-3">
        <input
          type="text"
          value="Reset Password"
          className="text-white bg-danger p-2 ResetPasswordButtonRadius"
        />
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaResetPassword;
