/** @format */

import React from "react";
import RoundedUserIcon from "../../images/RoundedUserIcon.png";
const ChildInformationBanner = () => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <div className="d-flex align-items-center">
            <div>
              <img src={RoundedUserIcon} />
            </div>
            <div>
              <p className="ChildInformationTextSize text-font mx-3 my-3">
                Child information
                <p className="text-font">
                  This information will be utilized to help us better understand
                  your child(ren) and
                  <br /> what works best for him/her.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="CollapseTextColorAndTextSize text-font">Collapse</p>
        </div>
      </div>
      <hr className="HorizontalLineForColor" />
    </div>
  );
};

export default ChildInformationBanner;
