/** @format */

import React from "react";
import IntermidiateIcon from "../../images/Group 8171.png";
import StandAloneBannerImage from "../../images/Group 8174.png";
import StandAloneNavigation from "../../images/Group 8179.png";
import ButtonsWithTextImage from "../../images/Group 8178.png";
import StarIcon from "../../images/Group 8172.png";

import BannerImage from "../../images/Group 8173.png";
const MoneyAfricaStandAloneBannerText = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaStandAloneSelection p-3">
        <div className="container">
          <img src={StandAloneNavigation} className="img-fluid" />
        </div>
      </div>
      <div className="MoneyAfricaArticleStandAlone  text-center">
        <img src={ButtonsWithTextImage} />
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
    </React.Fragment>
  );
};

export default MoneyAfricaStandAloneBannerText;
