import React from "react";
import { Link } from "react-router-dom";
import proxy from "../../proxy.js";

import "../../styles/wikiLink.css";

export default class WikiLink extends React.Component {
  render = () => {
    return (
      <div className={"Wiki_Link_Container"}>
        <Link className={"Heading_Default Wiki_Link"} to={"/wiki/home"}>
          WIKI
        </Link>
      </div>
    );
  };
}
