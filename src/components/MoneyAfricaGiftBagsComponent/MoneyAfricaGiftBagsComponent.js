/** @format */

import React from "react";
import GiftBagImage from "../../images/GiftBagImage.png";
import SmallFacebookIcon from "../../images/SmallFacebookIcon.png";
import SmallWhatsAppIcon from "../../images/SmallWhatsAppIcon.png";
import SmallLinkdinIcon from "../../images/SmallLinkdinIcon.png";
import SmallTwitterIcon from "../../images/SmallTwitterIcon.png";
const MoneyAfricaGiftBagsComponent = () => {
  return (
    <React.Fragment>
      <div className="GiftBagDescriptionStyle mt-3 p-3 py-3 text-center">
        <div>
          <img src={GiftBagImage} />
        </div>
        <p className="text-font">
          Get 10% off when you
          <br /> refer a friend
        </p>
        <input
          type="button"
          className="p-2 px-4 ButtonTextSize ButtonBorder"
          value="Thelms23"
        />
        <br />
        <div className="d-flex MarginLeftAllSocialMediaIcons">
          <div>
            <img src={SmallFacebookIcon} />
          </div>
          <div className="mx-1">
            <img src={SmallLinkdinIcon} />
          </div>
          <div className="mx-1">
            <img src={SmallTwitterIcon} />
          </div>
          <div className="mx-1">
            <img src={SmallWhatsAppIcon} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaGiftBagsComponent;
