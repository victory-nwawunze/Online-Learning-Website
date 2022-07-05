/** @format */

import React from "react";
import SmallMoneyAfricaImage from "../../images/SmallMoneyAfricaImage.png";
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
      </div>
    </React.Fragment>
  );
};

export default ResetPassWordEmailSent;
