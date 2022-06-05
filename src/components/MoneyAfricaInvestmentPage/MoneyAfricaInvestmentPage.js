/** @format */

import React from "react";
import CheveronArrowDown from "../../images/ChevronArrowDown.png";
import InputDropDownIcon from "../../images/Group 8155.png";
import TalkToAnExpertButton from "../../images/Primary color.png";
const MoneyAfricaInvestmentPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaInvestmentPage p-5">
        <p className="text-font fw-bold text-center h2 py-4">Calculate your </p>
        <p className="text-center text-font display-3">
          Investment Calculator
          <span className="px-3">
            <img src={CheveronArrowDown} />
          </span>
        </p>
        <hr className="HrLine" />
        <p className="text-font text-center py-3">
          This calculator helps you determine how much your periodic
          <br /> investments will amount to in the future.
        </p>
      </div>
      <div className="MoneyAfricaInvestmentPageCard p-5">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <p className="text-font  py-4">Monthly Investment amount</p>
                <div className="InputWithContainer">
                  <input
                    type="text"
                    placeholder="$100.00"
                    className="inputText"
                  />
                  <div className="InputTypeChevronDropdownIcon">
                    <span className="text-font">Monthly</span>{" "}
                    <img src={InputDropDownIcon} />
                  </div>
                </div>
                <p className="text-font py-4">Currency</p>
                <div className="InputWithContainer">
                  <input
                    type="text"
                    placeholder="$(US dollars)"
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
                    placeholder="7.00%"
                    className="inputText"
                  />
                  <div className="InputTypeDropdownIcon">
                    <img src={InputDropDownIcon} />
                  </div>
                </div>
                <p className="text-font py-4">Years of investment</p>
                <div className="InputWithContainer">
                  <input type="text" placeholder="5" className="inputText" />

                  <div className="InputTypeDropdownIcon">
                    <img src={InputDropDownIcon} />
                  </div>
                </div>
              </div>
              <div className="col-md-6  shadow-lg py-1 px-5 ColumnSixBorderRadius">
                <div className="d-flex justify-content-between py-4">
                  <div>
                    <p className="text-font">If you invest</p>
                    <p className="text-font fw-bold fst-italic">$100.00</p>
                    <p className="text-font">monthly</p>
                  </div>
                  <div>
                    <p className="text-font">At an interest of</p>
                    <p className="text-font fw-bold fst-italic">7.0%</p>
                    <p className="text-font">per annum</p>
                  </div>
                  <div>
                    <p className="text-font">For a period of</p>
                    <p className="text-font fw-bold fst-italic">5 </p>
                    <p className="text-font">years</p>
                  </div>
                </div>
                <p className="text-font pt-5">You’ll get a total of</p>
                <p className="text-font h1 fw-bold">$7,141.55</p>
                <div className="d-flex pt-5  justify-content-between py-4  align-items-end">
                  <div>
                    <p className="text-font">Total contribution</p>
                    <p className="text-font h6 fw-bold">$6,000.00</p>
                  </div>
                  <div>
                    <p className="text-font">Total interest</p>
                    <p className="text-font h6 fw-bold">$1,141.55</p>
                  </div>
                  <div className="ThirdSectionCardBackground ToolsCardBorderRadius">
                    <p className="p-4">
                      For further advice, click on the
                      <br /> button below to speak to an
                      <br /> expert
                    </p>
                    <img
                      src={TalkToAnExpertButton}
                      className="img-fluid text-center px-4  pb-2"
                    />
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

export default MoneyAfricaInvestmentPage;
