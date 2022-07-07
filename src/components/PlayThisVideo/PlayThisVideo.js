/** @format */

import React from "react";
import BreadCrumbs from "../../images/Breadcrumbs.png";
import PreviousIcon from "../../images/PreviousIcon.png";
import SmallLine from "../../images/SmallLine.png";
import NextIcon from "../../images/NextIcon.png";
import ShareIcon from "../../images/ShareIcon.png";
import SmallThreeLineIcon from "../../images/SmallThreeLineIcon.png";
const PlayThisVideo = () => {
  return (
    <React.Fragment>
      <div className="PlayVideoNavbar p-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div>
              <img src={BreadCrumbs} />
            </div>
            <div>
              <div className="d-flex">
                <div className="mx-2">
                  <img src={PreviousIcon} />
                </div>
                <div className="mx-2">
                  <img src={SmallLine} />
                </div>
                <div className="mx-2">
                  <img src={NextIcon} />
                </div>
                <div className="mx-2">
                  <img src={ShareIcon} />
                </div>
                <div className="mx-2">
                  <img src={SmallThreeLineIcon} />
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
