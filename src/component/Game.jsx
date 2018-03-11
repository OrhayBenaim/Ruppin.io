import React, { Component } from 'react';
import Player from './Player';

export default class Game extends Component {
  constructor(props){
    super(props)
    this.state = props;
    
  }
  componentDidUpdate(prevProps){
       
    this.x = prevProps.position.x;
    this.y = prevProps.position.y;
  
}
  render() {
    return (
      <div className='game'>
        <Player x = {this.x} y = {this.y} />
      </div>
    )
  }
};
