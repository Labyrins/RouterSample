import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App';
import One from './One';
import Two from './Two';
import AAA from './AAA';
import BBB from './BBB';
import CCC from './CCC';
import DDD from './DDD';
import EEE from './EEE';
import FFF from './FFF';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={One} />
      <Route path="/one" component={One}>
        <Route path="/one/AAA" component={AAA}/>
        <Route path="/one/BBB" component={BBB}/>
        <Route path="/one/CCC" component={CCC}/>
      </Route>
      <Route path="/two" component={Two}>
        <Route path="/two/DDD" component={DDD}/>
        <Route path="/two/EEE" component={EEE}/>
        <Route path="/two/FFF" component={FFF}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root')
);
