import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Signup from './views/Signup'
import {BrowserRouter as Router, Redirect, Route } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/"><Redirect to="/home"/></Route>
      <Route exact path="/home" component={App} />
      <Route exact path="/signup" component={Signup} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

