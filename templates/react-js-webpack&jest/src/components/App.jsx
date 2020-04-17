import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
import AboutPage from 'components/AboutPage';
import WelcomePage from 'components/WelcomePage';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link>
          </nav>
          <hr />
          <Route exact path="/" component={WelcomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
