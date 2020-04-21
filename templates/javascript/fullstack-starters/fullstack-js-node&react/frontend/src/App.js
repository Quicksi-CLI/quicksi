import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [healthStatus, setHealthStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}api`);
      setHealthStatus(result.data.health);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Quicksi.
        </p>
        <p>
          API endpoint is: {process.env.REACT_APP_API_ENDPOINT} <br />
          API health status is: <b>{healthStatus}</b>
        </p>
      </header>
    </div>
  );
};

export default App;
