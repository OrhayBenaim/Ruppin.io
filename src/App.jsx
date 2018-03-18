import React, { Component } from 'react';
import './App.css';
import Player from './component/Player';

class App extends Component {
  render() {
    return (

      <div className="game" id ='gameBoard'>
        <Player />
      </div>
    );
  }
}

export default App;
