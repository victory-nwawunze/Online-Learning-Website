/** @format */

import React from "react";
import BannerImage from "../../images/Group 8127.png";
import CardImage from "../../images/Group 8129.png";
import PlusIcon from "../../images/Group 8130.png";
import CardImageTwo from "../../images/Group 8132.png";
import CardImageThree from "../../images/Chidinma.png";
import BusolaImage from "../../images/Busola.png";
import AndrewImage from "../../images/Andrew.png";
import CEOImage from "../../images/Group 8136.png";
const AboutUs = () => {
  return (
    <React.Fragment>
      <div className="BannerImage  text-center">
        <h4 className="text-font fw-bold display-4 py-5">
          We make financial
          <br /> <span className="display-5">education easy</span>
        </h4>
        <p className="text-font">
          Being a partner gives you access to financial advisers and
          <br /> powerful resources to support your financial goals.
        </p>
      </div>
      <div className="bannerImageWithVideo p-5">
        <div className="container-fluid">
          <img src={BannerImage} className="img-fluid" />
        </div>
      </div>
      <div className="AboutUsText p-5">
        <div className="container">
          <div className="d-flex py-3 justify-content-around">
            <div>
              <h3 className="text-font fw-bold">
                <span className="h2">Simplifying financial</span> <br />
                <p>education since 2012</p>
              </h3>
            </div>
            <div>
              <p className="text-font">
                MoneyAfrica was launched following the founders' frustration
                with existing <br />
                CRM services that were either overly simplistic or far too
                complex for most <br />
              </p>
              <p className="text-font">
                businesses. We built MoneyAfrica to deliver on these values and
                today MoneyAfrica is
                <br /> used by thousands of businesses of all sizes all over the
                world.
                <br />
              </p>
              <p className="text-font">
                We're based in Lagos, Nigeria, a city with a creative heart that
                was founded
                <br /> on science and industry and the birthplace of the modern
                computer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="WhoAreWE p-3">
        <h4 className="text-font py-3 text-center fw-bold h3">Who are we</h4>
      </div>
      <div className="CardsWithImages p-3">
        <div className="container">
          <div className="grid">
            <div className="row d-flex justify-content-center">
              <div className="col-md-4">
                <div className="ImageCard">
                  <img src={CardImage} className="img-fluid" />
                  <div className="Icon">
                    <img src={PlusIcon} className="img-fluid" />
                  </div>
                </div>
                <h4 className="text-font fw-bold mt-2">Joy Ogoke Williams</h4>
                <p className="text-font">Senior Management Accountant</p>
              </div>
              <div className="col-md-4">
                <div className="ImageCardTwo">
                  <img src={CardImageTwo} className="img-fluid" />
                  <div className="IconTwo">
                    <img src={PlusIcon} className="img-fluid" />
                  </div>
                </div>
                <h4 className="text-font fw-bold mt-2">Adeshola Barth </h4>
                <p className="text-font">Business Performance Manager</p>
              </div>
              <div className="col-md-4">
                <div className="ImageCardThree">
                  <img src={CardImageThree} />
                  <div className="IconPlus">
                    <img src={PlusIcon} />
                  </div>
                </div>
                <h4 className="text-font fw-bold mt-2">Chika Okoro </h4>
                <p className="text-font">People Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CaedsWithImagesTwo p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-4">
                <div className="CardContainerImageOne">
                  <img src={BusolaImage} className="img-fluid" />
                  <div className="ContainerPlusIconOne">
                    <img src={PlusIcon} />
                  </div>
                </div>
                <h4 className="text-font fw-bold mt-2">Busola Adebisi </h4>
                <p className="text-font">Business Performance Manager</p>
              </div>
              <div className="col-md-4">
                <div className="CardContainerImageTwo">
                  <img src={AndrewImage} className="img-fluid" />
                  <div className="ContainerPlusIconTwo">
                    <img src={PlusIcon} className="img-fluid" />
                  </div>
                </div>
                <h4 className="text-font fw-bold mt-2">Andrew Bassey </h4>
                <p className="text-font">Software Engineering Lead</p>
              </div>
              <div className="col-md-4">
                <div className="CardContainerThree">
                  <img src={CardImage} className="img-fluid" />
                  <div className="ContainerPlusIconThree">
                    <img src={PlusIcon} className="img-fluid" />
                  </div>
                </div>
                <h4 className="text-font fw-bold mt-2">Joy Ogoke Williams </h4>
                <p className="text-font">Senior Management Accountant</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="AboutCEO p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col-md-6">
                <img src={CEOImage} />
              </div>
              <div className="col-md-6">
                <p className="text-font fw-bold mt-5 LargeTextFont">
                  “ Growing up, my family <br /> struggled to make ends meet
                  <br /> despite my mom being one of the <br /> hardest-working
                  people I know.
                </p>
                <p className="text-font fw-bold mt-5 LargeTextFont ">
                  The financial system is designed <br /> to be intentionally
                  complex, and <br /> we created Tally to level the <br />
                  playing field and put people’s <br />
                  hard-earned money back in their <br /> pockets.”
                </p>
                <small className="text-font SmallTextFont">
                  Oluwatosin, Founder & CEO
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
