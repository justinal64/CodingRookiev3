import React, { Component } from "react";
import ButtonAppBar from "./components/navigation/navigation";
import "./App.css";
import { Header } from "./components/header/header";
import { useMath } from "./components/customHooks/useMath/useMath";

export function App() {
  let tester = useMath([1, 2, 3, 4, 5], "add");
  return (
    <div className="App">
      <ButtonAppBar />
      <Header name="test" />
      <h1>Add</h1>
      {tester}
    </div>
  );
}
