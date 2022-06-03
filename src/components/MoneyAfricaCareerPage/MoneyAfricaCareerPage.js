/** @format */

import React from "react";
import CareerBannerImage from "../../images/Group 8146.png";
import ReadMoreButton from "../../images/Group 8147.png";
import LadyBackgroundImage from "../../images/Group 8148.png";
import Lines from "../../images/Group 8151.png";
const MoneyAfricaCareerPage = () => {
  return (
    <React.Fragment>
      <div className="containerCareerBackgroundImage p-5">
        <div className="container-fluid">
          <img src={CareerBannerImage} className="container-fluid" />
        </div>
      </div>
      <div className="ContainerCareerBackgroundColor p-5 bg-color">
        <div className="text-font">
          <p className="h3 text-font text-center py-5 fw-bold">
            Values that define us
          </p>
        </div>
        <div className="container">
          <div className="d-flex justify-content-between py-5">
            <div>
              <p className="text-font fw-bold text-center h3">
                Don't say nothing
              </p>
              <p className="text-font py-3 text-center">
                Speak your mind. Challenge. Cheer.
                <br /> Converse. Do it honestly and respectfully.
              </p>
            </div>
            <div>
              <p className="text-font fw-bold text-center h3">
                Own the outcome
              </p>
              <p className="text-font py-3 text-center">
                Be invested beyond role, experience or
                <br /> title. You are the master of one.
              </p>
            </div>
            <div>
              <p className="text-font fw-bold text-center h3">
                Change shoes often
              </p>
              <p className="text-font py-3 text-center">
                With ourselves. With our users. And
                <br /> without judgment.
              </p>
            </div>
          </div>
        </div>
      </div>
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

      <div className="BackgroundContainerBackgroundImageCareer">
        <img src={LadyBackgroundImage} className="img-fluid " />
      </div>

      <div className="ContainerWithCareerTextDiscription p-4">
        <div className="container">
          <div className="grid">
            <div className="row py-5">
              <div className="col-md-6">
                <p className="h3 text-font fw-bold">Team & Process</p>
                <p className="text-font">
                  The team mainly comes from an engineering background
                  <br /> with a strong focus in product development. We like
                  <br /> difficult challenges and we believe there’s no
                  technical
                  <br /> problem we can’t solve.‍
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex align-item-center justify-content-evenly">
                  <div>
                    <img src={Lines} />
                  </div>
                  <div className="p-1">
                    <p className="text-font pt-2 h5 fw-bold">
                      Phone validation
                    </p>
                    <p className="text-font ">
                      We’ll talk about key motivations, added
                      <br /> values, motivations and job match.
                    </p>
                    <p className="text-font PaddingTopForDescriptionTwo h5 fw-bold">
                      Phone validation
                    </p>
                    <p className="text-font ">
                      We’ll talk about key motivations, added
                      <br /> values, motivations and job match.
                    </p>
                    <p className="text-font PaddingTopForDescription h5 fw-bold">
                      Phone validation
                    </p>
                    <p className="text-font ">
                      We’ll talk about key motivations, added
                      <br /> values, motivations and job match.
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

export default MoneyAfricaCareerPage;
