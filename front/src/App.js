import React, { Component } from 'react';
import './App.css';
import TradingApp from './component/TradingApp';

class App extends Component {
  render() {
    return (
        <div className="container">
          <TradingApp />
        </div>
    );
  }
}

export default App;
