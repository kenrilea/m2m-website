import React from "react";
import proxy from "../proxy.js";
import "../styles/about.css";

export default class SectionDesc extends React.Component {
  render = () => {
    return (
      <div>
        <p className={"Page_Default Paragraph_Default Section_Desc_Container"}>
          {this.props.description}
        </p>
        <img
          className={"Section_Desc_Image"}
          src={proxy + "assets/render.png"}
        />
      </div>
    );
  };
}
