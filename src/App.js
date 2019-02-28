import React, { Component } from 'react';
import './App.css';
import { Button  } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button type="primary">Button</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
