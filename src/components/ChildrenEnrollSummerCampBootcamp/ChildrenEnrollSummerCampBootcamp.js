/** @format */

import React from "react";

import ChildInformationBanner from "../ChildInformationBanner/ChildInformationBanner";
import ContainerCardBanner from "../ContainerCardBanner/ContainerCardBanner";
import ContainerCardPlacement from "../ContainerCardPlacement/ContainerCardPlacement";
import FormWithButton from "../FormWithButton/FormWithButton";
import FormWithoutButton from "../FormWithoutButton/FormWithoutButton";

const ChildrenEnrollSummerCampBootcamp = () => {
  return (
    <React.Fragment>
      <ContainerCardBanner />
      <div className="container-fluid EnrollKidBackgroundSectionColor p-5">
        <div className="container">
          <div className="ContainerCardBorderRadius">
            <ChildInformationBanner />
            <FormWithoutButton />
            <br />
            <hr className="HorizontalLineForColor" />
            <FormWithButton />
          </div>
          <ContainerCardPlacement />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ChildrenEnrollSummerCampBootcamp;
