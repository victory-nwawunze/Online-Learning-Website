/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PNFimage from "../../images/Error404.png";
const NotFoundSorry = () => {
  return (
    <React.Fragment>
      <div className="text-center">
        <div className="mt-5">
          <img src={PNFimage} />
        </div>
        <p className="PNFtext text-font">Page not found</p>
        <p className="MorePNFtext text-font">
          The page you’re looking for is unavailable{" "}
        </p>
        <Link to="/">
          <input type="button" value="Take me home" className="TMHButton" />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFoundSorry;
