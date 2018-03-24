import React, { Component } from 'react';
import Player from './Player';
import io from 'socket.io-client';
const ip = '10.0.0.18';
const socket = io(`${ip}:3002`);

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
        }, ()=>{
          let data = {
            x: this.state.x,
            y: this.state.y,
            name: this.props.location.state.playerName
          }
            socket.emit('p.pos', JSON.stringify(data));
            
          });
        
      }


      getPositionMouse = (e) =>{
        e.preventDefault();
        this.setState({
          x: e.pageX ,
          y: e.pageY
        }, ()=>{
          let data = {
            x: this.state.x,
            y: this.state.y,
            name: this.props.location.state.playerName
          }
            socket.emit('p.pos', JSON.stringify(data));
            
          });
        
      }
      render() {
        
        return (
    
          <div id ='gameBoard' onTouchMove = {this.getPositionTouch} onMouseMove   = {this.getPositionMouse}>
            <Player x = {this.state.x} y = {this.state.y} userName = {this.props.location.state.playerName}/>
          </div>
        );
      }
};
