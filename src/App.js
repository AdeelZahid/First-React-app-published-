import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Working with React is Fun ...  </h1>
        <a
          className="App-link"
          href="https://www.facebook.com/mian214"
          target="_blank"
          rel="noopener noreferrer"
        >
         Adeel Zahid on Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
