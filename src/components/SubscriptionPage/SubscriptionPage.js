/** @format */

import React from "react";
import Premium from "../../images/Group 8119.png";
import TaskImage from "../../images/Group 8120.png";
import PriceNumber from "../../images/Group 8121.png";
import MarkIcon from "../../images/Group 8122.png";
import SubscribeButton from "../../images/Group 8123.png";
import PriceNumberTwo from "../../images/Group 8124.png";
import Frame from "../../images/Frame.png";
import ButtonImg from "../../images/Group 1300.png";
import RighButton from "../../images/right.png";
import LeftButton from "../../images/left.png";
import Nonact from "../../images/Button/nonact/left.png";
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
              <div className="FAQ p-5">
                <h4 className="text-center text-font h3 mt-4">
                  Frequently asked questions
                </h4>
              </div>
              <div className="container">
                <div className="d-flex justify-content-center justify-content-between">
                  <div>
                    <p className="text-font fw-bold">
                      Do i have a personal instructor ot i have to watch the
                      course video ?
                    </p>
                  </div>
                  <div>
                    <img src={Frame} className="img-fluid hover" />
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-center justify-content-between">
                  <div>
                    <p className="text-font fw-bold">
                      How do i enroll in the MoneyAfrica platform ?
                    </p>
                  </div>
                  <div>
                    <img src={Frame} className="img-fluid hover" />
                  </div>
                </div>
                <hr />
                <div className="d-flex justify-content-center justify-content-between">
                  <div>
                    <p className="text-font fw-bold">
                      What is the duration of the course ?
                    </p>
                  </div>
                  <div>
                    <img src={Frame} className="img-fluid hover" />
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sendMessage p-3 text-center hover">
        <small>
          Have more enquires ?
          <span className="text-danger">Send us a message</span>
        </small>
      </div>

      <div className="TrustedText p-4">
        <h4 className="text-font text-center h2 fw-bold">
          Trusted by thousand of <br /> Happy customers
        </h4>
        <p className="text-font text-center">
          These are the stories of our customers who have joined us with
          <br /> great pleasure when using this crazy feature.
        </p>
      </div>
      <div className="textCards p-4">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body border border-primary">
                    <h6 className="text-font fw-bold">Ayomide</h6>
                    <p className="text-font">
                      “My portfolio has almost reached the $5000 <br /> ROI
                      mark. Omg! I’m so excited!! This is true <br /> definition
                      of making your money work for you.
                      <br /> Now i wish i started earlier but still,no regrets.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card paddingBottom">
                  <div className="card-body">
                    <h6 className="text-font fw-bold">Smith</h6>
                    <p className="text-font">
                      “My friend joined months ago and she has <br /> become
                      better with her finances.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card ">
                  <div className="card-body">
                    <h6 className="text-font fw-bold">Purplecupshop</h6>
                    <p className="text-font">
                      “One of my best decisions was joining this
                      community.MoneyAfrica changed my attitude to money for
                      good. I learnt a lot in a session with Tosin including how
                      to hold and HODL. A valuable lesson that saw one
                      investment recover to +33% after a long dip of -19%.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="iconsForwardAndBackward p-3">
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img src={ButtonImg} className="hover" />
                    </div>
                    <div>
                      <img src={LeftButton} className="hover mb-4" />
                      <img src={RighButton} className="hover " />
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

export default SubscriptionPage;
