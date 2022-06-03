/** @format */

import React from "react";
import CareerBannerImage from "../../images/Group 8146.png";
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
    </React.Fragment>
  );
};

export default MoneyAfricaCareerPage;
