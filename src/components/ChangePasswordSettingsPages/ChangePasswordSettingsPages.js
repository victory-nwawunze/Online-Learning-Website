/** @format */

import React from "react";
import MoneyAfricaMySettingTextWithLines from "../MoneyAfricaMySettingTextWithLines/MoneyAfricaMySettingTextWithLines";
import MoneyAfricaSettingsNavbarComponent from "../MoneyAfricaSettingsNavbarComponent/MoneyAfricaSettingsNavbarComponent";
import SmallRedUserIcon from "../../images/SmallRedUserIcon.png";
import MobileSubscriptionIcon from "../../images/MobileSubscription.png";
import GiftBagIcon from "../../images/GiftBag.png";
import ChangePasswordIcon from "../../images/ChangePasswordIcon.png";
import LogoutIcon from "../../images/LogoutIcon.png";
import SmallEyeIcon from "../../images/SmallEyeIcon.png";
import SmallLockIcon from "../../images/SmallLockIcon.png";
import MoneyAfricaGiftBagsComponent from "../MoneyAfricaGiftBagsComponent/MoneyAfricaGiftBagsComponent";
const ChangePasswordSettingsPages = () => {
  return (
    <React.Fragment>
      <MoneyAfricaSettingsNavbarComponent />
      <MoneyAfricaMySettingTextWithLines />
      <div className="CreatingChangePasswordSettingComponent mt-3 p-3">
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
                      <div className=" mt-2">
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
                      <div className="ProfileTextBgColor  mt-2">
                        <div className="d-flex">
                          <div className="PaddingForMobileSubscriptionIconAndText">
                            <img src={ChangePasswordIcon} />
                          </div>
                          <div className="PaddingForProfileAndText text-font mx-2">
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
                  <MoneyAfricaGiftBagsComponent />
                </div>
              </div>
              <div className="col-md-3">
                <p className="ChangePasswordText">Change Password</p>
                <p className="ChangePasswordTextDescription">
                  Change your password to a new one.
                </p>
              </div>
              <div className="col-md-6">
                <p className="EnterPasswordForm">Enter Current Password</p>
                <div className="d-flex NoMargin">
                  <div>
                    <img src={SmallEyeIcon} />
                  </div>
                  <div className="MarginLeftThisIcon">
                    <img src={SmallLockIcon} />
                  </div>
                </div>
                <input type="text" className="EnterCurrPassInputStyle" />
                {/*  */}
                <p className="EnterPasswordForm mt-3">Enter New Password</p>
                <div className="d-flex NoMargin">
                  <div>
                    <img src={SmallEyeIcon} />
                  </div>
                  <div className="MarginLeftThisIcon">
                    <img src={SmallLockIcon} />
                  </div>
                </div>
                <input type="text" className="EnterCurrPassInputStyle" />
                <p className="WarningText">
                  Password must contain at least 8 characters long, upper &
                  lowercase letters & a special character{" "}
                </p>
                <p className="EnterPasswordForm mt-3">Re-enter New Password</p>
                <div className="d-flex NoMargin">
                  <div>
                    <img src={SmallEyeIcon} />
                  </div>
                  <div className="MarginLeftThisIcon">
                    <img src={SmallLockIcon} />
                  </div>
                </div>
                <input type="text" className="EnterCurrPassInputStyle" />
                <input
                  type="button"
                  value="Change password"
                  className="ChangePasswordButton"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChangePasswordSettingsPages;
