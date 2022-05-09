import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/react_portifolio_app" component={Home}></Route>
        <Route exact path="/about" component={Home}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
