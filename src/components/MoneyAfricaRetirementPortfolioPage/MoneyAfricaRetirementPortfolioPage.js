/** @format */

import React from "react";
import CheveronArrowDown from "../../images/ChevronArrowDown.png";
import InputDropDownIcon from "../../images/Group 8155.png";
import TalkToAnExpertButton from "../../images/Primary color.png";
const MoneyAfricaRetirementPortfolioPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaInvestmentPage p-5">
        <p className="text-font fw-bold text-center h2 py-4">Calculate your </p>
        <p className="text-center text-font display-3">
          Retirement Portfolio
          <span className="px-3">
            <img src={CheveronArrowDown} />
          </span>
        </p>
        <hr className="HrLine" />
        <p className="text-font text-center py-3">
          This calculator helps you determine how much you will need for
          <br /> school within a number of years
        </p>
      </div>
      <div className="MoneyAfricaRetirementPageFormAndCard p-5">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <p className="text-font fw-bold">Bio data</p>
                <p className="text-font">Current Age</p>
                <div className="DropDownArroContainer">
                  <input placeholder="30" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Retirement Age</p>
                <div className="DropDownArroContainer">
                  <input placeholder="60" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Investment Period - Years</p>
                <div className="DropDownArroContainer">
                  <input placeholder="30" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Investment Period - Months</p>
                <div className="DropDownArroContainer">
                  <input placeholder="360" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Retirement Destination</p>
                <div className="DropDownArroContainer">
                  <input placeholder="Europe" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Currency</p>
                <div className="DropDownArroContainer">
                  <input placeholder="€" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Life Expectancy (Years)</p>
                <div className="DropDownArroContainer">
                  <input placeholder="83" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
                <p className="text-font pt-5">Retirement Period</p>
                <div className="DropDownArroContainer">
                  <input placeholder="23" className="DataInput" />
                  <span>
                    <img src={InputDropDownIcon} />
                  </span>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="shadow-lg ColumnSixBorderRadius py-4 px-3">
                  <div className="d-flex justify-content-between py-4">
                    <div>
                      <p className="text-font">
                        If you are planning to retire in
                      </p>
                      <p className="text-font fw-bold fst-italic">30</p>
                      <p className="text-font">years time</p>
                    </div>
                    <div>
                      <p className="text-font">you need to invest</p>
                      <p className="text-font fw-bold fst-italic">€691.0</p>
                      <p className="text-font">monthly</p>
                    </div>
                    <div>
                      <p className="text-font">for the next</p>
                      <p className="text-font fw-bold fst-italic">30 </p>
                      <p className="text-font">years</p>
                    </div>
                  </div>
                  <p className="text-font pt-5">To have the </p>
                  <p className="text-font h1 fw-bold">€1,036,641.6</p>
                  <p className="text-font">you need for retirement</p>

                  <div className="d-flex pt-5  justify-content-between py-4  align-items-end">
                    <div>
                      <p className="text-font">Total contribution</p>
                      <p className="text-font h6 fw-bold">€6,000.00</p>
                    </div>
                    <div>
                      <p className="text-font">Total interest</p>
                      <p className="text-font h6 fw-bold">€1,141.55</p>
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
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaRetirementPortfolioPage;
