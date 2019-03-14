import React, { Component } from 'react';
import Main from '../Main';
import Series from '../../containers/Series';
import './App.css';
import 'whatwg-fetch';



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Waste your time</h1>
        </header>
        
        <Series />
      </div>
    );
  }
}

export default App;
