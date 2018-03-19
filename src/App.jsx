import React, { Component } from 'react';
import './App.css';
import Player from './component/Player';

class App extends Component {
  render() {
    return (

      <div id ='gameBoard'>
        <Player />
      </div>
    );
  }
}

export default App;
