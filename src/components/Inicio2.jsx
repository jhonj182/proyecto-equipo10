// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './components/Inicio'


function Inicio2() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {Inicio}/>
      </Switch>
    </Router>
  );
}

export default Inicio2;
