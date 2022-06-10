/** @format */

import React from "react";
import SignUpImage from "../../images/Group 8157.png";
const MoneyAfricaSignUpPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSignUpPage">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <p className="text-font fw-bold h4 text-center pt-5">
                  MoneyAfrica
                </p>
                <p className="text-font  text-center">
                  Money Africa is a subscription-based Education
                  <br /> Technology (EdTech) platform providing access to
                  <br /> free and paid financial education for learners.
                </p>
                <div className="SignUpImageMoneyAfrica">
                  <img src={SignUpImage} className="img-fluid " />
                </div>
              </div>
              <div className="col-md-6">2</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSignUpPage;
