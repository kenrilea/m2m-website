import React from "react";
import proxy from "../proxy.js";
import "../styles/wikistyles.css";
import ObjectTable from "./ObjectTable.jsx";

export default class DisplayData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount = () => {
    let fakeBuilding = {
      display_name: "Default Building",
      tip_text: "Basic residential unit with 4 private rooms",
      id: "default",
      stats: {
        net_power: 100,
        mat_req: [{ plastic_panels: 500, structural_metal: 300 }]
      }
    };
    this.setState({
      loading: false,
      display_name: "Default Building",
      tip_text: "Basic residential unit with 4 private rooms",
      id: "default",
      stats: {
        net_power: 100,
        mat_req: [{ plastic_panels: 500, structural_metal: 300 }]
      }
    });
  };
  render = () => {
    if (this.state.loading !== false) {
      return <div />;
    }
    return (
      <div className={"Item_Detail_Container"}>
        <h2 className={"Heading_Default"}>{this.state.display_name}</h2>
        <p className={"Font_Default"}>{this.state.tip_text}</p>
        <div id="stats_table">
          <img
            className={"Small_Image"}
            src={
              proxy +
              "assets/wikidata/building-icons/icon-building-" +
              this.state.id +
              ".png"
            }
            alt={"loading"}
          />
          <ObjectTable tableData={this.state.stats} />
        </div>
      </div>
    );
  };
}
