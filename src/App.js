import React, { Component } from 'react';
import './styles/index.css';
// import Header from '../src/common/Header';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Career from './components/Career';
import Publication from './components/Publications';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Academics from './components/Academics';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './common/Footer';

export default class App extends Component {
  render() {
    return (
      <div className="app">
      {/* <Header/> */}
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/academics" exact component={Academics}/>
          <Route path="/career" exact component={Career}/>
          <Route path="/publication" exact component={Publication}/>
          <Route path="/social" exact component={Social}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
       
      </Router>
       <Footer/> 
      </div>
    )
  }
}
