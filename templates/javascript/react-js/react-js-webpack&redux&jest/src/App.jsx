import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/presentations/Homepage/Homepage';
import './assets/stylesheets/index.scss';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
