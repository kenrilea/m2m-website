import React from "react";
import { Link } from "react-router-dom";
import proxy from "../../proxy.js";

import "../../styles/wikistyles.css";

import TopBar from "../../components/TopBar.jsx";
import Banner from "../../components/Banner.jsx";

export default class WikiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, buildingData: {} };
  }
  componentDidMount = () => {
    const buildingId = this.props.match.params.id;
    console.log(buildingId);
    fetch(proxy + "wikidata?data=building&id=" + buildingId)
      .then(res => {
        return res.text();
      })
      .then(resBody => {
        let parsedRes = JSON.parse(resBody);
        console.log(parsedRes);
        this.setState({
          loading: false,
          buildingData: parsedRes[buildingId],
          buildingId
        });
      });
  };
  render = () => {
    if (this.state.loading === true) {
      return (
        <div>
          <Banner />
          <TopBar />
          loading
        </div>
      );
    }
    return (
      <div className={"Paragraph_Default"}>
        <h1 className="Heading_Default">
          {this.state.buildingData.displayName}
        </h1>
        <img
          className={"Small_Image"}
          src={
            proxy +
            "assets/wikidata/building-icons/icon-building-" +
            this.state.buildingData.Id +
            ".png"
          }
          alt={"loading"}
        />
        <p>{this.state.buildingData.text}</p>
      </div>
    );
  };
}
