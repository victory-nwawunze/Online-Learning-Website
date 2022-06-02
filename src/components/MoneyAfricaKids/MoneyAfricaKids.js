/** @format */

import React from "react";
import IconImage from "../../images/Group 8113.svg";
import MoneyAfricaKidsImage from "../../images/Group 8100.jpg";
import MarkUpIcon from "../../images/Group 8126.png";
import FrequentlyAskQuestion from "../FrequentlyAskQuestion/FrequentlyAskQuestion";
const MoneyAfricaKids = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaKidsBanner p-5 banner-color">
        <div className="text-center py-5">
          <h3 className="text-font h3 fw-bold">
            Financial Education made easy <br />
            For Kids
          </h3>
        </div>
      </div>
      <div className="BootcampForKids p-3">
        <div className="text-font py-4">
          <h4 className="h2 text-center">Upcoming bootcamps </h4>
          <p className="text-font text-center">
            Our boot camps help kids acquire financial literacy
            <br /> skills in a fun way.
          </p>
        </div>
      </div>

      <div className="ContainerWithText p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <div className="CardWithDescription cardBorderRadius py-4 px-4">
                  <h3 className="text-font fw-bold h2">Summer Boot Camp</h3>
                  <p className="text-font h5 ">(August – September 2021)</p>
                  <small className="MoneyAfricaDiscountTextColor text-font fw-bold">
                    *up to 20% discount for siblings*
                  </small>
                  <p className="enrollKidButtonColor text-font mt-5">
                    Enrol your kids
                    <span>
                      <img src={IconImage} className="p-1" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="CardWithDescription cardBorderRadius py-4 px-4">
                  <h3 className="text-font fw-bold h2">Weekend Boot Camp</h3>
                  <p className="text-font h5 ">(Quarterly Cohorts)</p>
                  <small className="MoneyAfricaDiscountTextColor text-font fw-bold">
                    *up to 20% discount for siblings*
                  </small>
                  <p className="enrollKidButtonColor text-font mt-5">
                    Enrol your kids
                    <span>
                      <img src={IconImage} className="p-1" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ConatinerMoneyAfricaKids p-4">
        <div className="container">
          <div className="grid">
            <div className="row py-4">
              <div className="col-md-6">
                <img src={MoneyAfricaKidsImage} className="KidsImages" />
              </div>
              <div className="col-md-6 ">
                <h3 className="text-font MarginTop paddingLeftAndRight fw-bold">
                  Here’s why you should enrol
                  <br /> your child
                </h3>
                <div className="d-flex align-items-center paddingLeftAndRight">
                  <div>
                    <img src={MarkUpIcon} className="p-1" />
                  </div>
                  <div>
                    <p className="text-font mt-3 p-2">
                      Real-time engagements with our educators
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center paddingLeftAndRight">
                  <div>
                    <img src={MarkUpIcon} className="p-1" />
                  </div>
                  <div>
                    <p className="text-font mt-3 p-2">
                      Learn how to manage your expenses
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center paddingLeftAndRight">
                  <div>
                    <img src={MarkUpIcon} className="p-1" />
                  </div>
                  <div>
                    <p className="text-font mt-3 p-2">
                      Learn about savings, investment and insurance
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center paddingLeftAndRight">
                  <div>
                    <img src={MarkUpIcon} className="p-1" />
                  </div>
                  <div>
                    <p className="text-font mt-3 p-2">
                      Learn how to cultivate good financial habits
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center paddingLeftAndRight">
                  <div>
                    <img src={MarkUpIcon} className="p-1" />
                  </div>
                  <div>
                    <p className="text-font mt-3 p-2">
                      Ask questions and get support
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center paddingLeftAndRight">
                  <div>
                    <img src={MarkUpIcon} className="p-1" />
                  </div>
                  <div>
                    <p className="text-font mt-3 p-2">
                      Group discussion and games to support learning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrequentlyAskQuestion />
    </React.Fragment>
  );
};

export default MoneyAfricaKids;
