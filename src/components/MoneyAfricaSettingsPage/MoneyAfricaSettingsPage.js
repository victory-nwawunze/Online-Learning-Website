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
import GiftBagImage from "../../images/GiftBagImage.png";
import SmallFacebookIcon from "../../images/SmallFacebookIcon.png";
import SmallWhatsAppIcon from "../../images/SmallWhatsAppIcon.png";
import SmallLinkdinIcon from "../../images/SmallLinkdinIcon.png";
import SmallTwitterIcon from "../../images/SmallTwitterIcon.png";
import BigAvatarImage from "../../images/BigAvatarImage.png";
import FilesIcon from "../../images/FilesIcon.png";
import SettingUserIcon from "../../images/SettingUserIcon.png";
import SmallSettingCalendarIcon from "../../images/SmallSettingCalendarIcon.png";
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
                  <div className="hover-Effect">
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
                </div>
              </div>
              <div className="col-md-3">
                <div>
                  <p className="text-font ProfileImgText">Profile image</p>
                  <span className="ProfileImageText">
                    Choose a new avatar to be used <br />
                    across your MoneyAfrica account.
                  </span>
                </div>
                <div>
                  <p className="ProfileImgText mt-5">Personal Info</p>
                  <p className="ProfileImageText">
                    Make edits and updates to your name
                  </p>
                </div>
                <div className="MarginBottomForContactInfo">
                  <p className="ContactInfoTextStyles">Contact Info</p>
                  <p className="ContactInfoTexts">
                    Make edits and updates to your
                    <br /> contact details
                  </p>
                  <p className="ContactInfoTexts">
                    To change your email,
                    <br /> reach out to <br />
                    <span className="AdminLinkText">admin@moneyafrica.com</span>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="SettingAvatarImage">
                  <div className="d-flex">
                    <div>
                      <div className="d-flex align-items-center">
                        <div className="AvatarBorderRadius mx-3">
                          <img src={BigAvatarImage} />
                        </div>
                        <div className="mx-2">
                          <img src={FilesIcon} />
                        </div>
                        <div className="mt-3 EditTextStyles hover">
                          <p>Edit picture</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SettingsForm MarginTopForSettingsForm">
                  <div className="d-flex">
                    <div>
                      <p className="SettingFirstName">First name</p>
                      <div className="d-flex">
                        <div>
                          <img src={SettingUserIcon} />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Hassan"
                            className="SettingUserInput"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="MarginLeftForSecondForm">
                      <div>
                        <p className="SettingFirstName">Last name</p>
                        <div className="d-flex">
                          <div>
                            <img src={SettingUserIcon} />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Musa"
                              className="SettingUserInput"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="SettingsGender">
                  <p className="GenderStyles">Gender</p>
                  <div className="d-flex">
                    <div>
                      <input
                        type="button"
                        value="Female"
                        className="Fstyles px-5 py-2 mt-2"
                      />
                    </div>
                    <div>
                      <div className="MGenderButton">
                        <input
                          type="button"
                          value="Female"
                          className="Mstyles px-5 py-2 mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MarginTopForSettingsForm mt-3">
                  <p className="SettingFirstName">Date of birth</p>
                  <div className="d-flex">
                    <div>
                      <img src={SmallSettingCalendarIcon} />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="13/June/2006"
                        className="DOBcalendarStyles"
                      />
                    </div>
                  </div>
                </div>
                <div className="MarginTopForSettingsForm mt-3">
                  <p className="SettingFirstName">State of origin</p>
                  <div className="d-flex ">
                    <div>1</div>
                    <div className="MarginForOneIcon">2</div>
                  </div>
                  <input
                    type="text"
                    placeholder="Ondo state"
                    className="SOOstyles"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSettingsPage;
