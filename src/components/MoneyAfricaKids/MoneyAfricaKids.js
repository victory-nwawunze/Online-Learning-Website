/** @format */

import React from "react";
import IconImage from "../../images/Group 8113.svg";
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
    </React.Fragment>
  );
};

export default MoneyAfricaKids;
