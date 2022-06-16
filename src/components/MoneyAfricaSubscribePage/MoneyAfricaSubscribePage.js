/** @format */

import React from "react";
import MoneyAfricaLogo from "../../images/Group 8162.png";
import MoneyAfricaSubscribePagePrice from "../../images/Group 8164.png";
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
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSubscribePage;
