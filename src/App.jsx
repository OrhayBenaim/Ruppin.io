import React, { Component } from 'react';
import './App.css';
import Player from './component/Player';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
  }

  getPosition = (e) =>{
    e.preventDefault();
    this.e = e.targetTouches
    this.setState(()=>{
      return {x: this.e[0].pageX , y: this.e[0].pageY}
    });
    
  }
  render() {
    return (

      <div id ='gameBoard' onTouchMove = {this.getPosition}>
        <Player x = {this.state.x} y = {this.state.y}/>
      </div>
    );
  }
}

export default App;
