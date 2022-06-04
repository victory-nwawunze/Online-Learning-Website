/** @format */

import React from "react";
import CheveronArrowDown from "../../images/ChevronArrowDown.png";
const MoneyAfricaSavingAndInvestmentPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaInvestmentPage p-5">
        <p className="text-font fw-bold text-center h2 py-4">Calculate your </p>
        <p className="text-center text-font display-3">
          Savings Goal Calculator
          <span className="px-3">
            <img src={CheveronArrowDown} />
          </span>
        </p>
        <hr className="HrLine" />
        <p className="text-font text-center py-3">
          This calculator helps you determine how much you need to save
          <br /> monthly to meet a targeted amount by the time you need it.
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaSavingAndInvestmentPage;
