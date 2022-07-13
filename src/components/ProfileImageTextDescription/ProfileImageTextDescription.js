/** @format */

import React from "react";

const ProfileImageTextDescription = () => {
  return (
    <React.Fragment>
      <div>
        <p className="text-font ProfileImgText">Profile image</p>
        <span className="ProfileImageText">
          Choose a new avatar to be used <br />
          across your MoneyAfrica account.
        </span>
      </div>
      <div>
        <p className="ProfileImgText mt-5">Personal Info</p>
        <p className="ProfileImageText">Make edits and updates to your name</p>
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
    </React.Fragment>
  );
};

export default ProfileImageTextDescription;
