/** @format */

import React from "react";
import NavigationMenuImage from "../../images/NavigationMenuCrumb.png";
import OneParticularVideo from "../../images/VideoDescription.png";
import StarIcon from "../../images/Group 8172.png";
import Tags from "../../images/Tags.png";
import ThreeTierBar from "../../images/ThreeTierPyramid 1.png";
import BlackClockIcon from "../../images/BlackClockIcon.png";
const MoneyAfricaNotSeenPreviews = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaNotSeenPreviewBannerColors p-3">
        <div className="container my-4">
          <img src={NavigationMenuImage} />
        </div>
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-5 my-3">
                <img src={OneParticularVideo} />
              </div>
              <div className="col-md-6 my-4">
                <div className="my-3">
                  <img src={Tags} />
                </div>
                <p className="text-font fw-bold h3 mt-3">
                  The Best Crypto Wallets for Binance
                  <br /> Smart Chain (BSC)
                </p>
                <div>
                  <img src={StarIcon} />
                </div>
                <div className="d-flex">
                  <div>
                    <div className="d-flex">
                      <div>
                        <img src={ThreeTierBar} />
                      </div>
                      <div>
                        <p className="text-font IntermediateTextFontSize m-1">
                          Intermediate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="d-flex">
                        <div>
                          <img src={BlackClockIcon} />
                        </div>
                        <div>
                          <p className="text-font IntermediateTextFontSize m-1">
                            45 mins
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stickerBackgroundColor p-3">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="text-font m-3">
              <p className="text-white">About this course</p>
            </div>
            <div className="text-font m-3">
              <p className="text-white">Course content</p>
            </div>
            <div className="text-font m-3">
              <p className="text-white">Ratings</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaNotSeenPreviews;
