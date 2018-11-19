import React, { Component } from 'react';
import face from './content/face.jpeg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p>
            <code>v2</code>
          </p>
          <img src={face} className="App-logo" alt="logo" />
          <p>
            Joel Brenstrum <code>webdev</code>
          </p>
          <a
            className="App-link"
            href="https://joel.brenstrum.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            v1
          </a>
        </header>
      </div>
    );
  }
}

export default App;
