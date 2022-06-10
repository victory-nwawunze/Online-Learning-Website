/** @format */

import React from "react";
import MoneyAfricaLogo from "../../images/Group 8162.png";
const MoneyAfricaSignUpVerification = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSignUpVerification p-5">
        <div className="text-center">
          <img src={MoneyAfricaLogo} />
        </div>
        <p className="text-font h3 fw-bold text-center pt-4">
          Email Verification
        </p>
        <p className="text-font text-center SignUpFormInputFontColor">
          Protecting your account is our top priority. A verification
          <br /> code has been sent to your email address. Please input the
          <br /> code below to complete your registration.
        </p>
        <div className="d-flex align-items-center justify-content-between py-3">
          <div>
            <input className="box-1" placeholder="5" />
          </div>
          <div>
            <input className="box-1" placeholder="1" />
          </div>
          <div>
            <input className="box-1" placeholder="3" />
          </div>

          <div>
            <input className="box-1" placeholder="8" />
          </div>
          <div>
            <input className="box-1" placeholder="8" />
          </div>
          <div>
            <input className="box-1" placeholder="8" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSignUpVerification;
