import React, { Component } from 'react';
import './App.css';
import ReactCursorPosition from 'react-cursor-position';
import Game from './component/Game';

class App extends Component {
  render() {
    return (
      <ReactCursorPosition>
            <Game />
      </ReactCursorPosition>
    );
  }
}

export default App;
