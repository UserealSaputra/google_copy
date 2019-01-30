import React, { Component } from 'react';
import logo from './logo.svg';
import Students from './component/students/index.js';
import './App.css';
import Route from '../src/Route/Route';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Route />

          {/* <Students /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
