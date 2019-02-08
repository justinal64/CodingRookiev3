import React, { Component } from "react";
import SimpleCard from "./components/Test";
import { Spring } from "react-spring";
import { Transition } from "react-spring";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <SimpleCard />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
              {props => <div style={props}>hello</div>}
            </Spring>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
