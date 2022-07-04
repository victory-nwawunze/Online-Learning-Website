/** @format */

import React from "react";

const MoneyAfricaVideoListing = () => {
  return (
    <React.Fragment>
      <div className="moneyAfricaVideoList pt-5">
        <div className="container">
          <div className="d-flex">
            <div>
              <p className="text-font  h1">Learn with videos</p>
            </div>
            <div>
              <p className="text-font  p-3">Filter Topics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="MoneyAfricaVideoListingArticleListing p-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="d-flex ">
              <p className="text-font fw-bold  h4 videoListingTextColor">
                Articles (14)
              </p>
              <span className="m-1 text-font  h4 fw-bold videoListingTextPaddingLeft">
                Videos (14)
              </span>
            </div>
            <div>2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaVideoListing;
