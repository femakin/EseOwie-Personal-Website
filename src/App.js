import React, { Component } from "react";
import "./styles/index.css";
// import Header from '../src/common/Header';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Publication from "./pages/Publications";
import Social from "./pages/Social";
import Navbar from "./components/common/Navbar";
import Academics from "./pages/Academics";
import Professional from "./pages/Professional";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Footer from "./components/common/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Header/> */}
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/academics" exact component={Academics} />
            <Route path="/career" exact component={Career} />
            <Route path="/Publications" exact component={Publication} />
            <Route path="/social" exact component={Social} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/professional" exact component={Professional} />
          </Switch>
        </Router>
        {/* <Footer /> */}
      </div>
    );
  }
}
