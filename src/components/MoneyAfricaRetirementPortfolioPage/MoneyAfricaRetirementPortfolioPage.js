/** @format */

import React from "react";
import CheveronArrowDown from "../../images/ChevronArrowDown.png";
const MoneyAfricaRetirementPortfolioPage = () => {
  return (
    <React.Fragment>
      <div className="MoneyAfricaInvestmentPage p-5">
        <p className="text-font fw-bold text-center h2 py-4">Calculate your </p>
        <p className="text-center text-font display-3">
          Retirement Portfolio
          <span className="px-3">
            <img src={CheveronArrowDown} />
          </span>
        </p>
        <hr className="HrLine" />
        <p className="text-font text-center py-3">
          This calculator helps you determine how much you will need for
          <br /> school within a number of years
        </p>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaRetirementPortfolioPage;
