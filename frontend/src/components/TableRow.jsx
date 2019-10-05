import React from "react";
import "../styles/tableRow.css";

export default class TableRow extends React.Component {
  renderValue = value => {
    if (typeof value === "string" || typeof value === "number") {
      return <div className={"Table_Box"}>{this.props.value}</div>;
    }
    return <div className={"Table_Box"}>empty</div>;
  };
  render = () => {
    return (
      <div className={"Table_Row_Container"}>
        {/* underscores in the row name are replaced by spaces */}
        <div className={"Table_Box"}>
          {this.props.rowName.replace("_", " ")}
        </div>
        {this.renderValue(this.props.value)}
      </div>
    );
  };
}
