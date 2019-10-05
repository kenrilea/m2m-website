import React from "react";

import "../../styles/about.css";
import "../../styles/wikistyles.css";
import proxy from "../../proxy.js";

import WikiLink from "../../components/WikiLink.jsx";
import TopBar from "../../components/TopBar.jsx";
import Banner from "../../components/Banner.jsx";

//let thisimage = require("../../../assets/icon-building-default.png");

export default class WikiHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, defaultImage: undefined };
  }
  componentDidMount = () => {
    fetch(proxy + "wikidata?data=buildings")
      .then(res => {
        return res.text();
      })
      .then(resBody => {
        let parsedRes = JSON.parse(resBody);
        this.setState({ loading: false, buildingData: parsedRes });
      });
  };
  renderBuildingList = () => {
    if (this.state.loading === true) {
      return;
    }
    let buildingIds = Object.keys(this.state.buildingData);
    let buildingComponents = buildingIds.map(id => {
      let building = this.state.buildingData[id];
      return (
        <WikiLink
          key={id}
          displayName={building.displayName}
          id={building.Id}
        />
      );
    });
    return buildingComponents;
  };
  render = () => {
    return (
      <div className={"Page_Default"}>
        <TopBar />
        <ul className={"List_Container"}>{this.renderBuildingList()}</ul>
      </div>
    );
  };
}
