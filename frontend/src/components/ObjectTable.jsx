import React from "react";
//style imports
import "../styles/objectTable.css";
//Component imports
import TableRow from "./TableRow.jsx";
//
//this component takes an object as a prop and formats it as a table like the following:
//
//    property | value
//    property | value
//

export default class ObjectTable extends React.Component {
  renderTable = tableData => {
    if (typeof tableData !== "object") {
      console.log("bad tableData type: " + typeof tableData);
      return;
    }
    let keys = Object.keys(tableData);
    let tableRows = keys.map((key, index) => {
      // underscores in the row name will be replaced by spaces
      return (
        <TableRow key={"row" + index} rowName={key} value={tableData[key]} />
      );
    });
    return tableRows;
  };
  render = () => {
    return (
      <div className={"Table_Container"}>
        {this.renderTable(this.props.tableData)}
      </div>
    );
  };
}
