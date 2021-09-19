import React, {Component} from "react";
import './App.css';
import Signup from './Signup';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './Login';
import Profile from './Profile';

import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component = {Signup} exact/>
          <Route path="/login" component = {Login} /> 
          <Route path="/dashboard" component = {Dashboard} />
          <Route path="/profile" component = {Profile} />
        </Switch>
      </BrowserRouter>
    </div>

)}

export default App;
