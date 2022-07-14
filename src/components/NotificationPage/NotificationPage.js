/** @format */

import React from "react";
import MoneyAfricaSettingsNavbarComponent from "../MoneyAfricaSettingsNavbarComponent/MoneyAfricaSettingsNavbarComponent";
import NotificationBellIcon from "../../images/NotificationBellIcon.png";
import SmallRedLeftIcon from "../../images/SmallRedLeftIcon.png";
const NotificationPage = () => {
  return (
    <React.Fragment>
      <MoneyAfricaSettingsNavbarComponent />
      <div className="MoneyAfricaMoneyTextSettingWithALine mt-5">
        <div className="container">
          <h3 className="text-font TextMarginToTheLeft">Notifications</h3>
          <hr className="MarginForHorizontalRule" />
        </div>
      </div>
      <div className="MoneyAfricaNotificationPage">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex">
                <div className="BorderColor">
                  <img src={NotificationBellIcon} />
                </div>
                <div>
                  <p className="NotificationText text-font">
                    We just launched a new article course on{" "}
                    <span className="TBStyle">“Treasury bills”</span>.
                    <p>6 hours ago</p>
                  </p>
                </div>
              </div>
              <hr className="HRwidth" />
            </div>
            <div>
              <div className="d-flex">
                <div>
                  <p className="text-font MarginGTCtext"> Go to course</p>
                </div>
                <div className="mt-2 mx-1">
                  <img src={SmallRedLeftIcon} />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex">
                <div className="BorderColorGreen">
                  <img src={NotificationBellIcon} />
                </div>
                <div>
                  <p className="NotificationText text-font">
                    We just launched a new video course on{" "}
                    <span className="TBStyle">“Bitcoin wallet”.</span>
                    <p>6 hours ago</p>
                  </p>
                </div>
              </div>
              <hr className="HRwidth" />
            </div>
            <div>
              <div className="d-flex">
                <div>
                  <p className="text-font MarginGTCtext"> Go to course</p>
                </div>
                <div className="mt-2 mx-1">
                  <img src={SmallRedLeftIcon} />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex">
                <div className="BorderColorLightBlue">
                  <img src={NotificationBellIcon} />
                </div>
                <div>
                  <p className="NotificationText text-font">
                    We just launched a new video course on{" "}
                    <span className="TBStyle">“Finance management”.</span>
                    <p>6 hours ago</p>
                  </p>
                </div>
              </div>
              <hr className="HRExtrawidth" />
            </div>
            <div>
              <div className="d-flex">
                <div>
                  <p className="text-font MarginGTCtext"> Go to course</p>
                </div>
                <div className="mt-2 mx-1">
                  <img src={SmallRedLeftIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotificationPage;
