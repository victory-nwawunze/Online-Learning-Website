/** @format */

import React from "react";
import UserImage from "../../images/FrameUserIcon.png";
const MoneyAfricaTalkToAnExpert = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaTalkToAnExpertBanner p-3 bg-color py-5">
        <p className="text-font display-5 text-center pt-5">
          Talk to an expert
        </p>
        <p className="text-font text-center">
          Fill out the form below and one of our experts will get in touch with
          you.
        </p>
      </div>

      <div className="MoneyAfricaTalkToAnExpertForm p-5">
        <div className="container-fluid">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <p className="text-font pb-3">Last Name</p>
                  <div className="InputWithUserIcon">
                    <input className="UserText" />
                    <div className="UserIcon">
                      <img src={UserImage} />
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-font pb-3 pt-3">Last Name</p>
                  <div className="InputWithUserIcon">
                    <input className="UserMail" />
                    <div className="UserIcon">
                      <img src={UserImage} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">2</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaTalkToAnExpert;
