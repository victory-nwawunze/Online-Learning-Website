/** @format */

import React from "react";

const ContainerImages = () => {
  return (
    <React.Fragment>
      <div className="containerImages p-5 ">
        <div className="text-dark  text-center fw-bold text-font py-5">
          <p className="display-5">Explore a variety of powerful</p>
          <p className="display-4"> financial tools packaged for you.</p>
          <p className="text-font mb-5">
            We have amazing services that can aid you through your journey to
            making better financial
            <br /> decisions and becoming an expert at money management.
          </p>
        </div>

        {/* Cards */}
        <div className="cards-images p-5 text-left">
          <div className="container">
            <div className="grid">
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="h3">Premium</h3>
                      <p className="text-font">
                        Talk to financial advisers, access powerful <br />{" "}
                        resources to support your financial goals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContainerImages;
