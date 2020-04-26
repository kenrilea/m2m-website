import React from "react";
import proxy from "../proxy.js";

import Logo from "./Logo.jsx";

import "../styles/logo.css";

export default class Banner extends React.Component {
  render = () => {
    return (
      <div className={"Banner_Container"}>
        <Logo />
        <img
          className={"Banner_Background"}
          src={proxy + "assets/banner-background.png"}
        />
      </div>
    );
  };
}
