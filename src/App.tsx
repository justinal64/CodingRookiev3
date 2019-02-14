import React, { Component } from "react";
import ButtonAppBar from "./components/navigation/navigation";
import "./App.css";
import { Header } from "./components/header/header";
import { useMath } from "./components/customHooks/useMath/useMath";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { Api } from "./pages/api";
import { Login } from "./pages/login";
import { Tutorials } from "./pages/tutorials";
import { Store } from "./pages/store";
import { Signup } from "./pages/signup";
import { Blog } from "./pages/blog";
import { About } from "./pages/about";

export function App() {
  let tester = useMath([1, 2, 3, 4, 5], "add");
  return (
    <Router>
      <div className="App">
        <ButtonAppBar />
        <Header name="test" />
        <h1>Add</h1>
        {tester}
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/api" component={Api} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}
