import React from "react";

import "../../styles/about.css";

import SectionDesc from "../../components/SectionDesc.jsx";

import proxy from "../../proxy.js";

import {
  launchText,
  landText,
  expandText,
  launchWindowText,
  victoryText
} from "../../../assets/Text/About.js";

export default class About extends React.Component {
  render = () => {
    return (
      <div className={"About_Container"}>
        <div className={"About_Paragraph_Container"}>
          <SectionDesc description={launchText} />
        </div>
        <div className={"About_Paragraph_Container"}>
          <SectionDesc description={landText} />
        </div>
        <div className={"About_Paragraph_Container"}>
          <SectionDesc description={expandText} />
        </div>
        <div className={"About_Paragraph_Container"}>
          <SectionDesc description={launchWindowText} />
        </div>
        <div className={"About_Paragraph_Container"}>
          <SectionDesc description={victoryText} />
        </div>
      </div>
    );
  };
}
