/** @format */

import React from "react";

import MenuImage from "../../images/MenuImage.png";
import PlayIconImage from "../../images/PlayIconImage.png";
import PlayVideoDiscriptionContainer from "../PlayVideoDescriptionComponent/PlayVideoDiscriptionContainer";

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
      <PlayVideoDiscriptionContainer />
    </React.Fragment>
  );
};

export default PlayThisVideo;
