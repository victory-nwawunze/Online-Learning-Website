/** @format */

import React from "react";
import PlayVideoDiscriptionComponent from "../PlayVideoDescriptionComponent/PlayVideoDiscriptionComponent";
import BreadCrumbComponent from "../BreadCrumbComponent/BreadCrumbComponent";
import MediaQueryComponent from "../MediaQueryComponent/MediaQueryComponent";
const VideoPlayingComponent = () => {
  return (
    <React.Fragment>
      <BreadCrumbComponent />
      <MediaQueryComponent />
      <PlayVideoDiscriptionComponent />
    </React.Fragment>
  );
};

export default VideoPlayingComponent;
