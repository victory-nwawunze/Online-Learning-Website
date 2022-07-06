/** @format */

import React from "react";

const ChildEnrollmentFormButton = () => {
  return (
    <div className="container">
      <div className="AddMoreChildText my-4 ">
        <div className="d-flex align-items-center">
          <div>
            <p className="text-font hover AddMoreChildFontAndColor mt-3">
              + Add more child
            </p>
          </div>
          <div className="MarginMyButtonDiv">
            <input
              type="button"
              value="Save and continue"
              className="p-2 text-font px-3 text-white SaveAndContinueBackgroundColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildEnrollmentFormButton;
