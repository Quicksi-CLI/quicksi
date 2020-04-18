import React from 'react';
import 'assets/scss/App.scss';
import reactLogo from 'assets/img/react_logo.svg';

class WelcomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Foo to the bar</p>
        <img src={reactLogo} height="480" />
      </div>
    );
  }
}

export default WelcomePage;
