import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import { createHistory } from 'history';
import App from './App';
import Contacts from './Contacts';
import NotFound from './NotFound';

const history = createHistory();
export default () => (
  <div>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Contacts}/>
      </Route>
      <Route path="*" component={NotFound}/>
    </Router>
  </div>
)
