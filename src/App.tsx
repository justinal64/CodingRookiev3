import React, { Component } from "react";
import ButtonAppBar from "./components/navigation/navigation";
import "./App.css";
import { Header } from "./components/header/header";
import { HelperPres } from "./components/helper/helperpres";

class App extends Component {
  render() {
    let test = HelperPres([1, 2, 3, 4, 5], "add");
    return (
      <div className="App">
        <ButtonAppBar />
        <Header name="test" />
        What is test? {test}
        <h1>Add</h1>
      </div>
    );
  }
}

export default App;
