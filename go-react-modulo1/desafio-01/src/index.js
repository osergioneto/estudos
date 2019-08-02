import React, { Component } from "react";
import { render } from "react-dom";

import Header from "./js/components/Header";
import "./reset.css";

class App extends Component {
  render() {
    return <Header />;
  }
}

render(<App />, document.getElementById("app"));
