/** @format */

import React from "react";
import RoundedSingleUserIcon from "../../images/RoundedSingleUserIcon.png";
const ContainerCardPlacement = () => {
  return (
    <React.Fragment>
      <div className="ContainerCardTwo mt-4 p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-12">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="d-flex">
                      <div className="mx-3">
                        <img src={RoundedSingleUserIcon} />
                      </div>
                      <div>
                        <p className="text-font AddInformationTextStyling">
                          Add parents information
                          <br />
                          <span className="AddInformationStylingDescription">
                            We'd like to get to know you as a fantastic parent
                            who wants to do this for
                            <br /> their child(ren)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="ExpandText">Expand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ContainerButton p-3">
        <input
          type="button"
          value="Submit form"
          className="ButtonMargin p-2 px-3 py-2"
        />
      </div>
    </React.Fragment>
  );
};

export default ContainerCardPlacement;
