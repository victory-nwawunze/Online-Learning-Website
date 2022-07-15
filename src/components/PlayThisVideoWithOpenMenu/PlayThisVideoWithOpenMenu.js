/** @format */

import React from "react";
import BreadCrumbComponent from "../BreadCrumbComponent/BreadCrumbComponent";
import BlackMenuImage from "../../images/BlackMenuImage.png";
import SmallPlayIcon from "../../images/SmallPlayIcon.png";
import SmallRewindForwardIcon from "../../images/SmallPlayRewindForward.png";
import SmallRewindBackwardIcon from "../../images/SmallRewindBackwardIcon.png";
import PlayLineImage from "../../images/PlayLineImage.png";
import ZoomImageIcon from "../../images/ZoomIcon.png";
import ChevRight from "../../images/ChevRight.png";
import PlayOneIcon from "../../images/PlayOne.png";
import ClockIcon from "../../images/Clock.png";
const PlayThisVideoWithOpenMenu = () => {
  return (
    <React.Fragment>
      <BreadCrumbComponent />
      <div className="BackgroundBannerVideoImage">
        <div className="container-flui">
          <div className="BlackMenuImage">
            <img src={BlackMenuImage} />
          </div>
        </div>
        <div className="PositionPlayVideosFunctionalities MarginTopVideoPlayersFunctionality">
          <div className="d-flex justify-content-between bC p-4">
            <div>
              <div className="d-flex">
                <div>
                  <div className="mx-2">
                    <img src={SmallPlayIcon} />
                  </div>
                </div>
                <div>
                  <div className="mx-2">
                    <img src={SmallRewindForwardIcon} />
                  </div>
                </div>
                <div>
                  <div className="mx-2">
                    <img src={SmallRewindBackwardIcon} />
                  </div>
                </div>
                <div>
                  <div className="mx-2 PlayVideoTextFontStyle">
                    <p>00:57</p>
                  </div>
                </div>
                <div>
                  <div className="mx-2 ">
                    <img src={PlayLineImage} />
                  </div>
                </div>
                <div>
                  <div className="mx-2 PlayVideoTextFontStyle">
                    <p>2:05</p>
                  </div>
                </div>
                <div>
                  <div className="mx-2">
                    <img src={ZoomImageIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="PositionMenuOpen">
        <div className="BgForContent">
          <div className="d-flex justify-content-between">
            <div>
              <p className="CCStyles">Course content</p>
            </div>
            <div className="CRstyles">
              <p className="X-close">x</p>
            </div>
            <div className="PositionTimesIcon">
              <img src={ChevRight} />
            </div>
          </div>
        </div>
        <div className="TextDoc mt-3">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex ">
                  <div>
                    <img src={PlayOneIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">What is a Tax Free...</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <img src={ClockIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">15 mins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <div className="d-flex ">
                  <div>
                    <img src={PlayOneIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">What is an RRSP &...</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <img src={ClockIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">15 mins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <div className="d-flex ">
                  <div>
                    <img src={PlayOneIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">Chequing vs Savin...</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <img src={ClockIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">15 mins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <div className="d-flex ">
                  <div>
                    <img src={PlayOneIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">What's an RESP (R...</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <img src={ClockIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">15 mins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <div className="d-flex ">
                  <div>
                    <img src={PlayOneIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">What is a Corporat...</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <img src={ClockIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">15 mins</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <div>
                <div className="d-flex ">
                  <div>
                    <img src={PlayOneIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">What's a LIRA?</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <div>
                    <img src={ClockIcon} />
                  </div>
                  <div>
                    <p className="TaxFreeText">15 mins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="BgForContent">
          <div className="d-flex">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayThisVideoWithOpenMenu;
