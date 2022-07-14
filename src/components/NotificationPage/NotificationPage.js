/** @format */

import React from "react";
import MoneyAfricaSettingsNavbarComponent from "../MoneyAfricaSettingsNavbarComponent/MoneyAfricaSettingsNavbarComponent";

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
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotificationPage;
