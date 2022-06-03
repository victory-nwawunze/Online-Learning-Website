/** @format */

import React from "react";
import ReadMoreButton from "../../images/Group 8147.png";
import CareerBackgroundImageAndText from "../CareerBackgroundImageAndText/CareerBackgroundImageAndText";
import CareerBannerImage from "../CareerBannerImage/CareerBannerImage";
import CareerTextBanner from "../CareerTextBanner/CareerTextBanner";
const MoneyAfricaCareerPage = () => {
  return (
    <React.Fragment>
      <CareerBannerImage />
      <CareerTextBanner />
      <div className="CareerDescriptionText p-5">
        <p className="text-font text-center fw-bold h1 pt-5">
          Available positions
        </p>
        <div className="container">
          <div className="grid">
            <div className="row py-4">
              <div className="col-md-12 p-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="text-font fw-bold">
                          Marketing specialist
                        </p>
                        <small className="text-font SmallTextFont">
                          Onsite - Lagos, Nigeria
                        </small>
                      </div>
                      <div className="hover">
                        <img src={ReadMoreButton} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 p-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="text-font fw-bold">Product Designer</p>
                        <small className="text-font SmallTextFont">
                          Onsite/Remote - Lagos, Nigeria
                        </small>
                      </div>
                      <div className="hover">
                        <img src={ReadMoreButton} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 p-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="text-font fw-bold">
                          Marketing specialist
                        </p>
                        <small className="text-font SmallTextFont">
                          Onsite - Lagos, Nigeria
                        </small>
                      </div>
                      <div className="hover">
                        <img src={ReadMoreButton} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 p-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="text-font fw-bold">
                          Marketing specialist
                        </p>
                        <small className="text-font SmallTextFont">
                          Onsite - Lagos, Nigeria
                        </small>
                      </div>
                      <div className="hover">
                        <img src={ReadMoreButton} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CareerBackgroundImageAndText />
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPage;
