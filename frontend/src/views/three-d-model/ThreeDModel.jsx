import React from "react";

import TopBar from "../../components/TopBar.jsx";
import run from "./model.jsx";

import "../../styles/testmodel.css";

export default class ThreeDModel extends React.Component {
  componentDidMount = () => {
    run(document.getElementById("modelcontainermain"));
  };
  render = () => {
    return (
      <div className={"Page_Default"}>
        <TopBar />
        <h2 className={"Heading_Default"}>3D Model</h2>
        <div id={"modelcontainermain"} className={"Model_Cont"}>
          hi
        </div>
      </div>
    );
  };
}
