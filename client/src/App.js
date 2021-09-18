import React, {Component} from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import ProfileCard from './components/ProfileCard/ProfileCard';
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
        <Switch>
          <Route path = "/dashboard" component = {Dashboard} />
        </Switch>
      </Router>
  );
}

export default App;
