/** @format */

import React from "react";
import SmallRedUserIcon from "../../images/SmallRedUserIcon.png";
import MobileSubscriptionIcon from "../../images/MobileSubscription.png";
import GiftBagIcon from "../../images/GiftBag.png";
import ChangePasswordIcon from "../../images/ChangePasswordIcon.png";
import LogoutIcon from "../../images/LogoutIcon.png";
import MoneyAfricaMySettingTextWithLines from "../MoneyAfricaMySettingTextWithLines/MoneyAfricaMySettingTextWithLines";
import MoneyAfricaSettingsNavbarComponent from "../MoneyAfricaSettingsNavbarComponent/MoneyAfricaSettingsNavbarComponent";
import SmallLinesImage from "../../images/SmallLines.png";
const MoneyAfricaSettingUnsubscribePage = () => {
  return (
    <React.Fragment>
      <MoneyAfricaSettingsNavbarComponent />
      <MoneyAfricaMySettingTextWithLines />
      <div className="CreatingSettingReferalsPage mt-3 p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-3">
                <div>
                  <div className=" PositioningTheSubscriptionIcon ">
                    <div className="d-flex">
                      <div className="PaddingForRedUserIconAndText">
                        <img src={SmallRedUserIcon} />
                      </div>
                      <div className=" SubscriptionTextWithIcon  text-font mx-1">
                        <p>My Profile</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className=" PositioningTheSubscriptionIcon mt-2">
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
                      <div className="ProfileTextBgColor mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={GiftBagIcon} />
                          </div>
                          <div className="PaddingForProfileAndText  text-font mx-2">
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
                      <div className="  mt-2">
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
              <div className="col-md-3">
                <p className="ReferalTextStyles">
                  Refer a friend to get
                  <br /> <span className="DiscountStyles">10% off</span> your
                  next
                  <br /> subscription
                </p>
                <p className="ReferalTextDescription">
                  When you refer a friend, they need to become paid subscribers
                  for this offer to be valid.
                </p>
              </div>
              <div className="col-md-6">
                <div className="CreatingUnsubscribeCard">
                  <div className="d-flex justify-content-between">
                    <div>
                      <p className="TotalReferalText">Total no. referred</p>
                      <p className="TextReferalNumberStyle">4</p>
                    </div>
                    <img src={SmallLinesImage} />
                    <div>
                      <p className="TotalReferalText">Total paid subscibers</p>
                      <p className="TextReferalNumberStyle">3</p>
                    </div>
                    <img src={SmallLinesImage} />
                    <div>
                      <p className="TotalReferalText">Total amount gotten</p>
                      <p className="TextReferalNumberStyle">N30,000.00</p>
                    </div>
                  </div>
                </div>
                <p className="CardWarningDes">
                  <span className="CardWarning">Note:</span> You will be
                  contacted by a member of our support team at the end of the
                  month to receive your referral bonus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSettingUnsubscribePage;
