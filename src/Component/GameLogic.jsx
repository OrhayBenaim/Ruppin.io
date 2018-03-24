import React, { Component } from 'react';
import Player from './Player';

export default class GameLogic extends Component {

    constructor(props){
        super(props);
        this.state = {
          x: 0,
          y: 0
        }
      }

      getPositionTouch = (e) =>{
        e.preventDefault();
        this.e = e.targetTouches
        this.setState(()=>{
          return {x: this.e[0].pageX , y: this.e[0].pageY}
        });
        
      }


      getPositionMouse = (e) =>{
        e.preventDefault();
        this.setState({
          x: e.pageX ,
          y: e.pageY});
        
      }
      render() {
        
        return (
    
          <div id ='gameBoard' onTouchMove = {this.getPositionTouch} onMouseMove   = {this.getPositionMouse}>
            <Player x = {this.state.x} y = {this.state.y} userName = {this.props.location.state.playerName}/>
          </div>
        );
      }
};
