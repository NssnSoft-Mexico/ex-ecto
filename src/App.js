import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Principal from './Principal';
import PDatos from './PDatos';
import DGeo from './DGeo';

const App = ({refetch}) => {

    return (
      <Router>
        <Switch>
          <Route exact path='/'  render={(props) => <Principal {...props} refetch={refetch} />} />
          <Route exact path='/PDatos/ :nombre/ :email/ :telefono/ :fecha'  render={() => <PDatos refetch={refetch} />} />
          <Route exact path='/DGeo' render={() => <DGeo refetch={refetch} />} />
        </Switch>
      </Router>
    );
  }
export default App;