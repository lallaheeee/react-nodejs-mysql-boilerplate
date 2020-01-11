import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { Home } from './page';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
