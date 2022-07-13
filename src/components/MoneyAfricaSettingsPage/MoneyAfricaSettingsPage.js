/** @format */

import React from "react";

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
import SmallHomeIcon from "../../images/SmallHomeIcon.png";
import SmallCheveronDownIcon from "../../images/SmallCheveronDownIcon.png";
import SmallMailIcon from "../../images/SmallMailIcon.png";
import SmallPhoneIcon from "../../images/SmallPhoneIcon.png";
import SmallFlagIcon from "../../images/SmallFlagIcon.png";
import SmallGreyArrowDownIcon from "../../images/SmallGreyArrowDownIcon.png";
import MoneyAfricaSettingsNavbarComponent from "../MoneyAfricaSettingsNavbarComponent/MoneyAfricaSettingsNavbarComponent";
import MoneyAfricaMySettingTextWithLines from "../MoneyAfricaMySettingTextWithLines/MoneyAfricaMySettingTextWithLines";
import ProfileImageTextDescription from "../ProfileImageTextDescription/ProfileImageTextDescription";
const MoneyAfricaSettingsPage = () => {
  return (
    <React.Fragment>
      <MoneyAfricaSettingsNavbarComponent />
      <MoneyAfricaMySettingTextWithLines />
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
                <ProfileImageTextDescription />
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
                    <div>
                      <img src={SmallHomeIcon} />
                    </div>
                    <div className="MarginForOneIcon">
                      <img src={SmallCheveronDownIcon} />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Ondo state"
                    className="SOOstyles"
                  />
                </div>
                <div className="MarginTopForSettingsForm mt-5">
                  <p className="SettingFirstName">Email address</p>
                  <div className="d-flex">
                    <div>
                      <img src={SmallMailIcon} />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="hassan.musa@moneyafrica.ng"
                        className="DOBcalendarStyles"
                      />
                    </div>
                  </div>
                </div>
                <div className="MarginTopForSettingsForm mt-3">
                  <p className="SettingFirstName">Phone number</p>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex">
                        <div className="MarginLeftPhoneIcon">
                          <img src={SmallPhoneIcon} />
                        </div>
                        <div>
                          <img src={SmallFlagIcon} />
                        </div>
                        <div>
                          <img src={SmallGreyArrowDownIcon} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="+234"
                        className="PhoneSectionWidth"
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="button"
                  value="Save changes"
                  className="ButtonStylesForSaveChanges px-3 py-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSettingsPage;
