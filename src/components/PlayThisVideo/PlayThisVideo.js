/** @format */

import React from "react";
import BreadCrumbs from "../../images/Breadcrumbs.png";
import PreviousIcon from "../../images/PreviousIcon.png";
import SmallLine from "../../images/SmallLine.png";
import NextIcon from "../../images/NextIcon.png";
import ShareIcon from "../../images/ShareIcon.png";
import SmallThreeLineIcon from "../../images/SmallThreeLineIcon.png";
import MenuImage from "../../images/MenuImage.png";
import PlayIconImage from "../../images/PlayIconImage.png";
import LevelsIcon from "../../images/LevelsIcon.png";
import SmallClockIconImage from "../../images/SmallClockIconImage.png";
const PlayThisVideo = () => {
  return (
    <React.Fragment>
      <div className="PlayVideoBackgroundImage p-5">
        <div className="container-fluid hover">
          <div className="PositionMenuImage">
            <img src={MenuImage} />
          </div>
          <div className="PositionPlayIconImage text-center py-4">
            <img src={PlayIconImage} />
          </div>
          <p className="PlayTextFont text-center text-white">
            Preview this course
          </p>
        </div>
      </div>
      <div className="PlayVideoDescription p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-8">
                <p className="text-font TaxTextFont">
                  What is a Tax Free Savings Account (TFSA)
                </p>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex">
                      <div>
                        <img src={LevelsIcon} />
                      </div>
                      <div>
                        <p className="IntermediateText  mx-1">Intermediate</p>
                      </div>
                      <div className="d-flex">
                        <div className="mx-1">
                          <img src={SmallClockIconImage} />
                        </div>
                        <div>
                          <p className="text-font">15 mins</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">
                      <div>
                        <input
                          type="button"
                          value="MoneyAfrica"
                          className="p-1 px-2 mx-1 ButtonStyleMoneyAfrica"
                        />
                      </div>
                      <div>
                        <input
                          type="button"
                          value="Privacy"
                          className="p-1 px-2 mx-1 ButtonStylePrivacy"
                        />
                      </div>
                      <div>
                        <input
                          type="button"
                          value="Privacy"
                          className="p-1 px-2 mx-1 ButtonStyleMining"
                        />
                      </div>
                      <div>
                        <input
                          type="button"
                          value="+3"
                          className="p-1 px-2 mx-1 ButtonStylePlusThree fw-bold"
                        />
                      </div>
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

export default PlayThisVideo;
