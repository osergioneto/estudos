import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>O botão foi clicado {this.state.clicks} vezes.</h2>
        <Button onClick={() => alert("Dattebayo. Esse é meu jeito ninja!")} />
        <Button onClick={this.handleClick.bind(this)}>Salvaaaaaar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
