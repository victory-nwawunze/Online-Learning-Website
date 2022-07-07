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
    </React.Fragment>
  );
};

export default PlayThisVideo;
