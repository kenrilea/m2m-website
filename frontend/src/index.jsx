import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import React, { Component } from "react";

import "./styles/main.css";
import "./styles/resetDefaults.css";

import App from "./components/App.jsx";
import LandingPage from "./views/landing-page/LandingPage.jsx";
import GamePlay from "./views/game-play/GamePlay.jsx";
import ThreeDModel from "./views/three-d-model/ThreeDModel.jsx";
import WikiHome from "./views/wiki/WikiHome.jsx";
import WikiData from "./views/wiki/WikiData.jsx";

import DisplayData from "./components/DisplayData.jsx";

let root = (
  <BrowserRouter>
    {/*---------------- exact FALSE routes here --------------*/}
    <Switch>
      {/*---------------- exact TRUE routes here --------------*/}
      <Route exact={true} path={"/"} component={LandingPage} />
      <Route exact={true} path={"/gameplay"} component={GamePlay} />
      <Route exact={true} path={"/about"} component={GamePlay} />
      <Route exact={true} path={"/threedtest"} component={ThreeDModel} />
      <Route exact={true} path={"/wiki/home"} component={WikiHome} />
      <Route ecact={true} path={"/wiki/building/:id"} component={WikiData} />
      <Route exact={true} path={"/test"} component={DisplayData} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById("root"));
