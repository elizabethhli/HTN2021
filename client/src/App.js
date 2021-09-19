import React, {Component} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Signup from './Signup';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login';
import Profile from './Profile';

import ProfileCard from './components/ProfileCard/ProfileCard';
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

)}

export default App;
