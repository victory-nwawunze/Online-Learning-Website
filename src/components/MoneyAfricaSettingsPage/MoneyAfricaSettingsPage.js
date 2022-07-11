/** @format */

import React from "react";
import SmallMoneyAfricaImage from "../../images/SmallMoneyAfricaImage.png";
import SmallForMoreIcon from "../../images/ForMore.png";
import SmallNotificationIcon from "../../images/SmallNotificationIcon.png";
import AVatarImage from "../../images/AvatarImage.png";
import SmallArrowDown from "../../images/SmallArrowDown.png";
import SmallRedUserIcon from "../../images/SmallRedUserIcon.png";
import MobileSubscriptionIcon from "../../images/MobileSubscription.png";
import GiftBagIcon from "../../images/GiftBag.png";
import ChangePasswordIcon from "../../images/ChangePasswordIcon.png";
import LogoutIcon from "../../images/LogoutIcon.png";
const MoneyAfricaSettingsPage = () => {
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
                <div className="mx-4 MoreSettingMargin">
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
                <div className="SettingMarginIconToLeft">
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
      <div className="MoneyAfricaMoneyTextSettingWithALine mt-5">
        <div className="container">
          <h3 className="text-font TextMarginToTheLeft">My Settings</h3>
          <hr className="MarginForHorizontalRule" />
        </div>
      </div>
      <div className="CreatingMoneyAfricaSettingFunctionalities mt-3 p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-3">
                <div>
                  <div className="ProfileTextBgColor">
                    <div className="d-flex">
                      <div className="PaddingForRedUserIconAndText">
                        <img src={SmallRedUserIcon} />
                      </div>
                      <div className="PaddingForProfileAndText text-font mx-1">
                        <p>My Profile</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="PositioningTheSubscriptionIcon mt-2">
                      <div className="d-flex">
                        <div className="PaddingForMobileSubscriptionIconAndText">
                          <img src={MobileSubscriptionIcon} />
                        </div>
                        <div className="SubscriptionTextWithIcon text-font mx-2">
                          <p>Subscriptions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="PositioningTheSubscriptionIcon mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={GiftBagIcon} />
                          </div>
                          <div className="SubscriptionTextWithIcon text-font mx-2">
                            <p>Refer a friend</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="PositioningTheSubscriptionIcon mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={ChangePasswordIcon} />
                          </div>
                          <div className="SubscriptionTextWithIcon text-font mx-2">
                            <p>Change password</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="PositioningTheSubscriptionIcon mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={LogoutIcon} />
                          </div>
                          <div className="SubscriptionTextWithIcon text-font mx-2">
                            <p>Log out</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">1</div>
              <div className="col-md-6">1</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSettingsPage;
