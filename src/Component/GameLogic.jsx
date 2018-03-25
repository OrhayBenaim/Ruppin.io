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

      getPosition = (e) =>{
        e.preventDefault();

        let x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        let y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY

        this.setState(()=>{
          console.log(x , y);
          
          return {x: x , y: y}
        }, ()=>{
          let data = {
            x: this.state.x,
            y: this.state.y,
            name: this.props.location.state.playerName,
            email: this.props.location.state.email
          }
            //socket.emit('p.pos', `${data.email} ${data.x} ${data.y} ${data.name}`);
            //send message to the server as fast as we can????
            
          });
        
      }

      render() {
        
        return (
    
          <div id ='gameBoard' onTouchMove = {this.getPosition} onMouseMove = {this.getPosition}>
            <Player x = {this.state.x} y = {this.state.y} userName = {this.props.location.state.playerName}/>
          </div>
        );
      }
};
