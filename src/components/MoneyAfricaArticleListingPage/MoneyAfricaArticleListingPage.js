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
    </React.Fragment>
  );
};

export default MoneyAfricaArticleListingPage;
