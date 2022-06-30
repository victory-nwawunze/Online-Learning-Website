/** @format */

import React from "react";
import IntermidiateIcon from "../../images/Group 8171.png";
import StarIcon from "../../images/Group 8172.png";
import BannerImage from "../../images/Group 8173.png";
const MoneyAfricaArticleDetailsStandalone = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaArticleStandAlone p-5 ">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="moneyAfricaDescriptionText p-5">
        <p className="text-font h2 text-center">
          The Best Crypto Wallets for Binance
          <br /> Smart Chain (BSC)
        </p>
        <p className="text-font SmallTextFont text-center">
          Updated Aug 9, 2021
        </p>
        <div className="PlaceImageCenter text-center">
          <img src={IntermidiateIcon} />
        </div>
        <div className="PlaceImagesCenter text-center mt-2">
          <img src={StarIcon} />
        </div>
      </div>
      <div className="DescriptionImageBanner p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-12">
                <img src={BannerImage} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaArticleDetailsStandalone;
