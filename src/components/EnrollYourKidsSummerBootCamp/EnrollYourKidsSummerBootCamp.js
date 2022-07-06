/** @format */

import React from "react";

import ContainerCardPlacement from "../ContainerCardPlacement/ContainerCardPlacement";
import ContainerCardBanner from "../ContainerCardBanner/ContainerCardBanner";
import ChildInformationBanner from "../ChildInformationBanner/ChildInformationBanner";
import FormWithButton from "../FormWithButton/FormWithButton";

const EnrollYourKidsSummerBootCamp = () => {
  return (
    <React.Fragment>
      {/* ContainerBanner */}
      <ContainerCardBanner />
      <div className="container-fluid EnrollKidBackgroundSectionColor  p-5">
        <div className="container">
          {/* Card Placement */}
          <div className="ContainerCardBorderRadius">
            {/* ChildInformationBanner */}
            <ChildInformationBanner />
            <FormWithButton />
          </div>
          {/* CardThreePacement */}
          <ContainerCardPlacement />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EnrollYourKidsSummerBootCamp;
