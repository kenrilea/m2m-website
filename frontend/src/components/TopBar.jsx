import React from "react";
import { Link } from "react-router-dom";
import proxy from "../proxy.js";

import "../styles/topBar.css";

export default class TopBar extends React.Component {
  renderLinks = links => {
    links.map(link => {
      return (
        <Link className={"Heading_Default Top_Bar_Link"} to={link.path}>
          {link.name}
        </Link>
      );
    });
  };
  render = () => {
    return (
      <div className={"Top_Bar_Container"}>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/gameplay"}>
          GamePlay
        </Link>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/news"}>
          News
        </Link>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/media"}>
          Media
        </Link>
        <Link className={"Heading_Default Top_Bar_Link"} to={"/about"}>
          About
        </Link>
      </div>
    );
  };
}
