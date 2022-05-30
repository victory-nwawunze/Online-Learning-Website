/** @format */

import React from "react";
import DescLogo from "../images/Group 8097.jpg";
import DescLogoTwo from "../images/Group 8098.jpg";
import StudentImageOne from "../images/Group 8099.jpg";
import StudentImageTwo from "../images/Group 8100.jpg";
import WalletImage from "../images/Group 8101.jpg";
const ContainerImages = () => {
  return (
    <React.Fragment>
      <div className="containerImages p-5 ">
        <div className="text-dark  text-center fw-bold text-font py-5">
          <p className="display-5">Explore a variety of powerful</p>
          <p className="display-4"> financial tools packaged for you.</p>
          <p className="text-font mb-5">
            We have amazing services that can aid you through your journey to
            making better financial
            <br /> decisions and becoming an expert at money management.
          </p>
        </div>
        {/* Cards */}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body bg-white">
                  <div className="row">
                    <div className="col">
                      <h3 className="text-font h3 fw-bold">Premium</h3>
                      <p className="text-font">
                        Talk to financial advisers, access powerful
                        <br /> resources to support your financial goals.
                      </p>
                    </div>
                  </div>
                  <div className="col text-center">
                    <img src={DescLogo} alt="DescLogo" className="img-size" />
                  </div>
                  <button className="btn btn-white btn-text">
                    Start learning
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body bg-white">
                  <div className="row">
                    <div className="col">
                      <h3 className="text-font h3 fw-bold">Learn</h3>
                      <p className="text-font">
                        Talk to financial advisers, access powerful
                        <br /> resources to support your financial goals.
                      </p>
                    </div>
                  </div>
                  <div className="col text-center">
                    <img
                      src={DescLogoTwo}
                      alt="DescLogoTwo"
                      className="img-size"
                    />
                  </div>
                  <button className="btn btn-white btn-text">
                    Start learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-2 p-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-white">
                    <div className="card-body">
                      <div className="col">
                        <h3 className="text-font h3 fw-bold">Communities</h3>
                        <p className="text-font">
                          Talk to financial advisers, access powerful
                          <br /> resources to support your financial goals.
                        </p>
                      </div>
                      <div className="col text-center">
                        <img
                          src={StudentImageOne}
                          alt="StudentImage"
                          className="StudentImage img-size"
                        />
                      </div>
                      <button className="btn btn-white btn-text">
                        Join our community
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header bg-white">
                    <div className="card-body">
                      <div className="col">
                        <h3 className="text-font h3 fw-bold">Kids</h3>
                        <p className="text-font">
                          Financial Education Made Easy for Kids. We run
                          <br /> boot camps that help kids acquire financial
                          literacy <br /> skills in a fun way.
                        </p>
                      </div>
                      <div className="col text-center">
                        <img
                          src={StudentImageTwo}
                          alt="StudentImage"
                          className="StudentImage img-size"
                        />
                      </div>
                      <button className="btn btn-white btn-text">
                        Register your kids
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="last-card p-5 bg-white mt-3 rounded ">
                <div className="d-flex py-3 align-items-center">
                  <div>
                    <h3 className="text-font h3 fw-bold">
                      Automated Digital Advisory
                    </h3>
                    <p className="text-font">
                      Improve your financial health and investment strategy
                      <br /> by answering a few questions we’ll ask you.
                    </p>
                    <button className="btn btn-white marginTop">
                      Learn more
                    </button>
                  </div>
                  <div>
                    <img src={WalletImage} className="img-fluid" />
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

export default ContainerImages;
