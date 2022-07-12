/** @format */

import React from "react";
import SmallMoneyAfricaImage from "../../images/SmallMoneyAfricaImage.png";
import SmallForMoreIcon from "../../images/ForMore.png";
import SmallNotificationIcon from "../../images/SmallNotificationIcon.png";
import AVatarImage from "../../images/AvatarImage.png";
import SmallArrowDown from "../../images/SmallArrowDown.png";
const MoneyAfricaSettingsNavbarComponent = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaSettingNavbar p-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex">
                <div>
                  <img src={SmallMoneyAfricaImage} />
                </div>
                <div className="SettingMargin">
                  <p>Explore</p>
                </div>
                <div className="mx-4 MoreSettingMargin ">
                  <p>Articles</p>
                </div>
                <div className="mx-4 MoreSettingMargin">
                  <p>Videos</p>
                </div>
                <div className="mx-4 MoreSettingMargin">
                  <p>Calculator</p>
                </div>
                <div className="mx-3 MoreSettingMargin">
                  <p>My learning</p>
                </div>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center">
                <div className="mx-3">
                  <img src={SmallForMoreIcon} />
                </div>
                <div className="mx-3">
                  <img src={SmallNotificationIcon} />
                </div>
                <div className="SettingMarginIconToLeft BorderForTopAvatarIcon">
                  <img src={AVatarImage} />
                </div>
                <div>
                  <img src={SmallArrowDown} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSettingsNavbarComponent;
