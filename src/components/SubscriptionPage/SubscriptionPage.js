/** @format */

import React from "react";
import Premium from "../../images/Group 8119.png";
import TaskImage from "../../images/Group 8120.png";
import PriceNumber from "../../images/Group 8121.png";
import MarkIcon from "../../images/Group 8122.png";
import SubscribeButton from "../../images/Group 8123.png";
import PriceNumberTwo from "../../images/Group 8124.png";
import Frame from "../../images/Frame.png";
import Nonact from "../../images/Button/nonact/left.png";
import FrequentlyAskQuestion from "../FrequentlyAskQuestion/FrequentlyAskQuestion";
const SubscriptionPage = () => {
  return (
    <React.Fragment>
      <div className="subScribePageBanner p-5 banner-color">
        <div className="text-center py-5">
          <h3 className="text-font h3 fw-bold">Become a partner</h3>
          <p className="text-font">
            Being a partner gives you access to financial advisers and
            <br /> powerful resources to support your financial goals.
          </p>
        </div>
      </div>

      <div className="subScribePagePricing p-5">
        <div className="container py-5">
          <div className="grid">
            <div className="row">
              <div className="col-md-4">
                <h4 className="text-font fw-bold h4">
                  Grow your financial muscle
                </h4>
                <p className="text-font pt-3">
                  Learn how to manage, save and invest your
                  <br /> money. Learn how to manage, save and invest
                  <br /> your money
                </p>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={Premium} className="img-fluid hover" />
                      <div>
                        <img src={TaskImage} className="img-fluid hover" />
                      </div>
                    </div>
                    <img src={PriceNumber} className="img-fluid pt-3 hover" />
                    <hr />
                    <div className="d-flex align-items-center pt-2 ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font  ">Last an entire year</small>
                    </div>
                    <div className="d-flex align-items-center ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2 pt-2" />
                      </div>
                      <small className="text-font  ">
                        Curated Personalize Investment
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font ">
                        Detail emails every 2 weeks on the <br /> key changes in
                        the market.
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font ">
                        Session every 3 months with
                        <br />
                        Finance expert
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font ">
                        Cover global stocks and other
                        <br />
                        international investment extensively
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
                      <div>
                        <img src={TaskImage} className="img-fluid hover" />
                      </div>
                    </div>
                    <img
                      src={PriceNumberTwo}
                      className="img-fluid pt-3 hover"
                    />
                    <hr />
                    <div className="d-flex align-items-center ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2 pt-2" />
                      </div>
                      <small className="text-font  ">
                        Email support with financial expert
                      </small>
                    </div>
                    <div className="d-flex align-items-center ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2 pt-2" />
                      </div>
                      <small className="text-font  ">
                        Curated Personalize Investment
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font ">
                        Detail emails every 2 weeks on the <br /> key changes in
                        the market.
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-3 ">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font ">
                        Session every 3 months with
                        <br />
                        Finance expert
                      </small>
                    </div>
                    <div className="d-flex align-items-center pt-2">
                      <div>
                        <img src={MarkIcon} className="img-fluid m-2" />
                      </div>
                      <small className="text-font ">Last an entire year.</small>
                    </div>
                  </div>
                  <div className="container px-3 py-3 hover">
                    <img src={SubscribeButton} />
                  </div>
                </div>
              </div>
              <FrequentlyAskQuestion />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SubscriptionPage;
