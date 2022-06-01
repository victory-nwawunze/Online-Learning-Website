/** @format */

import React from "react";
import IconImage from "../../images/Group 8113.svg";
import CommunityImage from "../../images/Group 8099.jpg";
import MarkUpIcon from "../../images/Group 8126.png";
const CommunityPage = () => {
  return (
    <React.Fragment>
      <div className="subScribePageBanner p-5 banner-color">
        <div className="text-center py-5">
          <h3 className="text-font h3 fw-bold">
            Learn and invest in our <br />
            Community
          </h3>
          <div>
            <button className="btn-health text-font">
              Join Our Community
              <span>
                <img src={IconImage} className="p-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid">
          <div className="row py-5">
            <div className="col-md-6">
              <img src={CommunityImage} className="CommunityImage" />
            </div>
            <div className="col-md-6">
              <h3 className="h3 fw-bold text-font mt-5 display-5">
                Benefit of becoming a<br /> Community member
              </h3>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3 p-2">
                    Real time engagement and networking
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3  p-2">
                    Access to resources to support your goals
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3  p-2">
                    Take online course on a personal finance
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3  p-3">
                    Ask question and get support from the community
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3  p-3">
                    Have access to global and local market inteligence
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3  p-3">
                    Get access to private invement deals
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <img src={MarkUpIcon} className="p-1" />
                </div>
                <div>
                  <p className="text-font mt-3  p-2">
                    Access to weekly webinars and newletters
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div>
                <button className="btn-health text-font">
                  Join Our Community
                  <span>
                    <img src={IconImage} className="p-1" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CommunityPage;
