/** @format */

import React from "react";
import MoneyAfricaVideoCards from "../MoneyAfricaVideoCards/MoneyAfricaVideoCards";

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
          <div className="d-flex justify-content-between  align-items-center">
            <div className="d-flex ">
              <p className="text-font fw-bold  h4 videoListingTextColor">
                Articles (14)
              </p>
              <span className="m-1 text-font   fw-bold videoListingTextPaddingLeft">
                Videos (14)
              </span>
            </div>
            <div>
              <p className="text-font SortVideoListFontSizeTextAndColor">
                <span className="videoListingTextColor"> Sort by</span> Latest
                videos
              </p>
            </div>
          </div>
        </div>
      </div>
      <MoneyAfricaVideoCards />
    </React.Fragment>
  );
};

export default MoneyAfricaVideoListing;
