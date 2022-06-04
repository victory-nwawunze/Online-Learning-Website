/** @format */

import React from "react";
import LeftArrow from "../../images/LeftArrow.png";
const MoneyAfricaToolsPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaTools p-5 bg-color">
        <div className="container-fluid py-4">
          <p className="h2 text-font text-center fw-bold">
            Investment calculators & tools
          </p>
          <p className=" text-font text-center">
            Strengthen your financial strategy with this toolbox of
            do-it-yourself
            <br /> resources, or get personal financial advice from our
            advisors.
          </p>
        </div>
      </div>
      <div className="MoneyAfricaToolsCard p-5">
        <div className="container">
          <div className="grid">
            <div className="row py-4 ">
              <div className="col-md-6">
                <div className="card ToolsCardBorderRadius ">
                  <div className="card-body ">
                    <p className="text-font fw-bold h2 px-3 py-3">
                      Education Fund
                      <br /> estimate
                    </p>
                    <p className="text-font px-3">
                      This calculator helps you determine how much you
                      <br /> will need for school within a number of years
                    </p>
                    <p className="text-font PaddingTopAndLeftForToolsCardButton ToolsCardText">
                      Estimate your education funds{" "}
                      <span>
                        <img src={LeftArrow} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card ToolsCardBorderRadius">
                  <div className="card-body">
                    <p className="text-font fw-bold h2 px-3 py-4">
                      Savings Investment
                    </p>
                    <p className="text-font px-3">
                      This calculator helps you determine how much you
                      <br /> need to save monthly to meet a targeted amount
                      <br /> by the time you need it.
                    </p>
                    <p className="text-font PaddingTopAndLeftForToolsCardButton ToolsCardText">
                      Calculate your savings
                      <span>
                        <img src={LeftArrow} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaCardTwo p-2">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <div className="card ToolsCardBorderRadius">
                  <div className="card-body">
                    <p className="text-font fw-bold h2 px-3 py-3">
                      Investment Calculator
                    </p>
                    <p className="text-font px-3">
                      This calculator helps you determine how much
                      <br /> your periodic investments will amount to in the
                      <br /> future.
                    </p>
                    <p className="text-font PaddingTopAndLeftForToolsCardButton ToolsCardText">
                      Calculate your investment
                      <span>
                        <img src={LeftArrow} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card ToolsCardBorderRadius">
                  <div className="card-body ">
                    <p className="text-font fw-bold h2 px-3 py-2">
                      Retirement Portfolio
                      <br /> Calculator
                    </p>
                    <p className="text-font px-3">
                      Estimating Your Retirement Needs Using the Cost
                      <br /> of Living Approach
                    </p>
                    <p className="text-font PaddingTopAndLeftForToolsCardButton ToolsCardText">
                      Calculate your investment
                      <span>
                        <img src={LeftArrow} />
                      </span>
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

export default MoneyAfricaToolsPage;
