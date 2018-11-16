import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
      return <div className="App">
          <body className="App-header">
              <div className="grid-container">
                  <div className="lefttop"><img src={logo} className="logo" alt="logo" /></div>
                  <div className="leftbottom">WELCOME TO THE RUPAUL'S DRAG AND DROP DEAD RACE!</div>
                  <div className="middle"></div>
                  <div className="righttop"><p>GENTLEMEN, START YOUR ENGINES, AND MAY THE BEST WOMAN WIN</p></div>
                  <div className="rightbottom"></div>
              </div>
          </body>
      </div>;
  }
}

export default App;
