import React from "react";
import proxy from "../../proxy.js";

import Banner from "../../components/Banner.jsx";
import TopBar from "./LPTopBar.jsx";

import "../../styles/introBanner.css";

export default class IntroBanner extends React.Component {
  render = () => {
    return (
      <div className={" Intro_Container"}>
        <div className={"Page_Default Paragraph_Default Intro_Banner_Text"}>
          <h2 className={"Heading_Default"}>
            Will your colony stand the test of time?
          </h2>
          <h3>
            Colonize Mars in this one of a kind civlization builder strategy
            game
          </h3>
        </div>
        <div className={"Intro_Banner_Image_Container"}>
          <img
            className={"Intro_Banner_Image"}
            src={proxy + "assets/intro-banner.png"}
          />
          <img
            className={"Intro_Banner_Transition_Image"}
            src={proxy + "assets/banner-page-transition.png"}
          />
        </div>
      </div>
    );
  };
}
