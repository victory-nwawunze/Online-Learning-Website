/** @format */

import React from "react";
import TimesIcon from "../../images/Times.png";
import DescritptionWalletImage from "../../images/DescriptionWallet.png";
import BriefCaseImage from "../../images/Group 8152.png";
const SubscriptionChooseSubscriptionPlan = () => {
  return (
    <React.Fragment>
      <div className="SubscriptionChooseSubscriptionPlan">
        <div className="HeaderSubscriptionChooseSubscriptionPlan  p-3">
          <div className="ChoosePositionTimesIcon">
            <img src={TimesIcon} />
          </div>
          <p className="text-font text-center h3 fw-bold mt-3">
            Choose subscription type
          </p>
          <p className="text-font text-center mt-3 ChoosePreferredPlanDescriptionTextFontSizeAndColor">
            Let us know how often you want the payment to be
            <br /> processed.
          </p>
          <div className="d-flex justify-content-center">
            <div>
              <div className="CardBoder mx-3 p-4">
                <div className="text-center">
                  <img src={DescritptionWalletImage} />
                </div>
                <p className="text-font fw-bold text-center h4">Auto-renew</p>
                <p className="text-font text-center FontSizeTypography">
                  Subscription charges would be deducted
                  <br /> from your account every month.
                </p>
              </div>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubscriptionChooseSubscriptionPlan;
