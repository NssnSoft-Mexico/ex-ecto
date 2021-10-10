import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Principal from './Principal';
import PDatos from './PDatos';
import DGeo from './DGeo';

const App = () => {

    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Principal} />
          <Route exact path='/PDatos'  component={PDatos} />
          <Route exact path='/DGeo' component={DGeo} />
        </Switch>
      </Router>
    );
  }
export default App;