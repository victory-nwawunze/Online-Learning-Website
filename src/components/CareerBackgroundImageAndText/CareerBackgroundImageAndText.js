/** @format */

import React from "react";
import LadyBackgroundImage from "../../images/Group 8148.png";
import Lines from "../../images/Group 8151.png";
const CareerBackgroundImageAndText = () => {
  return (
    <React.Fragment>
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
                      Onsite interview
                    </p>
                    <p className="text-font ">
                      For about two hours, you work with our team,
                      <br /> syncing up on the technical interview.
                    </p>
                    <p className="text-font PaddingTopForLastDescription h5 fw-bold">
                      Culture test
                    </p>
                    <p className="text-font ">
                      Get to know you better, over drinks sometimes to
                      <br /> validate that you’re a perfect fit.
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

export default CareerBackgroundImageAndText;
