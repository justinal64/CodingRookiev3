import React, { Component } from "react";
import ButtonAppBar from "./components/navigation/navigation";
import "./App.css";
import Welcome from "./components/header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Welcome name="test" />
      </div>
    );
  }
}

export default App;
