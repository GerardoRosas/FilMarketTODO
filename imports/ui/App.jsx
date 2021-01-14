import React from 'react';
import {Header} from './Header.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './auth/Login';
import TaksHandler from './tasks/TaskHandler';
import NewAccount from './auth/NewAccount'



export const App = () => (
  
    <Router>
      <Header />
        <Switch>
        
          <Route path="/login" component={Login} />
          <Route path="/todo-list" component={TaksHandler} />
          <Route path="/new-account" component={NewAccount} />
        </Switch>
    </Router>
);
