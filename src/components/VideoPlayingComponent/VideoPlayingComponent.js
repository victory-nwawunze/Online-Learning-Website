/** @format */

import React from "react";

import BlackMenuImage from "../../images/BlackMenuImage.png";
import SmallPlayIcon from "../../images/SmallPlayIcon.png";
import SmallRewindForwardIcon from "../../images/SmallPlayRewindForward.png";
import SmallRewindBackwardIcon from "../../images/SmallRewindBackwardIcon.png";
import PlayLineImage from "../../images/PlayLineImage.png";
import ZoomImageIcon from "../../images/ZoomIcon.png";
import PlayVideoDiscriptionComponent from "../PlayVideoDescriptionComponent/PlayVideoDiscriptionComponent";
import BreadCrumbComponent from "../BreadCrumbComponent/BreadCrumbComponent";
const VideoPlayingComponent = () => {
  return (
    <React.Fragment>
      <BreadCrumbComponent />
      <div className="BackgroundBannerVideoImage">
        <div className="container-fluid">
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
      <PlayVideoDiscriptionComponent />
    </React.Fragment>
  );
};

export default VideoPlayingComponent;
