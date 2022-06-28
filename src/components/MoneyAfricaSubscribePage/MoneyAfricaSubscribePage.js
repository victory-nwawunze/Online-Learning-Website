/** @format */

import React from "react";
import MoneyAfricaLogo from "../../images/Group 8162.png";
import MoneyAfricaSubscribePagePrice from "../../images/Group 8164.png";
import DescriptionAmount from "../../images/IllustrationAmount.png";
import MarkedCircle from "../../images/MarkedCircle.png";
const MoneyAfricaSubscribePage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSubscribePage p-5">
        <div className="text-center">
          <img src={MoneyAfricaLogo} />
          <p className="text-center pt-3 fw-bold text-font h2">
            Choose your preferred plan
          </p>
          <p className="text-center text-font SignUpFormInputFontColor">
            Choose a plan to procees and have access to all the
            <br /> video and article courses on our platform.
          </p>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="des-1 p-3 DescriptionillusterationBorderRadius">
            <div className="description-Amount py-3">
              <img src={DescriptionAmount} />
            </div>
            <div className="descriptionTextIllustration">
              <div className="d-flex justify-content-between  align-items-center">
                <div>
                  <img src={MarkedCircle} />
                </div>
                <div>
                  <p className="text-font px-4 ">Autorenews every 3 months.</p>
                </div>
              </div>
              <div className="d-flex justify-content-between  align-items-center">
                <div>
                  <img src={MarkedCircle} />
                </div>
                <div>
                  <p className="text-font px-4 ">
                    Access to everything - video &<br /> article courses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="des-2 p-2 ">
            <p className="text-center p-3 text-font ReconmendedBackgroundColorText">
              Recommended
              <div className="ReconmendedBackgroundColorContent px-3"></div>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSubscribePage;
