import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import One from './One';
import Two from './Two';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/one" component={One}/>
      <Route path="/two" component={Two}/>
    </Route>
  </Router>
), document.getElementById('root')
);
