/** @format */

import React from "react";
import UncheckIcon from "../../images/UnCheckedIcon.png";
import ThirdTierPyramid from "../../images/ThreeTierPyramid 1.png";
import CheckedIcon from "../../images/Checked.png";
const MoneyAfricaMoreVideoListingPage = () => {
  return (
    <React.Fragment>
      <div className="moneyAfricaVideoList p-3">
        <div className="MoreMoneyAfricaVideoListText p-3">
          <div className="container">
            <div className="d-flex">
              <div>
                <p className="text-font fw-bold h2">Learn with videos</p>
              </div>
              <div>
                <p className="text-font mt-2 m-4 fw-bold">Close Filter</p>
              </div>
            </div>
            <div className="container">
              <div className="grid">
                <div className="row">
                  <div className="col-md-8">
                    <p className="text-font mt-4">Filter by Topics</p>
                    <div className="d-flex">
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          MoneyAfrica
                        </p>
                      </div>
                      <div className="SectionsButtonColorOne m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          BlockChain
                        </p>
                      </div>
                      <div className="SectionsButtonColorOne m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Etherium
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Tech
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          History
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Wallet
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Consencus
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Cryptography
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Essentials
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Tutorial
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Use Cases
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Technical analysis
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Trading
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Mining
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Privacy
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Economics
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Security
                        </p>
                      </div>
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          Cryptocurrency
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="SectionsButton m-1">
                        <p className="m-1 SectionButtonTextSize text-font pt-1 px-2">
                          See all
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <p className="text-font mt-4">Filter by Levels</p>
                    <div className="d-flex justify-content-between">
                      <div>
                        <div className="d-flex">
                          <div className="mx-2">
                            <img src={UncheckIcon} />
                          </div>
                          <div>
                            <img src={ThirdTierPyramid} />
                          </div>
                          <div>
                            <p className="text-font BeginnerTextFontSize">
                              Beginner
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex">
                          <div className="mx-2">
                            <img src={CheckedIcon} />
                          </div>
                          <div>
                            <img src={ThirdTierPyramid} />
                          </div>
                          <div>
                            <p className="text-font BeginnerTextFontSize">
                              Intermediate
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex">
                          <div className="mx-2">
                            <img src={ThirdTierPyramid} />
                          </div>
                          <div>
                            <p className="text-font BeginnerTextFontSize">
                              Advanced
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoneyAfricaMoreVideoListingPage;
