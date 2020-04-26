import React from "react";

import Banner from "../../components/Banner.jsx";
import TopBar from "../../components/TopBar.jsx";

export default class GamePlay extends React.Component {
  render = () => {
    return (
      <div className={"Page_Default"}>
        <TopBar />
        <h2 className={"Heading_Default"}>Load Up</h2>
        <h2 className={"Heading_Default"}>choose your landing site</h2>
        <h2 className={"Heading_Default"}>build a base</h2>
        <h2 className={"Heading_Default"}>resupply from earth</h2>
        <h2 className={"Heading_Default"}>
          become the first civilization in the stars!
        </h2>
      </div>
    );
  };
}
