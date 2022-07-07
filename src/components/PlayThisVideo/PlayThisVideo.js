/** @format */

import React from "react";
import BreadCrumbs from "../../images/Breadcrumbs.png";
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
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlayThisVideo;
