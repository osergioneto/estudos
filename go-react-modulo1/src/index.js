import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href="#" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  handleClick(e) {
    this.setState(() => this.state.clicks++);
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2>O botão foi clicado {this.state.clicks} vezes.</h2>
        <Button onClick={this.handleClick.bind(this)}>Salvaaaaaar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
