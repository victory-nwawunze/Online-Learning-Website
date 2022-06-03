/** @format */

import React from "react";
import SubscribeButton from "../../images/Group 8123.png";
import TwentyThousandNairaImage from "../../images/Group 8141.png";
import PerFreeTextImage from "../../images/Group 8142.png";
import FreeTextImage from "../../images/Text.png";
import MarkUpIcon from "../../images/Group 8143.png";
import MarkIcon from "../../images/Group 8122.png";
import Premium from "../../images/Group 8144.png";
import TaskImage from "../../images/Group 8120.png";
import PriceNumber from "../../images/Group 8121.png";
const MoneyAfricaAutomatedDigitalAdvisory = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaKidsBanner p-5 banner-color">
        <div className="text-center py-5">
          <h3 className="text-font h3 fw-bold">
            Financial health check. Automated
            <br /> investment advisory
          </h3>
        </div>
      </div>

      <div className="ContainerWithTextAndPricing p-4">
        <div className="container">
          <div className="grid">
            <div className="row py-5">
              <div className="col-md-4">
                <p className="text-font h3  fw-bold">
                  Grow you financial muscle
                </p>
                <p className="text-font">
                  Improve your financial health and investment <br /> strategy
                  by answering a few questions
                </p>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={FreeTextImage} className="img-fluid hover" />
                    </div>
                    <img
                      src={PerFreeTextImage}
                      className="img-fluid pt-3 hover"
                    />
                    <hr />
                    <div className="d-flex align-items-center pt-2 ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font fw-bold  ">
                        Choose your financial goals
                      </small>
                    </div>
                    <div className="d-flex align-items-center ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2 pt-2" />
                      </div>
                      <small className="text-font  fw-bold ">
                        Indicate progress
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font  fw-bold ">
                        Specify asset allocation mix
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font p-2  fw-bold">
                        Get portfolio allocation recommendation and investment
                        options
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font  fw-bold">
                        Portfolio rebalancing
                      </small>
                    </div>
                  </div>
                  <div className="container px-3 py-3 hover">
                    <img src={SubscribeButton} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={Premium} className="img-fluid hover" />
                    </div>
                    <img
                      src={TwentyThousandNairaImage}
                      className="img-fluid pt-3 hover"
                    />
                    <hr />
                    <div className="d-flex align-items-center pt-2 ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font fw-bold  ">
                        Choose your financial goals
                      </small>
                    </div>
                    <div className="d-flex align-items-center ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2 pt-2" />
                      </div>
                      <small className="text-font  fw-bold ">
                        Indicate progress
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font  fw-bold ">
                        Specify asset allocation mix
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font p-2  fw-bold">
                        Get portfolio allocation recommendation and investment
                        options
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font  fw-bold">
                        Portfolio rebalancing
                      </small>
                    </div>
                  </div>
                  <div className="container px-3 py-3 hover">
                    <img src={SubscribeButton} />
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

export default MoneyAfricaAutomatedDigitalAdvisory;
