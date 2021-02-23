import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home'
import List from './components/List'
import Detail from './components/Detail'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
