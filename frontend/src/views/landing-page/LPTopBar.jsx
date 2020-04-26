import React from "react";
import { Link } from "react-router-dom";
import proxy from "../../proxy.js";

import "../../styles/LPtopBar.css";

export default class TopBar extends React.Component {
  render = () => {
    return (
      <div className={"Top_Bar_Container"}>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/about"}>
          About
        </Link>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/gameplay"}>
          GamePlay
        </Link>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/news"}>
          News
        </Link>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/media"}>
          Media
        </Link>
      </div>
    );
  };
}
