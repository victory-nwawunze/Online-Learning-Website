/** @format */

import React from "react";
import SmallMoneyAfricaImage from "../../images/SmallMoneyAfricaImage.png";
import SmallImageIconImage from "../../images/SmallEmailIconImage.png";
const ResetPassWordEmailSent = () => {
  return (
    <React.Fragment>
      <div className="ResetPassWordEmailSent p-3">
        <div className="text-center mt-5">
          <img src={SmallMoneyAfricaImage} />
        </div>
        <p className="ForgetPasswordTextSize text-font text-center mt-3">
          Forgot password
        </p>
        <p className="text-center text-font ChoosePreferredPlanDescriptionTextFontSizeAndColor">
          Please provide the email address you used when you
          <br /> signed up for your MoneyAfrica account.
        </p>
        <div className="backgroundColorSentEmailMessageColor">
          <p className="text-center text-font EmailSentMessage pt-3">
            An email with password reset instructions has been
            <br /> sent to your email address.
          </p>
        </div>
        <div className="CenteredInputFiedDiv p-3">
          <p className="EmailAdressTypographFontSizeAndColor">Email Address</p>
          <img src={SmallImageIconImage} />
          <input
            type="text"
            placeholder="hassan.musa@moneyafrica.ng"
            className="RestPasswordInputField text-font"
          />
          <div className="d-flex justify-content-between">
            <div className="mt-4">
              <p className="text-font RememberPasswordLinkText">
                Remember Password?{" "}
                <span className="LoginTextColor">Log In</span>
              </p>
            </div>
            <div className="mt-4">2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassWordEmailSent;
