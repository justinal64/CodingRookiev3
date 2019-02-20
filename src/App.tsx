import React, { Component } from "react";
import Navigation from "./components/navigation/navigation";
import "./App.css";
import { Header } from "./components/header/header";
import { useMath } from "./components/customHooks/useMath/useMath";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Api } from "./pages/api";
import { Login } from "./pages/login";
import { Tutorials } from "./pages/tutorials";
import { Store } from "./pages/store";
import { Signup } from "./pages/signup";
import { Blog } from "./pages/blog";
import { About } from "./pages/about";
import { NoMatch } from "./pages/nomatch";
import { SpaceX } from "./pages/spacex";

export function App() {
  let tester = useMath([1, 2, 3, 4, 5], "add");
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/api" component={Api} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/spacex" component={SpaceX} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
