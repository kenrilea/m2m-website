import React from "react";

import Banner from "./Banner.jsx";
import TopBar from "./TopBar.jsx";

export default class App extends React.Component {
  render = () => {
    return (
      <div>
        <Banner />
        <TopBar />
      </div>
    );
  };
}
