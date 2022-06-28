/** @format */

import React from "react";
import MoneyAfricaGreenLogo from "../../images/MoneyAfricaLogoGreen 1.png";
import PyramidIcon from "../../images/ThreeTierPyramid 1.png";
import ClockIcon from "../../images/ClockIcon.png";
import PaperFile from "../../images/TablerIconFileInvoice 1.png";
import EyeIcon from "../../images/EyeIcon.png";
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
            <div className="d-flex justify-content-between">
              <div className="IconAndTextPositioning">
                <img src={PyramidIcon} />
                <div className="TextPositioning">
                  <p>Intermediate</p>
                </div>
              </div>
              <div className="IconAndTextPositioning">
                <img src={ClockIcon} />
                <div className="TextPositioning d-flex">
                  <div>9 </div>
                  <div>Min</div>
                </div>
              </div>
              <div className="IconAndTextPositioning pr-4">
                <img src={PaperFile} />
                <div className="TextPositioning">
                  <p className="p-2">Intermediate</p>
                </div>
              </div>
            </div>
            <div className="pt-2 d-flex">
              <div>
                <img src={EyeIcon} />
              </div>
              <div>
                <p className="text-white text-font p-1">2,456</p>
              </div>
            </div>
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
