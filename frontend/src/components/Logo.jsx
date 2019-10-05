import React from "react";
import proxy from "../proxy.js";

import "../styles/banner.css";

export default class Logo extends React.Component {
  render = () => {
    return (
      <div className={"Logo_Div"}>
        <h1 className={"Banner_Heading"}>
          <span className={"Banner_Heading_Letter"}>M</span>
          <span className={"Banner_Heading_Letter_Middle"}>II</span>
          <span className={"Banner_Heading_Letter"}>M</span>
        </h1>
        <img className={"Banner_Mars"} src={proxy + "assets/Mars.png"} />
      </div>
    );
  };
}
