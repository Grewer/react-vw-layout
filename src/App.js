import React, { Component } from "react";
import logo from "./logo.svg";
import styles from "./App.css";
import CSSModules from "react-css-modules";

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo"/>
          <h1 styleName="App-title">Welcome to React</h1>
        </header>
        <div styleName="myBorder">
          内容
        </div>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CSSModules(App, styles);
