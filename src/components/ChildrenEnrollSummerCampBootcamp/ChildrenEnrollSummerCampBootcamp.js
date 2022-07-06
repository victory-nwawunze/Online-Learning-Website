/** @format */

import React from "react";
import ChildInformationBanner from "../ChildInformationBanner/ChildInformationBanner";
import ContainerCardBanner from "../ContainerCardBanner/ContainerCardBanner";

const ChildrenEnrollSummerCampBootcamp = () => {
  return (
    <React.Fragment>
      <ContainerCardBanner />
      <div className="container-fluid EnrollKidBackgroundSectionColor p-5">
        <div className="container">
          <div className="ContainerCardBorderRadius">
            <ChildInformationBanner />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChildrenEnrollSummerCampBootcamp;
