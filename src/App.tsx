import React, { Component } from "react";
import ButtonAppBar from "./components/navigation/navigation";
import "./App.css";
import { Header } from "./components/header/header";
import { Math } from "./components/helper/helper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        <Header name="test" />
        <h1>Add</h1>
        <Math values={[1, 2, 3, 4, 5]} operator="add" />
        <h1>Subtract</h1>
        <Math values={[1, 2, 3, 4, 5]} operator="subtract" />
      </div>
    );
  }
}

export default App;
