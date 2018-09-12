import React, { Component } from 'react';
import '.style/App.css';
import DashBoard from './containers/DashBoard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashBoard/>
      </div>
    );
  }
}

export default App;
