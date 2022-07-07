/** @format */

import React from "react";
import BreadCrumbs from "../../images/Breadcrumbs.png";
import PreviousIcon from "../../images/PreviousIcon.png";
import SmallLine from "../../images/SmallLine.png";
import NextIcon from "../../images/NextIcon.png";
import ShareIcon from "../../images/ShareIcon.png";
import SmallThreeLineIcon from "../../images/SmallThreeLineIcon.png";
import LevelsIcon from "../../images/LevelsIcon.png";
import SmallClockIconImage from "../../images/SmallClockIconImage.png";
const PlayVideoDiscriptionComponent = () => {
  return (
    <React.Fragment>
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
                <p className="text-font mt-3">Summary of this video</p>
                <p className="SummaryTextFont">
                  In this class, Documentary Photographer and Photojournalist,
                  KC Nwakalor breaks down the various compositional techniques
                  you can apply in order to have a better outcome in your
                  photographs.
                </p>
                <p className="text-font mt-5">
                  Composition refers to the placement and relationship of
                  elements within a picture. The arrangement of elements in a
                  scene, the angle they are shot at, the height we shoot from,
                  and the distance the photo is taken from, can completely
                  change the final outcome of the photograph. The composition
                  can ultimately determine the difference between a good and a
                  bad.
                </p>
                <p className="text-font mt-5">Relevant links</p>
                <p className="text-danger text-font TextLine hover">
                  https://twitter.com/cci_lagos
                </p>
                <p className="text-danger text-font TextLine mt-4 hover">
                  https://laracasts.com/browse/all
                </p>
                <p className="text-danger text-font TextLine mt-4 hover">
                  https://dribbble.com/dipainhouse
                </p>
                <p className="text-danger text-font TextLine mt-4 hover">
                  Search Engine Optimamiztion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayVideoDiscriptionComponent;
