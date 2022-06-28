/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaLogoGreen 1.png";
const MoneyAfricaArticleListingPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="d-flex align-items-center">
          <div>
            <p className="fw-bold text-font h3 mt-3">Learn with article</p>
          </div>
          <div>
            <p className="text-font SmallTextFontPrice  mt-4 p-3">
              Filter topics
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-items-center">
          <div>
            <p className="fw-bold text-font h3 mt-3">Articles (6)</p>
          </div>
          <div>
            <p className="text-font SmallTextFontPrice  mt-4 p-3">
              Videos (14)
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="d-flex justify-content-between">
          <div className="VideoBackgroundColor p-3">
            <p className="text-font text-white fw-bold h3">Investment 101</p>
            <p className="text-font text-white">
              Get started on learning how to make your
              <br /> money work for you.
            </p>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaArticleListingPage;
