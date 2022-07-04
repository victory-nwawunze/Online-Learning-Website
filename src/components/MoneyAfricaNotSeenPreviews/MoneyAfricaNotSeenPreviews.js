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
      <div className="CommentSection p-3">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">
              <div className="col-md-8">
                <p className="fw-bold text-font h3 mt-5">About this course</p>
                <p className="text-font">
                  In this class, Documentary Photographer and Photojournalist,
                  KC Nwakalor breaks down the various
                  <br /> compositional techniques you can apply in order to have
                  a better outcome in your photographs.
                </p>
                <p className="text-font mt-5">
                  Composition refers to the placement and relationship of
                  elements within a picture. The arrangement of <br />
                  elements in a scene, the angle they are shot at, the height we
                  shoot from, and the distance the photo is
                  <br /> taken from, can completely change the final outcome of
                  the photograph. The composition can
                  <br /> ultimately determine the difference between a good and
                  a bad...Show more.
                </p>
              </div>
              <div className="col-md-4">2</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaNotSeenPreviews;
