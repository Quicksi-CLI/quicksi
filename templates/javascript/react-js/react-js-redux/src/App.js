import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Sample from './components/Sample/sample'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">Quicksi React Redux JavaScript</h1>
            <h3 className="App-title">Quicksi quick start project</h3>
          </header>
          <Sample/>
        </div>
      </Provider>
    )
  }
}

export default App
