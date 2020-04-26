import React from "react";

import Banner from "../../components/Banner.jsx";
import TopBar from "./LPTopBar.jsx";

import IntroBanner from "./IntroBanner.jsx";
import About from "./About.jsx";
import WikiLink from "./WikiLink.jsx";

export default class LandingPage extends React.Component {
  render = () => {
    return (
      <div className={"Page_Default"}>
        <IntroBanner />
        <About />
        <WikiLink />
      </div>
    );
  };
}
