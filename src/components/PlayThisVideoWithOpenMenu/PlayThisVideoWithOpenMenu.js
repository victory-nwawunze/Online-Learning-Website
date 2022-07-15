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
            <div>
              <img src={ChevRight} />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayThisVideoWithOpenMenu;
