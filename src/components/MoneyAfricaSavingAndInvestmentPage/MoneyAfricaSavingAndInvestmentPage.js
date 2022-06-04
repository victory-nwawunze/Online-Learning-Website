/** @format */

import React from "react";
import CheveronArrowDown from "../../images/ChevronArrowDown.png";
import InputDropDownIcon from "../../images/Group 8155.png";
const MoneyAfricaSavingAndInvestmentPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaInvestmentPage p-5">
        <p className="text-font fw-bold text-center h2 py-4">Calculate your </p>
        <p className="text-center text-font display-3">
          Savings Goal Calculator
          <span className="px-3">
            <img src={CheveronArrowDown} />
          </span>
        </p>
        <hr className="HrLine" />
        <p className="text-font text-center py-3">
          This calculator helps you determine how much you need to save
          <br /> monthly to meet a targeted amount by the time you need it.
        </p>
      </div>
      <div className="MoneyAfricaInvestmentPageCard p-5">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <p className="text-font  py-4">Investment period (years)</p>
                <input type="text" placeholder="5" className="inputText" />
                <p className="text-font py-4">Currency</p>
                <div className="InputWithContainer">
                  <input
                    type="text"
                    placeholder="£(pounds)"
                    className="inputText"
                  />
                  <div className="InputTypeDropdownIcon">
                    <img src={InputDropDownIcon} />
                  </div>
                </div>
                <p className="text-font py-4">Interest rate per annum</p>
                <div className="InputWithContainer">
                  <input
                    type="text"
                    placeholder="5.00%"
                    className="inputText"
                  />
                  <div className="InputTypeDropdownIcon">
                    <img src={InputDropDownIcon} />
                  </div>
                </div>
                <p className="text-font py-4">Target Amount</p>
                <div className="InputWithContainer">
                  <input
                    type="text"
                    placeholder="£122,248.10"
                    className="inputText"
                  />
                  <div className="InputTypeDropdownIcon">
                    <img src={InputDropDownIcon} />
                  </div>
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

export default MoneyAfricaSavingAndInvestmentPage;
