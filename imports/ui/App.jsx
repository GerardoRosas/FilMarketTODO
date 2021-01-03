import React from 'react';
import {Header} from './Header.jsx';
import Login from './auth/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TaksHandler from './tasks/TaskHandler';
import NewAccount from './auth/NewAccount'

import AuthState from '../context/auth/authState';

export const App = () => (
  <AuthState>
    
    <Router>
      <Header />
        <Switch>
        
          <Route path="/login" component={Login} />
          <Route path="/todo-list" component={TaksHandler} />
          <Route path="/new-account" component={NewAccount} />
        </Switch>
      
    </Router>
  </AuthState>
);
