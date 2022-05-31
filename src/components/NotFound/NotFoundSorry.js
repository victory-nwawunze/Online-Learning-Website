/** @format */

import React from "react";
import { Link } from "react-router-dom";
import SorryGiff from "../../images/sorry.gif";
const NotFoundSorry = () => {
  return (
    <React.Fragment>
      <div className="text-center h1">
        <img src={SorryGiff} />
        <h3> : ( Page not found</h3>
        <Link to="/">
          <button className="btn btn-outline-primary">
            Go back to Guest Page
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFoundSorry;
