import React, { Component } from "react";
import Button from "./components/Button";
import "./App.css";
const electron = window.require('electron');
const remote = electron.remote;
const {BrowserWindow,dialog,Menu} = remote;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div className="app">
        <h1>Demo for Peaches 2
        <h6>This is the body</h6></h1>
        <div>
          <div class="count">
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
      </div>
    );
  }
}