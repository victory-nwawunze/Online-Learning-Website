/** @format */

import React from "react";
import TimesIcon from "../../images/Times.png";
import SmallWalletDiscriptionImage from "../../images/SmallWalletDescription.png";
import SmallCaseImage from "../../images/SmallCase.png";
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
        </div>
        <div className="SubscriptionCard">
          <div className="container">
            <div className="grid">
              <div className="row">
                <div className="col-md-6 ">
                  <div className="CardBoder p-3">
                    <div className="text-center">
                      <img
                        src={SmallWalletDiscriptionImage}
                        className="imageWidthAndHeight img-fluid"
                      />
                    </div>
                    <p className="text-font fw-bold text-center h4">
                      Auto-renew
                    </p>
                    <p className="text-font text-center FontSizeTypography">
                      Subscription charges would be deducted
                      <br /> from your account every month.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="CardBoder p-3">
                    <div className="text-center">
                      <img src={SmallCaseImage} />
                    </div>
                    <p className="text-font fw-bold text-center h4">
                      Auto-renew
                    </p>
                    <p className="text-font text-center FontSizeTypography">
                      Subscription charges would be deducted
                      <br /> from your account every month.
                    </p>
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

export default SubscriptionChooseSubscriptionPlan;
