import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReposList from './components/ReposList';
import RepoDetails  from './components/RepoDetails';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ReposList} />
      <Route path="/repo/:repoName" component={RepoDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;