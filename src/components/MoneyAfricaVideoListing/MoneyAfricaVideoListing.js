/** @format */

import React from "react";
import StarsIcon from "../../images/Group 8172.png";
import IconsAndText from "../../images/IconsAndText.png";
import TextWithButton from "../../images/Group 8178.png";
import ThreeDotsImage from "../../images/ThreeDotsMenu.png";
import PlayIcon from "../../images/PlayIcon.png";
import WhiteLock from "../../images/WhiteLock.png";
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
      <div className="MoneyAfricaVideoListingCards p-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <div className="cards">
                <div className="cardImagesWithText p-3">
                  <div className="text-center p-4 ">
                    <img src={PlayIcon} />
                  </div>
                  <div className="d-flex align-items-center">
                    <div>
                      <img src={WhiteLock} />
                    </div>
                    <div>
                      <p className="text-white text-font VideoDescriptionCardOne mt-3">
                        Available for premium users only
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ContainerCard">
                  <p className="text-font h4 fw-bold mt-4">
                    How to trade in crypto
                  </p>
                  <p>
                    <img src={StarsIcon} />
                    <span className="text-font UpdatedTextDate">
                      Updated Aug 9, 2021
                    </span>
                  </p>
                  <img src={IconsAndText} />
                  <div className="d-flex justify-content-between mt-5">
                    <div>
                      <img src={TextWithButton} />
                    </div>
                    <div>
                      <img src={ThreeDotsImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaVideoListing;
