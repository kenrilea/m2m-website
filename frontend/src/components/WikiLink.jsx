import React from "react";
import { Link } from "react-router-dom";
import proxy from "../proxy.js";

import "../styles/wikistyles.css";

``;

export default class WikiLink extends React.Component {
  render = () => {
    return (
      <Link className={"Item_Container"} to={"/wiki/building/" + this.props.id}>
        <img
          className={"Small_Image"}
          src={
            proxy +
            "assets/wikidata/building-icons/icon-building-" +
            this.props.id +
            ".png"
          }
          alt={"loading"}
        />
        <h3 className={"Card_Heading_Default"}>{this.props.displayName}</h3>
      </Link>
    );
  };
}
